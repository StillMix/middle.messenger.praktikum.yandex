import {Block} from '../../modules/block';
import { template } from './button.tmpl';
import  compile  from '../../modules/templator'

export default class Button extends Block {
  constructor(props) {
        // Создаём враппер DOM-элемент button
    super("button", props);
  }

  render() {
        // В данном случае render возвращает строкой разметку из шаблонизатора
    return compile(template, this.props);
  }
} 

