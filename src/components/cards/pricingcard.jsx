import styled from "styled-components"

const Wrapper = styled.div`
    background-color:rgb(221, 94, 94);
    width:400px;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.05);
`;

const Header = styled.header`
    display:flex;
    border: 1px solid;
    border-radius:30px;
    position:relative;
`
const Labels = styled.label`
    height:100%;
    width:100%;
    display:flex;
    font-size:18px;
    cursor: pointer;
    align-items:center;
    justify-content:center;
    border: 1px solid blue;
    z-index:2;

`;

const Slider = styled.div`
    position: absolute;
    width:120px;
    background-color:green;
    height: 85%;
    border-radius:inherit;
    left:50%;
    transform: translateX(-50%);
`


export default function PriceCard()
{
    return(
        <Wrapper>
            <Header>
                <Labels for="" class="tab-1"> Basic </Labels>
                <Labels for="" class="tab-2"> Standard </Labels>
                <Labels for="" class="tab-3"> Team </Labels>
                <Slider> </Slider>
            </Header>
        </Wrapper>
    )
}
