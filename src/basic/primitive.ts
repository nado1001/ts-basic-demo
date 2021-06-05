export default function primitiveSample(): void {
  const name: string = 'take'
  console.log('primitive sample 1', typeof name, name)

  const age: number = 22
  console.log('primitive sample 2', typeof age, age)

  const isOver20: boolean = age >= 20
  console.log('primitive sample 3', typeof isOver20, isOver20)
}
