import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupNewMesto(props) {
  const inputRef = React.useRef(); // чтобы получать значение поля ввода
  const [error1, setError1] = React.useState(false); //чтобы добавлять елемент ошибки
  const [error2, setError2] = React.useState(false); //чтобы добавлять елемент ошибки
  const [errorText1, setErrorText1] = React.useState(''); //чтобы добавлять текст елементу ошибки
  const [errorText2, setErrorText2] = React.useState(''); //чтобы добавлять текст елементу ошибки
  const [buttonIsDisabled, setButtonIsDisabled] = React.useState(true); //чтобы делать кнопку неактивной

  function handleSubmitForm(evt) {
    // при сабмите формы с введённым значением инпута отрисуются карточки
    evt.preventDefault();
    setButtonIsDisabled(true);
  }

  function onChange(evt) {
    const form = evt.target.closest('.popup__form');
    if (!form.checkValidity()) {
      if (evt.target.name === 'name') {
        setError1(true);
        setErrorText1(evt.target.validationMessage);
        setButtonIsDisabled(true);
      }
      if (evt.target.name === 'link') {
        setError2(true);
        setErrorText2(evt.target.validationMessage);
        setButtonIsDisabled(true);
      }
    }
    if (form.checkValidity()) {
      setError1(false);
      setError2(false);
      setErrorText1('');
      setErrorText2('');
      setButtonIsDisabled(false);
    }
  }

  return (
    <PopupWithForm
      isOpen={props.open}
      onClose={props.close}
      name="new"
      title="Новое место"
      onSubmit={handleSubmitForm}
      children={
        <>
          <input
            type="text"
            id="name"
            name="name"
            className="popup__input popup__input_type_name"
            required
            placeholder="Название"
            ref={inputRef}
            onChange={onChange}
          />
          {error1 && (
            <span id="name" className="popup__error">
              {errorText1}
            </span>
          )}
          <input
            type="url"
            id="link"
            name="link"
            className="popup__input popup__input_type_link-url"
            required
            placeholder="Ссылка на картинку"
            ref={inputRef}
            onChange={onChange}
          />
          {error2 && (
            <span id="link" className="popup__error">
              {errorText2}
            </span>
          )}
          <button
            type="submit"
            className="button popup__button popup__button_type_place"
            disabled={buttonIsDisabled}
          >
            +
          </button>
        </>
      }
    />
  );
}

export default PopupNewMesto;
