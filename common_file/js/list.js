const tourList = [
  {
    code: "jj",
    title: "제주시",
    list: [
      {
        category: "beach",
        placeName: "이호테우해변",
        score: "4.31",
        location: "제주 제주시 이호일동",
        desc: "제주 시내에서 가장 가까운 곳에 있는 해변"
      },
      {
        category: "beach",
        placeName: "함덕 해수욕장",
        score: "4.35",
        location: "제주 제주시 조천읍 조함해안로 525",
        desc: "물이 맑고 수심이 얕아 가족단위 피서지로 알맞으며 국민관광지로 지정되어있다"
      },
      {
        category: "activity",
        placeName: "한라수목원",
        score: "4.45",
        location: "제주 제주시 수목원길 72",
        desc: "제주도 자생식물의 유전자원보존과 관찰을 위한 자연학습장으로 활용하기 위해 개원함"
      },
      {
        category: "food",
        placeName: "카페 우무",
        score: "4.36",
        location: "제주 제주시 한림읍 한림로 542-1",
        desc: "제주 해녀가 채취한 우뭇가사리를 오랜 시간 끓여 만든 제주 푸딩을 판매하는 곳 "
      },
      {
        category: "food",
        placeName: "카페 델문도",
        score: "4.35",
        location: "제주 제주시 조천읍 조함해안로 519-10",
        desc: "제주 함덕에 위치한 로스터리 카페"
      },
      {
        category: "food",
        placeName: "돈향기",
        score: "4.6",
        location: "제주 제주시 관덕로15길 30",
        desc: "청정 흑돼지 거리 안 흑돼지 맛집"
      },
      {
        category: "food",
        placeName: "올댓제주",
        score: "4.26",
        location: "제주 제주시 중앙로1길 33 2층",
        desc: "제주 식재료를 이용한 비스트로 레스토랑"
      },
      {
        category: "tour",
        placeName: "서문시장",
        score: "3.77",
        location: "제주 제주시 용담일동 135-52",
        desc: "제주 서부 중심지에 위치한 60년의 역사를 가진 전통 재래시장"
      },
      {
        category: "tour",
        placeName: "D&DEPARTMENT",
        score: "4.49",
        location: "제주 제주시 탑동로2길 3",
        desc: "호텔, 카페, 전시용품 등이 모여 있으며 제주 포토존으로 유명한 곳"
      },
      {
        category: "tour",
        placeName: "돌하르방미술관",
        score: "4.47",
        location: "제주 제주시 조천읍 북촌서1길 70",
        desc: "가족과 함께 나들이 할 수 있는 숲 속 미술관"
      }
    ]
  },
  {
    code: "sgp",
    title: "서귀포",
    list: [
      {
        category: "beach",
        placeName: "대포항",
        score: "4.72",
        location: "제주특별자치도 서귀포시 대포동",
        desc: "중문의 대표적인 해변가"
      },
      {
        category: "beach",
        placeName: "표선 해수욕장",
        score: "4.4",
        location: "제주특별자치도 서귀포시 표선면 표선리",
        desc: "야영장과 편의시설이 조개껍데기 가루로 형성된 아름다운 백사장의 해수욕장"
      },
      {
        category: "beach",
        placeName: "중문 색달 해수욕장",
        score: "4.2",
        location: "제주 서귀포시 색달동",
        desc: "파도가 높아 써퍼들에게 인기가 많은 해수욕장"
      },
      {
        category: "activity",
        placeName: "한라산둘레길3구간",
        score: "4.13",
        location:
          "제주특별자치도 서귀포시 특별자치도, 가시리 산 158-4 한라산둘레길 숲길센터",
        desc: "서귀포자연휴양림부터 무오법정사항일기념탑"
      },
      {
        category: "activity",
        placeName: "제주 실탄 사격장",
        score: "4.2",
        location: "제주특별자치도 서귀포시 소보리당로164번길 62 중문랜드3층",
        desc: "장난감총이 아닌 실탄 사격 경험해보고 싶다면 추천👍"
      },
      {
        category: "food",
        placeName: "큰솔가흑돼지",
        score: "4.69",
        location: "제주특별자치도 서귀포시 특별자치도, 이어도로 193",
        desc: "중문관광단지 내 위치. 농림축산식품부 제공 안심식당"
      },
      {
        category: "food",
        placeName: "미영이네",
        score: "4.7",
        location: "제주특별자치도 서귀포시 대정읍 하모리 770-29",
        desc: "신선한 고등어회로 명성이 자자한 서귀포 인기맛집!"
      },
      {
        category: "food",
        placeName: "원앤온리",
        score: "4.2",
        location: "제주특별자치도 서귀포시 안덕면 산방로 141",
        desc: "탁트인 황우치해변과 산방산의 풍경이 아름다운 이국적인 오션뷰 카페"
      },
      {
        category: "tour",
        placeName: "중문관광단지",
        score: "3.94",
        location: "제주특별자치도 서귀포시 색달동",
        desc: "제주의 자연경관과 지리적 조건을 활용하여 국제적인 휴양지로 개발된 곳"
      },
      {
        category: "tour",
        placeName: "신화월드",
        score: "4.1",
        location: "제주특별자치도 서귀포시 안덕면 신화역사로 304번길 98",
        desc: "제주도에서 즐기는 다양한 놀이기구와 어트랙션, VR 체험, 퍼레이드"
      }
    ]
  },
  {
    code: "jje",
    title: "제주 동부",
    list: [
      {
        category: "beach",
        placeName: "세화해수욕장",
        score: "4.31",
        location: "제주 제주시 구좌읍 세화해수욕장",
        desc: "코발트 빛깔의 맑은 바다가 아름다운 곳"
      },
      {
        category: "beach",
        placeName: "성산일출봉",
        score: "4.2",
        location: "제주 서귀포시 성산읍 성산리 1",
        desc: "높이 180m. 제주도 동쪽에 돌출한 성산반도 끝머리에 있다."
      },
      {
        category: "activity",
        placeName: "제주레일바이크",
        score: "4.84",
        location: "제주 제주시 구좌읍 용눈이오름로 641",
        desc: "스릴과 힐링! 제주의 대자연을 달리고 체험 할 수 있는 곳"
      },
      {
        category: "activity",
        placeName: "아쿠아플라넷 제주",
        score: "4.5",
        location: "제주 서귀포시 성산읍 섭지코지로 95 아쿠아플라넷 제주",
        desc: "아시아 최대규모 아쿠아리움"
      },
      {
        category: "food",
        placeName: "블루보틀 제주 카페",
        score: "4.53",
        location: "제주 제주시 구좌읍 번영로 2133-30",
        desc: "제주 첫번째 블루보틀 매장"
      },
      {
        category: "food",
        placeName: "해송갈치",
        score: "4.28",
        location: "제주 서귀포시 성산읍 일출로 270-2",
        desc: "저렴하면서도 맛있는 갈치 요리를 즐길 수 있는 곳"
      },
      {
        category: "food",
        placeName: "좀녀와 농부",
        score: "4.7",
        location: "제주특별자치도 서귀포시 성산읍 온평리 1286-4",
        desc: "해녀가 당일에 잡은 신선한 해산물을 먹을 수 있는 곳"
      },
      {
        category: "tour",
        placeName: "비자림",
        score: "4.6",
        location: "제주특별자치도 제주시 구좌읍 비자숲길 55",
        desc: "천연기념물 제 374호로 지정된 휴양림, 산림욕장"
      },
      {
        category: "tour",
        placeName: "섭지코지",
        score: "4.76",
        location: "제주 서귀포시 성산읍 고성리",
        desc: "신양해수욕장에서 2km에 걸쳐 바다를 향해 길게 뻗어 있는 코지(곶)"
      },
      {
        category: "tour",
        placeName: "김녕미로공원",
        score: "4.2",
        location: "제주특별자치도 제주시 구좌읍 만장굴길 122",
        desc: "놀이터, 넓은 녹지 공간, 정교한 토피어리 미로가 있는 녹음이 우거진 공원"
      }
    ]
  },
  {
    code: "jjw",
    title: "제주 서부",
    list: [
      {
        category: "beach",
        placeName: "곽지해수욕장",
        score: "4.39",
        location: "제주 제주시 애월읍 곽지리",
        desc: "시원한 용천수를 뿜어내는 노천탕이 있는 해변"
      },
      {
        category: "beach",
        placeName: "협재 해수욕장",
        score: "4.7",
        location: "제주 제주시 한림읍 협재리 2497-1",
        desc: "비양도가 보이는 풍경이 인상적인 해수욕장"
      },
      {
        category: "beach",
        placeName: "금능 해수욕장",
        score: "4.6",
        location: "제주 제주시 한림읍 금능리",
        desc: "푸른빛의 바다가 인상적인 서부의 유명관광명소"
      },
      {
        category: "activity",
        placeName: "9.81 파크",
        score: "4.46",
        location: "제주 제주시 애월읍 천덕로 880-24",
        desc: "다양한 액티비티와 체험공간이 있는 곳"
      },
      {
        category: "activity",
        placeName: "송악카트체험장",
        score: "3.8",
        location: "제주 서귀포시 대정읍 송악관광로 404",
        desc: "카트 레이싱을 체험할 수 있는 곳"
      },
      {
        category: "food",
        placeName: "회가 서쪽에서 뜨겠네",
        score: "4.65",
        location: "제주 제주시 애월읍 애월로 12 1층",
        desc: "딱새우회 & 고등어회를 맛 볼 수 있는 곳"
      },
      {
        category: "food",
        placeName: "금능낙원",
        score: "4.3",
        location: "제주 제주시 한림읍 금능길 27",
        desc: "제주도 토박이 메뉴 몸국 & 고기국수 찐 맛집"
      },
      {
        category: "food",
        placeName: "몽상드애월",
        score: "4.18",
        location: "제주 제주시 애월읍 애월북서길 56-1",
        desc: "바다가 비치는 외관이 인상적인 GD 카페로 유명한 명소"
      },
      {
        category: "tour",
        placeName: "도치돌알파카목장",
        score: "4.46",
        location: "제주특별자치도 제주시 애월읍 도치돌길 303",
        desc: "알파카와 여러 동물들이 함께 있는 곳"
      },
      {
        category: "tour",
        placeName: "성이시돌 목장",
        score: "4.7",
        location: "제주 제주시 한림읍 산록남로 53",
        desc: "제주도 특유의 분위기가 물씬 느껴지는 목장"
      }
    ]
  }
];
