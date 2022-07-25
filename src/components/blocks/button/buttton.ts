
import Block from "../../modules/block";
import tmpl from './button.tmpl';


type ButtonProps = {
  className: string,
  name: string,
  events?: {
    [key: string]: (event: Event) => void,
  },
};

class Button extends Block {
  constructor(props: ButtonProps) {
    super("fragment", props, tmpl);
  }
}

export { Button, ButtonProps };