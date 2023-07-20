import React, { useEffect, useState } from 'react';
import { Title, Wrap, TitleWrap, ListItem, List, GoInfo, DateInfo, ButtonWrap,ArrowImg, Button, NewPost, ButtonArrow, TitleInfo } from '../pages/styles/StyleComp'
import { Link } from 'react-router-dom';


export default function Home() {
    // API에서 받아온 데이터 배열을 저장하는 상태변수
    const [listData, setListData] = useState([]);

    // API에서 데이터를 가져올 시작 행 번호
    const [startRow, setStartRow] = useState(1);

    // currentPage : 현재 페이지 번호 저장
    const [currentPage, setCurrentPage] = useState();

    // 전체 페이지수
    const [totalPages, setTotalPages] = useState(1);


    // 페이지네이션 버튼 클릭 여부
    const [isSelected, setIsSelected] = useState(false);

    // isSelected 값을 토글하는 함수로 버튼을 클릭할때마다 isSelected 상태가 반전
    const handleClick = () => {
        setIsSelected(!isSelected);
    }

    // API에서 데이터를 가져와서 listData 상태를 업데이트 하는 useEffect
    /**
     * useEffect 훅을 사용하여 API에서 데이터를 가져오는 부분
     * fetch를 사용해서 지정된 url에서 데이터를 가져오고 'response.json()을 호출하여 응답 데이터를 JSON 형식으로 파싱
     * 파싱한 데이터를 setListData를 이용하여 'listData' 상태 변수에 저장
     * startRow 값이 변경될 때마다 새로운 데이터가 가져와짐
     */
    /**
     * url로 GET 요청
     * startRow : 변수 값에 따라 동적으로 변경되는 쿼리 파라미터
     */
    useEffect(() => {
        fetch(`https://dev.safeean.com:63101/test/post/list?startRow=${startRow}`) // 비동기 네트워크 요청
            .then(response => response.json()) // JSON 형식으로 파싱
            // 파싱된 데이터를 다루는 로직
            // 파싱된 데이터를 data 변수에 저장.
            // 리렌더링 될때 listData의 값이 변경되고 변경된 데이터를 화면에 갱신
            //fetch 메서드가 Promise를 반환하므로, .then() 메서드를 사용하여 비동기적으로 응답 데이터를 처리
            .then(data => {
                setListData(data.data); 
                setTotalPages(Math.ceil(data.total / 6));
            })
            .catch(error => {
                console.error(error);
            });
    }, [startRow]);


    // startRow 값이 변경되면 currentPage 값을 업데이트
    /**
     * startRow 값이 변경될 때마다 현재 페이지 번호를 계산하는 부분
     * Math.ceil(startRow/6)를 사용하여 'startRow' 값을 6으로 나눈 뒤 올림을 수행하여
     * 현재 페이지 번호를 계산하고, 이를 setCurrentPage를 이용하여 currentPage 상태변수에 저장
     */
    useEffect(() => {
        setCurrentPage(Math.ceil(startRow / 6));
    }, [startRow]);


    /**
     * 함수 : 이전 데이터 로드 버튼을 클릭할 때 호출되는 함수
     * startRow : 값이 1보다 큰 경우에만 startRow 값을 6 감소
     */
    const handleLoadPrevious = () => {
        if (startRow > 1) {
            setStartRow(startRow - 6);
        }
    };


    /**
     *  함수 : 더 많은 데이터 로드 버튼을 클릭할 때 호출되는 함수
     *  startRow 값을 6 증가시킴
     */
    const handleLoadMore = () => {
        setStartRow(startRow + 6);
    };


    /**
     * 함수: 페이지 번호를 클릭할 때 호출되는 함수
     * pageNumber: 변경하려는 페이지 번호
     * pageNumber 와 currentPage(현재 페이지)가 다른 경우에만, 해당 페이지 번호에 해당되는 'startRow'
     * 값을 계산하여 'setStartRow' 를 이용하여 업데이트
     */
    const handlePageChange = (pageNumber) => {
        if (pageNumber !== currentPage) {
            setStartRow((pageNumber - 1) * 6 + 1);
        }
    };

    const generatePageNumbers = () => {
        // 페이지 번호를 담을 빈 배열을 생성
        const pageNumbers = [];
    
        // 보이는 페이지 6개로 지정
        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // 현재 페이지 번호를 기준으로 가장 작은 페이지 번호
            let startPage = currentPage <= 6 ? 1 : (Math.floor((currentPage - 1) / 6) * 6 + 1);
            // 시작페이지를 기준으로 끝 페이지 계산
            let endPage = startPage + 5;
    
            // endPage 값을 total 페이지 수를 넘지 않도록 제한(가장 작은 값을 반환)
            endPage = Math.min(endPage, totalPages);
    
            // startPage 부터 endPage까지의 숫자를 순회하며 페이지 번호를 pageNumbers 배열에 추가
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
        }
    
        // 페이지번호 배열 반환
        return pageNumbers;
    };
    

    return (
        <Wrap>
            <TitleWrap>
                <Title>Notice List</Title>
                <Link to={'/create'}>
                    <NewPost>+ New Post</NewPost>
                </Link>
            </TitleWrap>
            <List>
                {listData.map(item => (
                    <GoInfo to={`/detail/${item.idx}`}>
                        <ListItem key={item.idx}>
                            <TitleInfo>{item.title}</TitleInfo>
                            <DateInfo>
                                {item.modifyAt ? (
                                    <p>{item.modifyAt}</p>
                                ) : (
                                    <p>{item.createAt}</p>
                                )}
                            </DateInfo>
                        </ListItem>
                    </GoInfo>
                ))}
            </List>

            <ButtonWrap>
                {/* 이전 데이터 로드 버튼 */}
                <ButtonArrow onClick={handleLoadPrevious} disabled={startRow <= 1}>
                    <ArrowImg src="../assets/img/prev.png" alt="" />
                </ButtonArrow>

                {/* 페이지 번호 */}
                {generatePageNumbers().map(pageNumber => (
                    <Button
                        isSelected={isSelected}
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        disabled={pageNumber === currentPage}
                    >
                        {pageNumber}
                    </Button>
                ))}

                {/* 더 많은 데이터 로드 버튼 */}
                <ButtonArrow onClick={handleLoadMore}>
                    <ArrowImg src="../assets/img/next.png" alt="" />
                </ButtonArrow>
            </ButtonWrap>
        </Wrap>
    );
}
