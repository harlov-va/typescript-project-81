import Form from '../Form/Form'
import { TCallback, TTemplate } from '../Form/types'

export default class HexletCode {
  static formFor(template: TTemplate, options?: Record<string, string>, callback?: TCallback<TTemplate>): string {
    const form = new Form(template, options)
    if (callback) callback(form)
    return form.toString()
  }
}
