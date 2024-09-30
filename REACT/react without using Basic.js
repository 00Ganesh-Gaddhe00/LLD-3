//Component Definition WITHOUT USING JSX

import React from 'react';

function UserCard(props) {
  return React.createElement(
    'div',
    { className: 'user-card' },
    React.createElement('img', { 
      src: props.profilePicture, 
      alt: `${props.name}'s profile`, 
      className: 'profile-picture' 
    }),
    React.createElement('h2', null, props.name),
    React.createElement('p', null, `Age: ${props.age}`)
  );
}

export default UserCard;



//Rendering the Component

import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(UserCard, {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://example.com/john-doe.jpg'
    }),
    React.createElement(UserCard, {
      name: 'Jane Smith',
      age: 25,
      profilePicture: 'https://example.com/jane-smith.jpg'
    })
  );
}

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

