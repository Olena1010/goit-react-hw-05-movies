import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ButtonWrapper = styled.div`
  display: inline-block;
`;

export const NavButton = styled(NavLink)`
  display: inline-block;
  min-width: 95px;
  padding: 4px 8px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 5px;
  color: #ffffff;
  background-color: #4682b4;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 0 11px 1px rgb(0 0 0 / 90%);
  }
  &.active {
    box-shadow: 0px 0 11px 1px rgb(255 172 160);
  }
`;
