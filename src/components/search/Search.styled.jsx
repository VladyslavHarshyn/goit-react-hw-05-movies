import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 64px;
  max-width: 800px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 0 0 25px 25px;
  color: #fff;
  background-color: rgb(200, 200, 20);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 400px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: rgb(225, 255, 0);
  border-radius: 20px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
