import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";

function Card({
  image,
  title,
  description,
  githubImg,
  websiteImg,
  githubLink,
  websiteLink,
}) {
  const [opac, setOpac] = useState(0)
  const [y, setY] = useState(150);

  setTimeout(() => {
    setY(0);
    setOpac(1)
  }, 100);
  return (
    <motion.div className="flex flex-col m-2 justify-center items-center rounded-xl card border-2" initial={{ opacity: 0 }} animate={{ y, opacity: opac, transition: { type: "spring" }}}>
      <div>
        <img
          src={image}
          alt="random"
          className="rounded-t-xl"
          width={"400px"}
          height={"auto"}
        />
      </div>
      <div className="w-full text-center dark:bg-header-gray bg-off-text-colour rounded-b-xl h-full flex flex-col items-center">
        <div>
          <h1 className="text-3xl pt-2 px-2 dark:text-text-colour text-black-text font-bold">{title}</h1>
        </div>
        <div>
          <p className="dark:text-off-text-colour text-off-black p-2">{description}</p>
        </div>
        <div>
          <button>
            <a href={githubLink} target="_blank">
              <img
                src={githubImg}
                alt=""
                width="20px"
                className="m-2 invert-0 dark:invert"
              />
            </a>
          </button>
          <button className="ml-2">
            <a href={websiteLink} target="_blank">
              <img
                src={websiteImg}
                alt=""
                width="20px"
                className="m-2 invert-0 dark:invert"
              />
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
