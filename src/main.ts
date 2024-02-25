const display = document.getElementById("display") as HTMLInputElement;

function appendToDisplay(input: number) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);

    if (display.value === "Infinity" || display.value === "-Infinity") {
      throw new Error("nie dziel przez zero");
    }
  } catch (error) {
    display.value = "error";

    setTimeout(() => {
      display.value = "";
    }, 1200);
  }
}
