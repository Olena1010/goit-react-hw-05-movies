import styled from '@emotion/styled';

export const QueryForm = styled.form`
  display: flex;
  align-items: center;
  margin: 10px auto 30px auto;
  width: 100%;
  margin-top: 30px;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 1px;
  border-radius: 5px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 1px solid #b3b1b1;
  box-shadow: 0 8px 6px -6px black;

  // @media screen and (min-width: 760px) {
  //   width: 500px;
  //   margin-top: 0px;
  // }
  // @media screen and (min-width: 1300px) {
  //   width: 700px;
  // }
`;

export const QueryFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  // color: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  // }
  // @media screen and (min-width: 760px) {
  //   width: 500px;
  // }
  // @media screen and (min-width: 1300px) {
  //   width: 700px;
  // }
`;

export const QueryFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  background-color: #b3b1b1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover svg {
    scale: 1.4;
  }
  svg {
    width: 30px;
    height: 30px;
    transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const QueryFormBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
