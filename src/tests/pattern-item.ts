import PatternItem from "../components/pattern-item";
import Style from "../components/pattern-item/styled";

const instance = new PatternItem({
  pattern: "shdbhsd",
  onDelete: () => {}
});
const style = new Style({});

const styleElement = document.getElementById("app-styles");
styleElement!.textContent = style.render();

document.body.appendChild(instance.render()!);
