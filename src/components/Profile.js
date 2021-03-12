import React from 'react';
// import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст CurrentUserContext

  // Другой способ:
  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setuserDescription] = React.useState('');
  // const [userAvatar, setuserAvatar] = React.useState('');

  // React.useEffect(() => {
  //   api.getUserInfo().then((res) => {
  //     setUserName(res.name);
  //     setuserDescription(res.about);
  //     setuserAvatar(res.avatar);
  //   });
  // });

  return (
    <div className="profile root__section">
      <div className="user-info">
        <div
          className="user-info__photo"
          style={{ backgroundImage: `url('${currentUser.avatar}')` }}
          onClick={props.onEditAvatar}
        ></div>
        <div className="user-info__data">
          <h1 className="user-info__name">{currentUser.name}</h1>
          <p className="user-info__job">{currentUser.about}</p>
        </div>
        <button className="button user-info__button" onClick={props.onAddPlace}>
          +
        </button>
        <button className="button edit__button" onClick={props.onEditProfile}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Profile;
