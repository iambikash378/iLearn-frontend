import React from 'react';
import styled from 'styled-components';

const TopNav = styled.div`
    color:#0056d2;
    display:flex;
    justify-content: space-between;
`
const Navigation = styled.div`

`;

const PrevNext = styled.div`
    display:flex;
    justify-content:space-between;
    width:150px;
`;

const PrevNextSpan = styled.span`
    font-weight:bold;
`;

const GoBackButton = styled.div`
    cursor: pointer;
`

const GoNextButton = styled.div`
    cursor:pointer;
`

export default function TopNavigation({course, activeModule, setActiveModule, activeSubmodule, setActiveSubmodule}){

    function handleGoBack(){
        const indexOfActiveModule = course.modules.findIndex(m=> m===activeModule);
        const indexOfActiveSubmodule = activeModule.moduleContents.findIndex(m=> m===activeSubmodule);

        if (indexOfActiveSubmodule > 0){
            setActiveSubmodule(activeModule.moduleContents[indexOfActiveSubmodule - 1]);
        }

        else if(indexOfActiveSubmodule === 0){
            const prevModule = course.modules[indexOfActiveModule - 1];
            setActiveModule(prevModule);
            setActiveSubmodule(prevModule.moduleContents[prevModule.moduleContents.length - 1]);
        }
    }




    function handleGoNext(){
        const indexOfActiveModule = course.modules.findIndex(m=> m===activeModule);
        const indexOfActiveSubmodule = activeModule.moduleContents.findIndex(m=> m===activeSubmodule);

        if (indexOfActiveSubmodule < activeModule.moduleContents.length - 1 ){
            setActiveSubmodule(activeModule.moduleContents[indexOfActiveSubmodule + 1]);
        }

        else if(indexOfActiveSubmodule === activeModule.moduleContents.length - 1 ){
            const nextModule = course.modules[indexOfActiveModule + 1];
            setActiveModule(nextModule);
            setActiveSubmodule(nextModule.moduleContents[0]);
        }
    }


    return(
        <TopNav>
            <Navigation>
                {course.courseName} &gt; {activeModule.moduleName} &gt; {activeSubmodule.title}
            </Navigation>

            <PrevNext>
                <GoBackButton onClick={()=>handleGoBack()}><span> &lt; </span> <PrevNextSpan> Previous </PrevNextSpan> </GoBackButton>
                <GoNextButton onClick={()=>handleGoNext()}><PrevNextSpan> Next </PrevNextSpan> <span> &gt; </span> </GoNextButton>
            </PrevNext>
        </TopNav>
    )
}