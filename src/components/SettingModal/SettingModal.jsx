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
  StyledRadioGroup,
  SmallControlLabel,
  StyledField,
  FormGroup,
  PasswordFormGroup,
  FormContentWrapper,
  CustomRadio,
  SubmitButton,
  VisibilityIconsWrapper,
  StyledSvg,
  RedError,
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

const SettingModal = ({ onModalClose, isModalOpen }) => {
  const dispatch = useDispatch();

  const user = useSelector(getCurrentUser);
  // console.log(user);

  const [showPassword, setShowPassword] = useState([false, false, false]);
  const [newAvatar, setNewAvatar] = useState(user.avatarURL);
  const [initialValues, setInitialValues] = useState({
    ...user,
    outdatedPassword: '',
    password: '',
    repeatedPassword: '',
  });

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
    outdatedPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .when('outdatedPassword', (outdatedPassword, schema) => {
        if (typeof outdatedPassword[0] !== 'undefined') {
          return schema
            .notOneOf(
              [Yup.ref('outdatedPassword'), null],
              'New password must not match the old one'
            )
            .required('New password is required');
        }
        return schema;
      }),
    repeatedPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .when('password', (password, schema) => {
        if (typeof password[0] !== 'undefined') {
          return schema
            .oneOf(
              [Yup.ref('password')],
              'Repeted password must match new password'
            )
            .required('Repeted password is required');
        }
        return schema;
      }),
  });

  const handleSubmit = (values) => {
    const changedValues = {};
    Object.keys(values).forEach((key) => {
      if (values[key] !== initialValues[key]) {
        changedValues[key] = values[key];
      }
    });

    delete changedValues.repeatedPassword;

    dispatch(changeUserSettingsAPI(changedValues))
      .then(() => {
        setInitialValues(dispatch(fetchUserData()));
        onModalClose();
      })
      .catch((error) => {
        console.error('Error updating user settings:', error);
      });
    // console.log(values)
  };

  // console.log(initialValues);

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
                  <StyledSvg width="16px" height="16px">
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
                        <StyledRadioGroup row aria-labelledby="my-radio-group">
                          <SmallControlLabel
                            value="woman"
                            control={<CustomRadio disableTouchRipple />}
                            label="Woman"
                            name="gender"
                            checked={formik.values.gender === 'woman'}
                            onChange={() =>
                              formik.setFieldValue('gender', 'woman')
                            }
                          ></SmallControlLabel>
                          <SmallControlLabel
                            value="man"
                            control={<CustomRadio disableTouchRipple />}
                            label="Man"
                            name="gender"
                            checked={formik.values.gender === 'man'}
                            onChange={() =>
                              formik.setFieldValue('gender', 'man')
                            }
                          ></SmallControlLabel>
                        </StyledRadioGroup>
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
                          <SmallLabel htmlFor="outdatedPassword">
                            Outdated Password:
                          </SmallLabel>
                          <StyledField
                            type={showPassword[0] ? 'text' : 'password'}
                            name="outdatedPassword"
                            placeholder="Password"
                            autoComplete="current-password"
                            error={
                              formik.errors.outdatedPassword &&
                              formik.touched.outdatedPassword
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
                          {formik.errors.outdatedPassword &&
                            formik.touched.outdatedPassword && (
                              <RedError
                                className="error"
                                name="outdatedPassword"
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
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="current-password"
                            error={
                              formik.errors.password && formik.touched.password
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
                          {formik.errors.password &&
                            formik.touched.password && (
                              <RedError
                                className="error"
                                name="password"
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
                    <SubmitButton type="submit">Save</SubmitButton>
                  </Form>
                );
              }}
            </Formik>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};

export default SettingModal;
