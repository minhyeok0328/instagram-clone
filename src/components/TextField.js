import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const InputContainer = styled.div`
  position: relative;
  width: 268px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.search};
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  font-size: 16px;
  ${({ search }) => search && `margin-left: 20px;`}
  ${({ focus }) => focus && `margin-left: 0px;`}
`;

const SearchIcon = styled(Icon)`
  left: 10px;
`;

const ResetIcon = styled(Icon)`
  right: 10px;
  cursor: pointer;
`;

function TextField({ value, search, ...props }) {
  const [focus, setFocus] = useState(false);

  const inputOnFocus = (e) => {
    props.onFocus?.(e);
    setFocus(true);
  };
  const inputOnBlur = (e) => {
    props.onBlur?.(e);

    if (!value.length) {
      setFocus(false);
    }
  };
  const resetInput = () => {
    props.reset?.();
    setFocus(false);
  };

  return (
    <InputContainer>
      {search && !focus && (
        <SearchIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIcon>
      )}
      <Input
        {...props}
        value={value}
        search={search}
        focus={focus}
        onFocus={inputOnFocus}
        onBlur={inputOnBlur}
      />
      {focus && (
        <ResetIcon onClick={resetInput}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </ResetIcon>
      )}
    </InputContainer>
  );
}

export default TextField;
