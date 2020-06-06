import Component from "../../component";

interface Props {
  hide?: boolean;
  onClick?: () => void;
}

class Sidetip extends Component<Props> {
  private $html?: HTMLElement;

  private initialize() {
    const $html = document.createElement("div");

    $html.textContent = "Fast Reporting";
    $html.className = "FastReporting__Sidetip";

    this.props.hide && $html.setAttribute("style", "display: none;");
    this.props.onClick && $html.addEventListener("click", this.props.onClick);

    this.$html = $html;
  }

  private update(): void {
    if (this.props.hide) {
      this.$html.setAttribute("style", "display: none;");
    } else if (this.$html.hasAttribute("style")) {
      this.$html.removeAttribute("style");
    }
  }

  public render(): any {
    !this.$html ? this.initialize() : this.update();

    return this.$html;
  }
}

export default Sidetip;
