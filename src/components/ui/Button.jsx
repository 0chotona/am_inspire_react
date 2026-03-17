import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding : 8px 16px 8px;
    font-size : 16px;
    border-width : 2px;
    border-radius : 8px;
    cursor : pointer;`;

const Button = (props) =>
{
    return(
        <StyledButton onClick = {props.onClick} disabled = {props.disabled}>{props.title}</StyledButton>
    )
    
}

export default Button;