import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users">Vai alla pagina Users</Link>
    </div>
  );
};

export default Home;
