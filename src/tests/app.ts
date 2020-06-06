import App from "../components/app";
import AppStyle from "../components/app/styled";

const instance = new App({});
const style = new AppStyle({});

const styleElement = document.getElementById("app-styles");
styleElement!.textContent = style.render();

const elements = instance.render();

document.body.appendChild(elements[0]);
document.body.appendChild(elements[1]);
