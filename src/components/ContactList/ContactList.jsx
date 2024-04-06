import { useSelector } from "react-redux";

import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { Contact } from "../Contact/Contact";

const getVisibleContacts = (contacts, nameFilter) => {
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
};
export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter);
    const visibleContacts = getVisibleContacts(contacts, nameFilter);
    return (
        <ul className={css.list}>
            {contacts.length === 0 && <p>Create your first contact 😉</p>}
            {visibleContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact contact={contact}></Contact>
                </li>
            ))}
        </ul>
    );
};
