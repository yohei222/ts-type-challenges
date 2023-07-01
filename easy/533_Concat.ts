/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #初級 #array

  ### 質問

  JavaScript の`Array.concat`関数を型システムに実装します。この型は 2 つの引数を受け取り、受け取ったイテレータの要素を順に含む新しい配列を返します。

  例えば：

  ```ts
  type Result = Concat<[1], [2]>; // expected to be [1, 2]
  ```

  > GitHubで確認する：https://tsch.js.org/533/ja
*/

/* _____________ ここにコードを記入 _____________ */

type Concat<T extends any[], U extends any[]> = [...T, ...U];
type Result3 = Concat<[1], [2]>; // expected to be [1, 2]

// /* _____________ テストケース _____________ */
// import type { Equal, Expect } from '@type-challenges/utils';

// const tuple = [1] as const;

// type cases = [
//   Expect<Equal<Concat<[], []>, []>>,
//   Expect<Equal<Concat<[], [1]>, [1]>>,
//   Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
//   Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
//   Expect<
//     Equal<
//       Concat<['1', 2, '3'], [false, boolean, '4']>,
//       ['1', 2, '3', false, boolean, '4']
//     >
//   >
// ];

// // @ts-expect-error
// type error = Concat<null, undefined>;

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/533/answer/ja
  > 解答を見る：https://tsch.js.org/533/solutions
  > その他の課題：https://tsch.js.org/ja
*/
