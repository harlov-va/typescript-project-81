type TParams = Record<string, string>

export default class Tag {
  private singleTags: string[] = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'source',
    'track',
    'wbr',
  ]

  private name: string
  private params: TParams
  private content: string
  private attributes: string
  private isSingleTag: boolean
  constructor(name: string, params?: TParams, content?: string) {
    this.name = name
    this.params = params ?? {}
    this.content = content ?? ''
    this.isSingleTag = this.singleTags.includes(name)
    if (Object.keys(this.params).length > 0) {
      this.attributes = ' ' + Object.entries(this.params)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')
    }
    else {
      this.attributes = ''
    }
  }

  public toString() {
    return this.isSingleTag
      ? `<${this.name}${this.attributes} />`
      : `<${this.name}${this.attributes}>${this.content}</${this.name}>`
  }
}
