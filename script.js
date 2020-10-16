
// ==
// スムーススクロール
// ==

jQuery(function() {
  jQuery('a[href^="#"]').click(function() { // # クリック処理
    var speed = 700; //スクロール速度ミリ秒
    var href = jQuery(this).attr("href"); // アンカーの値取
    // 移動先を取得
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top; // 移動先を数値で取得
    // スムーススクロール
    jQuery('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});
// var swiper = new Swiper('.swiper-container', {

//   loop: true,
//   speed: 3000,
//       autoplay: {
//       disableOnInteraction: true,
//   },
//           navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: ".swiper-pagination",
//               clickable: true,
//     },
// }
// );
let slider1 = new Swiper ('.slider1', {
   //各種設定
loop: true,
  speed: 3000,
      autoplay: {
      disableOnInteraction: true,
  },
    pagination: {
      el: ".swiper-pagination",
              clickable: true,
    },
});
let slider2 = new Swiper ('.slider2', {
   //各種設定
loop: true,
  speed: 3000,
      autoplay: {
      disableOnInteraction: true,
  },
    pagination: {
      el: ".swiper-pagination-2",
              clickable: true,
    },
});
let slider3 = new Swiper ('.slider3', {
   //各種設定
loop: true,
  speed: 3000,
      autoplay: {
      disableOnInteraction: true,
  },
    pagination: {
      el: ".swiper-pagination-3",
              clickable: true,
    },
});



var swiper = new Swiper('.slider-dinning', {

  loop: true,
  speed: 3000,
      autoplay: {
      disableOnInteraction: true,
  },

    pagination: {
      el: ".swiper-pagination",
              clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 25,
}
);
