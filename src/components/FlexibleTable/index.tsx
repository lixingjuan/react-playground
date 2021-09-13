/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React, { useState, useCallback, useMemo } from 'react';
import { Table, Row, Col } from 'antd';
import { ColumnsType, TableProps } from 'antd/lib/table/Table';
/* @ts-ignore-next-line */
import { Resizable } from 'react-resizable';
import { MenuOutlined } from '@ant-design/icons';

import './style.less';
import DragListView from './DragColumnView';



export interface ResizableTitleProps {
  width: number;
  className: string;
  onResize: MouseEvent;
  columns: ColumnsType;
  children: React.ReactElement;
}

const ResizableTitle = (props: ResizableTitleProps) => {
  console.log({props});
  const { width, onResize, className, ...restProps } = props;
  const isFixed = className.includes('table-cell-fix');

  // if (!width) {
  //   return <th {...restProps} />;
  // }

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
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps}>{isFixed ? <FixedTh /> : <DefaultTh />}</th>
    </Resizable>
  );
};

const FlexibleTable: React.FC<TableProps<any>> = (props: TableProps<any>) => {
  const { columns: initColumns = [] } = props;
  const [columns, setColumns] = useState(initColumns);
  const components = {
    header: {
      cell: ResizableTitle,
    },
  };

  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const tempArr = [...columns];

      [tempArr[fromIndex], tempArr[toIndex]] = [
        tempArr[toIndex],
        tempArr[fromIndex],
      ];

      setColumns(tempArr);
    },
    nodeSelector: 'th',
    handleSelector: '.drag-button',
  };

  const handleResize = useCallback(
    (index) => (e: MouseEvent, { size }: any) => {
      const tempColumns = [...columns];
      tempColumns[index] = {
        ...tempColumns[index],
        width: size.width,
      };
      setColumns(tempColumns);
    },
    [columns]
  );

  const columnsComp = useMemo(() => {
    const resColumns = columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column: any) => ({
        width: column.width,
        onResize: handleResize(index),
      }),
    }));
    return resColumns;
  }, [columns, handleResize]);

  return (
    <>
      <DragListView {...dragProps}>
        {/* @ts-ignore */}
        <Table {...props} columns={columnsComp} components={components} />
      </DragListView>
    </>
  );
};

export default FlexibleTable;
