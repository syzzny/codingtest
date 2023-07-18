import React, { useState, useEffect } from 'react'
import { Wrap, Card, DetailTitle, Type, TypeText } from '../pages/styles/StyleComp'
import { useParams } from 'react-router-dom';

export default function Detail() {
    // listData : API에서 받아온 데이터 배열을 저장하는 상태
    const [detailData, setDetailData] = useState([]);
    const { idx } = useParams();

    // API에서 데이터를 가져와서 listData 상태를 업데이트 하는 useEffect
    useEffect(() => {
        fetch(`https://dev.safeean.com:63101/test/post/${idx}`)
            .then(response => response.json())
            .then(data => {
                setDetailData(data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [idx]);

    return (
        <Wrap style={{ backgroundColor: '#fff' }}>
            <Card>
                <Type>
                    <TypeText>{detailData.type}</TypeText>
                </Type>
                <DetailTitle>{detailData.title}</DetailTitle>
                {detailData.modifyAt ? (
                    <p>{detailData.modifyAt}</p>
                ) : (
                    <p>{detailData.createAt}</p>
                )}
                <p>{detailData.content}</p>
            </Card>

        </Wrap>
    )
}
