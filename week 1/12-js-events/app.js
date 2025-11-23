const button = document.querySelector("button");

console.log(button.textContent);

button.addEventListener("click", function (event) {
  console.log(event);
});

document.addEventListener('keydown', (event)=> {    
    switch (event.key) {
      case "q":
        button.setAttribute("style", "background-color: red;");
        break;
        case "w":
        button.setAttribute("style", "background-color: white;");
        break;
        case "e":
        button.setAttribute("style", "background-color: blue;");
        break;
      default:
        console.log("no colour chage");
    }
});