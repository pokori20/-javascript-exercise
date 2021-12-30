// $(document).ready(function(){ 
//   // HTMLの読み込みが終わってからjQueryが実行されるように記述する↑jquely ↓プログラムの内容
// $('body').html('<h1>Hello jQuery!!</h1>') ;
// });
// // (セレクタ).メソッド(パラメータ); 処理内容を記述する
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height':'100px'
//   });
// });
// 上からスライド
// $(function(){
//   $('.box1').slideDown();
// });
// 下からスライド
// $(function(){
//   $('.box1').slideUp();
// });
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });
$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});