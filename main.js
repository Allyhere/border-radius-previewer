const borderForm = document.querySelector("[data-js=form]");
const borderFormElements = Array.from(
  borderForm.querySelectorAll("input:not([readonly]")
);
const borderOutput = document.querySelector("[data-js=output]");
const borderViewer = document.querySelector("[data-js=viewer]");
const copyContent = document.querySelector("[data-js=copy]");
const NOTIFICATION_TIME = 3000;

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(borderViewer.value);
  const notificationContainer = copyContent.nextElementSibling;
  notificationContainer.classList.add("active");
  notificationContainer.innerText = "Copied!";
  setTimeout(() => {
    notificationContainer.classList.remove("active");
    notificationContainer.innerText = "";
  }, NOTIFICATION_TIME);
};

const hasUnit = (value) => !!value.replace(/\d{0,}/, "");

const parseBorderValues = (values) =>
  values.map((value) => (hasUnit(value) ? value : `${value}px`));

const getBorderValues = () =>
  borderFormElements
    .map((element) => `${element.value || 0}`)
    .filter((value) => /\S/g.test(value));

const checkValidity = ({ target }) => {
  const isInputValid = !target.validity.patternMismatch;
  if (isInputValid) return;
  const errorText = target.nextElementSibling;
  errorText.innerText = "Invalid value";
  setTimeout(() => {
    errorText.innerText = "";
  }, NOTIFICATION_TIME);
};

const morphBorders = ({ target }) => {
  const borderSide = target.name;
  const borderValue = target.value;
  const borderStyles = getBorderValues();
  const parsedStyles = parseBorderValues(borderStyles);
  borderOutput.style.setProperty(
    `--${borderSide}`,
    `${hasUnit(borderValue) ? borderValue : `${borderValue}px`}`
  );
  borderViewer.value = `border-radius: ${parsedStyles};`;
};

borderFormElements.forEach((input) => {
  input.addEventListener("input", morphBorders);
  input.addEventListener("change", checkValidity);
});

copyContent.addEventListener("click", copyToClipboard);
