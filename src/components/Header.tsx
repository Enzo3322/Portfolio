/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { messages } from "../messages";
import { LangContext } from "@/context/context";
import Link from "next/link";

export default function Header() {
  const { lang, setCurrentLang } = useContext(LangContext);

  const message = messages.header[lang];

  return (
    <header className="fixed top-0 w-screen bg-gray-100	">
      <nav
        className={`max-w-[1180px]  p-5 m-auto flex justify-between items-center`}
      >
        <div className="flex gap-5 md:w-28">
          <a target="_blank" href="https://github.com/Enzo3322">
            <img src="/assets/github-colored.svg" alt="Github icon" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/enzospagnolli/">
            <img src="/assets/linkedin-colored.svg" alt="Linkeding icon" />
          </a>
        </div>
        <ul className={`flex gap-10`}>
          <li>
            <Link href="/" className="underline text-xl">
              {message.home}
            </Link>
          </li>
          <li>
            <a href="#about" className="underline text-xl">
              {message.about}
            </a>
          </li>
          <li>
            <a href="#services" className="underline text-xl">
              {message.services}
            </a>
          </li>
          <li>
            <a href="#projects" className="underline text-xl">
              {message.projects}
            </a>
          </li>
        </ul>
        <div>
          <div className="p-1 bg-white flex ">
            <button
              onClick={() => setCurrentLang("en")}
              className={`w-14 rounded border-black ${
                lang === "en" && `border`
              } `}
            >
              en
            </button>
            <button
              onClick={() => setCurrentLang("pt")}
              className={`w-14 rounded border-black ${
                lang === "pt" && `border`
              }`}
            >
              pt
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
