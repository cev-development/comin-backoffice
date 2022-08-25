import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  div {
    background: transparent;
  }

  table {
    border-collapse: separate;
    font-weight: 300;
    border-spacing: 0 8px;
    border-radius: 30px !important;

    width: 100%;
  }

  th {
    font-weight: 700 !important;
    background: transparent !important;
    ::before {
      background: transparent !important;
    }
  }

  tbody {
    tr {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.28);
    }
    td {
      background: #fff;
    }
    td:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    td:last-child {
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
    }
  }

  ul {
    display: flex;
    justify-content: center;

    button,
    li {
      background: none !important;
      border: none !important;
      svg {
        width: 15px;
        height: auto;
      }
    }
  }
`;
