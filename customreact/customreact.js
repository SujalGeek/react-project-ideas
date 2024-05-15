function customrender(reactelement, maincontain){

  // const dommap = document.createElement(reactelement.type)
  // dommap.innerHTML = reactelement.children
  // dommap.setAttribute('href', reactelement.props.href)
  // dommap.setAttribute('target', reactelement.props.target)
  // maincontain.appendChild(dommap)
  const dommapele = document.createElement(reactelement.type)
  dommapele.innerHTML = reactelement.children
  for (const prop in reactelement.props) {
  if(prop === 'children') continue;
  dommapele.setAttribute(prop,reactelement.props[prop])
  }
  maincontain.appendChild(dommapele)
}

const reactelement = {
  type : 'a',
  props : {
    href : 'https://google.com',
    target : '_blank'
  },
  children : 'Click me to visit google'
}


const maincontain = document.querySelector('#root');

customrender(reactelement , maincontain)
