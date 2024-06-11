import React from 'react';

const education = [
  {
    title: "Full Stack Open",
    desc: "Helsinski University | 2024 ~",
  },
  {
    title: "Full Stack Web Developer",
    desc: "FreeCodeCamp | 2023 - 2024",
  },
  {
    title: "Data Science",
    desc: "SoyHenry | 2023",
  },
  {
    title: "Data Engineer",
    desc: "IBM | 2023",
  },
  {
    title: "EF Set",
    desc: "C2 Proficient | 2024",
  },
  {
    title: "IELTS",
    desc: "C2 Proficient | 2022",
  },
];

const Education: React.FC = () => {
  return (
    <div>
      {education.map((edu, index) => (
        <div key={index} className="education">
          <h3>{edu.title}</h3>
          <p>{edu.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Education