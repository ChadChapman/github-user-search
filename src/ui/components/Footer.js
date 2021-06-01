import React from "react";
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #20362C;
  color: white;
  flex: auto;
  padding: 1em;
`

const StyledLink = styled.a`
  color: white;
`

export default function Footer() {

    return (
        <StyledFooter>
            <h3>Footer</h3>
            <p><StyledLink href={'https://docs.github.com/en/rest/reference'}>GitHub API reference</StyledLink></p>
            <p><StyledLink href={'https://github.com/ChadChapman'}>Person who made this</StyledLink></p>
        </StyledFooter>
    )
}