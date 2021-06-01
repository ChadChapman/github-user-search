import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const StyledArticle = styled.article`
  background-color: ghostwhite;
  flex: 6 1;
  padding: 1em;
`
const displayFields = ['login', 'name', 'company', 'location', 'email', 'bio', 'blog', 'created_at', 'updated_at']

export default function Content(props) {
    const { record } = props;
    const [contentRecord, setContentRecord] = useState({})

    useEffect(() => {
        const filteredRecord = {}
            displayFields.forEach((eachField) => {
                filteredRecord[eachField] = record[eachField] || '🤷';
            })
            setContentRecord(filteredRecord)
            console.log({record})
    }, [record])
    return (
        <StyledArticle>
            <h3>Main Content Area</h3>
            <p>Enter a GitHub username in the input field located at the top of the sidebar to the right.  Selected user attributes will be displayed below (not all attributes for every user will contain data).</p>
            <p>Since these are unauthenticated requests to the GitHub API, there is a limit of 60 requests per hour.  Rapid search entries / requests may get 403 responses in which case the content area will not be updated.</p>
            <p>Usernames / logins not found will result in a 404 response</p>
            {displayFields.map((eachField) => {
                return (
                    <p>{eachField}: {contentRecord[eachField]}</p>
                )
            })}
        </StyledArticle>
    )
}