import PropTypes from 'prop-types';
import {
  ListItemStyled,
  ButtonListItem,
  ContactDesc,
} from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ListItemStyled>
        <ButtonListItem
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          <span>Delete</span>
        </ButtonListItem>
        <ContactDesc>{number}</ContactDesc>
        <ContactDesc>{name} :</ContactDesc>
      </ListItemStyled>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
