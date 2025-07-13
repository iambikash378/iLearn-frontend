import { Paper, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import ModuleBox from './courseContentNavigationModule';
import styled from 'styled-components';

const ModuleNameDiv = styled.div`
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-weight:bold;
    padding: 10px 0;

    &:hover{
        background-color: #f7f7f7;
    }
`;

const ContentNavBar = styled.div`
    overflow: auto;
    border-right: .1em solid #dae1ed ;
    padding: 0em 2em;
    height:100%;
`;


function CourseContentNav({course, activeSubmodule, activeModule, setActiveModule, setActiveSubmodule, isCompleted}) {  


    const [expandedModule, setExpandedModule] = useState({});

    function expandContractModule(moduleIndex){
        setExpandedModule({...expandedModule, [moduleIndex]:!expandedModule[moduleIndex]})
    }

    return (
        <ContentNavBar>
            {
                course.modules.map((module, moduleIndex) =>(
                    <div>
                        <ModuleNameDiv onClick={() =>{expandContractModule(moduleIndex)}}>{module.moduleName}</ModuleNameDiv>
                        {
                            ((expandedModule[moduleIndex]) || (activeModule===module)) && (
                                <ModuleBox module={module} activeSubmodule={activeSubmodule} setActiveModule={setActiveModule} setActiveSubmodule={setActiveSubmodule} isCompleted={isCompleted}></ModuleBox>
                            )
                        }
                    </div>
                ))
            }
        </ContentNavBar>
    );
}

export default CourseContentNav;
