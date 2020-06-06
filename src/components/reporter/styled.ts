import Component from "../../component";

class Style extends Component {
  public render() {
    return `
      .FastReporting__Reporter {
        width: 400px;
        min-height: 200px;

        position: fixed;
        top: 50%;
        left: 12px;
        
        border: 2px solid grey;
        border-radius: 4px;
      }

      .FastReporting__Reporter__head {
        position: relative;
        
        min-height: 16px;
        padding: 8px;

        background: black;
      }

      .FastReporting__Reporter__close {
        position: absolute;
        top: calc(50% - 20px / 2);
        left: calc(100% - 20px);

        color: white;
        font-size: 20px;
        font-family: sans-serif;
        font-weight: bold;

        cursor: pointer;
      }

      .FastReporting__Reporter__content {
        min-heoght: 200px;
        background: white;
      }
    `;
  }
}

export default Style;
