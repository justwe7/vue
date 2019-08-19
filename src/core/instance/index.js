import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)//初始化vue组件上一些如data created methods watch等 触发生命周期钩子函数：beforeCreate created
stateMixin(Vue)//定义$data $props $set $delete $watch
eventsMixin(Vue)//$on $emit $off $once
lifecycleMixin(Vue)//定义更新 _update $forceUpdate $destory  触发生命周期钩子函数： 'beforeDestroy' , 'destroyed' , 'beforeMount' , 'beforeUpdate' , 'mounted', 'activated' , 'deactivated'
renderMixin(Vue)//render函数 slot createElement调用

export default Vue
