import { expect, test } from 'vitest'
import HexletCode from '../index'
import { FUNC_NOOP } from '../utils'
import { formFixtures } from './fixtures'

const template = { name: 'rob', job: 'hexlet', gender: 'm' }

test('test1', () => {
  expect(HexletCode.formFor({}, {}, FUNC_NOOP)).toBe(formFixtures.form1)
})

test('test2', () => {
  expect(HexletCode.formFor({}, { url: '/users' }, FUNC_NOOP)).toBe(formFixtures.form2)
})

test('test3', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name')
    f.input('job', { as: 'textarea' })
  })

  expect(form).toBe(formFixtures.form3)
})

test('test4', () => {
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input' })
    f.input('job')
  })

  expect(form).toBe(formFixtures.form4)
})

test('test5', () => {
  const form = HexletCode.formFor(template, {}, f =>
    f.input('job', { as: 'textarea' }))

  expect(form).toBe(formFixtures.form5)
})

test('test6', () => {
  const form = HexletCode.formFor(template, { url: '#' }, f =>
    f.input('job', { as: 'textarea', rows: 50, cols: 50 }))

  expect(form).toBe(formFixtures.form6)
})

test('test7', () => {
  const formFunction = () => {
    HexletCode.formFor(template, { url: '/users' }, (f) => {
      f.input('name')
      f.input('job', { as: 'textarea' })
      f.input('age')
    })
  }
  expect(formFunction).toThrow(formFixtures.form7)
})

test('test8', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name')
    f.input('job', { as: 'textarea' })
    f.submit()
  })

  expect(form).toBe(formFixtures.form8)
})

test('test9', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name')
    f.input('job', { as: 'textarea' })
    f.submit('Wow')
  })

  expect(form).toBe(formFixtures.form9)
})
