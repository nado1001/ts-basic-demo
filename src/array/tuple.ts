export default function tupleSample() {
  // 厳格な配列 = タプル
  const response: [number, string] = [200, 'OK']
  // response = [400, 'Bad Request', 'Email parameter is missing']
  // response = ['400', 'Bad Request']
  console.log('Array tuple sample 1:', response)

  // レストパラメーターを使ったタプル
  const response2: [string, ...string[]] = ['ABC', 'DEF', 'GHI']
  response2.push('JKM')

  console.log('Array tuple sample 2:', response2)
}
