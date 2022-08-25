/* eslint-disable react/jsx-props-no-spreading */
import { Table, TableProps } from "antd";
import { Container } from "./styles";

type IProps = TableProps<any>;

const TablePage: React.FC<IProps> = ({ ...rest }: IProps) => {
  return (
    <Container>
      <Table {...rest} />
    </Container>
  );
};

export default TablePage;
