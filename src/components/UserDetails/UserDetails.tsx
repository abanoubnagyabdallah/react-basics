
export default function UserDetails(Props: {
  username: string;
  email: string;
  password: string;
}) {
  console.log(Props);

  return (
    <>
      <h1>username : {Props.username}</h1>
      <h1>email : {Props.email}</h1>
      <h1>password : {Props.password}</h1>
    </>
  );
}
