import GenericForm from "../components/generic-form";
import Style from "../components/generic-form/styled";

const instance = new GenericForm({
  onSubmit: () => alert("Success"),
  placeholder: "Example",
  buttonText: "Submit",
  fieldName: "example"
});
const style = new Style({});

const styleElement = document.getElementById("app-styles");
styleElement!.textContent = style.render();

document.body.appendChild(instance.render()!);
