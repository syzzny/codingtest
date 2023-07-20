import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wrap, Title, TitleWrap, CreateForm, CreateLabel, Guide ,InputStyle, TestAreaStyle, CreateButton} from '../pages/styles/StyleComp'


export default function Modify() {
    // 이전 페이지에서 전달받은 데이터를 사용하기 위해 현재 경로 정보 가져오기
    const location = useLocation();
    const navigate = useNavigate();
    
    // locaton.state를 초기값으로 설정
    const [formData, setFormData] = useState(
        location.state
    );

    // 폼에서 입력한 값이 변경될 때마다 호출되는 이벤트 핸들러
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    // 폼이 제출될때 호출되는 이벤트 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        

        // 수정 처리 로직 작성
        fetch(`https://dev.safeean.com:63101/test/post`, {
            method: 'PUT',
            // JSON 형식의 데이터를 보내고 있다고 알려줌
            headers: {
                'Content-Type': 'application/json'
            },
            // formData 객체를 JSON 문자열로 변환하여 본문으로 포함
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // 수정 완료 후 처리 로직
            console.log(data);
            navigate(-1)
            alert('수정이 완료되었습니다');
        })
        .catch(error => {
            // 에러 처리 로직
            console.error(error);
        });
        
    };

    return (
        <Wrap>
            <TitleWrap>
                <h2>Modify Board</h2>
            </TitleWrap>
            <CreateForm onSubmit={handleSubmit}>
                <CreateLabel>
                    <p style={{margin:'0', fontSize:'18px', fontWeight:'500'}}>Title</p>
                    <InputStyle
                        style={{marginTop:'7px'}}
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </CreateLabel>
                <br />
                <CreateLabel>
                    <p style={{margin:'0', fontSize:'18px', fontWeight:'500'}}>Content</p>
                    <TestAreaStyle
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </CreateLabel>
                <br />
                <CreateButton type="submit">Submit</CreateButton>
            </CreateForm>
        </Wrap>
    );
}
