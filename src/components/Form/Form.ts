import { TCallback } from './types'
import Tag from '../Tag/Tag'

export default class Form {
  private template: Record<string, string>
  private options: Record<string, string>
  private callback: TCallback
  constructor(template: Record<string, string>, options?: Record<string, string>, callback?: TCallback) {
    this.template = template
    this.options = options ?? {}
    this.callback = callback ?? (() => '')
  }

  toString() {
    return new Tag('form', { action: this.options.url ?? '#', method: 'post' }).toString()
  }
}
