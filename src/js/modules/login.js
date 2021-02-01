const login = () => {
  function buttonTabs(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);
  }

  
  buttonTabs('.btn__menu', '.modal__menu', '.menu__close');
  bindModal('.btn__login', '.modal__login', '.menu__close');


};

export default login;