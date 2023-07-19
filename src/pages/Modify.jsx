import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Wrap, Title, TitleWrap, CreateForm, CreateLabel, Guide ,InputStyle, TestAreaStyle, CreateButton} from '../pages/styles/StyleComp'


export default function Modify() {
    const { idx } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState(
        location.state
    );

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        

        // 수정 처리 로직 작성
        fetch(`https://dev.safeean.com:63101/test/post`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // 수정 완료 후 처리 로직
            console.log(data);
            navigate(-1)
        })
        .catch(error => {
            // 에러 처리 로직
            console.error(error);
        });
        alert('수정이 완료되었습니다');
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
