"use client";

import { ProjectCard } from "../components/project-card";
import { Typography } from "@material-tailwind/react";


const PROJECTS = [
  {
    img: "/image/icon1.svg",
    title: "My-Journal Mobile App",
    desc: "This is a mobile app designed to help users create & edit journals to catalog their daily life.",
    href:'https://expo.dev/artifacts/eas/qFQE9LoUU8fTLu7GcZvYon.aab'
  },
  {
    img: "/image/chatbot.svg",
    title: "GAIPA Chatbot",
    desc: "This AI chatbot is supposed to be the pioneer of Artificial General Intelligence built using multiple models.",
    href:'https://chat.onyoin.com/'
  },
  {
    img: "https://res.cloudinary.com/dbfydxolq/image/upload/v1724146489/votechain_d2b8ea.png",
    title: "Votechain Dapp",
    desc: "This Blockchain app is designed to help citizens store voter registry data on an Ethereum blockchain.",
    href:'https://votechain-xi.vercel.app/'
  },
  {
    img: "https://res.cloudinary.com/dbfydxolq/image/upload/v1724155680/careviewlogo_2_df3w3n.svg",
    title: "Careview E-Pharmacy",
    desc: "Ecommerce website offering  access to medicinal drugs from the nearest Pharmacies.",
    href:''
  },
  {
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    href:''
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    href:'#',
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    href:'#',
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    href:'#',
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
