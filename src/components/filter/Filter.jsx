import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

const Input = styled.input`
  width: 200px;
  margin-top: ${({ theme }) => theme.space.ml};
`;

export const Filter = ({ value, onChange }) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
