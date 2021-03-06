import './chat.css';
const messageTemplate = (document.querySelector('.element-template') as HTMLTemplateElement).content;
const messageContainer: HTMLDivElement = document.querySelector('.chatList__chat')!;
const btnPerson: HTMLButtonElement = document.querySelector('.chat_header_btn')!;
const btnFiel: HTMLDivElement = document.querySelector('.chat__dopMenu')!;
let fielOpen = false;
let personOpen = false;
btnPerson.addEventListener('click', () => {
  if (personOpen == false) {
    personOpen = true;
    document.querySelector('.popupPerson')!.classList.remove('disable');
  } else {
    personOpen = false;
    document.querySelector('.popupPerson')!.classList.add('disable');
  }
});
btnFiel.addEventListener('click', () => {
  if (fielOpen == false) {
    fielOpen = true;
    document.querySelector('.popupFile')!.classList.remove('disable');
  } else {
    fielOpen = false;
    document.querySelector('.popupFile')!.classList.add('disable');
  }
});
const initialCards = [{
  name: 'Архыз',
  message: 'fgdsfsdfsdf',
  date: '10:49',
  quantity: '2',
  counter: true,
},

{
  name: 'Челябинская область',
  message: 'asdasedwe',
  date: '12:49',
  quantity: '0',
  counter: false,
},

{
  name: 'Иваново',
  message: 'jjjjjj',
  date: '10:49',
  quantity: '3',
  counter: true,
},

{
  name: 'Камчатка',
  message: 'rwerq weq',
  date: '15:49',
  quantity: '0',
  counter: false,
},

{
  name: 'Холмогорский район',
  message: 'qwegfdgkkkkk',
  date: 'Пт',
  quantity: '0',
  counter: false,
},

{
  name: 'Байкал',
  message: 'wsrewr241412412',
  date: 'Ср',
  quantity: '0',
  counter: false,
},
];

function renderCard(data:Node, wrap:HTMLDivElement) {
  wrap.append(data);
}

function createCard(name:string, message:string, date:string, quantity:string, counter: boolean) {
  const messageTemplateClone = messageTemplate.cloneNode(true);
  const messageName = (<Element>messageTemplateClone).querySelector('.person__name')!;
  const messageMessage = (<Element>messageTemplateClone).querySelector('.person__lastMessage')!;
  const messageDate = (<Element>messageTemplateClone).querySelector('.persone_message_date')!;
  messageName.textContent = name;
  messageMessage.textContent = message;
  messageDate.textContent = date;

  if (counter == true) {
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
  const { counter } = element
  const newCard = createCard(name, message, date, quantity, counter);
  renderCard(newCard, messageContainer);
});
