window.onload = () => {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true, //可选选项，自动滑动
        touchRatio : 0.5,//触摸变慢
        pagination: {
            el: '.swiper-pagination',
          },
          clickable :true,
          loop : true,
    })
}