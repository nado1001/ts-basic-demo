export default function typeAliasSample() {
  // 型エイリアス（type）
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample 1:', japan)

  // 合併型（union）と交差型（intersection）
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  type Adventurer = Knight | Wizard // 合併型: KnightとWizardどちらかの型を持つ
  // type Paladin = Knight & Wizard // 交差型: KnightとWizardが持つ型を全て持っている

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: 'weapon',
    swordSkill: 'swordSkill',
  }

  console.log('Object alias sample :', adventurer1)
}
