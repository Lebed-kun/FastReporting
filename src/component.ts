interface DefaultProps {
  children?: any;
}

abstract class Component<Props = {}> {
  protected props: Props & DefaultProps;

  constructor(props: Props & DefaultProps) {
    this.props = props;
  }

  public setProps(newProps: Props & DefaultProps): void {
    this.props = Object.assign({}, this.props, newProps);
    this.render();
  }

  public abstract render(): any;
}

export default Component;
