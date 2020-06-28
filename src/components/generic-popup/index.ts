import Component from "../../component";

interface Props {
  text: string;
  show?: boolean;
}

class GenericPopup extends Component<Props> {
  private $html?: HTMLElement;

  private initialize() {
    const html = document.createElement("div");
    html.className = "FastReporting__GenericPopup";
    html.textContent = this.props.text;

    if (!this.props.show) {
      html.setAttribute("style", "display: none;");
    }

    this.$html = html;
  }

  private update() {
    if (!this.props.show) {
      this.$html.setAttribute("style", "display: none;");
    } else if (this.$html.hasAttribute("style")) {
      this.$html.removeAttribute("style");
    }
  }

  public render() {
    !this.$html ? this.initialize() : this.update();
    return this.$html;
  }
}

export default GenericPopup;
