import { atom } from 'recoil';
import { many_product_sort, name_sort, priceSort } from '@/utils';
import { includeSort } from '../utils/product_list/includeSort';

const product = [
  {
    id: 'product-aaa',
    name: '[풀무원] 탱탱쫄면 (4개입)',
    description: '튀기지 않아 부드럽고 매콤한',
    price: '',
    saleRatio: 0,
    salePrice: 4980,
    image: {
      view: 'tangtang.webp',
      banner: 'tangtang.webp',
      info: 'tangtang.webp',
      thumbnail: 'tangtang.webp',
      alt: '풀무원 탱탱쫄면',
    },
    stock: 6,
    limited: true,
    category: '샐러드·간편식',
    bobLionOnly: 'false',
    brand: '풀무원',
    qnas: [],
  },
  {
    id: 'product-bbb',
    name: '[이연복의 목란] 짬뽕 2인분(맵기선택)',
    description: '입맛에 맞게 고르는 인기 메뉴',
    price: '',
    saleRatio: 0,
    salePrice: 13500,
    image: {
      thumbnail: 'champon.webp',
      alt: '짬뽕 2인분(맵기선택)',
    },
    stock: 13,
    limited: true,
    category: '면·양념·오일',
    bobLionOnly: 'true',
    brand: '이연복의 목란',
    qnas: [
      {
        id: 1,
        type: 'public',
        title: '팩이 터져서 왔어요',
        writer: '이현우',
        contents:
          '스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요\n환불 요청합니다.',
        questionDatetime: '20230201',
        answer:
          '안녕하세요. 칼리입니다\n믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다.\n\n더불어, 해당 게시판은 실시간으로 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다.\n다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다\n\n불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다.\n\n칼리 드림.',
        answerDatetime: '20230202',
      },
      {
        id: 2,
        type: 'public',
        title: '짬뽕 2인분(맵기선택) 문의글 2 제목',
        writer: '홍자영',
        contents: '짬뽕 문의글 2 콘텐츠(답변 없음)',
        questionDatetime: '20230202',
      },
      {
        id: 3,
        type: 'notice',
        title: '판매 (일시)중단 제품 안내 (23.02.02 업데이트)',
        writer: '컬리',
        contents:
          '안녕하세요. 컬리입니다.\n\n하기와 같은 사유로 인하여 판매(일시)중단 되었음을 안내드립니다. 감사합니다. 컬리드림',
        questionDatetime: '20230120',
      },
      {
        id: 4,
        type: 'private',
        title: '짬뽕 2인분(맵기선택) 문의글 4 제목',
        writer: '이정호',
        contents: '상품이 언제 배송 되나요?',
        questionDatetime: '20230204',
        answer:
          '안녕하세요. 칼리입니다. 배송과 관련된 문의는 고객센터로 전화주시길 바랍니다.',
        answerDatetime: '20230204',
      },
    ],
  },
  {
    id: 'product-ccc',
    name: '[브룩클린688] 호주산 목초육 치마살 구이용 300g(냉장)',
    description: '100g당 5166원',
    price: 15500,
    saleRatio: 0.15,
    salePrice: 13175,
    image: {
      thumbnail: 'brooklyn688.webp',
      alt: '호주산 목초육 치마살 구이용 300g(냉장)',
    },
    stock: 3,
    limited: false,
    category: '정육·계란',
    bobLionOnly: 'false',
    brand: '브룩클린688',
    qnas: [
      {
        id: 1,
        type: 'public',
        title: '팩이 터져서 왔어요',
        writer: '이현우',
        contents:
          '스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요\n환불 요청합니다.',
        questionDatetime: '20230201',
        answer:
          '안녕하세요. 칼리입니다\n믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다.\n\n더불어, 해당 게시판은 실시간으로 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다.\n다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다\n\n불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다.\n\n칼리 드림.',
        answerDatetime: '20230202',
      },
      {
        id: 2,
        type: 'public',
        title: '호주산 목초육 치마살 구이용 300g 문의글 2 제목',
        writer: '홍자영',
        contents: '호주산 목초육 치마살 구이용 300g 문의글 2 콘텐츠(답변 없음)',
        questionDatetime: '20230202',
      },
      {
        id: 3,
        type: 'notice',
        title: '판매 (일시)중단 제품 안내 (23.02.02 업데이트)',
        writer: '컬리',
        contents:
          '안녕하세요. 컬리입니다.\n\n하기와 같은 사유로 인하여 판매(일시)중단 되었음을 안내드립니다. 감사합니다. 컬리드림',
        questionDatetime: '20230120',
      },
      {
        id: 4,
        type: 'private',
        title: '호주산 목초육 치마살 구이용 300g 문의글 4 제목',
        writer: '이정호',
        contents: '상품이 언제 배송 되나요?',
        questionDatetime: '20230204',
        answer:
          '안녕하세요. 칼리입니다. 배송과 관련된 문의는 고객센터로 전화주시길 바랍니다.',
        answerDatetime: '20230204',
      },
    ],
  },
  {
    id: 'product-ddd',
    name: '유명산지 설향딸기 500g',
    description: '유명산지에서 전하는 제철 딸기',
    price: 11900,
    saleRatio: 0.1,
    salePrice: 10990,
    image: {
      thumbnail: 'strawberry.webp',
      alt: '유명산지 설향딸기 500g',
    },
    stock: 12,
    limited: true,
    category: '과일·견과·쌀',
    bobLionOnly: 'false',
    brand: '유명산지',
  },
  {
    id: 'product-eee',
    name: '[고기반찬] 양념 LA 갈비 800g',
    description: '100g당 가격:4,360원',
    price: 34900,
    saleRatio: 0.15,
    salePrice: 29665,
    image: {
      thumbnail: 'lagalbi.webp',
      alt: '양념 LA 갈비 800g',
    },
    stock: 12,
    limited: true,
    category: '정육·계란',
    bobLionOnly: 'true',
    brand: '고기반찬',
  },
  {
    id: 'product-fff',
    name: '[KF365]한돈 삼겹살 구이용 600g~(냉장)',
    description: '100g당 판매가:2,590원',
    price: '',
    saleRatio: 0,
    salePrice: 15540,
    image: {
      thumbnail: 'handon.webp',
      alt: '한돈 삼겹살 구이용 600g~(냉장)',
    },
    stock: 7,
    limited: false,
    category: '정육·계란',
    bobLionOnly: 'true',
    brand: 'KF365',
  },
  {
    id: 'product-ggg',
    name: '[KF365] 양념 소불고기 1kg(냉장)',
    description: '100g당 가격:1,899원',
    price: 19990,
    saleRatio: 0.05,
    salePrice: 18990,
    image: {
      thumbnail: 'bulgogi.webp',
      alt: '양념 소불고기 1kg(냉장)',
    },
    stock: 10,
    limited: true,
    category: '정육·계란',
    bobLionOnly: 'true',
    brand: "Kalty's",
  },
  {
    id: 'product-hhh',
    name: '[강남면옥] 갈비탕',
    description: '든든하고 푸짐한 한 그릇',
    price: '',
    saleRatio: 0,
    salePrice: 11900,
    image: {
      thumbnail: 'gangnamgalbitang.webp',
      alt: '갈비탕',
    },
    stock: 8,
    limited: false,
    category: '국·반찬·메인요리',
    bobLionOnly: 'true',
    brand: '강남면옥',
  },
  {
    id: 'product-iii',
    name: "[Kurly's] 동물복지 유정란 20구",
    description: '1구 당 판매가:499,5원',
    price: '',
    saleRatio: 0,
    salePrice: 11900,
    image: {
      thumbnail: 'animalegg.webp',
      alt: '동물복지 유정란 20구',
    },
    stock: 12,
    limited: false,
    category: '정육·계란',
    bobLionOnly: 'true',
    brand: "Kalty's",
  },
  {
    id: 'product-jjj',
    name: '[포비베이글] 크림치즈 8종',
    description: '집에서 즐기는 녹진한 그 맛',
    price: 9900,
    saleRatio: 0.1,
    salePrice: 8910,
    image: {
      thumbnail: 'fourbbagel.webp',
      alt: '크림치즈 8종',
    },
    stock: 4,
    limited: true,
    category: '베이커리·치즈·델리',
    bobLionOnly: 'false',
    brand: '포비베이글',
  },
  {
    id: 'product-kkk',
    name: '[스윗밸런스] 오늘의 샐러드 10종(리뉴얼) (택1)',
    description: '다채로운 토핑을 얹은 샐러드',
    price: '',
    saleRatio: 0,
    salePrice: 4900,
    image: {
      thumbnail: 'sweetbalance.webp',
      alt: '오늘의 샐러드 10종(리뉴얼) (택1)',
    },
    stock: 3,
    limited: true,
    category: '샐러드·간편식',
    bobLionOnly: 'true',
    brand: '스윗밸런스',
  },
  {
    id: 'product-lll',
    name: '[그래놀라 하우스] 그래놀라 5종 (택1)',
    description: '도톰하게 뭉쳐 만든 수제 그래놀라',
    price: '',
    saleRatio: 0,
    salePrice: 13500,
    image: {
      thumbnail: 'granolahouse.webp',
      alt: '그래놀라 5종',
    },
    stock: 4,
    limited: false,
    category: '간식·과자·떡',
    bobLionOnly: 'true',
    brand: '그래놀라 하우스',
  },
  {
    id: 'product-mmm',
    name: '[홍대쭈꾸미] 쭈꾸미 볶음 300g(냉동)',
    description: '매콤달콤한 매력의 밥도둑',
    price: 7900,
    saleRatio: 0.13,
    salePrice: 6800,
    image: {
      view: 'jukkumi/jukkumi_view.webp',
      banner: 'jukkumi/jukkumi_banner.webp',
      info: 'jukkumi/jukkumi_info.webp',
      thumbnail: 'jukkumi.jpg',
      alt: '쭈꾸미 볶음 300g(냉동)',
    },
    stock: 5,
    limited: false,
    category: '수산·해산·건어물',
    bobLionOnly: 'true',
    brand: '홍대쭈꾸미',
  },
  {
    id: 'product-nnn',
    name: '[대구 반할만떡] 유부호만두',
    description: '유부로 속을 든든히 채운 군만두',
    price: 6900,
    saleRatio: 0.15,
    salePrice: 5860,
    image: {
      view: 'ubuho/ubuho_view.webp',
      banner: 'ubuho/ubuho_banner.webp',
      info: 'ubuho/ubuho_info.webp',
      thumbnail: 'ubuho.jpg',
      alt: '유부호만두',
    },
    stock: 8,
    limited: false,
    category: '샐러드·간편식',
    bobLionOnly: 'false',
    brand: '대구 반할만떡',
  },
  {
    id: 'product-ooo',
    name: '[사미헌] 갈비탕',
    description: '진짜 갈비로 우려낸 전통 갈비탕',
    price: '',
    saleRatio: 0,
    salePrice: 12000,
    image: {
      thumbnail: 'samihungalbitang.webp',
      alt: '갈비탕',
    },
    stock: 6,
    limited: false,
    category: '국·반찬·메인요리',
    bobLionOnly: 'false',
    brand: '사미헌',
  },
];

// 카테고리 데이터
const category_sort_data = [many_product_sort(product, 'category')];

// 브랜드 - 가나다순 정렬 데이터
const brand_name_sort_data = name_sort(product, 'brand');

// 브랜드 - 상품 많은순 데이터
const brand_product_sort_data = many_product_sort(product, 'brand');

// 브랜드 데이터
const brand_sort_data = [brand_name_sort_data, brand_product_sort_data];

// 가격 데이터
const price_sort_data = [priceSort(product)];

// 혜택 - 할인상품 데이터
const saleProduct_data = includeSort(product, 'saleProduct');

// 혜택 - 한정수량 데이터
const limitstock_data = includeSort(product, 'stock');

// 혜택 데이터
const benefit_data = [saleProduct_data, limitstock_data];

// 유형 - bob-lion Only 데이터
const bobLionOnly_data = includeSort(product, 'bobLionOnly');

// 유형 데이터
const type_data = [bobLionOnly_data];

export const productDataState = atom({
  key: 'productDataState',
  default: product,
});

export const categorySortDataState = atom({
  key: 'categorySortDataState',
  default: category_sort_data,
});
export const brandNameSortDataState = atom({
  key: 'brandNameSortDataState',
  default: brand_name_sort_data,
});
export const brandProductSortDataState = atom({
  key: 'brandProductSortDataState',
  default: brand_product_sort_data,
});
export const brandSortDataState = atom({
  key: 'brandSortDataState',
  default: brand_sort_data,
});
export const priceSortDataState = atom({
  key: 'priceSortDataState',
  default: price_sort_data,
});

export const benefiSortDataState = atom({
  key: 'benefiSortDataState',
  default: benefit_data,
});

export const typeSortDataState = atom({
  key: 'typeSortDataState',
  default: type_data,
});
