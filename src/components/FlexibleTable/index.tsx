import React, { useState, useCallback, useMemo } from "react";
import { ColumnsType, TableProps } from "antd/lib/table/Table";
import { Table } from "antd";

import "./style.css";
import DragListView from "./DragColumnView";
import ResizableTitle from "./ResizableTitle";

export interface ResizableTitleProps {
  width: number;
  className: string;
  onResize: MouseEvent;
  columns: ColumnsType;
  children: React.ReactElement;
}

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
    nodeSelector: "th",
    handleSelector: ".drag-button",
  };

  const handleResize = useCallback(
    (index) =>
      (e: MouseEvent, { size }: any) => {
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
