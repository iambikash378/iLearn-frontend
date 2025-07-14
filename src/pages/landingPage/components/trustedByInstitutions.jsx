import React from 'react';
import styled from 'styled-components';

const TrustedByContainer = styled.div`
    width : '100%';
    background-color:rgb(245 245 245);
    min-height: 299px;
    max-width: 100vw;
    display:flex;
    flex-wrap: wrap;
`;

const TrustedByText = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

const BlueText = styled.span`
    color: #0056d2;
`;

const UniversitiesGrid = styled.div`
    display: flex;
    height:100%;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
`;

const UniLogo = styled.img `
    max-height: 150px;
    max-width: 300px;
`;

export default function TrustedByInstitutions(){

    return(
        <TrustedByContainer>
            <TrustedByText> <span> We offer courses from&nbsp;</span> <BlueText>100+ leading universities and companies</BlueText></TrustedByText>

            <UniversitiesGrid> 
                <UniLogo src="/universitieslogo/duke.webp" alt="duke"/>
                <UniLogo src="/universitieslogo/tu.webp" alt="tu"/>
                <UniLogo src="/universitieslogo/harvard.webp" alt="harvard"/>
                <UniLogo src="/universitieslogo/stanford.webp" alt="stanford"/>
                <UniLogo src="/universitieslogo/princeton.webp" alt="princeton"/>
            </UniversitiesGrid>

        </TrustedByContainer>
    )
}