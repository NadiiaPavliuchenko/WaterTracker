import {
  ModalDiv,
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
} from './SettingModal.styled';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { Formik, Form } from 'formik';

const SettingModal = () => {
  return (
    <ModalDiv>
      <TitleWrapper>
        <h3>Settings</h3>
        <CloseBtn>
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
                    control={<CustomRadio />}
                    label="Woman"
                  ></SmallControlLabel>
                  <SmallControlLabel
                    value="male"
                    control={<CustomRadio />}
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
                    type="password"
                    name="outdatedPassword"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </PasswordFormGroup>
                <PasswordFormGroup>
                  <SmallLabel htmlFor="newPassword">New Password:</SmallLabel>
                  <StyledField
                    type="password"
                    name="newPassword"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </PasswordFormGroup>
                <PasswordFormGroup>
                  <SmallLabel htmlFor="repetedPassword">
                    Repeat new Password:
                  </SmallLabel>
                  <StyledField
                    type="password"
                    name="repetedPassword"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </PasswordFormGroup>
              </div>
            </FormContentWrapper>
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </ModalDiv>
  );
};

export default SettingModal;
