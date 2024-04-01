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
} from './SettingModal.styled';
// import ModalContainer from '../ModalContainer/ModalContainer';
import { getCurrentUser } from '../../store/auth/authSelectors';
import { fetchUserData } from '../../store/auth/authOperations';

import useModal from '../../customHooks/useModal';
import sprite from '../../assets/sprite.svg';

import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SettingModal = () => {
  const { isOpen, closeModal, openModal, handleKeyDown } = useModal();

  document.addEventListener('keydown', handleKeyDown);
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);

  // const server = 'https://tracker-of-water-oqqk.onrender.com/api/';

  const [showPassword, setShowPassword] = useState([false, false, false]);
  const [newAvatar, setNewAvatar] = useState([user.avatarURL]);

  const handleShowPassword = (index) => {
    const newShowPassword = [...showPassword];
    newShowPassword[index] = !showPassword[index];
    setShowPassword(newShowPassword);
  };

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

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
  };

  const UpdateUserSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email'),
    gender: Yup.string().matches(/(woman|man)/),
    outdatedPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .notOneOf(
        [Yup.ref('outdatedPassword'), null],
        'New password must not match the old one'
      )
      .when('outdatedPassword', (outdatedPassword, field) =>
        outdatedPassword ? field.required() : field
      ),
    repeatedPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64)
      .oneOf(
        [Yup.ref('newPassword')],
        'Repeated password must match new password'
      )
      .when('newPassword', (newPassword, field) =>
        newPassword ? field.required() : field
      ),
  });

  return (
    <>
      <button type="button" onClick={openModal}>
        Open
      </button>
      {isOpen && (
        <>
          {/* <ModalContainer onClose={closeModal}> */}
          <ModalBox>
            <TitleWrapper>
              <h3>Settings</h3>
              <StyledCloseSvg width="24px" height="24px" onClick={closeModal}>
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
              initialValues={{
                gender: user.gender,
                name: user.name,
                email: user.email,
                avatarURL: user.avatarURL,
                outdatedPassword: '',
                newPassword: '',
                repetedPassword: '',
              }}
              validationSchema={UpdateUserSchema}
              onSubmit={(values) => {
                console.log('Form is validated! Submitting the form...');
                console.log(values);
              }}
            >
              {({ values }) => (
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
                          checked={values.gender === 'woman'}
                        ></SmallControlLabel>
                        <SmallControlLabel
                          value="man"
                          control={<CustomRadio disableTouchRipple />}
                          label="Man"
                          checked={values.gender === 'man'}
                        ></SmallControlLabel>
                      </StyledRadioGroup>
                      <FormGroup>
                        <FormLabel htmlFor="name">Your name</FormLabel>
                        <StyledField
                          type="name"
                          name="name"
                          className="form-control"
                          autoComplete="current-password"
                        />
                        <ErrorMessage
                          className="error"
                          name="name"
                          component="div"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel htmlFor="email">E-mail</FormLabel>
                        <StyledField
                          type="email"
                          name="email"
                          className="form-control"
                          autoComplete="current-password"
                        />
                        <ErrorMessage
                          className="error"
                          name="email"
                          component="div"
                        />
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
                          className="form-control"
                          placeholder="Password"
                          autoComplete="current-password"
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
                        <ErrorMessage
                          className="error"
                          name="outdatedPassword"
                          component="div"
                        />
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
                        <ErrorMessage
                          className="error"
                          name="newPassword"
                          component="div"
                        />
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
                        <ErrorMessage
                          className="error"
                          name="repeatedPassword"
                          component="div"
                        />
                      </PasswordFormGroup>
                    </div>
                  </FormContentWrapper>
                  <SubmitButton type="submit">Save</SubmitButton>
                </Form>
              )}
            </Formik>
          </ModalBox>
          {/* </ModalContainer> */}
        </>
      )}
    </>
  );
};

export default SettingModal;