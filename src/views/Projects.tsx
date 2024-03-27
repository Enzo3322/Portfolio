import { LangContext } from "@/context/context";
import { useContext } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Projects() {
  const { lang } = useContext(LangContext);

  const projects = [
    {
      title: "Sfera Construções e Reformas",
      image: "/assets/company/sfera.png",
      link: "https://sferaconstrucoes.com",
    },
    {
      title: "NCS Consultoria Integrada",
      image: "/assets/company/ncs.png",
      link: "https://ncsconsultoriaintegrada.com",
    },
  ];

  return (
    <section id="projects" className="md:p-10">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div className="h-52 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-52 m-auto"
              />
            </div>
            <h3 className="text-xl font-bold mt-5">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              className="block mt-5 border p-2 rounded text-center hover:bg-[#222] hover:text-white transition-all"
            >
              {lang === "en" ? "View project" : "Ver projeto"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
