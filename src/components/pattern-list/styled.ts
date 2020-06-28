import Component from "../../component";

class Style extends Component {
  public render() {
    return `
      .FastReporting__PatternList {
        width: 100%;
        min-height: 32px;
        max-height: 200px;
        overflow: scroll;
      }
    `;
  }
}

export default Style;
