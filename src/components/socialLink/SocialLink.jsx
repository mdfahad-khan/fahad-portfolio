// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin
          <FaLinkedin size={30} />{" "}
        </>
      ),
      href: "https://www.linkedin.com/in/md-fahad-khan/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />{" "}
        </>
      ),
      href: "https://github.com/mdfahad-khan",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Email
          <HiOutlineMail size={30} />{" "}
        </>
      ),
      href: "evanahmedfahad@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />{" "}
        </>
      ),
      href: "../../../public/fahad.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="flex lg:flex-col lg:top-[35%] top-[10%] left-0 lg:fixed fixed">
  <ul>
    {links.map(({ id, child, href, style, download }) => (
      // eslint-disable-next-line react/jsx-key
      <li
        key={id}
        className={
          "flex justify-between items-center lg:w-32 w-30 lg:h-12 h-10 lg:px-4 px-1 bg-[#234559] lg:ml-[-80px] ml-[-65px] lg:hover:ml-[-10px] hover:ml-[-1px] hover:rounded-md lg:duration-300 duration-200" +
          " " +
          style
        }>
        <a
          href={href}
          className="flex justify-between items-center w-full text-white"
          download={download}
          target="_blank"
          rel="noreferrer">
          {child}
        </a>
      </li>
    ))}
  </ul>
</div>

  );
};

export default SocialLink;
