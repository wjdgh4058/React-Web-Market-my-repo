import { atom } from 'recoil';

// 상품 선택 체크 버튼 초기화 상태관리

export const productCheckResetState = atom({
  key: 'productCheckResetState',
  default: false,
});
