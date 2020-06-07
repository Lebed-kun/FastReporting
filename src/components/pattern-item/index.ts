import Component from "../../component";

interface Props {
  pattern: string;
  onDelete?: () => void;
}

class PatternItem extends Component<Props> {
  private $html?: HTMLElement;

  private text(): HTMLElement {
    const $text = document.createElement("p");
    $text.className = "FastReporting__PatternItem__text";
    $text.textContent = this.props.pattern;

    return $text;
  }

  private close(): HTMLElement {
    const $close = document.createElement("p");
    $close.className = "FastReporting__PatternItem__close";
    $close.textContent = "X";
    $close.addEventListener("click", () => {
      this.$html!.remove();
      this.props.onDelete && this.props.onDelete();
    });

    return $close;
  }

  private initialize() {
    const $html = document.createElement("div");
    $html.className = "FastReporting__PatternItem";

    $html.appendChild(this.text());
    $html.appendChild(this.close());

    this.$html = $html;
  }

  public render() {
    !this.$html && this.initialize();

    return this.$html;
  }
}

export default PatternItem;
