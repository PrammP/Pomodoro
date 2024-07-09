export function optionsOnOff() {
  const options = document.getElementById("options");
  if (options.style.display === "flex") {
    options.style.display = "none";
  } else {
    options.style.display = "flex";
  }
}
