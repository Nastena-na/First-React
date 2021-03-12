import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function click() {
    props.onClick(props.card); // ложим определённую карточку, по картинке которой кликнули,
    //чтобы пробросить её в App в переменную {selectedCard} и от туда использовать её для PopupBigImage
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id); //id лайка = id пользователя

  function handleLikeClick() {
    props.onLike(props.card);
  }

  return (
    <div className="place-card">
      <div
        className="place-card__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={click}
      >
        {isOwn && (
          <button
            className="place-card__delete-icon"
            onClick={handleDeleteClick}
          ></button>
        )}
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{props.card.name}</h3>
        <div className="place-card__like-group">
          <button
            className={`place-card__like-icon ${
              isLiked && 'place-card__like-icon_liked'
            }`}
            onClick={handleLikeClick}
          ></button>
          <div className="place-card__like-number">
            {props.card.likes.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
