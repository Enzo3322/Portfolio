/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { messages } from "../messages";
import { LangContext } from "@/context/context";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setCurrentLang } = useContext(LangContext);

  const message = messages.header[lang];

  return (
    <header className="fixed top-0 w-screen bg-gray-100 z-50	">
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
        <div
          className={`${open ? "absolute p-5 top-[44px] left-0 w-full" : ""}`}
        >
          <ul
            className={`md:flex gap-10 ${
              open
                ? " border rounded border-black p-5 flex items-center flex-col bg-gray-100 w-full"
                : "hidden"
            }`}
          >
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="underline text-xl"
              >
                {message.home}
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="underline text-xl"
              >
                {message.about}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="underline text-xl"
              >
                {message.services}
              </a>
            </li>

            <li>
              <a
                href="#work"
                onClick={() => setOpen(false)}
                className="underline text-xl"
              >
                {message.work}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="underline text-xl"
              >
                {message.projects}
              </a>
            </li>
            <li>
              <div className="p-1 bg-white rounded md:hidden flex">
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
            </li>
          </ul>
        </div>

        <div className="p-1 bg-white rounded md:flex hidden">
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
            className={`w-14 rounded border-black ${lang === "pt" && `border`}`}
          >
            pt
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <img src="/assets/close.svg" alt="Close menu" className="w-7 h-7" />
          ) : (
            <img
              src="/assets/menu.svg"
              alt="Hamburger menu"
              className="w-7 h-7"
            />
          )}
        </button>
      </nav>
    </header>
  );
}
