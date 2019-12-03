import React from 'react';
import profile from './profile/profile.json';
import Profile from './profile/Profile';

const App = () => (
  <>
    <Profile users={profile} />
  </>
);

export default App;
