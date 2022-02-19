import styled from 'styled-components';

const Checkbox = (props) => {
  const { text } = props;

  return (
    <Label>
      <Input type="checkbox"></Input>
      {text}
    </Label>
  );
};

const Label = styled.label``;
const Input = styled.input``;

export default Checkbox;
