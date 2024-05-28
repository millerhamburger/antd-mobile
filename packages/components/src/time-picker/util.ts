/*
 * @Author: YEYI 361936738@qq.com
 * @Date: 2024-05-27 17:14:39
 * @LastEditors: YEYI 361936738@qq.com
 * @LastEditTime: 2024-05-27 17:15:30
 * @FilePath: /antd-mobile/packages/components/src/time-picker/util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import moment from 'moment'
export const getNow = () => {
  return moment().format('HH:mm:ss').split(':')
}
