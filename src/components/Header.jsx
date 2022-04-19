import Classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={Classes.container}>
      <hr />
      <h1>{props.title}</h1>
    </div>
  );
};
export default Header;
