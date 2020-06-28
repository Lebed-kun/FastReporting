import Component from "../../component";

import PatternList from "../pattern-list";
import GenericForm from "../generic-form";

interface Props {
  hide?: boolean;
  handleHide?: () => void;
}

class Reporter extends Component<Props> {
  private $html?: HTMLElement;
  private patternList?: PatternList;
  private addPatternForm?: GenericForm;

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

    $content.append(this.contentPatterns(), this.contentAddItem());

    return $content;
  }

  private contentPatterns(): HTMLElement {
    this.patternList = new PatternList({});

    const $content = this.patternList.render()!;

    return $content;
  }

  private contentAddItem(): HTMLElement {
    this.addPatternForm = new GenericForm({
      fieldName: "pattern",
      placeholder: "Регулярное выражение...",
      buttonText: "Добавить",
      onSubmit: ({ pattern }) => {
        this.patternList &&
          this.patternList.setProps({
            patterns: [...this.patternList.getProps().patterns!, pattern]
          });
      }
    });

    const $content = this.addPatternForm.render()!;

    return $content;
  }

  private initialize() {
    const $html = document.createElement("div");
    $html.className = "FastReporting__Reporter";

    this.props.hide && $html.setAttribute("style", "display: none;");

    $html.append(this.head(), this.content());

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
