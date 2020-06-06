import Sidetip from "../components/sidetip";
import Style from "../components/sidetip/styled";

const instance = new Sidetip({});
const style = new Style({});

const styleElement = document.getElementById("app-styles");
styleElement!.textContent = style.render();

document.body.appendChild(instance.render());
