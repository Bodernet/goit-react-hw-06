import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ id, number, name, delContact }) => {
  return (
    <div className={css.container}>
      <div className={css.contactNameNumber}>
        <p className={css.contact}>
          <span>
            <IoPersonSharp />
          </span>
          <span className={css.textariae}>{name}</span>
        </p>
        <p className={css.contact}>
          <span>
            <FaPhone />
          </span>
          <span className={css.textariae}>{number}</span>
        </p>
      </div>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => delContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
