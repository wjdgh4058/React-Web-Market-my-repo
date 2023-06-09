import arrow from '@/../public/ProductListImage/Arrow.svg';
import { AccordionList } from './AccordionList';
// import { BrandNameSort } from './BrandNameSort';
import styles from './ProductListNav.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import { BrandSortBtn } from './BrandSortBtn';
import { NavDetailModal } from './NavDetailModal';
import { useSetRecoilState } from 'recoil';
import { modalVisibleState } from '@/@atom/accordion/modalVisibleState';
// 아코디언 목록 한 세트
export function AccordionSet({ data, listName, selectData, setSelectData }) {
  const [sortData, setSortData] = useState(data[0]);
  const [opacityToggle, setOpacityToggle] = useState(false);

  const accordionList = useRef();
  const arrowReverse = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const setModalVisibleCtrlState = useSetRecoilState(modalVisibleState);

  // 상품 갯수가 n개 이상이면 더보기 버튼 생성
  const more = sortData.length >= 8;

  useEffect(() => {
    if (opacityToggle) {
      accordionList.current.style.opacity = '0';
      accordionList.current.style.maxHeight = '0px';
      arrowReverse.current.style.transform = 'rotate(0deg)';
    } else {
      accordionList.current.style.opacity = '1';
      accordionList.current.style.maxHeight = '100vh';
      arrowReverse.current.style.transform = 'rotate(-180deg)';
      arrowReverse.current.style.transition =
        'all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s';
    }
  });

  const handleAccordionList = () => {
    if (opacityToggle) {
      accordionList.current.style.opacity = '0';
      accordionList.current.style.maxHeight = '0px';
      arrowReverse.current.style.transform = 'rotate(0deg)';
    } else {
      accordionList.current.style.opacity = '1';
      accordionList.current.style.maxHeight = '100vh';
      arrowReverse.current.style.transform = 'rotate(-180deg)';
      arrowReverse.current.style.transition =
        'all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s';
    }
    setOpacityToggle(!opacityToggle);
  };

  const renderData = useMemo(() => {
    const renderAllData = [];
    sortData.map((item) => {
      renderAllData.push(
        <AccordionList
          key={item[0]}
          count={item[1]}
          listName={listName}
          name={item[0]}
          selectData={selectData}
          setSelectData={setSelectData}
        />
      );
    });
    return renderAllData;
  }, [selectData, sortData]);

  const renderModalData = useMemo(() => {
    const renderModalAllData = [];
    sortData.map((item) => {
      renderModalAllData.push(
        <AccordionList
          key={item[0]}
          count={item[1]}
          listName={listName}
          modalStyle={styles.moreModalListItem}
          name={item[0]}
          selectData={selectData}
          setSelectData={setSelectData}
        />
      );
    });
    return renderModalAllData;
  }, [selectData, sortData]);

  const handleModalVisible = () => {
    setModalVisible(true);
    setModalVisibleCtrlState(true);
  };

  return (
    <div className={styles.accordionSet}>
      <button
        className={styles.accordionSetButton}
        type="button"
        onClick={handleAccordionList}
      >
        <span className={styles.accordionSetButtonText}>{listName}</span>
        <span>
          <img
            ref={arrowReverse}
            alt="해당 아코디언 목록 펼치고 닫는 화살표"
            src={arrow}
          />
        </span>
      </button>
      <ul ref={accordionList} className={styles.accordionSetBody}>
        {listName === '브랜드' ? (
          <div className={styles.accordionSetBodySort}>
            {/* <BrandNameSort className={styles.accordionSetBodySortName}  ref={nameSortBtn} onClick={handleChangeData('name')}>가나다순</BrandNameSort> */}
            <BrandSortBtn data={data} setSortData={setSortData} />
          </div>
        ) : null}
        {/* 아코디언 리스트 동적으로 생성 */}
        {renderData.slice(0, 10)}
        {/* 리스트 아이템의 수가 10개 이상일때 more 값이 true 로 받아질때만 생성 */}
        {more ? (
          <>
            <button
              className={styles.accordionSetMore}
              type="button"
              onClick={handleModalVisible}
            >
              <span>{listName} 더보기</span>
              <img
                alt="해당 리스트 더보기 화살표 버튼"
                className={styles.accordionSetMoreImg}
                src={arrow}
              />
            </button>
            {modalVisible ? (
              <NavDetailModal
                data={data}
                listName={listName}
                renderData={renderModalData}
                setModalVisible={setModalVisible}
                setSortData={setSortData}
              />
            ) : null}
          </>
        ) : null}
      </ul>
    </div>
  );
}
