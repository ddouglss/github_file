import {UserProps} from "../types/user.ts";
import Search from "../components/Search.tsx";

import {useState} from "react";

import User from "../components/User.tsx";


const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setUser(data);

   const {avatar_url, login, location, followers, following} = data;

   const userData: UserProps = {
     avatar_url,
     login,
     location,
     followers,
     following,
   };
   setUser(userData);
  }

  return(
  <div>
    < Search loadUser={ loadUser}/>
    {user && <User {...user} />}
  </div>
  );
};

export default Home;