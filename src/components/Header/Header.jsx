import Logo from 'components/Logo/Logo';
import UserAuth from 'components/UserAuth/UserAuth';
import UserLogo from 'components/UserLogo/UserLogo';
import Loader from '../Loader/Loader';

export const Header = () => {
  return (
    <>
      <div>Header</div>
      <Logo />
      <UserLogo />
      <UserAuth />
      <Loader />
    </>
  );
};
