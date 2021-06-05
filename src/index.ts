// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// 03.基本の型定義
// import { primitiveSample, notExistSample, unknownSample } from './basic'

// primitiveSample()
// notExistSample()
// unknownSample()

// 04.関数の型定義
import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumPrice } from './function/parameters'
logMessage('Hello TypeScript')
isUserSignedIn('ABC', 'Take')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
const sum = sumPrice(100, 200, 300, 400, 500)
console.log('Function parameters sample 5', sum)
