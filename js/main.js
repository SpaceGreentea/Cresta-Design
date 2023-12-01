'use strict'

{
  // header スライダー(swiper カルーセル)
  // const swiper = new Swiper(".swiper", {
  //   // loop: true,
  //   // autoplay: true,
  //   // effect: "slide",
  //   // speed: 500,

  //   observer: true,
  //   observerParents: true,
  //   loop: true,
  //   // autoplay: {
  //   //   enabled: false,
  //   // },
  //   // autoplay: false,
  //   // allowSlideNext: false,
  //   // allowSlidePrev: false,
  //   // allowTouchMove: false,
  //   // enabled: false,
  //   speed: 800,

  //   breakpoints: {
  //     768: {
  //       observer: true,
  //       observerParents: true,
  //       // enabled: true,
  //       // loop: true,
  //       autoplay: {
  //         enabled: true,
  //         delay: 5000,
  //       }
  //       // effect: "slide",
  //       // speed: 500,

  //       // allowSlideNext: true,
  //       // allowSlidePrev: true,
  //       // allowTouchMove: true,

  //       // on: {
  //       //   resize: function() {
  //       //     swiper.autoplay.start();
  //       //   }
  //       // }
  //     }
  //   }
  // });

  const swiperSlides = document.getElementsByClassName("swiper-slide");
  const breakPoint = 767; // ブレークポイントを設定
  let swiper;
  let swiperBool;

  window.addEventListener(
    "load",
    () => {
      if (breakPoint > window.innerWidth) {
        swiperBool = false;
      } else {
        createSwiper();
        swiperBool = true;
      }
    },
    false
  );

  window.addEventListener(
    "resize",
    () => {
      if (breakPoint > window.innerWidth && swiperBool) {
        swiper.destroy(false, true);
        swiperBool = false;
      } else if (breakPoint <= window.innerWidth && !swiperBool) {
        createSwiper();
        swiperBool = true;
      }
    },
    false
  );

  const createSwiper = () => {
    swiper = new Swiper(".swiper", {
      loop: true, // ループさせる
      speed: 1500, // 少しゆっくり(デフォルトは300)
      autoplay: {
        // 自動再生
        delay: 1000, // 1秒後に次のスライド
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
      },
      // // ページネーション
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true, // クリック可能にする
      // },
      // // 前後の矢印
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });
  };





  // header スライダー（swiper カルーセル）　※PC版は起動する、SP版は停止する。
  // let haba = window.outerWidth;

  //（参考） https://white-space.work/swiper-switching-display-on-responsive/
  //   $(function() {  
  //     let swiper; 
  //     //swiper 768以上で起動
  //     $(window).on('load resize', function(){
  //         let w = $(window).width();
  //         if (w >= 768) {
  //             if (swiper) {
  //                 return;
  //             } else {
  //                 swiper = new Swiper('.swiper', {
  //                   loop: true,
  //                     autoplay: true,
  //                     effect: "slide",
  //                     speed: 500,
  //                 });
  //             }
  //         } else {
  //             if (swiper) {
  //                 swiper.destroy();
  //                 swiper = undefined;
  //             } 
  //         } 
  //     });
  // }); 






  // header ナビゲーション　スクロール時の背景色変更
  // const header_navi = document.getElementById("header-navi");

  // window.addEventListener("scroll", function() {
  //   let scroll = window.scrollY;

  //   if(scroll > 752) {
  //     header_navi.style.backgroundColor = '#282F35';
  //   } else if(scroll < 752) {
  //     header_navi.style.backgroundColor = 'transparent';
  //   }
  // });


  //header ナビゲーション Intersection observerを使えばできるかもしれないがよくわからない 
  // const target = document.querySelectorAll('.header-navi')
  // const targetArray = Array.prototype.slice.call(target);

  // const options = {
  //   root: document.querySelectorAll('.test'),
  //   rootMargin: '0px 0px',
  //   threshold: .6
  // };

  // const observer = new IntersectionObserver(callback, options)
  // targetArray.forEach((targets) => {
  //   observer.observe(targets)
  // });

  // function callback(active) {
  //   active.forEach(function (entry, i) {
  //     const target = entry.target;
  //     if (entry.isIntersecting && !target.classList.contains('is-active')) {
  //       const delay = i * 100
  //       setTimeout(function () {
  //         target.classList.add('is-active');
  //       }, delay);
  //       observer.unobserve(target);
  //     }
  //   });
  // };


  // header ナビゲーション　スクロール時の背景色変更(jQuery)
  jQuery(window).scroll(function () {
    let scrollTop = jQuery(window).scrollTop(); //ブラウザ画面の上部の位置
    let header_navi_Bottom = jQuery(".header-navi").innerHeight();
    let scrollBottom = scrollTop + header_navi_Bottom
    // console.log(scrollBottom);
    let areaTop = jQuery(".concept-area").offset().top;
    // console.log(areaTop);
    // let areaBottom = areaTop + jQuery(".bg-color_change").innerHeight();

    if (areaTop < scrollBottom) {
      jQuery(".header-navi").addClass("is-active");
      jQuery(".header-navi").addClass("fix-active");// header ナビゲーション トップ画像では固定。以降はスクロールすると追従。
      jQuery(".hamburger-menu").addClass("fix-active");
    } else {
      jQuery(".header-navi").removeClass("is-active");
      jQuery(".header-navi").removeClass("fix-active");// header ナビゲーション トップ画像では固定。以降はスクロールすると追従。
      jQuery(".hamburger-menu").removeClass("fix-active");
    }

    if (jQuery("header nav").hasClass('active')) {
      // jQuery(".hamburger-menu").removeClass("fix-active");
      jQuery(".hamburger-menu").addClass("fix-active");
    }
    // else {
    //   jQuery(".hamburger-menu").addClass("fix-active");
    // }
  });


  // ハンバーガーメニューをクリックした時の処理
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navi = document.getElementById("hamburger-navigation");
  const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
  });

  // ナビゲーションメニューのページ内リンクをクリックしたとき
  hamburgerMenuSections.forEach((hamburgerMenuSection) => {
    hamburgerMenuSection.addEventListener("click", function () {
      hamburgerMenu.classList.toggle("active");
      navi.classList.toggle("active");
    });
  });


  // ナビゲーションメニュー　ページ内リンク(Javascriptのみ)
  $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var adjust = 0; //ヘッダーの高さを調整
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top + adjust;	//idの上部の距離を取得
    $('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });

}