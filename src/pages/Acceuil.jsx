import Classes from "./Acceuil.module.css";
import portrait from "../resources/Mahmoud.jpg";
import { Helmet } from "react-helmet-async";
const Acceuil = () => {
  return (
    <div className={Classes.Acceuil}>
      <Helmet>
        <title>Accueil - Portfolio Mahmoud SAIB</title>
        <meta name="desc" content="presentation de Mahmoud SAIB" />
      </Helmet>
      <div className={Classes.container}>
        <h1 className={Classes.Hello}>&lt;&gt;Hello! world.&lt;/&gt;</h1>
        <h1>Je suis Mahmoud, bienvenue sur mon portfolio.</h1>
        <p>
          Je suis Mahmoud et je suis un developeur en informatique, Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Quae suscipit rem
          consequuntur, magni consequatur sequi omnis ipsam alias vel!
          Perspiciatis dolorem nesciunt exercitationem harum, pariatur est
          cumque veniam nostrum delectus!
        </p>
      </div>
      <img className={Classes.portrait} src={portrait} alt="portrait"></img>
    </div>
  );
};
export default Acceuil;
