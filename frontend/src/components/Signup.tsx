import { ReactComponent as InstagramLogo } from '@assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState } from 'react';

const Signupcontent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  position: relative;
  vertical-align: baseline;
  border: 1px solid ${({ theme }) => theme.colors.line};
  margin: 0 0 10px;
`;
const Signupbutton = styled.div`
  cursor: pointer;
  margin: ${({ theme }) => theme.space.sm} 40px;
  > button {
    height: 30px;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.button};
    opacity: 0.3;
    border-radius: 4px;
    border: none;
    > div {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
const Logo = styled.div`
  margin-top: 36px;
  margin-bottom: ${({ theme }) => theme.space.md};
  align-items: center;
  display: flex;
  flex-direction: column;
  > div {
    > svg {
      width: 175px;
      height: 51px;
    }
  }
`;
const Signupinput = styled.div`
  margin: 0 40px 6px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 3px;
  position: relative;
  > input {
    width: 100%;
    height: 36px;
    background: ${({ theme }) => theme.colors.background};
    padding: 9px 0 7px 8px;
    font-size: 12px;
  }
  > span {
    color: ${({ theme }) => theme.colors.secondfont};
    transition: 0.1s;
    transform-origin: left;
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    pointer-events: none;
    position: absolute;
  }
`;

const Logincontent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  display: flex;
  margin: 0 0 10px;
  flex-direction: column;
  padding: 10px 0;
`;
const Logintext = styled.div`
  text-align: center;
  > p {
    margin: 15px;
    font-size: 14px;
    > a {
      color: ${({ theme }) => theme.colors.button};
      font-weight: bold;
    }
  }
`;
function Signup() {
  const [id, setid] = useState({ text: '', style: {} });
  const [password, setpassword] = useState({ text: '', style: {} });
  const [name, setname] = useState({ text: '', style: {} });
  const [nickname, setnickname] = useState({ text: '', style: {} });
  const [stylebtn, setstylebtn] = useState({});
  const inputstyle = { transform: 'scale(calc(10 / 12)) translateY(-10px)' };
  function Inputid(id: string) {
    setid({
      text: id,
      style: inputstyle,
    });
    if (!id) {
      setid({
        text: id,
        style: { display: 'block' },
      });
    }
    signupbuttonstyle();
  }
  function Inputpw(password: string) {
    setpassword({
      text: password,
      style: inputstyle,
    });
    if (!password) {
      setpassword({
        text: password,
        style: { display: 'block' },
      });
    }
    signupbuttonstyle();
  }
  function Inputname(name: string) {
    setname({
      text: name,
      style: inputstyle,
    });
    if (!name) {
      setname({
        text: name,
        style: { display: 'block' },
      });
    }
    signupbuttonstyle();
  }
  function Inputnickname(nickname: string) {
    setnickname({
      text: nickname,
      style: inputstyle,
    });
    if (!nickname) {
      setnickname({
        text: nickname,
        style: { display: 'block' },
      });
    }
    signupbuttonstyle();
  }
  function signupbuttonstyle() {
    if (password.text.length > 5 && nickname && id && name) {
      setstylebtn({ opacity: '1' });
    } else {
      setstylebtn({ opacity: '.3' });
    }
  }
  function signup() {
    console.log('asdf');
  }
  return (
    <>
      <Signupcontent>
        <Logo>
          <div>
            <InstagramLogo />
          </div>
        </Logo>
        <div>
          <Signupinput>
            <span style={id.style}>휴대폰 번호 또는 이메일 주소</span>
            <input
              type="text"
              value={id.text}
              onChange={({ target }) => Inputid(target.value)}
            />
          </Signupinput>

          <Signupinput>
            <span style={name.style}>성명</span>
            <input
              type="text"
              value={name.text}
              onChange={({ target }) => Inputname(target.value)}
            />
          </Signupinput>

          <Signupinput>
            <span style={nickname.style}>사용자 이름</span>
            <input
              type="text"
              value={nickname.text}
              onChange={({ target }) => Inputnickname(target.value)}
            />
          </Signupinput>

          <Signupinput>
            <span style={password.style}>비밀번호</span>
            <input
              type="text"
              value={password.text}
              onChange={({ target }) => Inputpw(target.value)}
            />
          </Signupinput>

          <Signupbutton>
            <button style={stylebtn} onClick={signup}>
              <div>가입</div>
            </button>
          </Signupbutton>
        </div>
      </Signupcontent>
      <Logincontent>
        <Logintext>
          <p>
            계정이 있으신가요?
            <Link to="/">로그인</Link>
          </p>
        </Logintext>
      </Logincontent>
    </>
  );
}

export default Signup;
