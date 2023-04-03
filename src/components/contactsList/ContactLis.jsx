import { ContactListItem } from 'components/contactsListItem/ContactsListItem';
import { ListStyled } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ListStyled>
      {filteredContacts?.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ListStyled>
  );
};
