import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color:#ffffff;
`

const IndividualTestimonailBlock = styled.div`
    display:block;
    width: 300px;
`;

const GroupOfThreeTestimonails = styled.div `
    display:flex;
    flex-grow:1;
    flex-wrap:no-wrap;
    justify-content: space-around;
`;

const Headshot = styled.img`
    height: 200px;
    width: 200px;
`;

const Head = styled.h2`
    display:flex;
    justify-content: center;
    width:100%;
`;

const Stat = styled.p`
    display:flex;
    justify-content: center;
    width:100%;
`

export default function Testimonials(){

    return(
        <TestimonialsContainer>
            <Head> From the iLearn Community </Head>
            <Stat> 10+ million people have already joined iLearn</Stat>
            <GroupOfThreeTestimonails>
                <IndividualTestimonailBlock>
                    <Headshot src="/headshot/happy-businessman-png-round-badge-transparent-background_53876-952434.webp" alt="headshot1" />
                    <h3> John F. </h3>
                    <p> United States </p>
                    <h3>
                    “From taking courses on Coursera, I gained a deep understanding of the UX Design process from start to finish. With the knowledge I gained, 
                    I feel prepared for entry-level jobs and internships. I've been able to apply the skills and knowledge I gained to multiple projects and work experiences.”
                    </h3>
                </IndividualTestimonailBlock>

                <IndividualTestimonailBlock>
                    <Headshot src="/headshot/png-woman-portrait-with-natural-skin-round-badge-transparent-background_53876-953370.webp" alt="headshot2" />
                    <h3> Kenia R. </h3>
                    <p> United States </p>
                    <h3>“Being a mother — especially a working mother means I’m constantly trying to juggle my schedule, my kids’ schedules, 
                        and work. I am very grateful for the flexible and remote learning programs that Coursera has to offer.”
                    </h3>
                </IndividualTestimonailBlock>

                <IndividualTestimonailBlock>
                    <Headshot src="/headshot/smiling-indian-businessman-png-round-badge-transparent-background_53876-953643.webp" alt="headshot1" />
                    <h3> Jitesh S. </h3>
                    <p> France </p>
                    <h3>“I really enjoyed my courses. The quizzes, videos, and quick labs provided helpful hands-on experience. 
                        Learning on Coursera has given me the confidence and ability to excel in my career. I love this feeling.”
                    </h3>
                </IndividualTestimonailBlock>
            </GroupOfThreeTestimonails>
        </TestimonialsContainer>
    )

};