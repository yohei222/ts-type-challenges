// 解答：https://github.com/type-challenges/type-challenges/issues/1080

/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #初級 #promise #built-in

  ### 質問

  Promise ライクな型が内包する型をどのように取得すればよいでしょうか。

  例えば：`Promise<ExampleType>`という型がある場合、どのようにして ExampleType を取得すればよいでしょうか。

  ```ts
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
  ```

  > この問題の元記事は [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora) です。

  > GitHubで確認する：https://tsch.js.org/189/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MyAwaited<T> = T extends Promise<infer U> ? U extends Promise<any> ? Awaited<U> : U : never;

type ExampleType = Promise<string>;
type Result2 = MyAwaited<ExampleType>; // string
