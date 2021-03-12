import React from 'react';
import close from '../images/close.svg';

function PopupWithForm(props) {

  return (
    <div
      className={`popup ${props.name}__popup ${
        props.isOpen && 'popup_is-opened'
      }`}
    >
      <div className="popup__content">
        <img
          src={close}
          alt=""
          className="popup__close"
          onClick={props.onClose}
        />
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
