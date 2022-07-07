
export default class PopupWithForm {
  _submitCallback: any;
  _form: any;
  _inputList: any;
  _formValues: {};
  constructor(
    form,
    submitCallback,
  ) {
    this._submitCallback = submitCallback;
    this._form = document.querySelector(form);
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.input');

    this._formValues = {};
    this._inputList.forEach((input) => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  close() {
    this._form.reset();
  }

  setEventListeners() {
    this._form
      .addEventListener(
        'submit',
        (evt) => {
          evt.preventDefault();
          this._submitCallback(this._getInputValues());
        },
      );
  }
}
