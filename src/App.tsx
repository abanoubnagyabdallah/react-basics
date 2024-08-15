import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/LoginForm/Form";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  const logo: string = "codeawy";
  const [button, setButton] = useState(true);

  const [data, setdata] = useState({ username: "", email: "", password: "" });
  

  return (
    <>
      <Navbar
        logo={logo}
        home="home"
        about="about"
        contact="contact us"
        button={button}
        setButton={setButton}
      />
      {!button ? (
         <UserDetails
          username={data.username}
          email={data.email}
          password={data.password}
        />
      ) : (
        <Form setButton={setButton} data={data} setdata={setdata} />
      )}

      
    </>
  );
}

export default App;
