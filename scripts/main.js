
const elementBody = document.getElementById('element-body')
const atomicNumberDiv = document.getElementById('atomic-number-div')
const symbolDiv = document.getElementById('symbol-div')
const nameDiv = document.getElementById('name-div')

const knowledgeAtomicNumber = document.getElementById('knowledge-atomic-number')
const knowledgeSymbol = document.getElementById('knowledge-symbol')
const knowledgeName = document.getElementById('knowledge-name')


function updateKnowledgePanel(e) {
    knowledgeAtomicNumber.innerHTML = e.atomicNumber
    knowledgeSymbol.innerHTML = e.symbol
    knowledgeName.innerHTML = e.name
}


var request = new XMLHttpRequest()

request.open('GET', 'https://neelpatel05.pythonanywhere.com/', true)

request.onload = function () {
    var data = JSON.parse(this.responseText)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(element => {
            const pAtomicNumber = document.createElement('p')
            pAtomicNumber.setAttribute('id', 'atomic-number')
            pAtomicNumber.textContent = element.atomicNumber
            atomicNumberDiv.appendChild(pAtomicNumber)
            pAtomicNumber.onclick = function () {
                updateKnowledgePanel(element)
                console.log(element.atomicNumber)
            }

            const pSymbol = document.createElement('p')
            pSymbol.setAttribute('id', 'symbol')
            pSymbol.textContent = element.symbol
            symbolDiv.appendChild(pSymbol)
            pSymbol.onclick = function () {
                updateKnowledgePanel(element)
                console.log(element.symbol)
            }

            const pName = document.createElement('p')
            pName.setAttribute('id', 'name')
            pName.textContent = element.name
            nameDiv.appendChild(pName)
            pName.onclick = function () {
                updateKnowledgePanel(element)
                console.log(element.name)
            }


        });
    }
    else {
        console.log('error')
    }

}

request.send()
