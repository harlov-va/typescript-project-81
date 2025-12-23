import { expect, test } from 'vitest'
import HexletCode from '../index'
import { FUNC_NOOP } from '../utils'

const template = { name: 'rob', job: 'hexlet', gender: 'm' }

test('br', () => {
  expect(HexletCode.formFor(template, {}, FUNC_NOOP)).toBe('<form action="#" method="post"></form>')
})

test('img', () => {
  expect(HexletCode.formFor(template, { url: '/users' }, FUNC_NOOP)).toBe('<form action="/users" method="post"></form>')
})
