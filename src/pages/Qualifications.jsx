import Classes from "./Qualifications.module.css";
import Header from "../components/Header";
import portrait from "../resources/Untitled.png";
import { Helmet } from "react-helmet-async";

const Qualifications = () => {
  return (
    <div className={Classes.Qualifications} id="Projet1">
      <Helmet>
        <title>Projet 1 - Portfolio Mahmoud SAIB </title>
        <meta name="desc" content="Premier projet de Mahmoud SAIB" />
      </Helmet>
      <Header title={"Un de mes projets web"}></Header>
      <div className={Classes.container}>
        <div className={Classes.text}>
          <h2>
            SITE WEB DE SENSIBILISATION AU CHANGEMENT CLIMATIQUE POUR LES JEUNES
          </h2>
          <p>
            {" "}
            Un site web de sensibilisation au changement climatique pour les
            jeunes avec l'évaluation des habitudes de l'utilisateur concernant
            leur impact sur l'environnement et leur donner une analyse de leurs
            performances et comment ils peuvent les améliorer afin de contribuer
            à protéger la planète et leur donner une meilleure connaissance sur
            ce sujet. que j'ai fait avec Html, css et javascript ote frontend,
            et sql et node,js cote backend
          </p>
        </div>
        <div className={Classes.image}>
          <img className={Classes.portrait} src={portrait} alt="portrait"></img>
        </div>
      </div>
    </div>
  );
};
export default Qualifications;
