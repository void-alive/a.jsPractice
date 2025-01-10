// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
$(document).ready(function () {
  $(".switch-btn").on("click", function () {
    $(this).toggleClass("slide");

    // get(key)
    // key : map 에서 반환받을 요소의 키
    // video-container 클래스의 0번째를 video에 넣음
    const video = $(".video-container").get(0);

    // video.paused : 동영상이 현재 멈춘 상태인지 확인
    //   true, false 값 반환
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});