import Component from "../../component";

class Style extends Component {
  public render() {
    return `
      .FastReporting__Sidetip {
        position: fixed;
        top: 50%;
        left: 0;

        transform: rotate(90deg) translateY(100%);
        background: black;

        padding: 8px;

        color: white;
        font-size: 16px;
        font-family: sans-serif;
        font-weight: bold;

        cursor: pointer;
      }
    `;
  }
}

export default Style;
