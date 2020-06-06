import Component from "../../component";

import PatternItem from "../pattern-item";

class PatternList extends Component {
  private $html?: HTMLElement;
  private patternItems?: PatternItem[];

  private state = {
    patterns: []
  };

  private item(pattern: string): HTMLElement {
    const patternsCount = this.state.patterns.length;
    const patternItemsCount = this.patternItems!.length;

    const patternItem = new PatternItem({
      pattern,
      onDelete: () => {
        this.state.patterns.splice(patternsCount, patternsCount);
        this.patternItems!.splice(patternItemsCount, patternItemsCount);
      }
    });

    (this.state.patterns as string[]).push(pattern);
    this.patternItems!.push(patternItem);

    return patternItem.render()!;
  }

  private initialize() {
    const $html = document.createElement("div");
    $html.className = "FastReporting__PatternList";

    this.$html = $html;

    this.patternItems = [];
  }

  public addItem(pattern: string) {
    const $item = this.item(pattern);
    this.$html!.appendChild($item);
  }

  public render() {
    !this.$html && this.initialize();

    return this.$html;
  }
}

export default PatternList;
