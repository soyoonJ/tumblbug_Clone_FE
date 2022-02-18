import styled from 'styled-components';

const Checkbox = (props) => {
  const { text, bold } = props;

  const styles = {
    bold: bold,
  };

  return (
    <Label {...styles}>
      <Input type="checkbox"></Input>
      {text}
    </Label>
  );
};

const Label = styled.label`
  font-size: 14px;
  display: block;
  ${(props) => (props.bold ? `font-weight: bold;` : '')}
  color: rgb(61, 61, 61);
`;

Label.defaultProps = {
  bold: false,
};

const Input = styled.input`
  margin: 0 10px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  color: rgb(61, 61, 61);
  cursor: pointer;
  vertical-align: middle;
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
  border: 1px solid rgb(189, 189, 189);
  background: rgb(255, 255, 255);
`;

export default Checkbox;
