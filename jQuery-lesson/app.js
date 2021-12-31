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
// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'})
//   });
// });
// // $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });
// マウスクリックイベントの記入
// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });
$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
});
 $('.box1').mouseout(function(){
  $('.box1').removeClass('box1-ext')
  });
});