import { EventBus } from "./event-bus";
import { template } from '../blocks/button/button.tmpl';
import Templator  from './templator'
// Нельзя создавать экземпляр данного класса
export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render"
  };

  protected _element: HTMLElement | null = null;

  eventBus: () => EventBus;
  props: Object;
  tagName: string;
  _meta: { tagName: string; props: {}; };

  constructor(tagName = "div", props = {}) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
  _eventBus() {
    throw new Error("Method not implemented.");
  }


  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block:HTMLDivElement = this.render();
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
    return this._element!.replaceWith(block);
  }

    // Переопределяется пользователем. Необходимо вернуть разметку
  render() {
      return Templator.compile(template);
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    const self = this;

        // Здесь вам предстоит реализовать метод
    return props;
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this._element!.style.display = "block";
  }

  hide() {
    this._element!.style.display = "none";
  }
}

export default Block;