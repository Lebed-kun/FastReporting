import Component from "../../component";

interface Props {
  onLoad: (patterns: string[]) => void;
}

class PatternDB extends Component<Props> {
  public loadPatterns() {
    const patternsCount = Number(
      localStorage.getItem(`FastReporting__patterns.length`)
    );
    const patterns = [];

    for (let i = 0; i < patternsCount; i++) {
      patterns.push(localStorage.getItem(`FastReporting__patterns[${i}]`)!);
    }

    this.props.onLoad(patterns);
  }

  public savePatterns(patterns: string[]) {
    localStorage.setItem(
      `FastReporting__patterns.length`,
      patterns.length.toString()
    );

    patterns.forEach((item, id) => {
      localStorage.setItem(`FastReporting__patterns[${id}]`, item);
    });
  }

  public render() {
    return null;
  }
}

export default PatternDB;
