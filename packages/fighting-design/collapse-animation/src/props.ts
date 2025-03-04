import { setBooleanProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const Props = {
  /** 是否展开 */
  opened: setBooleanProp(),
  /** 是否禁用 */
  disabled: setBooleanProp()
} as const

export type CollapseAnimationProps = ExtractPropTypes<typeof Props>
