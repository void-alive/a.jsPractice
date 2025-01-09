const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// jQuery로 DOM이 로드되었을 때 실행
$(document).ready(function () {
  // 변수 앞의 $ : 제이쿼리임을 의미
  const $sectionCenter = $(".section-center");
  const $filterBtns = $(".filter-btn");

  // 페이지 로드 시 전체 메뉴 표시
  displayMenuItems(menu);

  // 필터 버튼 클릭 이벤트 처리
  $filterBtns.on("click", function () {
    // category 변수에 선택한 버튼의 데이터 id를 가져옴
    const category = $(this).data("id");

    // category가 all이라면 모든 메뉴를 보여줌
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      // category가 all이 아니라면 현재 category를 menuItem.category에 넣음
      // 이후 그에 맞는 값 출력
      const menuCategory = menu.filter(function (menuItem) {
        return menuItem.category === category;
      });
      displayMenuItems(menuCategory);
    }
  });

  // 메뉴를 화면에 표시하는 함수
  function displayMenuItems(menuItems) {
    const displayMenu = menuItems
    // .map() : callback 함수를 각각의 요소에 대해 한번씩 불러 
    //   그 함수의 반환값으로 새로운 배열을 만듦
    //   [img, title, price, desc]의 배열 생성
    // callback 함수 : 값이 삭제되거나 값이 할당/ 정의되지 않은 인덱스는 호출 x
      .map(function (item) {
        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
      })
      // .get() : map 객체에서 특정 요소 반환
      //   주어진 키와 관련된 값이 객체라면 객체에 대한 참조만 가져오고
      //   객체에 대한 모든 변경은 map 안에서 수정
      // 키:값이 있을 때 키를 입력하면 값을 반환함 
      // .join() : 배열의 모든 요소를 구분 문자열로 구분해서 연결한 새 문자열 반환
      //   배열에 항목이 하나만 있는 경우 구분 기호 사용 x
      //   요소가 undefined 거나 null 이면 빈 문자열로 변환
      .join("");

      // sectionCenter의 html 값을 displayMenu로 바꿈
    $sectionCenter.html(displayMenu);
  }
});
