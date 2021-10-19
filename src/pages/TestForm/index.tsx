import React, { useState } from "react";
import { Form, Button, Input } from "antd";

function validatePrimeNumber(number: any) {
  if (number > 10) {
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  }

  return {
    validateStatus: "error",
    errorMsg: "The prime more than the 10!",
  };
}

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};

const RawForm = () => {
  // const [number, setNumber] = useState<any>({
  //   value: 11,
  //   validateStatus: "error",
  //   errorMsg: "The prime more than the 10!",
  // });
  const [error, setError] = useState<{
    validateStatus:
      | ""
      | "success"
      | "error"
      | "warning"
      | "validating"
      | undefined;
    errorMsg: string;
  }>({
    validateStatus: undefined,
    errorMsg: "",
  });

  const onValuesChange = (val: any) => {
    console.log({ val });
  };

  return (
    <Form onValuesChange={onValuesChange}>
      <Button
        onClick={() => {
          setError({
            validateStatus: "error",
            errorMsg: "hello world",
          });
        }}
      >
        设置错误信息, hello world
      </Button>
      <Button
        onClick={() => {
          setError({
            validateStatus: undefined,
            errorMsg: "",
          });
        }}
      >
        清除错误信息
      </Button>
      <Form.Item
        {...formItemLayout}
        label="Prime more than 10"
        validateStatus={error.validateStatus}
        help={error.errorMsg}
        rules={[
          { required: true, message: `Name can't be empty` },
          { max: 10, message: `At most 200 chars for name` },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default RawForm;
