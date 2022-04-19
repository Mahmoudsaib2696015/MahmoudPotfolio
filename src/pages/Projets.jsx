import Classes from "./Projets.module.css";
import Header from "../components/Header";
import portrait from "../resources/Capture.PNG";
import { Helmet } from "react-helmet-async";

const Projets = () => {
  return (
    <div className={Classes.Projets} id="Projet2">
      <Helmet>
        <title>Projet 2 - Portfolio Mahmoud SAIB</title>
        <meta name="desc" content="Deuxieume projet de Mahmoud SAIB" />
      </Helmet>
      <Header title={"Un de mes applications bureau"}></Header>
      <div className={Classes.container}>
        <div className={Classes.text}>
          <h2>
            APPLICATION BUREAU POUR LA GESTION DES STAGAIRE DANS MULTI-PROGRAMME
          </h2>
          <p>
            {" "}
            Une application faite pour la gestion des stagesdes etudiants dans
            des differents programme, elle etait faite en c# et SQL, c'est un
            demain ou j'excel, Je pouvais aussi la faire en Java, ou comme
            application de apareils mobile sois avec de systeme Android ou iOS.
          </p>
        </div>
        <div className={Classes.image}>
          <img className={Classes.portrait} src={portrait} alt="portrait"></img>
        </div>
      </div>
    </div>
  );
};
export default Projets;
