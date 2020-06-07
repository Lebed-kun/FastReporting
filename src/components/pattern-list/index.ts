import Component from "../../component";

import PatternItem from "../pattern-item";

interface Props {
  patterns: string[];
}

class PatternList extends Component<Props> {
  private $html?: HTMLElement;
  private patternItems?: PatternItem[];

  private initialize() {
    const $html = document.createElement("div");
    $html.className = "FastReporting__PatternList";

    this.patternItems = this.props.patterns.map(
      (el, i) =>
        new PatternItem({
          pattern: el,
          onDelete: () => {
            this.setProps({
              patterns: this.props.patterns.filter((_, j) => j !== i)
            });
          }
        })
    );

    this.patternItems.forEach(el => {
      const $child = el.render()!;
      $html.appendChild($child);
    });

    this.$html = $html;
  }

  private patchPatterns() {
    const patterns = this.props.patterns;
    const patternItems = this.patternItems;

    // For simplicity purpose now
    // just patch non-matching differences
    let i = 0;
    const minLength = Math.min(patterns.length, patternItems!.length);
    const maxLength = Math.max(patterns.length, patternItems!.length);

    for (; i < minLength; i++) {
      const patternItem = patternItems![i];

      if (patterns[i] !== patternItem.getProps().pattern) {
        patternItem.setProps({
          pattern: patterns[i]
        });
      }
    }

    // For insertion
    if (maxLength === patterns.length) {
      this.patternItems = [
        ...patternItems!,
        ...patterns.slice(i).map(
          (pattern, j) =>
            new PatternItem({
              pattern,
              onDelete: () => {
                this.setProps({
                  patterns: this.props.patterns.filter((_, k) => k !== j + i)
                });
              }
            })
        )
      ];

      this.patternItems.slice(i);
    }
    // For deletion
    else if (maxLength === patternItems!.length) {
      this.patternItems = this.patternItems!.slice(0, i);
    }
  }

  private update() {
    this.patchPatterns();
  }

  public render() {
    !this.$html ? this.initialize() : this.update();

    return this.$html;
  }
}

export default PatternList;
