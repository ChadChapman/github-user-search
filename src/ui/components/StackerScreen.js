import React, {useState} from 'react';
import styled from 'styled-components';
import Header from "./Header";
import Footer from "./Footer"
import Content from "./Content";
import Nav from "./Nav";

const axios = require('axios')

const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  //min-height: 100%;
  background: tan;
  //flex: 1;
  //flex-grow: 1;
  min-height: 100%;
  //justify-content: center;
`

const ContainerDiv = styled.div`
  flex: auto;
  display: flex;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`

const StyledUL = styled.ul`
  margin: 0;
  padding-bottom: 2em;
  padding-top: 1em;
  @media (max-width: 760px) {
    padding-bottom: 1em;
    padding-top: 0;
  }
`

const StyledListItem = styled.li`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 1em;

  :hover {
    color: blue;
    cursor: pointer;
  }

  @media (max-width: 760px) {
    padding-bottom: 0;
  }
`

const StyledMain = styled.main`
  flex: auto;
  display: flex;
  flex-direction: column;
`

const StyledContentDiv = styled.div`
  flex: auto;
  display: flex;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`

const StyledSidebar = styled.div`
  background-color: #84DBB4;
  flex: 1 0 120px;
  padding: 1em;
  @media (max-width: 760px) {
    order: -1;
    padding-top: 0;
  }
`

const StyledButton = styled.button`
  background-color: #93F5C9;
  padding: 4px;
  margin-top: 6px;
  margin-bottom: 6px;
`

export default function StackerScreen() {
    const [searchInput, setSearchInput] = useState('')
    const [currentRecord, setCurrentRecord] = useState({})
    const [recordHistory, setRecordHistory] = useState([])

    const fetchUserData = async () => {
        const recordIndex = recordHistory.indexOf(searchInput);
        if (recordIndex > -1) {
            setCurrentRecord(recordHistory[recordIndex])
        } else {
            const targetUrl = `https://api.github.com/users/${searchInput}`;
            const axiosInstance = axios.create({
                headers: {'Accept': 'application/vnd.github.v3+json'},
                timeout: 12000
            })
            axiosInstance.get(targetUrl)
                .then((response) => {
                    const userData = response?.data;
                    setCurrentRecord(userData)
                    setSearchInput('')
                    return userData;
                })
                .then((userData) => {
                    setRecordHistory([...recordHistory, userData])
                })
                .catch((err) => {
                    const errorRecord = {
                        login: `there was an error fetching user: ${searchInput}`,
                        name: err.toString()
                    }
                    setCurrentRecord(errorRecord)
                    setSearchInput('')
                    console.error(err)
                })
        }
    }

    return (
        <PageDiv>
            <Header/>
            <ContainerDiv>
                <Nav/>
                <StyledMain>
                    <StyledContentDiv>
                        <Content
                            record={currentRecord}
                        />
                        <StyledSidebar>
                            <h3>User Search Sidebar</h3>
                            <input
                                value={searchInput}
                                onChange={event => setSearchInput(event.target.value)}
                            />
                            <br/>
                            <StyledButton
                                onClick={() => fetchUserData()}
                            >
                                fetch user
                            </StyledButton>
                            {recordHistory.length > 0 ? <p>Last 1 - 12 (successful) searches.</p> : null}
                            {recordHistory.length > 0 ? <p>Click on a user's name to view that info again.</p> : null}
                            <StyledUL>
                                {recordHistory.slice(-12).reverse().map((eachRecord) => {
                                    return (
                                        <StyledListItem onClick={() => {
                                            setCurrentRecord(eachRecord)
                                            setSearchInput('')
                                        }
                                        }>{eachRecord.login}</StyledListItem>
                                    )
                                })}
                            </StyledUL>
                            {recordHistory.length > 0 ? <StyledButton onClick={() => {
                                setRecordHistory([]);
                                setSearchInput('');
                            }}>
                                clear user list
                            </StyledButton> : null}

                        </StyledSidebar>
                    </StyledContentDiv>
                    <Footer/>
                </StyledMain>
            </ContainerDiv>
        </PageDiv>
    )
}