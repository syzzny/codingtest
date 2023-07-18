import React, { useEffect, useState } from 'react';
import { Title, Wrap, ListItem, List, GoInfo, ButtonWrap, Button } from '../pages/styles/StyleComp'
import { Link } from 'react-router-dom';


export default function Home() {
    // listData : API에서 받아온 데이터 배열을 저장하는 상태
    const [listData, setListData] = useState([]);
    // startRow : API에서 데이터를 가져올 시작 행 번호
    const [startRow, setStartRow] = useState(1);
    // currentPage : 현재 페이지 번호
    const [currentPage, setCurrentPage] = useState(1);

    // API에서 데이터를 가져와서 listData 상태를 업데이트 하는 useEffect
    useEffect(() => {
        fetch(`https://dev.safeean.com:63101/test/post/list?startRow=${startRow}`)
            .then(response => response.json())
            .then(data => {
                setListData(data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [startRow]);

    // startRow 값이 변경되면 currentPage 값을 업데이트
    useEffect(() => {
        setCurrentPage(Math.ceil(startRow / 6));
    }, [startRow]);

    // 이전 데이터 로드 버튼을 클릭할 때 호출되는 함수
    const handleLoadPrevious = () => {
        if (startRow > 1) {
            setStartRow(startRow - 6);
        }
    };

    // 더 많은 데이터 로드 버튼을 클릭할 때 호출되는 함수
    const handleLoadMore = () => {
        setStartRow(startRow + 6);
    };

    // 페이지 번호가 변경될 때 호출되는 함수
    const handlePageChange = (pageNumber) => {
        if (pageNumber !== currentPage) {
            setStartRow((pageNumber - 1) * 6 + 1);
        }
    };

    // 페이지 번호를 생성하는 함수
    const generatePageNumbers = () => {
        // 전체 페이지 수 계산
        const totalPages = Math.ceil(listData.total / 6);
        const pageNumbers = [];

        if (totalPages <= 6) {
            // 전체 페이지 수가 6이하인 경우, 1부터 totalPages까지의 페이지 번호를 생성
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // 전체 페이지 수가 6이상인 경우,
            // 현재 페이지를 기준으로 시작 페이지와 끝 페이지를 계산하여 페이지 번호 생성
            let startPage = currentPage <= 6 ? 1 : (Math.floor((currentPage - 1) / 6) * 6 + 1);
            let endPage = startPage + 5;

            // 시작 페이지와 끝 페이지가 유효한 범위 내에 있는지 확인하고 페이지 번호 생성
            startPage = startPage < 1 ? 1 : startPage;
            endPage = endPage > totalPages ? totalPages : endPage;

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    return (
        <Wrap>
            <Title>Notice List</Title>
            <List>
                {listData.map(item => (
                    <GoInfo to={`/detail/${item.idx}`}>
                        <ListItem key={item.idx}>
                            <p>{item.title}</p>
                            <p>{item.createAt}</p>
                        </ListItem>
                    </GoInfo>
                ))}
            </List>

            <ButtonWrap>
            {/* 이전 데이터 로드 버튼 */}
            <Button onClick={handleLoadPrevious} disabled={startRow <= 1}>
                👈
            </Button>

            {/* 페이지 번호 */}
            {generatePageNumbers().map(pageNumber => (
                <Button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    disabled={pageNumber === currentPage}
                >
                    {pageNumber}
                </Button>
            ))}

            {/* 더 많은 데이터 로드 버튼 */}
            <Button onClick={handleLoadMore}>
                👉
            </Button>
            </ButtonWrap>
        </Wrap>
    );
}
