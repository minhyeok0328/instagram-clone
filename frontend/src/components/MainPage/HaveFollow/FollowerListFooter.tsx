import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import React, { InputHTMLAttributes } from 'react';
const ListFooterInput = styled.section`
  padding-left: ${({ theme }) => theme.space.md};
  padding-right: ${({ theme }) => theme.space.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.search};
  @media (max-width: 640px) {
    display: none;
  }
  > div {
    > div {
      align-items: center;
      border: 0;
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      position: relative;
      vertical-align: baseline;
      > div {
        padding: ${({ theme }) => theme.space.sm}
          calc(${({ theme }) => theme.space.xs}*3)
          ${({ theme }) => theme.space.sm} 0;
      }
      > textarea {
        height: 18px !important;
        max-height: 80px;
        background: none;
        border: none;
        display: flex;
        flex-grow: 1;
        font-size: inherit;
        outline: none;
        padding: 0;
        resize: none;
        font-size: 14px;
        line-height: 18px;
      }
      button {
        border: 0;
        display: inline-block;
        padding: 0;
        position: relative;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.button};
        background-color: ${({ theme }) => theme.colors.white};
        font-weight: bold;
      }
    }
  }
`;
const ListFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    padding: 0 ${({ theme }) => theme.space.md};
    font-size: 14px;
    margin-bottom: ${({ theme }) => theme.space.sm};
    :nth-child(1) {
      font-weight: bold;
    }
    :nth-child(2) {
      display: flex;
      > div {
        font-weight: bold;
      }
      > span {
        color: ${({ theme }) => theme.colors.secondfont};
      }
    }
    :nth-child(3) {
      color: ${({ theme }) => theme.colors.secondfont};
    }
    :nth-child(4) {
      margin-bottom: ${({ theme }) => theme.space.md};
      color: ${({ theme }) => theme.colors.secondfont};
      font-size: 10px;
    }
  }
`;
interface TextFieldType extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: Function;
}
function FollowerListFooter({ value, setValue, ...props }: TextFieldType) {
  function PostComment() {
    console.log(value);
  }
  function replyChange(reply: String) {
    setValue(reply);
  }
  return (
    <>
      <ListFooterInfo>
        <div>좋아요 300,000개</div>
        <div>
          <div>username</div>
          <span>&nbsp;subject...&nbsp;더보기</span>
        </div>
        <div>
          댓글 <span>4000</span>개 모두 보기
        </div>
        <div>
          <span>1시간</span>전
        </div>
      </ListFooterInfo>
      <ListFooterInput>
        <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <textarea
              value={value}
              onChange={({ target }) => replyChange(target.value)}
              placeholder="댓글 달기..."
            ></textarea>
            <button onClick={PostComment}>게시</button>
          </div>
        </div>
      </ListFooterInput>
    </>
  );
}
export default FollowerListFooter;
