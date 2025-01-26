// 動画再生制御の汎用関数
function controlVideos(swiper) {
  // すべての動画を停止
  swiper.el.querySelectorAll('video').forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });

  // アクティブスライド内の動画を再生
  const activeSlide = swiper.slides[swiper.activeIndex];
  const videos = activeSlide.querySelectorAll('video');
  videos.forEach((video) => {
    if (video.paused) {
      video.play().catch((error) => {
        console.warn('Video play was interrupted:', error);
      });
    }
  });
}

// 動画が1つのみのスライダー
const singleVideoSlider = new Swiper('.js_singleVideoSlider', {
  loop: true,
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 8,
  autoplay: {
    delay: 8000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

singleVideoSlider.on('slideChange', () => controlVideos(singleVideoSlider));
controlVideos(singleVideoSlider); // 初期表示時の動画再生

// 動画が2つのスライダー
const multipleVideoSlider = new Swiper('.js_multipleVideoSlider', {
  loop: true,
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 8,
  autoplay: {
    delay: 8000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

multipleVideoSlider.on('slideChange', () => controlVideos(multipleVideoSlider));
controlVideos(multipleVideoSlider); // 初期表示時の動画再生
