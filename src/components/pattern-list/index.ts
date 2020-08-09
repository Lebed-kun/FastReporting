import Component from "../../component";

import PatternItem from "../pattern-item";
import PatternsDB from "../pattern-db";

interface Props {
  patterns?: string[];
}

class PatternList extends Component<Props> {
  private $html?: HTMLElement;
  private patternItems?: PatternItem[];
  private patternDB?: PatternsDB;

  private beforeHTMLrender() {
    this.patternDB = new PatternsDB({
      onLoad: (patterns: string[]) => {
        if (!this.props.patterns) {
          // @ts-ignore
          this.setProps(patterns, false);
        }
      }
    });

    this.patternDB!.loadPatterns();
  }

  private initialize() {
    this.beforeHTMLrender();

    const $html = document.createElement("div");
    $html.className = "FastReporting__PatternList";

    this.patternItems = this.props.patterns!.map(
      (el, i) =>
        new PatternItem({
          pattern: el,
          onDelete: () => {
            this.setProps({
              patterns: this.props.patterns!.filter((_, j) => j !== i)
            });
          }
        })
    );

    this.patternItems.forEach((el) => {
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
    const minLength = Math.min(patterns!.length, patternItems!.length);
    const maxLength = Math.max(patterns!.length, patternItems!.length);

    for (; i < minLength; i++) {
      const patternItem = patternItems![i];

      if (patterns![i] !== patternItem.getProps().pattern) {
        patternItem.setProps({
          pattern: patterns![i]
        });
      }
    }

    // For insertion
    if (minLength !== maxLength && maxLength === patterns!.length) {
      this.patternItems = [
        ...patternItems!,
        ...patterns!.slice(i).map(
          (pattern, j) =>
            new PatternItem({
              pattern,
              onDelete: () => {
                this.setProps({
                  patterns: this.props.patterns!.filter((_, k) => k !== j + i)
                });
              }
            })
        )
      ];

      this.patternItems.slice(i).forEach((item) => {
        this.$html && this.$html.appendChild(item.render()!);
      });
    }
    // For deletion
    else if (minLength !== maxLength && maxLength === patternItems!.length) {
      this.patternItems = this.patternItems!.slice(0, i);
    }
  }

  private update() {
    this.patchPatterns();
    this.patternDB!.savePatterns(this.props.patterns!);
  }

  public render() {
    !this.$html ? this.initialize() : this.update();

    return this.$html;
  }
}

export default PatternList;
