import Component from "../../component";

interface Props {
  hide?: boolean;
  handleHide?: () => void;
}

class Reporter extends Component<Props> {
  private $html?: HTMLElement;

  private head(): HTMLElement {
    const $head = document.createElement("div");
    $head.className = "FastReporting__Reporter__head";

    const $close = document.createElement("span");
    $close.textContent = "X";
    $close.className = "FastReporting__Reporter__close";

    this.props.handleHide &&
      $close.addEventListener("click", this.props.handleHide);

    $head.appendChild($close);

    return $head;
  }

  private content(): HTMLElement {
    const $content = document.createElement("div");
    $content.className = "FastReporting__Reporter__content";

    return $content;
  }

  private initialize() {
    const $html = document.createElement("div");
    $html.className = "FastReporting__Reporter";

    this.props.hide && $html.setAttribute("style", "display: none;");

    $html.appendChild(this.head());
    $html.appendChild(this.content());

    this.$html = $html;
  }

  private update() {
    if (this.props.hide) {
      this.$html!.setAttribute("style", "display: none;");
    } else if (this.$html!.hasAttribute("style")) {
      this.$html!.removeAttribute("style");
    }
  }

  public render() {
    !this.$html ? this.initialize() : this.update();

    return this.$html;
  }
}

export default Reporter;
