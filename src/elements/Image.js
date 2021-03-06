import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size, margin,marginTop ,marginRight, position} = props;

  const styles = {
    src: src,
    size: size,
    position: position,
    margin:margin,
    marginTop:marginTop,
    marginRight:marginRight,
  };

  // 이미지가 동그라미일 때
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  // 이미지가 네모일 때
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://photo.jtbc.joins.com/news/2021/03/26/202103261532034842.jpg",
  size: 36,
  position: "center",
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  margin:'';
  marginTop:'';
  marginRight:'';
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
  width: var(--size);
  height: var(--size);
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: ${(props) => props.position};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${(props) => (props.marginRight ? `margin-right: ${props.marginRight};` : "")}
`;

export default Image;
