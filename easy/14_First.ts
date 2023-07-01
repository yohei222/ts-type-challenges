/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #初級 #array

  ### 質問

  配列`T`を受け取り、その最初のプロパティの型を返す`First<T>`を実装します。

  例えば：

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > GitHubで確認する：https://tsch.js.org/14/ja
*/

/* _____________ ここにコードを記入 _____________ */

type First<T extends any[]> = T extends [] ? never : T[0];
type First2<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];
type arr3 = [];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>;

type head11 = First2<arr1>; // expected to be 'a'
type head22 = First2<arr2>; // expected to be 3
type head33 = First2<arr3>;
