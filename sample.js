// varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// varによる再代入 let varのみ
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// スコープ(範囲)
// var str = "webcamp" //グローバルスコープ

// function foo(){
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()
// for (let i = 0; i < 10; i++){
//   console.log(i)
// }
// console.log(i)
// var str = "webcamp"
// function foo(){
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo() //出力されるのはdmmwebcampのみ、このようなバグを防ぐためvarは用いない
for (let i = 0; i < 10; i++){
  console.log(i);
}

