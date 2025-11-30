import React, { useState } from "react";
import "./Skills.css";

const allSkills = [
  { name: "HTML5", level: 95, description: "Estruturas semânticas e acessibilidade", category: "frontend" },
  { name: "CSS3", level: 90, description: "Layouts responsivos, Flexbox, Grid, Animações", category: "frontend" },
  { name: "JavaScript", level: 92, description: "ES6+, DOM, APIs, Promessas, Async/Await", category: "frontend" },
  { name: "ReactJS", level: 88, description: "Hooks, Context, Redux, Performance", category: "frontend" },
  { name: "NodeJS", level: 85, description: "Express, REST APIs, Middleware", category: "backend" },
  { name: "TypeScript", level: 88, description: "Tipagem estática, interfaces e generics", category: "backend" },
  { name: "MongoDB", level: 80, description: "NoSQL, queries, indexação e agregação", category: "backend" },
  { name: "MySQL", level: 82, description: "SQL, schemas, relacionamentos e otimização", category: "backend" },
  { name: "Bootstrap", level: 85, description: "Componentes rápidos e UI responsiva", category: "frontend" },
  { name: "APIs RESTful", level: 87, description: "Design, autenticação, validação", category: "backend" },
];

const SkillBar = ({ name, level }) => (
  <div className="skill-item">
    <div className="skill-header">
      <span className="skill-name">{name}</span>
      <span className="skill-level">{level}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${level}%` }} />
    </div>
  </div>
);

const SkillsPage = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="skills-page">
      <div className="skills-header">
        <h1>Minhas Habilidades</h1>
        <p>Desenvolvimento Full Stack com foco em qualidade e performance</p>
      </div>
      <div className="skills-timeline">
        <div className="timeline-track">
          {allSkills.map((skill, index) => {
            const isLeft = index % 2 === 0;
            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={skill.name}
                className={`timeline-item ${isLeft ? 'left' : 'right'} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="timeline-content">
                  <div className={`skill-card ${isHovered ? 'expanded' : ''}`}>
                    <SkillBar name={skill.name} level={skill.level} />
                    {isHovered && (
                      <p className="skill-description">{skill.description}</p>
                    )}
                  </div>
                </div>
                <div className="timeline-dot" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default SkillsPage