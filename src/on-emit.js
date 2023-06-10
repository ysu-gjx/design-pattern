/**
 * 发布-订阅模式流程如下：

「订阅者」将自己想订阅的事件「注册」到「调度中心」；
当「发布者发布该事件」到调度中心时，调度中心执行订阅者注册的事件。
 */
export default function mitt(all) {
  //使用Map存储注册的事件
  all = all || new Map()

  return {
    all,
    on(type, handler) {
      const handlers = all?.get(type)
      if (handlers) {
        handlers.push(handler)
      } else {
        all?.set(type, [handler])
      }
    },

    off(type, handler) {
      const handlers = all?.get(type)
      if (handlers) {
        if (handler) {
          const index = handlers.indexOf(handler)
          handlers.splice(index > -1 ? index : 0, 1)
        } else {
          all?.set(type, [])
        }
      }
    },

    emit(type, evt) {
      let handlers = all?.get(type)
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(evt)
        })
      }
      //判断是否存在"*" 订阅的事件，"*"注册的事件进行兜底
      handlers = all?.get('*')
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(type, evt)
        })
      }
    },
  }
}

const eventEmitter = mitt()
const handler = () => {
  console.log('订阅click')
}
const handler2 = () => {
  console.log('订阅click 2')
}
eventEmitter.on('click', handler)
eventEmitter.on('click', handler2)

eventEmitter.emit('click', handler)
