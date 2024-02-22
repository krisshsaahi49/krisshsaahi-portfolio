"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors in chemical engineering, JNTU Kakinada</li>
        <li>Master&apos;s in computer science, Purdue University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
  {
    title: "Full Stack Development",
    id: "web",
    content: (
        <ul className="list-disc pl-2">
          <li>I&apos;m a full-stack web developer with a passion for crafting interactive and responsive web applications. </li>
          <li>I leverage my expertise in JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git to bring ideas to life. </li>
          <li>Not only do I possess a thirst for learning and expanding my skillset, but I also bring a team player spirit to the table, excited to collaborate on building outstanding applications.</li>
        </ul>
    ),
  },
  {
    title: "QA Automation",
    id: "qa",
    content: (
        <ul className="list-disc pl-2">
          <li>Furthermore, I&apos;m proficient in QA automation, wielding tools like Selenium, Postman, and Java to streamline testing processes across web and API functionalities.</li>
          <li>My experience encompasses writing automated tests using frameworks like TestNG, BDD, and TDD, as well as managing build processes with Maven and Gradle. </li>
          <li>Additionally, I have hands-on experience with performance testing tools like JMeter and mobile testing frameworks like Appium, offering a comprehensive understanding of software quality assurance.</li>
        </ul>
    ),
  },
  {
    title: "Machine Learning",
    id: "ml",
    content: (
        <ul className="list-disc pl-2">
          <li>Additionally, I have a keen interest in machine learning and actively explore its potential to enhance web applications.</li>
          <li>While still in the learning phase, I possess a solid understanding of core concepts like supervised and unsupervised learning, algorithms like linear regression and decision trees, and libraries like TensorFlow. </li>
          <li>I&apos;m eager to apply this knowledge to real-world problems, implementing features like intelligent predictions, personalized recommendations, and data-driven decision-making within web applications.</li>
        </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab1, setTab1] = useState("web"); // For Full Stack Development
  const [tab2, setTab2] = useState("skills"); // For Skills
  const [isPending, startTransition] = useTransition();

  const handleTabChange1 = (id) => {
    startTransition(() => {
      setTab1(id);
    });
  };

  const handleTabChange2 = (id) => {
    startTransition(() => {
      setTab2(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:flex md:justify-between gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* About Me Section */}
        <div className="md:w-1/2">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="flex flex-row justify-start mt-8 space-x-4">
              <TabButton
                selectTab={() => handleTabChange1("web")}
                active={tab1 === "web"}
              >
                Full Stack Development
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange1("qa")}
                active={tab1 === "qa"}
              >
                QA
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange1("ml")}
                active={tab1 === "ml"}
              >
                Machine Learning
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab1).content}
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="md:w-1/2">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
            <div className="flex flex-row justify-start mt-8 space-x-4">
              <TabButton
                selectTab={() => handleTabChange2("skills")}
                active={tab2 === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange2("education")}
                active={tab2 === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange2("certifications")}
                active={tab2 === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab2).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
};

export default AboutSection;

