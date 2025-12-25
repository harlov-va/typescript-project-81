export const formFixtures = {
  form1: `<form action="#" method="post"></form>`,
  form2: `<form action="/users" method="post"></form>`,
  form3: `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>`,
  form4: `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">Job</label><input name="job" type="text" value="hexlet"></form>`,
  form5: `<form action="#" method="post"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>`,
  form6: `<form action="#" method="post"><label for="job">Job</label><textarea cols="50" rows="50" name="job">hexlet</textarea></form>`,
  form7: `Field 'age' does not exist in the template.`,
  form8: `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><input name="job" type="text" value="hexlet"><input type="submit" value="Save"></form>`,
  form9: `<form action="#" method="post"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><input name="job" type="text" value="hexlet"><input type="submit" value="Wow"></form>`,
}
