import Reporter from "../components/reporter";
import Style from "../components/reporter/styled";

const instance = new Reporter({});
const style = new Style({});

const styleElement = document.getElementById("app-styles");
styleElement!.textContent = style.render();

document.body.appendChild(instance.render()!);
