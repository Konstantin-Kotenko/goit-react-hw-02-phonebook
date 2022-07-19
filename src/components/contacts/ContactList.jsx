import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

const List = styled.ul`
  width: 320px;
`;

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
