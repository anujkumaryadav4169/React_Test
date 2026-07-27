import Navbar from "../components/Navbar/Navbar";
import AbtHero from "../components/About/AbtHero";
import SkillSection from "../components/About/SkillSection";
import ProjectSection from "../components/About/ProjectSection";
import data from "../data/data";

function About() {
  return (
    <>
      <Navbar name={data.name} tag={data.tag} />
      <AbtHero bio={data.fullBio} />
      <SkillSection skills={data.skills} />
      <ProjectSection projects={data.projects} />
    </>
  );
}

export default About;