import { setStringNumberProp, setFunctionProp, setObjectProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { FormSubmit, FormInject } from './interface'

export const Props = {
  /** 每个 label 的宽度 */
  labelWidth: setStringNumberProp(),
  /** 表单数据对象 */
  model: setObjectProp(),
  /**  提交表单触发的回调 */
  onSubmit: setFunctionProp<FormSubmit>()
} as const

export type FormProps = ExtractPropTypes<typeof Props>

export const FORM_PROVIDE_KEY: InjectionKey<FormInject> = Symbol('form-provide-key')
