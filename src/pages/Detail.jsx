import React, { useState, useEffect } from 'react'
import { Wrap, Card, DetailTitle, Type, TypeText, Head, ButtonIcon } from '../pages/styles/StyleComp'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Detail() {
    // listData : API에서 받아온 데이터 배열을 저장하는 상태
    const [detailData, setDetailData] = useState([]);
    const { idx } = useParams();
    const navigate = useNavigate();

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

    
    // delete
    const handleDelete = (e) => {
        e.preventDefault();

        fetch(`https://dev.safeean.com:63101/test/post`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idx})
        })
        .then(response => response.json())
        .then(data => {
            // 삭제 완료 후 처리 로직
            console.log('게시물이 삭제되었습니다.');
            // 게시물 삭제 후 원하는 동작 수행
            alert('게시글이 삭제 되었습니다');
            navigate(-1);
        })
        .catch(error => {
            // 에러 처리 로직
            console.error(error);
        });
    };

    return (
        <Wrap style={{ backgroundColor: '#fff' }}>
            <Card>
                <Head>
                    <Type>
                        <TypeText>{detailData.type}</TypeText>
                    </Type>
                    <div>
                        <Link to={'/modify/'+idx} state={detailData}>
                            <ButtonIcon>
                                <img src="../assets/img/edit.png" alt="" />
                            </ButtonIcon>
                        </Link>
                        <ButtonIcon onClick={handleDelete}>
                            <img src="../assets/img/delete.png" alt="" />
                        </ButtonIcon>
                    </div>
                </Head>
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
