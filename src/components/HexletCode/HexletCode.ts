import Form from '../Form/Form'
import { TCallback } from '../Form/types'

export default class HexletCode {
  static formFor(template: Record<string, string>, options?: Record<string, string>, callback?: TCallback): string {
    if (callback) callback()
    return new Form(template, options).toString()
  }
}
