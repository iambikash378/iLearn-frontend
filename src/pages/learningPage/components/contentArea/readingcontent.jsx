import {useEffect, useState} from 'react';
import styled from 'styled-components';


export default function ReadingContentPart({contentLink}){

    const [htmlContent, setHtmlContent] = useState('');

    useEffect(()=>{
        fetch(contentLink)
        .then((res) => res.text())
        .then((htmlString) => {
            setHtmlContent(htmlString)
        })
    }, []);

    return(
            <div
            dangerouslySetInnerHTML={{__html: htmlContent}}
        />
            
    )
}