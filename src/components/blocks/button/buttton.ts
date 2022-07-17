import {Block} from '../../modules/block';
import { template } from './button.tmpl';
import Templator  from '../../modules/templator'

export default class Button extends Block {
  props: HTMLElement;
  constructor(props) {
        // Создаём враппер DOM-элемент button
    super("button", props);
  }

  render() {
        // В данном случае render возвращает строкой разметку из шаблонизатора
    return Templator.compile(template, this.props);
  }
} 

