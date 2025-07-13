// Module box that expands when clicked and contracts when clicked again
//This will be made without using MUI
//This is the part of CourseContentNav

import {useState} from 'react';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const SubmoduleBoxContentsDiv = styled.div`
    padding: 5px;
    cursor: pointer;
    border-left: .5em solid ${props => (props.$isActive ? '#0056d2' : 'transparent')};
    display:flex;
    justify-content:space-between;
    background-color:${props => (props.$isActive ? '#e6f0ff' : 'transparent')};

    &:hover{
        background-color: #f2f5fa;
        border-left: .5em solid #0056d2;
    };
`
const LengthElement = styled.div`
    color: #6b6b6b ;
`

const SubModuleTypeElement = styled.span`
    font-weight: bold;
    text-transform:capitalize;
`
const TypeAndTitle = styled.div`
    font-size: 14px;
`

const TypeTitleAndLength = styled.div`
    border: none;    
`


export default function ModuleBox({module, activeSubmodule, setActiveModule, setActiveSubmodule, isCompleted }){

    function handleSubModuleClick(submodule) {
        setActiveModule(module);
        setActiveSubmodule(submodule);
    }

    return(
        <div>
            {
                module.moduleContents.map((submodule, submoduleIndex ) =>{
                    const isActive = submodule === activeSubmodule;
                    
                    return(
                    <SubmoduleBoxContentsDiv key={submoduleIndex} onClick={()=>handleSubModuleClick(submodule)} $isActive={isActive}>
                        <TypeTitleAndLength>
                            <TypeAndTitle> <SubModuleTypeElement> {submodule.type}: </SubModuleTypeElement> {submodule.title} </TypeAndTitle>
                            <LengthElement> {submodule.length} </LengthElement>
                        </TypeTitleAndLength>
                        {isCompleted[submodule.title] && <CheckCircleIcon color={'primary'}/> }
                    </SubmoduleBoxContentsDiv>
                )})
            }
        </div>
    )
}