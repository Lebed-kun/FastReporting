import Component from "../../component";

import SidetipStyle from "../sidetip/styled";
import ReporterStyle from "../reporter/styled";
import PatterItemStyle from "../pattern-item/styled";
import PatternListStyle from "../pattern-list/styled";
import GenericFormStyle from "../generic-form/styled";

class Style extends Component {
  private sidetip?: SidetipStyle;
  private reporter?: ReporterStyle;
  private patternItem?: PatterItemStyle;
  private patternList?: PatternListStyle;
  private genericForm?: GenericFormStyle;

  private initialize() {
    this.sidetip = new SidetipStyle({});
    this.reporter = new ReporterStyle({});
    this.patternItem = new PatterItemStyle({});
    this.patternList = new PatternListStyle({});
    this.genericForm = new GenericFormStyle({});
  }

  public render() {
    !this.sidetip && this.initialize();

    return `
     ${this.sidetip && this.sidetip.render()} 

     ${this.reporter && this.reporter.render()}

     ${this.patternItem && this.patternItem.render()}

     ${this.patternList && this.patternList.render()}

     ${this.genericForm && this.genericForm.render()}
    `;
  }
}

export default Style;
