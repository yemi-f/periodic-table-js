
const elementBody = document.getElementById('element-body')
const atomicNumberDiv = document.getElementById('atomic-number-div')
const symbolDiv = document.getElementById('symbol-div')
const nameDiv = document.getElementById('name-div')


var request = new XMLHttpRequest()

request.open('GET', 'https://neelpatel05.pythonanywhere.com/', true)

request.onload = function () {
    var data = JSON.parse(this.responseText)
    var atomicNumberOutput = ""
    var symbolOutput = ""
    var nameOutput = ""

    if (request.status >= 200 && request.status < 400) {
        data.forEach(element => {
            console.log(element.atomicNumber, element.name)

            atomicNumberOutput += "<p id='atomic-number'>" + element.atomicNumber + "</p>"
            symbolOutput += "<p id='symbol'>" + element.symbol + "</p>"
            nameOutput += "<p id='name'>" + element.name + "</p>"
        });
    }
    else {
        console.log('error')
    }
    atomicNumberDiv.innerHTML = atomicNumberOutput;
    symbolDiv.innerHTML = symbolOutput;
    nameDiv.innerHTML = nameOutput;
}

request.send()
