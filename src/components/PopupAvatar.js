import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAvatar(props) {
  const inputRef = React.useRef(); // чтобы получать значение поля ввода
  const [error, setError] = React.useState(false); //чтобы добавлять елемент ошибки
  const [errorText, setErrorText] = React.useState(''); //чтобы добавлять текст елементу ошибки
  const [buttonIsDisabled, setButtonIsDisabled] = React.useState(true); //чтобы делать кнопку неактивной

  function handleSubmitForm(evt) {
    // при сабмите формы с введённым значением инпута отрисуются карточки
    evt.preventDefault();
    setButtonIsDisabled(true);
  }

  function onChange(evt) {
    const form = evt.target.closest('.popup__form');
    if (!form.checkValidity()) {
      setError(true);
      setErrorText(evt.target.validationMessage);
      setButtonIsDisabled(true);
    }
    if (form.checkValidity()) {
      setError(false);
      setErrorText('');
      setButtonIsDisabled(false);
    }
  }

  return (
    <PopupWithForm
      isOpen={props.open}
      onClose={props.close}
      name="avatar"
      title="Обновить аватар"
      onSubmit={handleSubmitForm}
      children={
        <>
          <input
            type="url"
            id="urlAvatar"
            name="urlAvatar"
            className="popup__input popup__input_type_name"
            required
            placeholder="Ссылка на аватар"
            ref={inputRef}
            onChange={onChange}
          />
          {error && (
            <span id="urlAvatar" className="popup__error">
              {errorText}
            </span>
          )}
          <button
            type="submit"
            className="button popup__button popup__button_type_avatar"
            disabled={buttonIsDisabled}
          >
            Сохранить
          </button>
        </>
      }
    />
  );
}

export default PopupAvatar;
