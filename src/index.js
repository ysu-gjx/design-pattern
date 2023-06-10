const importModule = (path) => import(/* @vite-ignore */ path)

// import './factory'
// import './single-object'

const oWrapper = document.querySelector('#app ul')
const renderDate = [
  {
    text: '工厂模式',
    id: 'factory',
    path: './factory',
  },
  {
    text: '订阅发布模式',
    id: 'onEmit',
    path: './on-emit',
  },
]

const render = () => {
  renderDate.forEach((item) => {
    const oLi = document.createElement('li')
    oLi.textContent = item.text
    oLi.id = item.id
    oWrapper.appendChild(oLi)
  })
}
const bindEvent = () => {
  oWrapper.addEventListener(
    'click',
    (e) => {
      console.log(e.target.id)
      const item = renderDate.find((i) => i.id === e.target.id)
      importModule(item.path)
    },
    false
  )
}
render()
bindEvent()
