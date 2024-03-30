import {
  ModalBox,
  VisuallyHiddenInput,
  TitleWrapper,
  CloseBtn,
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
} from './SettingModal.styled';
// import { getCurrentUser } from '../../store/auth/authSelectors';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';

import { useFormik, Form, Formik } from 'formik';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

const SettingModal = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(getCurrentUser);
  const user = {
    name: 'n.pavljuchenko',
    email: 'n.pavljuchenko@gmail.com',
    avatarURL: '//www.gravatar.com/avatar/397507de0f385b925fb12604e5e147b1',
    norm: 2000,
    gender: 'woman',
  };

  const [showPassword, setShowPassword] = useState([false, false, false]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleShowPassword = (index) => {
    const newShowPassword = [...showPassword];
    newShowPassword[index] = !showPassword[index];
    setShowPassword(newShowPassword);
  };

  const formik = useFormik({
    initialValues: {
      gender: user.gender,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
      outdatedPassword: '',
      newPassword: '',
      repetedPassword: '',
    },
    onSubmit: (values) => {
      console.log(
        'Form is validated! Submitting the form...',
        JSON.stringify(values, null, 2)
      );
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
            <CloseBtn onClick={handleClose}>
              <CloseRoundedIcon />
            </CloseBtn>
          </TitleWrapper>
          <Formik>
            <Form>
              <div>
                <FormLabel htmlFor="file">Your photo</FormLabel>
                <FilePickerWrapper>
                  <ImgThumb>
                    <img src={user.avatarURL} alt="" />
                  </ImgThumb>
                  <FilePickerLink
                    component="label"
                    underline="none"
                    accept=".jpg,.jpeg,.png"
                    tabIndex={-1}
                  >
                    <FileUploadOutlinedIcon />
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
                      value="female"
                      control={<CustomRadio disableTouchRipple />}
                      label="Woman"
                    ></SmallControlLabel>
                    <SmallControlLabel
                      value="male"
                      control={<CustomRadio disableTouchRipple />}
                      label="Man"
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
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
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
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
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
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
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
