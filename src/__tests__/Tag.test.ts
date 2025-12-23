import { expect, test } from 'vitest'
import Tag from '../components/Tag/Tag'

test('br', () => {
  expect(new Tag('br').toString()).toBe('<br />')
})

test('img', () => {
  expect(new Tag('img', { src: 'path/to/image' }).toString()).toBe('<img src="path/to/image" />')
})

test('input', () => {
  expect(new Tag('input', { type: 'submit', value: 'Save' }).toString()).toBe('<input type="submit" value="Save" />')
})

test('label', () => {
  expect(new Tag('label', {}, 'Email').toString()).toBe('<label>Email</label>')
})

test('label 2', () => {
  expect(new Tag('label', { for: 'email' }, 'Email').toString()).toBe('<label for="email">Email</label>')
})

test('div', () => {
  expect(new Tag('div').toString()).toBe('<div></div>')
})
