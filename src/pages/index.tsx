/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { messages } from "../messages";
import { LangContext } from "@/context/context";
import Head from "next/head";

export default function Home() {
  const { lang } = useContext(LangContext);

  const hero = messages.hero[lang];
  const about = messages.about[lang];
  const services = messages.services[lang];
  const projects = messages.projects[lang];
  const work = messages.work[lang];

  return (
    <>
      <Head>
        <title>Enzo Spagnolli</title>
        <meta
          name="description"
          content="Enzo Spagnolli - Desenvolvedor Fullstack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`max-w-[1180px] p-5 m-auto`}>
        <section
          id="hero"
          className="h-screen flex items-center justify-center"
        >
          <div className="flex flex-col w-full">
            <p className="mb-10 md:text-xl text-base text-[#333]">
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
              <div className="border-black border-2 p-2 rounded-full">
                <a target="_blank" href="/Enzo_Spagnolli_CV.pdf">
                  <img src="/assets/download.svg" alt="CV" />
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
            <div className="border-2 rounded-[8px] border-[#333] p-5 flex flex-col">
              <div className="flex gap-4 mb-5 items-center h-14">
                <img src="/assets/web.svg" alt="Icone web" />
                <p className="text-xl">{services.cards.web.title}</p>
              </div>
              <p className="text-base">{services.cards.web.content}</p>
            </div>
            <div className="border-2 rounded-[8px] border-[#333] p-5 flex flex-col">
              <div className="flex gap-4 mb-5 items-center h-14">
                <img src="/assets/api.svg" alt="Icone Api" />
                <p className="text-xl">{services.cards.api.title}</p>
              </div>
              <p className="text-base">{services.cards.api.content}</p>
            </div>
            <div className="border-2 rounded-[8px] border-[#333] p-5 flex flex-col">
              <div className="flex gap-4 mb-5 items-center h-14">
                <img src="/assets/ux.svg" alt="Icone UX" />
                <p className="text-xl">{services.cards.ux.title}</p>
              </div>
              <p className="text-base">{services.cards.ux.content}</p>
            </div>
          </div>
        </section>
        <section id="work" className="mb-32">
          <h2 className="md:text-5xl text-3xl mb-10">{work.title}</h2>
          <div className="grid grid-cols-1 gap-7">
            {work.jobs.map((job, i) => (
              <div
                key={i}
                className="border-2 items-center p-5 rounded-[8px] border-[#333] flex flex-col md:flex-row gap-5"
              >
                <a
                  target="_blank"
                  href={job.companyLink}
                  className="flex items-center justify-center hover:scale-105 transition-transform duration-300 z-10"
                >
                  <img
                    src={job.companyLogo}
                    className="max-w-40  rounded-lg m-auto"
                    alt={job.company}
                  />
                </a>
                <div className="gap-2 flex flex-col">
                  <p className="text-xl font-bold">{job.company}</p>
                  <div className="flex flex-col md:items-center md:flex-row md:gap-5 gap-2">
                    <p className="text-lg">{job.title}</p>
                    <p className="text-sm">{job.date}</p>
                  </div>
                  <div>
                    {job.description.map((desc, i) => (
                      <p key={i} className="text-base mb-2">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="mb-32">
          <h2 className="md:text-5xl text-3xl mb-10">{projects.title}</h2>
          <p>Doing...</p>
          {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-7 blur">
            <div className="border-2 rounded-[8px] border-[#333] flex flex-col">
              <div className="min-h-64 flex items-center justify-center">
                <img
                  src="/assets/sfera.png"
                  className="max-w-44 m-auto"
                  alt="Logotipo Sfera"
                />
              </div>
              <p className="text-xl p-5 border-t-2 border-[#333] text-center">
                Sfera Construções e Arquitetura
              </p>
            </div>
            <div className="border-2 rounded-[8px] border-[#333] flex flex-col">
              <div className="min-h-64 flex items-center justify-center">
                <img
                  src="/assets/ncs.png"
                  className="max-w-44 m-auto"
                  alt="Logotipo NCS"
                />
              </div>
              <p className="text-xl p-5 border-t-2 border-[#333] text-center">
                NCS Consultoria Integrada
              </p>
            </div>
            <div className="border-2 rounded-[8px] border-[#333] flex flex-col">
              <div className="min-h-64 flex items-center justify-center">
                <img
                  src="/assets/iron.png"
                  className="max-w-44 m-auto"
                  alt="Logotipo IronGym"
                />
              </div>
              <p className="text-xl p-5 border-t-2 border-[#333] text-center">
                Iron Gym
              </p>
            </div>
          </div> */}
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

            <div className="border-black border-2 p-2 rounded-full">
              <a target="_blank" href="/Enzo_Spagnolli_CV.pdf">
                <img src="/assets/download.svg" alt="CV" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
