import styled from "styled-components";
import NavBar from "../landingPage/components/navbar";
import { FaApple, FaFacebook, FaGoogle, FaPenAlt, MdEmail } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const SignupPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: rgb(245 245 245);
    height: 100vh;
    width: 100vw;
`
const SignupBoxContainer = styled.div`
    height: 70%;
    width: 25%;
    min-width: 300px;
    min-height: 400px;
    height:500px;
    box-shadow: 10px 10px 7px gray;
    border-radius: 20px;
    border: 2px solid gray;
    margin: auto auto auto auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`;

const ILearnLogo = styled.h1`
    cursor: pointer;
`;

const Signup = styled.h2`
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
`;

const EmailInput = styled.input`
    border-radius:10px;
    height: 30px;
    min-width: 100px;
    margin-bottom: 10px;
    padding-left: 30px;
`;

const PasswordInput = styled.input`
    border-radius:10px;
    height: 30px;
    min-width: 100px;
    padding-left: 30px;

`;

const SignUpButton = styled.button`
    background-color:#0056d2;
    color:#ffffff;
    border-radius: 10px;
    height: 30px;
    margin-top: 50px;
    cursor:pointer;
    font-weight:bold;
`;


const SignUpWithOthers = styled.div `
    margin-top: 15px;
`

const SignUpWithOthersText = styled.span`
    display:inline-block;
    font-size: 0.8em;
`;

const Dots = styled.span`
    color:gray;
`;

const GoogleFacebookApple = styled.div`
    display:flex;
    justify-content: space-around;
    margin-top: 10px;
    width:200px;
`;

const GoogleBox = styled.div`
    border: 1px solid #0056d2;
    box-shadow: 2px 2px 0 #0056d2;
    width: 50px;
    height: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    background-color:;

`;

const FacebookBox = styled.div`
    border: 1px solid #0056d2;
    box-shadow: 2px 2px 0 #0056d2;
    width: 50px;
    height: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
`;

const AppleBox = styled.div`
    border: 1px solid #0056d2;
    box-shadow: 2px 2px 0 #0056d2;
    width: 50px;
    height: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
`;


const Image = styled.img`

`;

const InputContainer = styled.div`
    display:flex;
    align-items:center;
    position:relative;
`;

const AlreadyOnIlearn = styled.div`
    margin-top: 40px;
    font-size: 0.9em;
`

export default function SignupPageNew(){

    const Navigate = useNavigate();

    return(
        <SignupPageContainer>
            <SignupBoxContainer>
                    {/* <ILearnLogo src="/ilearn_logo.png" alt="logo"/>  */}
                    <ILearnLogo onClick={()=> Navigate('/')}>i<span style={{color:'#0056d2'}}>Learn</span></ILearnLogo>
                    <Signup> <span style={{color:'#0056d2'}}>  Sign</span>Up</Signup>
                    <Form>

                    <InputContainer>
                            <FaPenAlt style={{position:'absolute', left: '5px', top:'10px'}} />
                            <EmailInput type="text" for="fullname" name="fullname" placeholder='Full Name'/>
                        </InputContainer>

                        <InputContainer>
                            <IoMail style={{position:'absolute', left: '5px', top:'10px'}} />
                            <EmailInput type="text" for="email" name="email" placeholder='Email'/>
                        </InputContainer>

                        <InputContainer>
                            <RiLockPasswordFill style={{position:'absolute', left: '5px', top:'10px'}} />
                            <PasswordInput type="password" for="password" name="password" placeholder='Password'/>
                        </InputContainer>

                        <SignUpButton> Sign Up</SignUpButton>
                    </Form>

                    <SignUpWithOthers>
                       {/* <Dots>...........</Dots> */}  <SignUpWithOthersText> Or sign Up with </SignUpWithOthersText> {/*<Dots>...........</Dots> */}
                    </SignUpWithOthers>

                    <GoogleFacebookApple>
                        <GoogleBox>
                            <FaGoogle />
                        </GoogleBox>
                        <FacebookBox>
                            <FaFacebook />
                        </FacebookBox>

                        <AppleBox>
                            <FaApple />
                        </AppleBox>

                    </GoogleFacebookApple>

                    <AlreadyOnIlearn>
                        Already on iLearn?  <span style={{color:'#0056d2', cursor:'pointer'}} onClick={()=>Navigate('/loginpagenew')}>  Sign In</span>
                    </AlreadyOnIlearn>

            </SignupBoxContainer>
        </SignupPageContainer>
    )
}