//using selectors inside the element
// traversing the dom

// 제이쿼리 closest()
// - 현재 요소로 시작
// - 제공된 선택기와 일치하는 항목을 찾을 때 까지 dom 트리를 따라 이동
// - 변환된 jquery 객체에 문서 순서대로 각 요소에 대해 0개 / 1개의 요소 포함
// 현재 요소를 기준으로 제공된 항목을 찾을 때 까지 이동함. 한개만 반환함

// 제이쿼리 parents()
// - 부모 요소로 시작
// - dom 트리를 따라 문서의 루트 요소까지 이동하면서 
//   각 상위 요소를 임시 컬렉션에 추가한 다음
//   제공된 선택기를 기준으로 해당 컬렉션 필터링
// - 변환된 jquery 객체에 원래 세트의 각 요소에 대해 0개 이상의 요소 포함
// 부모 요소를 기준으로 제공된 항목을 찾을 때까지 이동함
// 두 개 이상의 요소를 반환함

$(document).ready(function () {
  $(".question-btn").on("click", function (e) {
    $(this).closest(".question-text").toggleClass("show-text");
  });
});
