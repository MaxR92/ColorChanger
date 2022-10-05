const randomColor = () => {
    let element = document.getElementById('randomColor')
    let buttonElement = document.querySelector('button')
    const randomNum = Math.random().toFixed(1)
    console.log(randomNum);

switch (randomNum) {
    case "0.0":
        buttonElement.style.color = 'black';
        return element.style.backgroundcolor = "lime";
    case "0.1":
        buttonElement.style.color = 'white';
        return element.style.backgroundColor = 'blue';
    case "0.2":
        buttonElement.style.color = 'white';
        return element.style.backgroundColor = 'green';
    case "0.3":
        buttonElement.style.color = 'white';
        return element.style.backgroundColor = 'red';
    case "0.4":
        buttonElement.style.color = 'black';
        return element.style.backgroundColor = 'yellow';
    case "0.5":
        buttonElement.style.color = 'black';
        return element.style.backgroundColor = 'coral';
    case "0.6":
        buttonElement.style.color = 'black';
        return element.style.backgroundColor = 'aqua';
    case "0.7":
        buttonElement.style.color = 'white';
        return element.style.backgroundColor = 'cadetblue';
    case "0.8":
        buttonElement.style.color = 'black';
        return element.style.backgroundColor = 'darkgoldenrod';
    case "0.9":
        buttonElement.style.color = 'white';
        return element.style.backgroundColor = 'darkorchid';
    case "1.0":
        buttonElement.style.color = 'white';
        return element.style.backgroundColor = 'hotpink';
    default:
        return element.style.backgroundColor = 'white';
}
}

randomColor()