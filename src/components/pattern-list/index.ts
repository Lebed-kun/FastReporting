import Component from "../../component";

import PatternItem from "../pattern-item";

class PatternList extends Component {
  private $html?: HTMLElement;
  private patternItems?: PatternItem[];

  private state = {
    patterns: []
  };

  private initialize() {
    const $html = document.createElement("div");
    $html.className = "FastReporting__PatternList";

    this.$html = $html;
  }

  private update() {}

  public addItem(pattern: string) {}

  public render() {
    !this.$html ? this.initialize() : this.update();

    return this.$html;
  }
}
