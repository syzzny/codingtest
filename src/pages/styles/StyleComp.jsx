import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Wrap = styled.div`
    background-color: #f5f5f5;
    padding: 80px 0;
    /* height: 100vh; */
`
export const Title = styled.h2`
    font-size: 45px;
    font-weight: 600;
    margin: auto;
    padding-bottom: 40px;
`
export const List = styled.ul`
    display: grid;
    gap: 10px;
    max-width: 680px;
    margin: 0 auto;
    text-align: left;
    padding: 20px 0;
`
export const ListItem = styled.li`
    background-color: #fff;
    /* max-width: 680px; */
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    &:hover{
        background-color: #EBEBEB;
    }
`
export const GoInfo = styled(Link)`
    color: #000;
    font-size: 17px;
    text-decoration: none;
    font-weight: 500;
`
export const ButtonWrap = styled.div`
    margin-top: 20px;
    display: flex;
    margin: 0 auto;
    max-width: 680px;
    justify-content: center;
    gap: 6px;
`
export const Button = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    padding: 2px;
    background-color: #fff;
    border: 1px solid #D9D9D9;
`
export const Card = styled.div`
    box-shadow: 0 2px 9px 4px rgba(0,0,0,.05);
    max-width: 580px;
    margin: 0 auto;
    padding: 50px;
    text-align: left;
    
`
export const Type = styled.div`
    /* border: 1px solid #E6E6E6; */
    padding: 8px;
    width: 75px;
    height: 14px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-color: #FFBD4D;
`
export const TypeText = styled.p`
    margin: 0;
    line-height: 14px;
`
export const DetailTitle = styled.h2`
    font-size: 40px;
    font-weight: 600;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;
`
