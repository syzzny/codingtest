import React,{useState} from 'react'
import { Wrap, Title, TitleWrap, CreateForm, CreateLabel, Guide ,InputStyle, TestAreaStyle, CreateButton} from '../pages/styles/StyleComp'
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://dev.safeean.com:63101/test/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // 게시판 생성 후 처리 로직
            console.log(data);
        })
        .catch(error => {
            // 에러 처리 로직
            console.error(error);
        });

        // 폼 초기화
        setFormData({
            title: '',
            content: ''
        });
    };

    return (
        <Wrap>
            <TitleWrap>
                <Title>New Post</Title>
            </TitleWrap>
            <CreateForm onSubmit={handleSubmit}>
                <CreateLabel>
                    <p style={{margin:'0', fontSize:'18px', fontWeight:'500'}}>Title</p>
                    <Guide>50자 이내로 작성해주세요</Guide>
                    <InputStyle
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
