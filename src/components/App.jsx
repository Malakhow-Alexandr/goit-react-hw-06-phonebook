import { ContactsList } from './contactsList/ContactLis';
import { ContactForm } from './contactForm/ContactForm';
import { ContactFilter } from './ContactFilter/Filter';
import { Section } from './Section/Section';
import { Container } from './Container/Container.styled';

export const App = () => {
  // const normalizedFilter = filter.toLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm></ContactForm>
      </Section>

      <Section title={'Contacts'}>
        <ContactFilter />
        <ContactsList />
      </Section>
    </Container>
  );
};
