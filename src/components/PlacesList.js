import React from 'react';
import api from '../utils/api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function PlacesList(props) {
  const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст CurrentUserContext
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  });

  function handleCardLike(card) {
    //проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .likeCard(card._id, isLiked)
      .then((res) => {
        // получили карточку, по которой лайкнули
        const newCards = cards.map(
          // Формируем новый массив на основе имеющегося стейта cards
          (elem) => (elem._id === card._id ? res : elem)
        ); // если id карточки из стейта = id карточки, на лайк которой нажали => подставляем в массив обновлённую карточку
        // То есть если с карточкой ничего не изменилось-оставляем её, а если на ней поставили лайк или лайк убрали-поставим новую карточку в массив

        setCards(newCards); // Обновляем стейт
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="places-list root__section">
      {cards.map((elem) => (
        <Card
          key={elem._id}
          card={elem}
          onClick={props.onCardClick}
          onLike={handleCardLike}
          onCardDelete={props.onCardDelete}
        />
      ))}
    </div>
  );
}

export default PlacesList;
