import SkillCard from "./SkillCard";

function SkillSection({ skills }) {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            items={skill.items}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;