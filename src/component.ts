import { debounce } from "./utils";

interface DefaultProps {
  children?: any;
}

abstract class Component<Props = {}> {
  protected props: Props & DefaultProps;

  constructor(props: Props & DefaultProps) {
    this.props = props;
  }

  public setProps(
    newProps: Props & DefaultProps,
    rerender: boolean = true
  ): void {
    this.props = Object.assign({}, this.props, newProps);

    if (rerender) {
      debounce(() => this.render());
    }
  }

  public getProps(): Props & DefaultProps {
    return this.props;
  }

  public abstract render(): any;
}

export default Component;
