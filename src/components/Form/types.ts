export type TTemplate = Record<string, string>

export type TOptions = Record<string, string | number | boolean>

export interface TFun<T> {
  input(key: keyof T, options?: TOptions): void
}

export type TCallback<T> = (f: TFun<T>) => void

export type TFormTemplate = Record<string, {
  tag: string
  attr: TOptions
}>
