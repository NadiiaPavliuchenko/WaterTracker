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
// import { getCurrentUser } from '../../store/auth/authSelectors';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import sprite from '../../assets/sprite.svg';

import { useFormik, Form, Formik } from 'formik';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

const SettingModal = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(getCurrentUser);

  // const server = 'https://tracker-of-water-oqqk.onrender.com/api/';
  const user = {
    name: 'n.pavljuchenko',
    email: 'n.pavljuchenko@gmail.com',
    avatarURL: '//www.gravatar.com/avatar/397507de0f385b925fb12604e5e147b1',
    norm: 2000,
    gender: 'woman',
    password: 'qwer4567',
  };

  const [showPassword, setShowPassword] = useState([false, false, false]);
  const [open, setOpen] = useState(false);
  const [newAvatar, setNewAvatar] = useState([user.avatarURL]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  };

  const formik = useFormik({
    initialValues: {
      gender: user.gender,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
      outdatedPassword: user.password,
      newPassword: '',
      repetedPassword: '',
    },
    onSubmit: (values) => {
      console.log('Form is validated! Submitting the form...');
      console.log(values.avatarURL);
    },
  });

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <TitleWrapper>
            <h3>Settings</h3>
            <StyledCloseSvg width="24px" height="24px" onClick={handleClose}>
              <use xlinkHref={`${sprite}#plus`} />
            </StyledCloseSvg>
          </TitleWrapper>
          <Formik>
            <Form>
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
                      checked={formik.values.gender === 'woman'}
                    ></SmallControlLabel>
                    <SmallControlLabel
                      value="man"
                      control={<CustomRadio disableTouchRipple />}
                      label="Man"
                      checked={formik.values.gender === 'man'}
                    ></SmallControlLabel>
                  </StyledRadioGroup>
                  <FormGroup>
                    <FormLabel htmlFor="name">Your name</FormLabel>
                    <StyledField
                      type="name"
                      name="name"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <StyledField
                      type="email"
                      name="email"
                      className="form-control"
                      autoComplete="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
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
                  </PasswordFormGroup>
                  <PasswordFormGroup>
                    <SmallLabel htmlFor="newPassword">New Password:</SmallLabel>
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
                  </PasswordFormGroup>
                  <PasswordFormGroup>
                    <SmallLabel htmlFor="repetedPassword">
                      Repeat new Password:
                    </SmallLabel>
                    <StyledField
                      type={showPassword[2] ? 'text' : 'password'}
                      name="repetedPassword"
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
                  </PasswordFormGroup>
                </div>
              </FormContentWrapper>
              <SubmitButton type="submit">Save</SubmitButton>
            </Form>
          </Formik>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default SettingModal;
