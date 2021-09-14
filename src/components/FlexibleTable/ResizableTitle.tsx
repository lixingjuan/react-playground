/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React from "react";
import { Row, Col } from "antd";
import { ColumnsType } from "antd/lib/table/Table";
/* @ts-ignore-next-line */
import { Resizable } from "react-resizable";
import { MenuOutlined } from "@ant-design/icons";

export interface ResizableTitleProps {
  width: number;
  className: string;
  onResize: MouseEvent;
  columns: ColumnsType;
  children: React.ReactElement;
}

const ResizableTitle = (props: ResizableTitleProps) => {
  const { width, onResize, className, ...restProps } = props;
  const isFixed = className.includes("table-cell-fix");

  if (!width) {
    return <th {...restProps} />;
  }

  const FixedTh = () => (
    <Row justify="space-between" className="header-buttons">
      <Col className="header-button">{restProps.children}</Col>
    </Row>
  );

  const DefaultTh = () => (
    <Row justify="space-between" className="header-buttons">
      <Col className="header-button">{restProps.children}</Col>
      <Col className="drag-button">
        <MenuOutlined />
      </Col>
    </Row>
  );

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      /* @ts-ignore */
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps}>{isFixed ? <FixedTh /> : <DefaultTh />}</th>
    </Resizable>
  );
};

export default ResizableTitle;
