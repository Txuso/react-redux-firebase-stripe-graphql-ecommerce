import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  cursor: pointer;
  padding: 10px 15px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  width: 100%;
  height: 70px;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  padding: 25px;
  width: 70px;
  height: 100%;
`;

export const OptionsContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
`;
