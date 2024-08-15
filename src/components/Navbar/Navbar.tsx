import "./navbar.scss";
import { INavbar } from "../../interfaces/interfaces";

export default function Navbar(props: INavbar) {
  const { home, about, contact, logo, button, setButton } = props;
  return (
    <>
      <ul>
        <li>
          <a href="">{logo}</a>
        </li>
        <li>
          <a href="">{home}</a>
        </li>
        <li>
          <a href="">{about}</a>
        </li>
        <li>
          <a href="">{contact}</a>
        </li>
        <button
          onClick={() => {
            setButton(!button);
          }}
        >
          {button ? "login" : "logout"}
        </button>
      </ul>
    </>
  );
}
