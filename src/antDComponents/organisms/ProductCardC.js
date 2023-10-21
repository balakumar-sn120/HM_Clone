// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";
import ColorIconList from "../../Components/atoms/ColorIconList";

const { Meta } = Card;
const App = ({
  withModelImg,
  withoutModelImg,
  name,
  formattedAmount,
  rgbColors,
  sellingAttributes,
  isModelImg = true,
  isLoading = false,
}) => {
  const imgArr = [withModelImg, withoutModelImg];
  const [img, setImg] = useState(imgArr[isModelImg ? 0 : 1]);
  const flipImage = () => {
    setImg(imgArr[Number(!imgArr.indexOf(img))]);
  };
  return (
    <Card
      onMouseEnter={() => flipImage()}
      onMouseLeave={() => flipImage()}
      hoverable={true}
      style={{
        textAlign: "left",
        borderRadius: 0,
      }}
      loading={isLoading}
      cover={<img alt={name} style={{ borderRadius: 0 }} src={img} />}
    >
      <Meta title={name} />
      <p className="font-semibold">{formattedAmount}</p>
      <ColorIconList rgbColors={rgbColors} />
      {sellingAttributes ? (
        sellingAttributes.map((sellingAttr) => {
          return <p>{sellingAttr}</p>;
        })
      ) : (
        <></>
      )}
    </Card>
  );
};
export default App;
