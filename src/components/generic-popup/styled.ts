import Component from "../../component";

class Style extends Component {
  public render() {
    return `
      .FastReporting__GenericPopup {
        position: fixed;
        top: 10px;
        right: 20px;
        text-align: center;
        padding: 12px;
        border: 2px solid black;
        max-width: 200px;
        word-wrap: break-word;
      }
    `;
  }
}

export default Style;
