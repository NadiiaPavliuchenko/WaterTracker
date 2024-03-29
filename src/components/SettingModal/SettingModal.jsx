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
  RadioGroup,
} from './SettingModal.styled';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Formik, Form, Field } from 'formik';

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
            <FormSubtitle id="my-radio-group">
              Your gender identity
            </FormSubtitle>
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              <SmallLabel>
                <Field type="radio" name="picked" value="woman" />
                Woman
              </SmallLabel>
              <SmallLabel>
                <Field type="radio" name="picked" value="man" />
                Man
              </SmallLabel>
            </RadioGroup>
            <div className="form-group">
              <FormLabel htmlFor="name">Your name</FormLabel>
              <Field type="name" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Field
                type="email"
                name="email"
                className="form-control"
                autoComplete="email"
              />
            </div>
            <div>
              <FormSubtitle>Password</FormSubtitle>
              <div className="form-group">
                <SmallLabel htmlFor="outdatedPassword">
                  Outdated Password:
                </SmallLabel>
                <Field
                  type="password"
                  name="outdatedPassword"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>
              <div className="form-group">
                <SmallLabel htmlFor="newPassword">New Password:</SmallLabel>
                <Field
                  type="password"
                  name="newPassword"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>
              <div className="form-group">
                <SmallLabel htmlFor="repetedPassword">
                  Repeat new Password:
                </SmallLabel>
                <Field
                  type="password"
                  name="repetedPassword"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </ModalDiv>
  );
};

export default SettingModal;
