'use strict'

{
  // header ナビゲーション　スクロール時の背景色変更(jQuery) contact.html
    jQuery(window).scroll(function() {
      let scrollTop = jQuery(window).scrollTop(); //ブラウザ画面の上部の位置
      let header_navi_Bottom = jQuery(".contact-header-navi").innerHeight();
      let scrollBottom = scrollTop + header_navi_Bottom
      // console.log(scrollBottom);
      let areaTop = jQuery("main").offset().top;
      // console.log(areaTop);
      // let areaBottom = areaTop + jQuery(".bg-color_change").innerHeight();
  
      if (areaTop < scrollBottom) {
        jQuery(".contact-header-navi").addClass("is-active");
        jQuery(".contact-header-navi").addClass("fix-active");
        jQuery(".hamburger-menu").addClass("fix-active");
      } else {
        jQuery(".contact-header-navi").removeClass("is-active");
        jQuery(".contact-header-navi").removeClass("fix-active");
        jQuery(".hamburger-menu").removeClass("fix-active");
      }

      if (jQuery("header nav").hasClass('active')) {
        // jQuery(".hamburger-menu").removeClass("fix-active");
        jQuery(".hamburger-menu").addClass("fix-active");
      }
    });

  
  // ハンバーガーメニューをクリックした時の処理
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navi = document.getElementById("hamburger-navigation");
  const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

  hamburgerMenu.addEventListener("click", function() {
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
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });
}