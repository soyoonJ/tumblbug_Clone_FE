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
  display: block;
  ${(props) => (props.bold ? `font-weight: bold;` : '')}
`;

Label.defaultProps = {
  bold: false,
};

const Input = styled.input`
  margin: 0 29px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid rgb(189, 189, 189);
  color: rgb(61, 61, 61);
  cursor: pointer;
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
`;

export default Checkbox;
