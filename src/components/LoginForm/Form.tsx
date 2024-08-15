import { ChangeEvent, useState } from "react";
import { IData } from "../../interfaces/interfaces";
import { InputData } from "../../data/data";

export default function Form(props: IData) {
  const { setButton, data, setdata } = props;
 const [inputState, setInputState] = useState(InputData);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  const onChangeHndler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = event.target;
    console.log(value, name, type);

    setdata({
      ...data,
      [name]: value, //username:abanoub // email:abanoub@gmail // password:12345
      // [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >

        {InputData.map((input,index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <div>
                <label htmlFor={input.id}>{input.label} : </label>
                <input
                  type={input.type}
                  name={input.name}
                  id={input.id}
                  value={data[input.name]}
                  onChange={onChangeHndler}
                />
              </div>
              <button onClick={()=>{
                const filtered=inputState.filter((inp) => inp.name !== InputData[index]["name"]);
                setInputState(filtered);
                console.log(`delete ${index}`, inputState);
              }}>X</button>
            </div>
          );
        })}

        {/* <label htmlFor="e">email : </label>
        <input
          type="email"
          name="email"
          id="e"
          value={data.email}
          onChange={onChangeHndler}
        />

        <br />
        <label htmlFor="p">password : </label>
        <input
          type="password"
          name="password"
          id="p"
          value={data.password}
          onChange={onChangeHndler}
        />
        <br /> */}

        <input
          type="submit"
          onClick={() => {
            setButton(false);
          }}
        />
      </form>
    </>
  );
}

// // const person = {
// //   personname: "abanoub",
// //   age: 20,
// //   personname:'ali',
// // };

// // console.log(person.personname); //ali

// setdata({
//   // ...data,
//   username: "",
//   email: "",
//   password: "",

//   username: "abanoub",
//   email: "abanoub@gmail",
//   password: 12345,
//   // [name]: value, //username:abanoub // email:abanoub@gmail // password:12345
// });
