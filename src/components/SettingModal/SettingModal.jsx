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
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';

import { Formik, Form } from 'formik';
import { useState } from 'react';

const SettingModal = () => {
  const [showPassword, setShowPassword] = useState([false, false, false]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleShowPassword = (index) => {
    const newShowPassword = [...showPassword];
    newShowPassword[index] = !showPassword[index];
    setShowPassword(newShowPassword);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <ModalBox>
          <TitleWrapper>
            <h3>Settings</h3>
            <CloseBtn onClick={handleClose}>
              <CloseRoundedIcon />
            </CloseBtn>
          </TitleWrapper>
          <Formik
            initialValues={{
              gender: '',
              name: '',
              email: '',
              outdatedPassword: '',
              newPassword: '',
              repetedPassword: '',
            }}
            onSubmit={({ setSubmitting }) => {
              console.log('Form is validated! Submitting the form...');
              setSubmitting(false);
            }}
          >
            {() => (
              <Form>
                <div>
                  <FormLabel htmlFor="file">Your photo</FormLabel>
                  <FilePickerWrapper>
                    <ImgThumb>
                      <img src="" alt="" />
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
            )}
          </Formik>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default SettingModal;
