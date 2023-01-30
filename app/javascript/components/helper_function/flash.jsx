export default function flash(type,  data) {
    const main = document.querySelector('#container > div')
    main !== null ? main.remove() : ""
    const currentDiv = document.getElementById('container')
    const newDiv = document.createElement('div')
    newDiv.className="alert alert-" + type
    // const delDiv = document.getElementsByClassName("alert alert-notice")
    const newContent = document.createTextNode(data)
    newDiv.appendChild(newContent)
    currentDiv.append(newDiv)
    currentDiv.style.opacity = '1'
    currentDiv.style.height = 'auto'
    setTimeout(() => {
        currentDiv.style.opacity = '0'
        currentDiv.style.height = '0'
    }, 10000);
}