import { Button } from "antd";
import { AllProps } from "../utils";
import styled from "styled-components";

const BtnPreviewStyle = styled.div`
  margin: 20px;
  button {
    margin-left: 20px;
  }
`;

export default function BtnPreview({ pdf }: AllProps) {
  const handlePreviewCurrentPage = () => {
    if (!pdf) {
      console.error("请传入pdf实例");
    }

    var iframe = document.createElement("iframe");
    iframe.setAttribute(
      "style",
      "position:absolute;right:0; top:0; bottom:0; height:100%; width:500px"
    );
    document.body.appendChild(iframe);
    iframe.src = pdf.output("datauristring");
  };

  const handlePreviewNewPage = () => {
    if (!pdf) {
      console.error("请传入pdf实例");
    }
    pdf.output("dataurlnewwindow");
  };

  return (
    <BtnPreviewStyle>
      <Button onClick={handlePreviewNewPage}>打开新窗口预览</Button>

      <Button type="primary" onClick={handlePreviewCurrentPage}>
        当前页面预览
      </Button>

      <Button
        type="primary"
        style={{ marginLeft: "20px" }}
        onClick={() => pdf.save("lixingjuan.pdf")}
      >
        保存pdf
      </Button>
    </BtnPreviewStyle>
  );
}
