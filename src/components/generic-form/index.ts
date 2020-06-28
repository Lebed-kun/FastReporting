import Component from "../../component";

type FormFields = {
  [name: string]: string;
};

interface Props {
  onSubmit: (data: FormFields) => void;
  fieldName: string;
  placeholder: string;
  buttonText: string;
}

class GenericForm extends Component<Props> {
  private $html?: HTMLElement;
  private $button?: HTMLButtonElement;
  private data?: string = "";
  private submitDisabled: boolean = true;

  private input(): HTMLElement {
    const input = document.createElement("input");

    input.className = "FastReporting__GenericForm__input";
    input.addEventListener("input", e => {
      this.data = (e.currentTarget as any).value;

      if (this.data && this.data.length > 0) {
        this.submitDisabled = false;
      } else {
        this.submitDisabled = true;
      }

      this.render();
    });

    input.setAttribute("placeholder", this.props.placeholder);
    input.setAttribute("name", this.props.fieldName);

    return input;
  }

  private button(): HTMLButtonElement {
    const button = document.createElement("button");

    button.className = "FastReporting__GenericForm__button";
    button.textContent = this.props.buttonText;
    button.setAttribute("type", "submit");

    if (this.submitDisabled) {
      button.disabled = true;
    }

    return button;
  }

  private initialize() {
    const form = document.createElement("form");

    form.className = "FastReporting__GenericForm";
    form.addEventListener("submit", e => {
      e.preventDefault();
      this.props.onSubmit({
        [this.props.fieldName]: this.data!
      });
    });

    const $input = this.input();
    const $button = this.button();
    form.append($input, $button);

    this.$html = form;
    this.$button = $button;
  }

  private update() {
    if (this.submitDisabled) {
      this.$button!.disabled = true;
    } else {
      this.$button!.disabled = false;
    }
  }

  public render() {
    !this.$html ? this.initialize() : this.update();

    return this.$html;
  }
}

export default GenericForm;
