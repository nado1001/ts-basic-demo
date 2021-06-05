export default function notExistSample() {
  let name = null

  name = 'take'
  console.log('not exist sample 1', typeof name, name)

  if (!name) {
    console.log('not exist sample 2', `名前はまだ${name}`)
  } else {
    console.log('not exist sample 3', `名前は${name}`)
  }

  let age = undefined
  console.log('not exist sample 4', typeof age, age)

  age = 22

  if (!age) {
    console.log('not exist sample 5', `年齢は秘密です`)
  } else {
    console.log('not exist sample 6', `年齢は${age}です`)
  }
}
