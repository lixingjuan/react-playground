import React, { useState } from "react";
import { Form, InputNumber, Input } from "antd";

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
  const [number, setNumber] = useState<any>({
    value: 11,
    validateStatus: "error",
    errorMsg: "The prime more than the 10!",
  });
  const tips =
    "A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.";

  const onNumberChange = (value: any) => {
    setNumber({ ...validatePrimeNumber(value), value });
  };

  const onFieldsChange = (val: any) => {
    console.log({ val });
  };

  return (
    <Form onFieldsChange={onFieldsChange}>
      <Form.Item
        {...formItemLayout}
        label="Prime more than 10"
        validateStatus={"error"}
        help={"help help help"}
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
