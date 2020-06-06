import Component from "../../component";

class Style extends Component {
  public render() {
    return `
      .FastReporting__PatternItem {
        display: flex;
        justify-content: space-between;

        padding: 12px 16px;

        background: #9c9c9c;
        transition: 0.6s;
        border: 1px solid #545454;
      }

      .FastReporting__PatternItem:hover {
        background: #d6d6d6;
      }

      .FastReporting__PatternItem__text {
         font-size: 20px;
         font-family: sans-serif;
         color: black;
      } 

      .FastReporting__PatternItem__close {
        font-size: 12px;
        font-family: sans-serif;
        color: #545454;
        cursor: pointer;
      }
    `;
  }
}

export default Style;
