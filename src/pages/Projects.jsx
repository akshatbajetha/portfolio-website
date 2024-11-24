import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components";
import githubLogo from "../assets/github.png";
import websiteLogo from "../assets/website.png";
import BlogNationImage from "../assets/blog-nation.png";
import TasklyImage from "../assets/taskly.png";
import GrooveBeatsImage from "../assets/groove-beats.png";
import ChatzyImage from "../assets/chatzy.png";

function Projects() {
  const chatzy = {
    image: ChatzyImage,
    title: "Chatzy",
    description: "A realtime chat app made with MERN stack and Socket.IO",
    githubLink: "https://github.com/akshatbajetha/chatzy",
    websiteLink: "https://chatzy-sasu.onrender.com/",
  };

  const blogNation = {
    image: BlogNationImage,
    title: "Blog Nation",
    description:
      "A full stack blogging website, where users can login/signup, view, create and edit blogs.",
    githubLink: "https://github.com/akshatbajetha/blog-nation",
    websiteLink: "https://bloggingnation.vercel.app/",
  };

  const taskly = {
    image: TasklyImage,
    title: "Taskly",
    description:
      "A To-do list project made in React using functionalities of Context API, and storing data in the Local Storage.",
    githubLink: "https://github.com/akshatbajetha/todo-react",
    websiteLink: "https://taskly-todo.vercel.app/",
  };

  const grooveBeats = {
    image: GrooveBeatsImage,
    title: "Groove Beats",
    description:
      "A Responsive Spotify UI Clone, made as a practice and learning project",
    githubLink: "https://github.com/akshatbajetha/spotify-clone",
    websiteLink: "https://groove-beats.vercel.app/",
  };

  return (
    <div className="flex flex-col justify-center items-center dark:bg-background bg-white-background">
      <h1 className="dark:text-text-colour text-black-text heading font-bold orange-gradient heading mb-4">
        Projects
      </h1>
      <div className="flex flex-wrap justify-around cards">
        <Card
          image={ChatzyImage}
          title={chatzy.title}
          description={chatzy.description}
          githubImg={githubLogo}
          websiteImg={websiteLogo}
          githubLink={chatzy.githubLink}
          websiteLink={chatzy.websiteLink}
        />
        <Card
          image={BlogNationImage}
          title={blogNation.title}
          description={blogNation.description}
          githubImg={githubLogo}
          websiteImg={websiteLogo}
          githubLink={blogNation.githubLink}
          websiteLink={blogNation.websiteLink}
        />

        <Card
          image={TasklyImage}
          title={taskly.title}
          description={taskly.description}
          githubImg={githubLogo}
          websiteImg={websiteLogo}
          githubLink={taskly.githubLink}
          websiteLink={taskly.websiteLink}
        />

        <Card
          image={GrooveBeatsImage}
          title={grooveBeats.title}
          description={grooveBeats.description}
          githubImg={githubLogo}
          websiteImg={websiteLogo}
          githubLink={grooveBeats.githubLink}
          websiteLink={grooveBeats.websiteLink}
        />
      </div>
    </div>
  );
}

export default Projects;
