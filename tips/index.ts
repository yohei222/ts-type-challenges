const currencies = {
  yen: '¥',
  dollar: '$',
}

type Currency = typeof currencies // type Currency = { yen: string; dollar: string; }
type CurrencyKeys = keyof Currency // "yen" | "dollar"

type func = (arg1: string, arg2: number) => number | undefined
type funcParameters = Parameters<func> // [arg1: string, arg2: number]
type funcMyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any
type funcMyParametersResult = funcMyParameters<func> // [arg1: string, arg2: number]
type funcReturn = ReturnType<func> // number | undefined 
type funcMyReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : any
type funcMyReturnResult = funcMyReturnType<func> // number | undefined