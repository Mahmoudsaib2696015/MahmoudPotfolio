import Classes from "./Contact.module.css";
import { useState } from "react";
import emailValidator from "email-validator";
import styles from "./Contact.module.css";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";

export default function Contact() {
  const [email, setemail] = useState("");
  const [emailTouched, setemailTouched] = useState(false);
  const handleInputemail = (event) => {
    setemail(event.currentTarget.value);
    setemailTouched(true);
  };

  const [nom, setNom] = useState("");
  const [nomTouched, setNomTouched] = useState(false);
  const handleInputNom = (event) => {
    setNom(event.currentTarget.value);
    setNomTouched(true);
  };

  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);
  const handleInputMessage = (event) => {
    setMessage(event.currentTarget.value);
    setMessageTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setemailTouched(true);

    setNomTouched(true);

    setMessageTouched(true);

    if (email !== "" && emailValidator.validate(email)) {
      console.log(nom);
      console.log(email);
      console.log(message);

      setemail("");
      setemailTouched(false);
      setNom("");
      setNomTouched(false);
      setMessage("");
      setMessageTouched(false);
    }
  };
  return (
    <div className={Classes.Projets} id="Projet2">
      <Helmet>
        <title>Contact - Portfolio Mahmoud SAIB</title>
        <meta name="desc" content="Contact info de Mahmoud SAIB" />
      </Helmet>
      <Header title={"Pour me contacter"}></Header>
      <form noValidate className={styles.Contact} onSubmit={handleSubmit}>
        <label>
          Nom complet:
          <input
            type="text"
            value={nom}
            onChange={handleInputNom}
            placeholder="Votre nom.."
          />
        </label>
        {nomTouched && nom === "" && (
          <div className={styles.erreur}>Entrez votre nom</div>
        )}
        {emailTouched && !emailValidator.validate(email) && (
          <div className={styles.erreur}>Entrez un nom valide</div>
        )}
        <label>
          email:
          <input
            type="email"
            value={email}
            onChange={handleInputemail}
            placeholder="Votre email.."
          />
        </label>
        {emailTouched && email === "" && (
          <div className={styles.erreur}>Entrez votre email</div>
        )}
        {emailTouched && !emailValidator.validate(email) && (
          <div className={styles.erreur}>entrez une adresse email valide.</div>
        )}

        <label>
          Votre message:
          <input
            type="message"
            value={message}
            onChange={handleInputMessage}
            placeholder="Votre message.."
          />
        </label>
        {messageTouched && message === "" && (
          <div className={styles.erreur}>Ecrire un message</div>
        )}

        <input type="submit" value="Soummetre votre demande" />
      </form>
    </div>
  );
}
