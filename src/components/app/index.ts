import Component from "../../component";

import Sidetip from "../sidetip";
import Reporter from "../reporter";

class App extends Component {
  private sidetip?: Sidetip;
  private reporter?: Reporter;

  private state = {
    showReporter: false
  };

  private initialize() {
    this.sidetip = new Sidetip({
      onClick: () => {
        this.state.showReporter = true;
        this.render();
      }
    });
    this.sidetip.render();

    this.reporter = new Reporter({
      hide: true,
      handleHide: () => {
        this.state.showReporter = false;
        this.render();
      }
    });
    this.reporter.render();
  }

  private update() {
    this.sidetip!.setProps({
      hide: this.state.showReporter
    });
    this.sidetip!.render();

    this.reporter!.setProps({
      hide: !this.state.showReporter
    });
    this.reporter!.render();
  }

  public render() {
    !this.reporter ? this.initialize() : this.update();

    return [this.sidetip!.render(), this.reporter!.render()];
  }
}

export default App;
