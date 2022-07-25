
export default class FormValidator {
  private _form: HTMLFormElement;
  private _inactiveButtonClass: string;
  private _inputErrorClass: string;
  private _inputSelector: string;
  private _submitButtonSelector: string;
  private _formSelector: string;
  private _button: HTMLButtonElement;
  private _inputList: unknown[];
  constructor(config, form) {
    this._form = document.querySelector(form);

    this._inactiveButtonClass = config.inactiveButtonClass;

    this._inputErrorClass = config.inputErrorClass;

    this._inputSelector = config.inputSelector;

    this._submitButtonSelector = config.submitButtonSelector;

    this._formSelector = config.formSelector;

    this._button = (<HTMLFormElement>this._form).querySelector(this._submitButtonSelector)!;

    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector),
    );
  }

  disableSubmitButton() {
    this._button.classList.add(this._inactiveButtonClass);

    this._button.disabled = true;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((input:HTMLInputElement) => {
      if (input.value === '') {
        return input.validity.valid;
      }
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableSubmitButton();
    } else {
      this._button.classList.remove(this._inactiveButtonClass);

      this._button.disabled = false;
    }
  }

  _showInputError(input:HTMLInputElement, errorMessage:string) {
    const errorElement = this._form.querySelector(`.${input.id}-error`)!;

    input.classList.add(this._inputErrorClass);

    errorElement.textContent = errorMessage;
  }

  _hideInputError(input:HTMLInputElement) {
    const errorElement = this._form.querySelector(`.${input.id}-error`)!;

    input.classList.remove(this._inputErrorClass);

    errorElement.textContent = '';
  }

  _isValid(input:HTMLInputElement) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input:HTMLInputElement) => {
      input.addEventListener('input', () => {
        this._isValid(input);

        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement:HTMLInputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
