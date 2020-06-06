import Component from "../../component";

import SidetipStyle from "../sidetip/styled";
import ReporterStyle from "../reporter/styled";
import PatterItemStyle from "../pattern-item/styled";

class Style extends Component {
  private sidetip: SidetipStyle;
  private reporter: ReporterStyle;
  private patternItem: PatterItemStyle;

  private initialize() {
    this.sidetip = new SidetipStyle({});
    this.reporter = new ReporterStyle({});
    this.patternItem = new PatterItemStyle({});
  }

  public render() {
    !this.sidetip && this.initialize();

    return `
     ${this.sidetip.render()} 

     ${this.reporter.render()}

     ${this.patternItem.render()}
    `;
  }
}

export default Style;
