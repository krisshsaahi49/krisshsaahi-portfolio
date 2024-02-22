"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Krissh Portfolio Website",
    description: "Welcome to my portfolio website, meticulously designed using Next.js and Tailwind CSS, and seamlessly hosted on Vercel! Here, I proudly showcase my diverse skill set, encompassing a wide range of technologies and tools such as JavaScript, React, Node.js, Python, and more. Explore my Projects section to discover a curated collection of my notable works, each demonstrating my problem-solving abilities and attention to detail",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krisshsaahi49/krisshsaahi-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Life Source",
    description: "The prime motive of this project is to connect donors and recipients by storing blood donor information on our website to provide everyone with safe and hygienic blood which could be used for whole blood donation, platelet donation, plasma transfusion and double red cell transfusion",
    image: "/images/projects/lifesource.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krisshsaahi49/Life-Source",
    previewUrl: "https://lifesource.netlify.app/",
  },
  {
    id: 3,
    title: "Sweetwater music center booking",
    description: "The SMC Booking App, a web-based portal developed using React, Next.js, Tailwind CSS, and Baserow as a database, revolutionizes music creation at Purdue Fort Wayne. Students and faculty can seamlessly book recording studios, rehearsal spaces, and edit & collab suites, fostering a vibrant and collaborative music scene.",
    image: "/images/projects/smc.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/krisshsaahi49/smcWebsite",
    previewUrl: "https://smc-booking-pfw.netlify.app/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
