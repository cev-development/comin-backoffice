/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { ReactNode } from "react";
import reactDom from "react-dom";
import { Container, Overlay } from "./styles";

interface IProps {
  children: ReactNode;
  width?: string;
  heigth?: string;
  padding?: string;
}

const Modal = ({ children, width, heigth, padding }: IProps) => {
  return reactDom.createPortal(
    <Overlay>
      <Container
        width={width || "400px"}
        height={heigth || "0"}
        padding={padding || "24px"}
      >
        {children}
      </Container>
    </Overlay>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
