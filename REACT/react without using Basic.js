//Component Definition WITHOUT USING JSX

 

ReactDOM.render(React.createElement(App), document.getElementById('root'));


/////////////the above example using jsx 

import React from 'react';

function UserCard({ name, age, profilePicture }) {
  return (
    <div className="user-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// export default UserCard;


import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';

function App() {
  return (
    <div>
      <UserCard
        name="John Doe"
        age={30}
        profilePicture="https://example.com/john-doe.jpg"
      />
      <UserCard
        name="Jane Smith"
        age={25}
        profilePicture="https://example.com/jane-smith.jpg"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

