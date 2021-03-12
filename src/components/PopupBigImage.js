import React from 'react';
import close from '../images/close.svg';

function PopupBigImage(props) {
  return (
    <div
      className={`popup bigImage__popup ${
        props.card.link && 'popup_is-opened'
      }`}
    >
      <div
        className="popup__bg-image"
        style={{ backgroundImage: `url(${props.card.link})` }}
      >
        <img
          src={close}
          alt=""
          className="popup__close"
          onClick={props.close}
        />
      </div>
    </div>
  );
}

export default PopupBigImage;
