const create_element = (htmlTag) => document.createElement(htmlTag)

const div = create_element('div')
const h1 = create_element('h1')

div.classList.add('container')
h1.innerText = 'welcome to my dockerized static website'
div.appendChild(h1)

document.body.prepend(div)
