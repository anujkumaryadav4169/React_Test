import "./Home.css";
import { useNavigate } from "react-router-dom";
import data from "../data/data";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <h1>Hello</h1>

      <h2>My name {data.name}</h2>

      <p>{data.shortBio}</p>

      <div className="profile-card">
        <img
          src={data.image}
          alt={data.name}
          className="profile-image"
        />
      </div>

      <button onClick={() => navigate("/about")}>
        Know More
      </button>

    </div>
  );
}

export default Home;