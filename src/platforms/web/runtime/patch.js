/* @flow */
/* justwe 操作原生dom的方法封装 */
import * as nodeOps from 'web/runtime/node-ops'
// E:\justwe\WWW\-github\vue\src\core\vdom\patch.js
import { createPatchFunction } from 'core/vdom/patch'
/* 操作标签的属性 新旧vnode比较 然后进行属性修改 */
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)
/* justwe 继承基本的patch方法创建新的方法 为兼容不同平台 */
export const patch: Function = createPatchFunction({ nodeOps, modules })
