// void
export const logMessage = (message: string): void => {
  console.log('Function basic sample 1', message)
}

// never
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ(省略記法)
type LogMessage = (message: string) => void
export const logMessage02: LogMessage = (message) => {
  console.log('Function basic sample 2', message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage03: FullLogMessage = (message) => {
  console.log('Function basic sample 3', message)
}
