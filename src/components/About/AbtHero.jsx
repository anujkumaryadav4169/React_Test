import "./About.css";

function AbtHero({ bio }) {
  return (
    <section className="hero">
      <h1>About Me</h1>
      <p>{bio}</p>
    </section>
  );
}

export default AbtHero;