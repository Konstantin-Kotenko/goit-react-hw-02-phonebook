import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.ml};
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: ${({ theme }) => theme.space.m};
`;

const Button = styled.button`
  border: ${({ theme }) => theme.radii.none};
  border-radius: ${({ theme }) => theme.radii.none};
  cursor: pointer;
`;

export const ContactItem = ({ name, id, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      <Text>
        {name} : {number}
      </Text>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
