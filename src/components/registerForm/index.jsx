import { useState , useRef } from "react";
import InputWithLabel from "../common/InputWithLabel.jsx";
import Typography from "../common/Typography.jsx";


const AddressForm = () => {
    return (
      <div className="mb-4">
        <InputWithLabel label="Adresse" name="addressLine1" id="addressLine1" />
        <InputWithLabel label="Ville" name="city" id="city" />
        <InputWithLabel label="Etat" name="state" id="state" />
        <InputWithLabel label="Code postal" name="postalCode" id="postalCode" />
        <InputWithLabel label="Pays" name="country" id="country" />
      </div>
    );
  };
  
  const PersonalForm = () => {
    return (
      <div className="mb-4">
        <InputWithLabel label="Votre nom" name="name" id="name" />
        <InputWithLabel label="Email" name="email" id="email" type="email" />
        <InputWithLabel label="Mot de passe" name="password" id="password" type="password" />
        <InputWithLabel label="Confirmation du mot de passe" name="passwordConfirm" id="passwordConfirm" type="password" />
      </div>
    );
  };
  
  function RegisterForm() {
    const [error, setError] = useState(undefined);

    const formRef = useRef(null);

    const handleRegister = async (event) => {
      event.preventDefault()

      console.log("J'ai cliqué sur m'inscrire")
      // console.log(formRef.current)

      const formData = new FormData(formRef.current);

      if (formData.get("password") !== formData.get("passwordConfirm")) {
        setError("Les mots de passe ne sont pas identiques")
        return
      }

      // est-ce que l'email est valide ? Il faut vérifier !
    //todo possible : améliorer la regex pour être plus précis
    
    if(!formData.get("email").includes("@")) {

      setError("L'email n'est pas valide")
      return
    }
    
      const myBody = {
      name: formData.get("name"),
      email: formData.get("email"),
      password:formData.get("password"),
      address : { 
        addressLine1: formData.get("addressLine1"),
        city: formData.get("city"),
        state: formData.get("state"),
        postalCode: formData.get("postalCode"),
        country: formData.get("country")
      }
    }
    // handle cors
    const request = await fetch("http://passerelle-shop-api.julienpoirier-webdev.com/users/register", {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify(myBody)
    })

    const data = await request.json()
  }
    return (
      <div className="m-16 mt-20 bg-dark_primary p-20">
       <Typography variant="white" tag="h1" customClasses={"text-4xl font-semibold mb-4 text-center"}>S'inscrire</Typography>
  
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <form ref={formRef}>
  
            <div className="flex gap-8">
                <PersonalForm /> 
                <AddressForm />
            </div>
            <button onClick={handleRegister} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">S'inscrire</button>
  
          </form>
          <div>{error}</div>
        </div>
      </div>
    )
  }
  
  export default RegisterForm