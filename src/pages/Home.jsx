import React, { useEffect, useState } from 'react';

export default function Home() {
    const [listData, setListData] = useState([]);
    const [startRow, setStartRow] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

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

    useEffect(() => {
        setCurrentPage(Math.ceil(startRow / 6));
    }, [startRow]);

    const handleLoadPrevious = () => {
        if (startRow > 1) {
            setStartRow(startRow - 6);
        }
    };

    const handleLoadMore = () => {
        setStartRow(startRow + 6);
    };

    const handlePageChange = (pageNumber) => {
        if (pageNumber !== currentPage) {
            setStartRow((pageNumber - 1) * 6 + 1);
        }
    };

    const generatePageNumbers = () => {
        const totalPages = Math.ceil(listData.total / 6);
        const pageNumbers = [];

        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let startPage = currentPage - 2;
            let endPage = currentPage + 3;

            if (startPage < 1) {
                startPage = 1;
                endPage = 6;
            } else if (endPage > totalPages) {
                startPage = totalPages - 5;
                endPage = totalPages;
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    return (
        <div>
            <p>Notice List</p>
            <ul>
                {listData.map(item => (
                    <li key={item.idx}>{item.title}</li>
                ))}
            </ul>

            <button onClick={handleLoadPrevious} disabled={startRow <= 1}>
                👈
            </button>
            {generatePageNumbers().map(pageNumber => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    disabled={pageNumber === currentPage}
                >
                    {pageNumber}
                </button>
            ))}
            <button onClick={handleLoadMore}>
                👉
            </button>
        </div>
    );
}
