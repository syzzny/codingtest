import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Wrap = styled.div`
    /* background-color: #f5f5f5; */
    padding: 80px 0;
    /* height: 100vh; */
`
export const TitleWrap = styled.div`
    display: flex;
    /* padding-bottom: 20px; */
    max-width: 680px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 720px) and (min-width: 470px) {
        max-width: 420px;
    }
    @media (max-width:469px)and(min-width: 450px) {
        max-width: 350px;
    }
    @media (max-width: 449px) and (min-width:320px) {
    max-width: 300px;
    }
`
export const Title = styled.h2`
    font-size: 30px;
    font-weight: 600;
    @media (max-width:469px)and(min-width: 450px) {
        font-size: 27px;
    }
    @media (max-width: 449px) and (min-width:320px) {
        font-size: 25px;
    }
`
export const NewPost = styled.button`
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 3px;
    background-color: #1A5CFF;
    color: #fff;
    cursor: pointer;
`
export const List = styled.ul`
    display: grid;
    gap: 10px;
    max-width: 680px;
    margin: 0 auto;
    text-align: right;
    padding: 20px 0;
    position: relative;
    @media (max-width: 720px) and (min-width: 470px) {
        max-width: 420px;
    }
    @media (max-width:469px)and(min-width: 450px) {
        max-width: 350px;
    }
    @media (max-width: 449px) and (min-width:320px) {
    max-width: 300px;
    }
`
export const TitleInfo = styled.p`
    width: 490px;
    @media (max-width: 720px) and (min-width: 470px) {
        width: 220px;
    }
    @media (max-width:469px)and(min-width: 450px) {
        width: 140px;
    }
    @media (max-width: 449px) and (min-width:320px) {
        font-size: 16px;
        width: 120px;
    }
` 
export const ListItem = styled.li`
    /* background-color: #fff; */
    /* max-width: 680px; */
    border: 1px solid #EBEBEB;
    padding: 6px 20px;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    gap: 10px;

    &:hover{
        background-color: #f5f5f5;
    }
    @media (max-width: 449px) and (min-width:320px) {
    padding: 3px 12px;
    }
`
export const GoInfo = styled(Link)`
    color: #000;
    font-size: 17px;
    text-decoration: none;
    font-weight: 500;
`
export const DateInfo = styled.p`
    /* font-weight: 300; */
    font-size: 14px;
    font-weight: 400;
    `
export const ButtonWrap = styled.div`
    margin-top: 20px;
    display: flex;
    margin: 0 auto;
    max-width: 680px;
    justify-content: center;
    gap: 6px;
    @media (max-width: 720px) and (min-width: 470px) {
        max-width: 420px;
        justify-content: space-evenly;
    }
    @media (max-width:469px)and(min-width: 450px) {
        max-width: 350px;
    }
    @media (max-width: 449px) and (min-width:320px) {
        max-width: 300px;
    }
`
export const Button = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 12px;
    cursor: pointer;
    padding: 11px;
    background-color: ${props => props.isSelected ? 'red' : '#F0F2F4'};
    border: none;
    color: #304253;
    font-size: 16px;
    &:disabled{
        background-color: #1A5CFF;
        color: #fff;
        box-shadow: 0 0 0 0;
        box-shadow: 0 0 10px 2px #CBDAFF;
    }
    @media (max-width: 449px) and (min-width:320px) {
        width: 35px;
        height: 35px;
        padding: 5px;
        font-size: 14px;
    }
`;
export const ArrowImg = styled.img`
    @media (max-width: 449px) and (min-width:320px) {
        width: 6px;
    }
`
export const ButtonArrow = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 12px;
    cursor: pointer;
    padding: 11px;
    background-color: ${props => props.isSelected ? 'red' : '#F0F2F4'};
    border: none;
    color: #304253;
    font-size: 16px;
    @media (max-width: 449px) and (min-width:320px) {
        width: 35px;
        height: 35px;
        padding: 5px;
        font-size: 14px;
    }
`
export const Card = styled.div`
    box-shadow: 0 2px 9px 4px rgba(0,0,0,.05);
    max-width: 580px;
    margin: 0 auto;
    padding: 50px;
    text-align: left;
    @media (max-width: 720px) and (min-width: 470px) {
        max-width: 380px;
        padding: 25px;
    }
    @media (max-width:469px)and(min-width: 450px) {
        max-width: 310px;
        padding: 25px;
    }
    @media (max-width: 449px) and (min-width:320px) {
        max-width: 260px;
        padding: 15px;
    }
`
export const Head = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Type = styled.div`
    /* border: 1px solid #E6E6E6; */
    padding: 8px;
    width: 72px;
    height: 10px;
    text-align: center;
    border-radius: 3px;
    color: #1A5CFF;
    border: 1px solid #1A5CFF;
    @media (max-width: 449px) and (min-width:320px) {
        width: 60px;
        height: 8px;
    }
`
export const TypeText = styled.p`
    margin: 0;
    line-height: 10px;
    @media (max-width: 449px) and (min-width:320px) {
        font-size: 14px;
        line-height: 8px;
    }
`
export const DetailTitle = styled.h2`
    font-size: 40px;
    font-weight: 600;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    @media (max-width: 449px) and (min-width:320px) {
        font-size: 35px;
    }
    @media (max-width: 449px) and (min-width:320px) {
        font-size: 30px;
    }
`
export const CreateForm = styled.form`
    max-width: 680px;
    margin: 0 auto;
    text-align: right;
    @media (max-width: 720px) and (min-width: 470px) {
        max-width: 420px;
    }
    @media (max-width:469px)and(min-width: 450px) {
        max-width: 350px;
    }
    @media (max-width: 449px) and (min-width:320px) {
        max-width: 300px;
    }
`
export const CreateLabel = styled.label`
    display: grid;
    text-align: left;
`
export const Guide = styled.p`
    margin: 0;
    font-size: 12px;
    color: #969696;
    padding: 3px 0 10px 0;
`
export const InputStyle = styled.input`
    height: 28px;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    padding: 0 5px;
`
export const TestAreaStyle = styled.textarea`
    height: 200px;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    margin-top: 10px;
    padding:5px;
`
export const CreateButton = styled.button`
cursor: pointer;
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 3px;
    background-color: #1A5CFF;
    color: #fff;
`
export const ButtonIcon = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:first-child{
        margin-right: 10px;
    }
`