import ProjectCard from "./ProjectCard";

function ProjectSection({ projects }) {
  return (
    <section className="project-section">

      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            bio={project.bio}
            tags={project.tags}
          />
        ))}
      </div>

    </section>
  );
}

export default ProjectSection;