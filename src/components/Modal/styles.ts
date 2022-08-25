import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Container = styled('div')<{
  width: string;
  height: string | undefined;
  padding: string;
}>`
  width: 100%;
  max-width: ${props => props.width};
  min-height: 150px;

  ${props =>
    props.height === '0'
      ? 'height: max-content'
      : `height: 100%; max-height: ${props.height}`};

  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: ${props => props.padding};
  h1 {
    font-size: 22px;
  }
  p {
    margin-top: 8px;
  }
`;
