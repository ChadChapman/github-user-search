import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #6DB594;
  flex: auto;
  text-align: center;
`
export default function Header() {

    return (
        <StyledHeader>
            <h2>Github User Search</h2>
        </StyledHeader>
    )
}