import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
const ContactList = ({ contactsData, delContact }) => {
  return (
    <div>
      <ul className={css.cardList}>
        {contactsData.map((contact) => (
          <li className={css.cardItem} key={contact.id}>
            <Contact {...contact} delContact={delContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
