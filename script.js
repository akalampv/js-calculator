let display = document.querySelector(".result");
let symbols = document.querySelectorAll(".symbol");
let numbers = document.querySelectorAll(".number");
let ac = document.querySelector(".ac");
let c = document.querySelector(".c");
let equal = document.querySelector(".equal");
let change = document.querySelector(".change");
let sciSymbols = document.querySelectorAll(".sci");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = number.textContent;
        } else {
            display.textContent += number.textContent;
        }
    });
});

ac.addEventListener("click", () => {
    display.textContent = "0";
});

c.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent.length < 1) {
        display.textContent = "0";
    }
});

symbols.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (display.textContent[display.textContent.length - 1].match("[0-9]")) {
            if (display.textContent === "0") {
                display.textContent = symbol.textContent;
            } else {
                display.textContent += symbol.textContent;
            }
        }
    });
});

equal.addEventListener("click", () => {
    display.textContent = display.textContent.replace("sin", "Math.sin");
    display.textContent = display.textContent.replace("cos", "Math.cos");
    display.textContent = display.textContent.replace("tan", "Math.tan");
    display.textContent = display.textContent.replace("lg", "Math.log10");
    display.textContent = display.textContent.replace("ln", "Math.log");
    display.textContent = display.textContent.replace("sqrt", "Math.sqrt");

    display.textContent = (Math.round(eval(display.textContent) * 100000) / 100000).toString();
})

document.addEventListener("keydown", (event) => {
    if (event.key.match("[0-9]")) {
        if (display.textContent === "0") {
            display.textContent = event.key;
        } else {
            display.textContent += event.key;
        }
    } else {
        switch (event.key) {
            case "Delete":
                display.textContent = "0";
                break;
            case "Backspace":
                display.textContent = display.textContent.slice(0, -1);
                if (display.textContent.length < 1) {
                    display.textContent = "0";
                }
                break;
            case "+":
                if (display.textContent[display.textContent.length - 1].match("[0-9]")) {
                    if (display.textContent === "0") {
                        display.textContent = "+";
                    } else {
                        display.textContent += "+";
                    }
                }
                break;
            case "-":
                if (display.textContent[display.textContent.length - 1].match("[0-9]")) {
                    if (display.textContent === "0") {
                        display.textContent = "-";
                    } else {
                        display.textContent += "-";
                    }
                }
                break;
            case "*":
                if (display.textContent[display.textContent.length - 1].match("[0-9]")) {
                    if (display.textContent === "0") {
                        display.textContent = "*";
                    } else {
                        display.textContent += "*";
                    }
                }
                break;
            case "/":
                if (display.textContent[display.textContent.length - 1].match("[0-9]")) {
                    if (display.textContent === "0") {
                        display.textContent = "/";
                    } else {
                        display.textContent += "/";
                    }
                }
                break;
            case "%":
                if (display.textContent[display.textContent.length - 1].match("[0-9]")) {
                    if (display.textContent === "0") {
                        display.textContent = "%";
                    } else {
                        display.textContent += "%";
                    }
                }
                break;
            case ".":
                if (display.textContent[display.textContent.length - 1].match("[0-9]")) {
                    if (display.textContent === "0") {
                        display.textContent = ".";
                    } else {
                        display.textContent += ".";
                    }
                }
                break;
            case "(":
                if (!(display.textContent[display.textContent.length - 1].match("[0-9]"))) {
                    if (display.textContent === "0") {
                        display.textContent = "(";
                    } else {
                        display.textContent += "(";
                    }
                }
                break;
            case ")":
                if (display.textContent[display.textContent.length - 1].match("[0-9]")) {
                    if (display.textContent === "0") {
                        display.textContent = ")";
                    } else {
                        display.textContent += ")";
                    }
                }
                break;
            case "Enter":
                display.textContent = display.textContent.replace("sin", "Math.sin");
                display.textContent = display.textContent.replace("cos", "Math.cos");
                display.textContent = display.textContent.replace("tan", "Math.tan");
                display.textContent = display.textContent.replace("lg", "Math.log10");
                display.textContent = display.textContent.replace("ln", "Math.log");
                display.textContent = display.textContent.replace("sqrt", "Math.sqrt");
                
                display.textContent = (Math.round(eval(display.textContent) * 100000) / 100000).toString();
                break;
        }
    }
});

change.addEventListener("click", () => {
    document.querySelector(".grid-container").classList.toggle("science");
})

sciSymbols.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (symbol.innerHTML === "x<sup>y</sup>") {
            if (display.textContent === "0") {
                display.textContent = "**";
            } else {
                display.textContent += "**";
            }
        } else if (symbol.classList.contains("sqrt")) {
            if (display.textContent === "0") {
                display.textContent = "sqrt(";
            } else {
                display.textContent += "sqrt(";
            }
        } else if (symbol.classList.contains("pi")) {
            if (display.textContent === "0") {
                display.textContent = (Math.round(Math.PI * 100000) / 100000).toString();
            } else {
                display.textContent += (Math.round(Math.PI * 100000) / 100000).toString();
            }
        } else {
            if (display.textContent === "0") {
                display.textContent = symbol.textContent;
            } else {
                display.textContent += symbol.textContent;
            }
        }
    });
});
