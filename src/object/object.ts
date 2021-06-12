export default function objectSample() {
  // const a: object = {
  //   name: 'take',
  //   age: 22
  // }
  // a.name // aというオブジェクトにはnameというプロパティがないとエラーになる
  // console.log("Object object sample 2:", a);

  // オブジェクトリテラル記法
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 2:', country)

  // 同じ構造のオブジェクトであれば再代入できる
  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 3:', country)

  // オプショナルなプロパティと読み取り専用のプロパティ（readonly）
  const take: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 22,
    lastName: 'Takeda',
    firstName: 'Kyosuke',
  }
  take.lastName = 'Ichijo'
  // take.firstName = 'Kei' // firstNameプロパティはreadonlyなので再代入不可

  console.log('Object object sample 4:', take)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
