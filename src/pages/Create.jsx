import React,{useState} from 'react'
import { Wrap, Title, TitleWrap, CreateForm, CreateLabel, Guide ,InputStyle, TestAreaStyle, CreateButton} from '../pages/styles/StyleComp'
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate();

    // 입력할 제목과 내용을 담을 상태변수
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    // 폼에서 입력한 값이 변경될 때마다 호출되는 이벤트 핸들러
    const handleChange = (e) => {
        setFormData({
            ...formData,
            // user가 입력한 값으로 업데이트
            [e.target.name]: e.target.value
        });
    };

    // 폼이 제출될때 호출되는 이벤트 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://dev.safeean.com:63101/test/post', {
            method: 'POST',
            // JSON 형식의 데이터를 보내고 있다고 알려줌
            headers: {
                'Content-Type': 'application/json'
            },
            // formData 객체를 JSON 문자열로 변환하여 본문으로 포함
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // 게시판 생성 후 처리 로직
            console.log(data);
            alert('게시판 등록이 완료되었습니다.');
            navigate(-1);
        })
        .catch(error => {
            // 에러 처리 로직
            console.error(error);
        });

        // 폼 초기화, 새로운 게시물 작성 가능
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
                    <Guide>30자 이내로 작성해주세요</Guide>
                    <InputStyle
                        type="text"
                        name="title"
                        maxLength={30}
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
