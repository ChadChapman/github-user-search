import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #467560;
  color: white;
  flex: auto;
  padding: 1em;
  @media (max-width: 760px) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  // todo - start here, make media queries to determine width?
`

const StyledUL = styled.ul`
  margin: 0;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  @media (max-width: 760px) {
    padding-top: 0;
    padding-bottom: 6px;
  }
`

const StyledListItem = styled.li`
  padding: 12px;
  @media (max-width: 760px) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`
export default function Nav() {

    return (
        <StyledNav>
            <h3>Nav List</h3>
            <StyledUL>
                <StyledListItem>different</StyledListItem>
                <StyledListItem>nav</StyledListItem>
                <StyledListItem>options</StyledListItem>
                <StyledListItem>go</StyledListItem>
                <StyledListItem>here</StyledListItem>
            </StyledUL>
        </StyledNav>
    )
}