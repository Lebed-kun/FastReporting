import Component from "../../component";

class Style extends Component {
  public render() {
    return `
      .FastReporting__GenericForm {
        display: flex;
        margin: 16px;
      }

      .FastReporting__GenericForm__input {
        font-size: 16px;
        padding: 4px;
      }

      .FastReporting__GenericForm__button {
        height: 2rem;
        box-sizing: border-box;
        padding: 8px;
        color: white;
        background: black;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 8px;
      }

      .FastReporting__GenericForm__button:hover {
        background: #333;
      }

      .FastReporting__GenericForm__button[disabled] {
        background: #666;
        cursor: not-allowed;
      }
    `;
  }
}

export default Style;
