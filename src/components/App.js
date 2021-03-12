import React from 'react';
import Header from './Header';
import Profile from './Profile';
import PlacesList from './PlacesList';
import PopupNewMesto from './PopupNewMesto';
import PopupEditProfile from './PopupEditProfile';
import PopupBigImage from './PopupBigImage';
import PopupAvatar from './PopupAvatar';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

import '../index.css';

function App() {
  //задаём внутренние состояния переменных
  const [isEditAvatarPopupOpen, setisEditAvatarPopupClick] = React.useState(
    false
  ); //чтобы задавать CSS-класс popup_is-opened PopupAvatar

  const [isEditProfilePopupOpen, setisEditProfilePopupClick] = React.useState(
    false
  ); //чтобы задавать CSS-класс popup_is-opened PopupProfile

  const [isAddPlacePopupOpen, setisAddPlacePopupClick] = React.useState(false); //чтобы задавать CSS-класс popup_is-opened PopupNewPlace

  const [selectedCard, setselectedCard] = React.useState({}); //чтобы получать определённую картинку карточки(в виде объекта), на которую нажали

  const [currentUser, setcurrentUser] = React.useState({}); // для получения данных о пользователе(имя,о себе, аватар)

  React.useEffect(() => {
    // получаем от сервера данные о пользователе
    api.getUserInfo().then((res) => {
      setcurrentUser(res);
    });
  });

  //меняем внутренние состояния переменных с false(без) на true(с popup_is-opened)-открываем попапы
  function handleEditAvatarClick() {
    setisEditAvatarPopupClick(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupClick(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupClick(true);
  }

  // получаем карточку, на картинку которой нажали
  function handleCardClick(card) {
    setselectedCard(card);
  }

  //меняем внутренние состояния переменных на false(без popup_is-opened)-закрываем попапы
  function closeAllPopups() {
    setisEditAvatarPopupClick(false);
    setisEditProfilePopupClick(false);
    setisAddPlacePopupClick(false);
    setselectedCard(false);
  }

  function handleCardDelete() {}

  return (
    //оборачиваем в контекст всё содержимое и устанавливаем значение "currentUser" контекста для провайдера

    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Profile
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <PlacesList
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
        />
        <PopupNewMesto open={isAddPlacePopupOpen} close={closeAllPopups} />
        <PopupEditProfile
          open={isEditProfilePopupOpen}
          close={closeAllPopups}
        />
        <PopupBigImage card={selectedCard} close={closeAllPopups} />
        <PopupAvatar open={isEditAvatarPopupOpen} close={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
