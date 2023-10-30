import user from './Profile/user.json';
import Profile from './Profile/Profile';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <GlobalStyle />
    </div>
  );
};
