import GenericPopup from "../components/generic-popup";
import Style from "../components/generic-popup/styled";

const instance = new GenericPopup({
  show: true,
  text:
    "Example popup dsnf dushfbhdsbfdshbfdshufbdshfbdsuhfbdsfhdsbvfhgdsfghdsvfhdsfdsfdsfghdsf"
});
const style = new Style({});

const styleElement = document.getElementById("app-styles");
styleElement!.textContent = style.render();

document.body.appendChild(instance.render()!);
