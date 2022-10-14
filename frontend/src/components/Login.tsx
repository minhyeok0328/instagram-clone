import { ReactComponent as InstagramLogo } from '@assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState } from 'react';

const Logincontent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  position: relative;
  vertical-align: baseline;
  border: 1px solid ${({ theme }) => theme.colors.line};
  margin: 0 0 10px;
`;
const Loginbutton = styled.div`
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
const Logininput = styled.div`
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
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    pointer-events: none;
    transform-origin: left;
    position: absolute;
  }
`;
const Loginline = styled.div`
  margin: 10px 40px 18px;
  display: flex;
  div:nth-child(1) {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.line};
    top: 0.45em;
    position: relative;
    flex-grow: 1;
  }
  div:nth-child(2) {
    margin: 0 18px;
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.secondfont};
  }
  div:nth-child(3) {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.line};
    flex-grow: 1;
    top: 0.45em;
    position: relative;
  }
`;
const Findaccount = styled.div`
  text-align: center;
  > a {
    font-size: 12px;
  }
`;

function Login() {
  const [id, setid] = useState({ text: '', style: {} });
  const [password, setpassword] = useState({ text: '', style: {} });
  const [stylebtn, setstylebtn] = useState({});
  function Inputid(id: string) {
    setid({
      text: id,
      style: { transform: 'scale(calc(10 / 12)) translateY(-10px)' },
    });
    if (!id) {
      setid({
        text: id,
        style: { display: 'block' },
      });
    }
    if (password.text.length > 5 && id) {
      setstylebtn({ opacity: '1' });
    } else {
      setstylebtn({ opacity: '.3' });
    }
  }
  function Inputpw(password: string) {
    setpassword({
      text: password,
      style: { transform: 'scale(calc(10 / 12)) translateY(-10px)' },
    });
    if (!password) {
      setpassword({
        text: password,
        style: { display: 'block' },
      });
    }
    if (password.length > 5 && id.text) {
      setstylebtn({ opacity: '1' });
    } else {
      setstylebtn({ opacity: '.3' });
    }
  }
  return (
    <Logincontent>
      <Logo>
        <div>
          <InstagramLogo />
        </div>
      </Logo>
      <div>
        <Logininput>
          <span style={id.style}>전화번호, 사용자 이름 또는 이메일</span>
          <input
            type="text"
            value={id.text}
            onChange={({ target }) => Inputid(target.value)}
          />
        </Logininput>
        <Logininput>
          <span style={password.style}>비밀번호</span>
          <input
            type="text"
            value={password.text}
            onChange={({ target }) => Inputpw(target.value)}
          />
        </Logininput>
        <Loginbutton>
          <button style={stylebtn}>
            <div>로그인</div>
          </button>
        </Loginbutton>
      </div>
      <Loginline>
        <div></div>
        <div>또는</div>
        <div></div>
      </Loginline>
      <Findaccount>
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </Findaccount>
    </Logincontent>
  );
}

export default Login;
