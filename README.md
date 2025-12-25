### Hexlet tests and linter status:
[![Actions Status](https://github.com/harlov-va/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/harlov-va/typescript-project-81/actions)
[![QA](https://github.com/harlov-va/typescript-project-81/actions/workflows/qa.yml/badge.svg)](https://github.com/harlov-va/typescript-project-81/actions/workflows/qa.yml)

### Пример использования генератора форм:

```javascript
const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
	f.input('name');
	f.input('job', { as: 'textarea' });
});

console.log(form);

//  <form action="#" method="post">
//      <input name="name" type="text" value="rob">
//      <textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea>
//  </form>
```
