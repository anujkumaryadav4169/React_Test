import profile from "../assets/hero.png";

const data = {
  name: "Anuj Yadav",

  tag: "Frontend Developer",

  shortBio:
    "I am a passionate Frontend Developer who enjoys building responsive and user-friendly websites using React.",

  fullBio:
    "Hello! I'm Anuj Yadav, a Frontend Developer with a strong interest in React.js and modern web development. I enjoy creating responsive websites, learning new technologies, solving coding problems, and improving my development skills through projects and continuous practice.",

  image: profile,

  skills: [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"]
    },

    {
      title: "Programming",
      items: ["C", "C++", "Java"]
    },

    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma"]
    }
  ],

  projects: [
    {
      title: "Portfolio Website",
      bio: "Personal portfolio website built using React.",
      tags: ["React", "CSS"]
    },

    {
      title: "Campus Course Hub",
      bio: "Online course management website.",
      tags: ["React", "JavaScript"]
    }
  ]
};

export default data;