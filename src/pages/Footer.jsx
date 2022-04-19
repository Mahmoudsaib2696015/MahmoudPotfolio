import Classes from "./Footer.module.css";
import Header from "../components/Header";

const Footer = () => {
  return (
    <div className={Classes.Footer}>
      <Header title={"Mes infos"}></Header>
      <div className={Classes.container}>
        <h1>
          J'aimerais avoir l'opportunité de travailler avec une équipe où je
          peux montrer mon plein potentiel, alors n'hésitez pas à me contacter
          si vous pensez que vous avez le bon travail pour moi.
        </h1>
        <div className={Classes.articfooter}>
          <h2>Information de contact :</h2>
          <ul>
            <li>Mahmoud SAIB</li>
            <li>Email: mud.saib@gmail.com</li>
            <li>Cell: 514-602-3895</li>
            <li>In : Linkedin.com\mahmoud.saib</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
