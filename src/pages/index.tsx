/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { messages } from "../messages";
import { LangContext } from "@/context/context";

export default function Home() {
  const { lang } = useContext(LangContext);

  const hero = messages.hero[lang];
  const about = messages.about[lang];
  const services = messages.services[lang];
  const projects = messages.projects[lang];

  return (
    <main className={`max-w-[1180px] p-5 m-auto`}>
      <section id="hero" className="h-screen flex items-center justify-center">
        <div className="flex flex-col w-full">
          <p className="mb-10 md:text-xl text-base text-[#888]">
            {hero.pretitle}
          </p>
          <h1
            className="md:text-[64px] text-[32px] font-black md:mb-32 mb-28"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          ></h1>
          <div className="flex gap-5 w-full justify-center items-center">
            <div className="border-black border-2 p-2 rounded-full">
              <a target="_blank" href="https://github.com/Enzo3322">
                <img src="/assets/github.svg" alt="Github icon" />
              </a>
            </div>
            <div className="border-black border-2 p-2 rounded-full">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/enzospagnolli/"
              >
                <img src="/assets/linkedin.svg" alt="Linkedin icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="mb-32">
        <h2 className="md:text-5xl text-3xl mb-10 ">{about.title}</h2>
        {about.content.map((content, i) => (
          <p key={i} className="md:text-lg text-base mb-10">
            {content}
          </p>
        ))}
      </section>
      <section id="services" className="mb-32">
        <h2 className="md:text-5xl text-3xl mb-10">{services.title}</h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
          <div className="border-2 rounded-[8px] border-[#888] p-5 flex flex-col">
            <div className="flex gap-4 mb-5 items-center h-14">
              <img src="/assets/web.svg" alt="Icone web" />
              <p className="text-xl">{services.cards.web.title}</p>
            </div>
            <p className="text-base">{services.cards.web.content}</p>
          </div>
          <div className="border-2 rounded-[8px] border-[#888] p-5 flex flex-col">
            <div className="flex gap-4 mb-5 items-center h-14">
              <img src="/assets/api.svg" alt="Icone Api" />
              <p className="text-xl">{services.cards.api.title}</p>
            </div>
            <p className="text-base">{services.cards.api.content}</p>
          </div>
          <div className="border-2 rounded-[8px] border-[#888] p-5 flex flex-col">
            <div className="flex gap-4 mb-5 items-center h-14">
              <img src="/assets/ux.svg" alt="Icone UX" />
              <p className="text-xl">{services.cards.ux.title}</p>
            </div>
            <p className="text-base">{services.cards.ux.content}</p>
          </div>
        </div>
      </section>
      <section id="projects" className="mb-32">
        <h2 className="md:text-5xl text-3xl mb-10">{projects.title}</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
          <div className="border-2 rounded-[8px] border-[#888] flex flex-col">
            <div className="min-h-64 flex items-center justify-center">
              <img
                src="/assets/sfera.png"
                className="max-w-44 m-auto"
                alt="Logotipo Sfera"
              />
            </div>
            <p className="text-xl p-5 border-t-2 border-[#888] text-center">
              Sfera Construções e Arquitetura
            </p>
          </div>
          <div className="border-2 rounded-[8px] border-[#888] flex flex-col">
            <div className="min-h-64 flex items-center justify-center">
              <img
                src="/assets/ncs.png"
                className="max-w-44 m-auto"
                alt="Logotipo NCS"
              />
            </div>
            <p className="text-xl p-5 border-t-2 border-[#888] text-center">
              NCS Consultoria Integrada
            </p>
          </div>
          <div className="border-2 rounded-[8px] border-[#888] flex flex-col">
            <div className="min-h-64 flex items-center justify-center">
              <img
                src="/assets/iron.png"
                className="max-w-44 m-auto"
                alt="Logotipo IronGym"
              />
            </div>
            <p className="text-xl p-5 border-t-2 border-[#888] text-center">
              Iron Gym
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-5 w-full justify-center items-center">
          <div className="border-black border-2 p-2 rounded-full">
            <a target="_blank" href="https://github.com/Enzo3322">
              <img src="/assets/github.svg" alt="Github icon" />
            </a>
          </div>
          <div className="border-black border-2 p-2 rounded-full">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/enzospagnolli/"
            >
              <img src="/assets/linkedin.svg" alt="Linkedin icon" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
