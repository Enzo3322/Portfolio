import { LangContext } from "@/context/context";
import { messages } from "@/messages";
import { useContext } from "react";

export default function Work() {
  const { lang } = useContext(LangContext);

  const work = messages.work[lang];
  return (
    <section id="work" className="mb-32">
      <h2 className="md:text-5xl text-3xl mb-10">{work.title}</h2>
      <div className="grid grid-cols-1 gap-7">
        {work.jobs.map((job, i) => (
          <div
            key={i}
            className="border-2 items-center p-5 rounded-[8px] bg-white flex flex-col md:flex-row gap-5"
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
  );
}
