import Component from "../../component";

import SidetipStyle from "../sidetip/styled";
import ReporterStyle from "../reporter/styled";

class Style extends Component {
  private sidetip: SidetipStyle;
  private reporter: ReporterStyle;

  private initialize() {
    this.sidetip = new SidetipStyle({});
    this.reporter = new ReporterStyle({});
  }

  public render() {
    !this.sidetip && this.initialize();

    return `
     ${this.sidetip.render()} 

     ${this.reporter.render()}
    `;
  }
}

export default Style;
