/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */

import './chat.css';

const messageTemplate = (document.querySelector('.element-template') as HTMLTemplateElement).content;
const messageContainer: HTMLDivElement = document.querySelector('.chatList__chat')!;
const btnPerson: HTMLButtonElement = document.querySelector('.chat_header_btn')!;
const btnFiel: HTMLDivElement = document.querySelector('.chat__dopMenu')!;

let fielOpen = 0;
let personOpen = 0;

btnPerson.addEventListener('click', () => {
  if (personOpen == 0) {
    personOpen = 1;
    document.querySelector('.popupPerson')!.classList.remove('disable');
  } else {
    personOpen = 0;
    document.querySelector('.popupPerson')!.classList.add('disable');
  }
});
btnFiel.addEventListener('click', () => {
  if (fielOpen == 0) {
    fielOpen = 1;
    document.querySelector('.popupFile')!.classList.remove('disable');
  } else {
    fielOpen = 0;
    document.querySelector('.popupFile')!.classList.add('disable');
  }
});

const initialCards = [{
  name: 'Архыз',
  message: 'fgdsfsdfsdf',
  date: '10:49',
  quantity: '2',
},

{
  name: 'Челябинская область',
  message: 'asdasedwe',
  date: '12:49',
  quantity: '0',
},

{
  name: 'Иваново',
  message: 'jjjjjj',
  date: '10:49',
  quantity: '3',
},

{
  name: 'Камчатка',
  message: 'rwerq weq',
  date: '15:49',
  quantity: '0',
},

{
  name: 'Холмогорский район',
  message: 'qwegfdgkkkkk',
  date: 'Пт',
  quantity: '0',
},

{
  name: 'Байкал',
  message: 'wsrewr241412412',
  date: 'Ср',
  quantity: '0',
},
];

function renderCard(data:Node, wrap:HTMLDivElement) {
  wrap.append(data);
}

function createCard(name:string, message:string, date:string, quantity:string) {
  const messageTemplateClone = messageTemplate.cloneNode(true);
  const messageName = (<Element>messageTemplateClone).querySelector('.person__name')!;
  const messageMessage = (<Element>messageTemplateClone).querySelector('.person__lastMessage')!;
  const messageDate = (<Element>messageTemplateClone).querySelector('.persone_message_date')!;
  messageName.textContent = name;
  messageMessage.textContent = message;
  messageDate.textContent = date;

  if (quantity > 0) {
    const message = (<Element>messageTemplateClone).querySelector('.person__message')!;
    const s = document.createElement('p');
    s.setAttribute('class', 'persone_message_quantity');
    s.textContent = quantity;
    message.append(s);
  }
  (<Element>messageTemplateClone).querySelector('.chat__person')!.addEventListener('click', () => {
    document.querySelector('.chat')!.classList.remove('menu');
    document.querySelector('.disable')!.classList.remove('disable');
    document.querySelector('.chat__menu')!.classList.add('disable');
    document.querySelector('.chat_header_name')!.textContent = name;
  });

  return messageTemplateClone;
}

initialCards.forEach((element) => {
  const { name } = element;
  const { message } = element;
  const { date } = element;
  const { quantity } = element;
  const newCard = createCard(name, message, date, quantity);
  renderCard(newCard, messageContainer);
});
