import { useContext, useRef, useState } from "react"
import InputWithLabel from "../common/InputWithLabel.jsx"
import Typography from "../common/Typography.jsx"
import { UserContext } from "../../main.jsx"


function LoginForm() {
  const {user, setUser} = useContext(UserContext)
  const [errors, setErrors] = useState([])

  const logRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    setUser(null)
    setErrors([])

    const email = logRef.current.elements[0].value
    const password = logRef.current.elements[1].value

    if(!email.includes("@"))
    setErrors((previousValue) => {
      return [...previousValue, " format d'email incorrect "]
    })

    if(password === "")
    setErrors((previousValue) => {
      return [...previousValue, " pas de mot de passe "]
    })

    if (errors.length > 0) {
      return
    }

    const request = await fetch("http://passerelle-shop-api.julienpoirier-webdev.com/users/login", {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify({email, password})
    })

    const data = await request.json()

    if(data.jwt) {
      setUser(data);
    }
  }
    return (
      <div className="m-16 mt-20 bg-dark_primary p-20">
      <Typography variant="white" tag="h1" customClasses={"text-4xl font-semibold mb-4 text-center"}>Se connecter</Typography>
  
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form ref={logRef}>
  
          <div className="flex gap-8">
            <InputWithLabel label="Email" name="email" id="email" type="email" />
            <InputWithLabel label="Mot de passe" name="password" id="password" type="password" />
            
          </div>
          <button onClick={handleLogin} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Se connecter</button>
  
        </form>
        <div>{
          user ? <p>Vous êtes connecté</p> : errors}
        </div>
      </div>
    </div>
    )
  }
  
  export default LoginForm