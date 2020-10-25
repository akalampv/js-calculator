let result = document.querySelector(".result");
let symbols = document.querySelectorAll(".symbol");
let numbers = document.querySelectorAll(".number");
let ac = document.querySelector(".ac");
let c = document.querySelector(".c");
let equal = document.querySelector(".equal");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (result.textContent === "0") {
            result.textContent = number.textContent;
        } else {
            result.textContent += number.textContent;
        }
    });
});

ac.addEventListener("click", () => {
    result.textContent = "0";
});

c.addEventListener("click", () => {
    result.textContent = result.textContent.slice(0, -1);
    if (result.textContent.length < 1) {
        result.textContent = "0";
    }
});

symbols.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (result.textContent[result.textContent.length - 1].match("[0-9]")) {
            if (result.textContent === "0") {
                result.textContent = symbol.textContent;
            } else {
                result.textContent += symbol.textContent;
            }
        }
    });
});

equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent).toString();
})

document.addEventListener("keydown", (event) => {
    if (event.key.match("[0-9]")) {
        if (result.textContent === "0") {
            result.textContent = event.key;
        } else {
            result.textContent += event.key;
        }
    } else {
        switch (event.key) {
            case "Delete":
                result.textContent = "0";
                break;
            case "Backspace":
                result.textContent = result.textContent.slice(0, -1);
                if (result.textContent.length < 1) {
                    result.textContent = "0";
                }
                break;
            case "+":
                if (result.textContent[result.textContent.length - 1].match("[0-9]")) {
                    if (result.textContent === "0") {
                        result.textContent = "+";
                    } else {
                        result.textContent += "+";
                    }
                }
                break;
            case "-":
                if (result.textContent[result.textContent.length - 1].match("[0-9]")) {
                    if (result.textContent === "0") {
                        result.textContent = "-";
                    } else {
                        result.textContent += "-";
                    }
                }
                break;
            case "*":
                if (result.textContent[result.textContent.length - 1].match("[0-9]")) {
                    if (result.textContent === "0") {
                        result.textContent = "*";
                    } else {
                        result.textContent += "*";
                    }
                }
                break;
            case "/":
                if (result.textContent[result.textContent.length - 1].match("[0-9]")) {
                    if (result.textContent === "0") {
                        result.textContent = "/";
                    } else {
                        result.textContent += "/";
                    }
                }
                break;
            case "%":
                if (result.textContent[result.textContent.length - 1].match("[0-9]")) {
                    if (result.textContent === "0") {
                        result.textContent = "%";
                    } else {
                        result.textContent += "%";
                    }
                }
                break;
            case ".":
                if (result.textContent[result.textContent.length - 1].match("[0-9]")) {
                    if (result.textContent === "0") {
                        result.textContent = ".";
                    } else {
                        result.textContent += ".";
                    }
                }
                break;
            case "Enter":
                result.textContent = eval(result.textContent).toString();
                break;
        }
    }
});
