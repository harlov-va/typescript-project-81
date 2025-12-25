import { TOptions, TFormTemplate } from './types'
import Tag from '../Tag/Tag'

export default class Form {
  private template: TFormTemplate
  private templateKeys: Record<string, boolean>
  private options: Record<string, string>

  constructor(template: Record<string, string>, options?: Record<string, string>) {
    this.templateKeys = {}
    this.template = {}
    Object.entries(template).forEach(([key, value]) => {
      this.template[key] = {
        tag: 'input',
        attr: {
          value,
        },
      }
    })
    this.options = options ?? {}
  }

  toString() {
    let content = ''
    Object.entries(this.template).forEach(([key, obj]) => {
      if (this.templateKeys[key]) {
        let temp
        if (obj.tag === 'textarea') {
          const attributes = { ...obj.attr }
          const value = attributes.value
          delete attributes.value
          temp = new Tag(obj.tag, {
            cols: obj.attr.cols ?? 20,
            rows: obj.attr.rows ?? 40,
            name: key,
            ...attributes,
          },
          String(value),
          ).toString()
        }
        else {
          temp = new Tag(obj.tag, {
            name: key,
            type: 'text',
            ...obj.attr,
          }).toString()
        }
        content += temp.toString()
      }
    })
    return new Tag('form', { action: this.options.url ?? '#', method: 'post' }, content).toString()
  }

  public input(name: string, attributes: TOptions = {}) {
    if (!this.template[name]) {
      throw new Error(`Field '${name}' does not exist in the template.`)
    }
    this.templateKeys[name] = true
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'as') {
        this.template[name].tag = String(value)
      }
      else {
        this.template[name].attr[key] = value
      }
    })
  }
}
