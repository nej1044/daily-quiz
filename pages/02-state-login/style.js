import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    width: 640px;
    height: 1138px;
    margin: 50px auto;
    padding: 0 50px;
    border: 1px solid black;
    background-image: url('./images/02-state-login/background.png');
    background-size: cover;
`

export const Header = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 532px;
    padding: 175px 0;
`

export const ImgWrapper = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
`

export const Logo = styled.img`
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
`

export const LogoTitle = styled.span`
    height: 62px;
    color: white;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
`

export const LogoUnderline = styled.img`
    width: 100%;
`

export const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 280px;
`

export const Footer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 160px;
`

export const LoginWrapper = styled.div`
    width: 100%;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.4);
`

export const Input = styled.input`
    width: 90%;
    color: white;
    font-size: 24px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`

export const ErrorText = styled.div`
    width: 100%;
    height: 20px;
    margin: 10px 0px 20px 0px;
    color: #ff1b6d;
    font-size: 16px;
`
export const SubmitBtn = styled.button`
    width: 100%;
    height: 76px;
    color: #ffffff;
    font-size: 26px;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 38px;
    background-color: rgba(255,27,109,0.6);
`

export const KaKaoBtn = styled.button`
    width: 100%;
    height: 76px;
    color: #fae100;
    font-size: 26px;
    font-weight: bold;
    border: 1px solid rgba(250,255,0,0.6);
    outline: none;
    border-radius: 38px;
    background-color: transparent;
`

export const FindWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 30px;
`

export const FindPw = styled.span`
    color: rgba(255,255,255,0.7);
    font-size: 20px;
    padding: 0 30px;
    border-left: 1px solid rgba(255,255,255,0.5);
    border-right: 1px solid rgba(255,255,255,0.5);
`

export const FindText = styled.span`
    color: rgba(255,255,255,0.7);
    font-size: 20px;
    padding: 0 30px;
`
