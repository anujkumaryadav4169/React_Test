function SkillCard({ title, items }) {
  return (
    <div className="skill-card">

      <h3>{title}</h3>

      <div className="skill-items">
        {items.map((item, index) => (
          <span className="skill-item" key={index}>
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}

export default SkillCard;