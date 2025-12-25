import { expect, test } from 'vitest'
import HexletCode from '../index'
import { FUNC_NOOP } from '../utils'

const template = { name: 'rob', job: 'hexlet', gender: 'm' }

test('test1', () => {
  expect(HexletCode.formFor({}, {}, FUNC_NOOP)).toBe('<form action="#" method="post"></form>')
})

test('test2', () => {
  expect(HexletCode.formFor({}, { url: '/users' }, FUNC_NOOP)).toBe('<form action="/users" method="post"></form>')
})

test('test3', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name')
    f.input('job', { as: 'textarea' })
  })

  expect(form).toBe(`<form action="#" method="post"><input name="name" type="text" value="rob"><textarea cols="20" rows="40" name="job">hexlet</textarea></form>`)
})

test('test4', () => {
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input' })
    f.input('job')
  })

  expect(form).toBe('<form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"><input name="job" type="text" value="hexlet"></form>')
})

test('test5', () => {
  const form = HexletCode.formFor(template, {}, f =>
    f.input('job', { as: 'textarea' }))

  expect(form).toBe(`<form action="#" method="post"><textarea cols="20" rows="40" name="job">hexlet</textarea></form>`)
})

test('test6', () => {
  const form = HexletCode.formFor(template, { url: '#' }, f =>
    f.input('job', { as: 'textarea', rows: 50, cols: 50 }))

  expect(form).toBe(`<form action="#" method="post"><textarea cols="50" rows="50" name="job">hexlet</textarea></form>`)
})

test('test7', () => {
  const formFunction = () => {
    HexletCode.formFor(template, { url: '/users' }, (f) => {
      f.input('name')
      f.input('job', { as: 'textarea' })
      f.input('age')
    })
  }
  expect(formFunction).toThrow('Field \'age\' does not exist in the template.')
})
