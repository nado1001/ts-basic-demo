interface Date {
  page: number
  title: string
}

/**
 * 日付インスタンスまたは、日付文字列を
 * 指定したフォーマット文字列に変換して返却
 * ※日付文字列が正しくない場合、空文字返却
 *
 * @param {Object|string} date -日付インスタンス または 日付文字列
 * @param {string} format      -変換したいフォーマット
 * @return {string}
 */

export const formatDate = (format: string = 'yyyy/MM/dd', date: Date = new Date()): string => {
  // invailid date の場合は 空文字設定
  if (!date || Number.isNaN(date.getDate())) {
    return ''
  }
  format = format.replace(/yyyy/g, date.getFullYear().toString())
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2))
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2))
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2))
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3))
  return format
}

/**
/**
  * ページネーション範囲の取得
  * 現在のページから左右に sideWidth 分だけ伸びたページネーション範囲を作成する
  * 現在のページがページネーションの終端に近い場合は反対側にはみ出し分を加算
  * @param {*} currentPage 現在のページ
  * @param {*} totalPage 総ページ数
  * @param {*} sideWidth 左右の長さ
  * @returns
  */
export const getPaginationRange = (currentPage: number, totalPage: number, sideWidth = 3): Array<number> => {
  const renge: Array<number> = []

  if (!totalPage || totalPage <= 0) {
    return renge
  }

  const tempStart = currentPage - sideWidth
  const tempEnd = currentPage + sideWidth

  //ページ終端の超過分を算出
  const minusOver = tempStart < 1 ? 1 - tempStart : 0
  const plusOver = tempEnd > totalPage ? tempEnd - totalPage : 0

  //超過分を反対側に加算し、終端がぶつかる場合は終端に設定
  let start = tempStart - plusOver < 1 ? 1 : tempStart - plusOver
  const end = tempEnd + minusOver > totalPage ? totalPage : tempEnd + minusOver

  for (start; start <= end; start++) {
    renge.push(start)
  }

  return renge
}
/**
 * 3桁カンマ区切り
 * @param {*} num
 * @returns
 */
export const comma = (num: number): string => {
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
