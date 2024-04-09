import {
  ModalBox,
  VisuallyHiddenInput,
  TitleWrapper,
  StyledCloseSvg,
  FormSubtitle,
  FormLabel,
  SmallLabel,
  ImgThumb,
  FilePickerWrapper,
  FilePickerLink,
  // StyledRadioGroup,
  // SmallControlLabel,
  StyledField,
  FormGroup,
  PasswordFormGroup,
  FormContentWrapper,
  // CustomRadio,
  SubmitButton,
  VisibilityIconsWrapper,
  StyledSvg,
  RedError,
  RadioInput,
  RadioInputCustom,
  RadioLabel,
  RadioStyled,
  RadioWrapper,
  RadiosWrapper,
  DeleteButton,
  ButtonsWrapper,
} from './SettingModal.styled';
import ModalContainer from '../ModalContainer/ModalContainer';
import { getCurrentUser } from '../../store/auth/authSelectors';
import {
  changeUserAvatarAPI,
  changeUserSettingsAPI,
  fetchUserData,
} from '../../store/auth/authOperations';

import sprite from '../../assets/sprite.svg';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUserModal } from '../DeleteUserModal/DeleteUserModal';
// import { getIsDarkTheme } from '../../store/theme/themeSelectors';

const SettingModal = ({ onModalClose, isModalOpen }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(getCurrentUser);

  const [showPassword, setShowPassword] = useState([false, false, false]);
  const [newAvatar, setNewAvatar] = useState(user.avatarURL);
  const [initialValues, setInitialValues] = useState({
    name: user.name,
    email: user.email,
    gender: user.gender,
    oldPassword: '',
    newPassword: '',
    repeatedPassword: '',
  });

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  // const color = useSelector(getIsDarkTheme) ? 'dark' : 'light';
  // const statusWoman = user.gender === 'woman' ? 'active' : 'inactive';
  // const iconIdWoman = `radio-${statusWoman}-${color}`;
  // const statusMan = user.gender === 'man' ? 'active' : 'inactive';
  // const iconIdMan = `radio-${statusMan}-${color}`;

  const handleShowPassword = (index) => {
    const newShowPassword = [...showPassword];
    newShowPassword[index] = !showPassword[index];
    setShowPassword(newShowPassword);
  };

  const handleUploadAvatar = (e) => {
    const target = e.target;

    if (!FileReader) {
      alert('FileReader не підтримується');
      return;
    }

    if (!target.files.length) {
      alert('Нічого не завантажено');
      return;
    }

    setNewAvatar(URL.createObjectURL(target.files[0]));
    const formData = new FormData();
    formData.append('avatar', target.files[0]);
    dispatch(changeUserAvatarAPI(formData));
  };

  const UpdateUserSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email'),
    gender: Yup.string().matches(/(woman|man)/),
    oldPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .when('oldPassword', (oldPassword, schema) => {
        if (typeof oldPassword[0] !== 'undefined') {
          return schema
            .notOneOf(
              [Yup.ref('oldPassword'), null],
              'New password must not match the old one'
            )
            .required('New password is required');
        }
        return schema;
      }),
    repeatedPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .when('newPassword', (newPassword, schema) => {
        if (typeof newPassword[0] !== 'undefined') {
          return schema
            .oneOf(
              [Yup.ref('newPassword')],
              'Repeted password must match new password'
            )
            .required('Repeted password is required');
        }
        return schema;
      }),
  });

  const handleSubmit = (values) => {
    const payload = { basicInfo: {} };
    Object.keys(values).forEach((key) => {
      if (values[key] !== '') {
        if (['name', 'gender', 'email'].includes(key)) {
          payload.basicInfo[key] = values[key];
        } else if (['oldPassword', 'newPassword'].includes(key)) {
          if (!payload.securityCredentials) {
            payload.securityCredentials = {};
          }
          payload.securityCredentials[key] = values[key];
        }
      }
    });

    delete payload.repeatedPassword;

    dispatch(changeUserSettingsAPI(payload)).then(() => {
      setInitialValues(dispatch(fetchUserData()));
      onModalClose();
    });
  };

  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={onModalClose}>
          <ModalBox>
            <TitleWrapper>
              <h3>Settings</h3>
              <StyledCloseSvg width="24px" height="24px" onClick={onModalClose}>
                <use xlinkHref={`${sprite}#plus`} />
              </StyledCloseSvg>
            </TitleWrapper>
            <div>
              <FormLabel htmlFor="file">Your photo</FormLabel>
              <FilePickerWrapper>
                <ImgThumb>
                  <img
                    src={newAvatar}
                    alt="user avatar"
                    width="80px"
                    height="80px"
                  />
                </ImgThumb>
                <FilePickerLink
                  component="label"
                  underline="none"
                  accept=".jpg,.jpeg,.png"
                  tabIndex={-1}
                  onChange={(e) => handleUploadAvatar(e)}
                >
                  <StyledSvg classMane="uploadIcon" width="16px" height="16px">
                    <use xlinkHref={`${sprite}#upload`} />
                  </StyledSvg>
                  Upload a photo
                  <VisuallyHiddenInput type="file" name="file" />
                </FilePickerLink>
              </FilePickerWrapper>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={UpdateUserSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <FormContentWrapper>
                      <div>
                        <FormSubtitle id="my-radio-group">
                          Your gender identity
                        </FormSubtitle>
                        <RadiosWrapper>
                          <RadioWrapper>
                            <RadioInput
                              id="woman"
                              type="radio"
                              name="gender"
                              value="woman"
                              checked={formik.values.gender === 'woman'}
                              onChange={() =>
                                formik.setFieldValue('gender', 'woman')
                              }
                            />
                            <RadioLabel htmlFor="woman">
                              <RadioInputCustom>
                                <RadioStyled>
                                  <use
                                    href={`${sprite}#${
                                      formik.values.gender === 'woman'
                                        ? 'radio-active-light'
                                        : 'radio-inactive-light'
                                    }`}
                                  />
                                </RadioStyled>
                              </RadioInputCustom>
                              Woman
                            </RadioLabel>
                          </RadioWrapper>

                          <RadioWrapper>
                            <RadioInput
                              id="man"
                              type="radio"
                              name="gender"
                              value="man"
                              checked={formik.values.gender === 'man'}
                              onChange={() =>
                                formik.setFieldValue('gender', 'man')
                              }
                            />
                            <RadioLabel htmlFor="man">
                              <RadioInputCustom>
                                <RadioStyled>
                                  <use
                                    href={`${sprite}#${
                                      formik.values.gender === 'man'
                                        ? 'radio-active-light'
                                        : 'radio-inactive-light'
                                    }`}
                                  />
                                </RadioStyled>
                              </RadioInputCustom>
                              Man
                            </RadioLabel>
                          </RadioWrapper>
                        </RadiosWrapper>
                        <FormGroup>
                          <FormLabel htmlFor="name">Your name</FormLabel>
                          <StyledField
                            type="name"
                            name="name"
                            autoComplete="current-password"
                            error={formik.errors.name && formik.touched.name}
                          />
                          {formik.errors.name && formik.touched.name && (
                            <RedError
                              className="error"
                              name="name"
                              component="div"
                            />
                          )}
                        </FormGroup>
                        <FormGroup>
                          <FormLabel htmlFor="email">E-mail</FormLabel>
                          <StyledField
                            type="email"
                            name="email"
                            autoComplete="current-password"
                            error={formik.errors.email && formik.touched.email}
                          />
                          {formik.errors.email && formik.touched.email && (
                            <RedError
                              className="error"
                              name="email"
                              component="div"
                            />
                          )}
                        </FormGroup>
                      </div>
                      <div>
                        <FormSubtitle>Password</FormSubtitle>
                        <PasswordFormGroup>
                          <SmallLabel htmlFor="oldPassword">
                            Outdated Password:
                          </SmallLabel>
                          <StyledField
                            type={showPassword[0] ? 'text' : 'password'}
                            name="oldPassword"
                            placeholder="Password"
                            autoComplete="current-password"
                            error={
                              formik.errors.oldPassword &&
                              formik.touched.oldPassword
                            }
                          />
                          <VisibilityIconsWrapper
                            onClick={() => handleShowPassword(0)}
                          >
                            {showPassword[0] ? (
                              <StyledSvg width="16px" height="16px">
                                <use xlinkHref={`${sprite}#eye-opened`} />
                              </StyledSvg>
                            ) : (
                              <StyledSvg width="16px" height="16px">
                                <use xlinkHref={`${sprite}#eye-closed`} />
                              </StyledSvg>
                            )}
                          </VisibilityIconsWrapper>
                          {formik.errors.oldPassword &&
                            formik.touched.oldPassword && (
                              <RedError
                                className="error"
                                name="oldPassword"
                                component="div"
                              />
                            )}
                        </PasswordFormGroup>
                        <PasswordFormGroup>
                          <SmallLabel htmlFor="newPassword">
                            New Password:
                          </SmallLabel>
                          <StyledField
                            type={showPassword[1] ? 'text' : 'password'}
                            name="newPassword"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="current-password"
                            error={
                              formik.errors.newPassword &&
                              formik.touched.newPassword
                            }
                          />
                          <VisibilityIconsWrapper
                            onClick={() => handleShowPassword(1)}
                          >
                            {showPassword[1] ? (
                              <StyledSvg width="16px" height="16px">
                                <use xlinkHref={`${sprite}#eye-opened`} />
                              </StyledSvg>
                            ) : (
                              <StyledSvg width="16px" height="16px">
                                <use xlinkHref={`${sprite}#eye-closed`} />
                              </StyledSvg>
                            )}
                          </VisibilityIconsWrapper>
                          {formik.errors.newPassword &&
                            formik.touched.newPassword && (
                              <RedError
                                className="error"
                                name="newPassword"
                                component="div"
                              />
                            )}
                        </PasswordFormGroup>
                        <PasswordFormGroup>
                          <SmallLabel htmlFor="repeatedPassword">
                            Repeat new Password:
                          </SmallLabel>
                          <StyledField
                            type={showPassword[2] ? 'text' : 'password'}
                            name="repeatedPassword"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="current-password"
                            error={
                              formik.errors.repeatedPassword &&
                              formik.touched.repeatedPassword
                            }
                          />
                          <VisibilityIconsWrapper
                            onClick={() => handleShowPassword(2)}
                          >
                            {showPassword[2] ? (
                              <StyledSvg width="16px" height="16px">
                                <use xlinkHref={`${sprite}#eye-opened`} />
                              </StyledSvg>
                            ) : (
                              <StyledSvg width="16px" height="16px">
                                <use xlinkHref={`${sprite}#eye-closed`} />
                              </StyledSvg>
                            )}
                          </VisibilityIconsWrapper>
                          {formik.errors.repeatedPassword &&
                            formik.touched.repeatedPassword && (
                              <RedError
                                className="error"
                                name="repeatedPassword"
                                component="div"
                              />
                            )}
                        </PasswordFormGroup>
                      </div>
                    </FormContentWrapper>
                    <ButtonsWrapper>
                      {' '}
                      <DeleteButton
                        type="button"
                        onClick={handleOpenDeleteModal}
                      >
                        Delete user
                      </DeleteButton>
                      <SubmitButton type="submit">Save</SubmitButton>
                    </ButtonsWrapper>
                  </Form>
                );
              }}
            </Formik>
          </ModalBox>
          {openDeleteModal && (
            <DeleteUserModal
              onModalClose={handleCloseDeleteModal}
              isModalOpen={openDeleteModal}
            />
          )}
        </ModalContainer>
      )}
    </>
  );
};

export default SettingModal;
