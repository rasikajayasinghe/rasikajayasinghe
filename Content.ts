// import images
import Hero_person from "@/assets/images/Hero/person.png";

import figma from "@/assets/images/Skills/figma.png";
import sketch from "@/assets/images/Skills/sketch.png";
import ps from "@/assets/images/Skills/ps.png";
import reactjs from "@/assets/images/Skills/react.png";
import nodejs from "@/assets/images/Skills/node.png";
import python from "@/assets/images/Skills/python.png";

import services_logo1 from "@/assets/images/Services/logo1.png";
import services_logo2 from "@/assets/images/Services/logo2.png";
import services_logo3 from "@/assets/images/Services/logo3.png";
import services_logo4 from "@/assets/images/Services/logo4.png";
import services_logo5 from "@/assets/images/Services/logo5.png";
import services_logo6 from "@/assets/images/Services/logo6.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";

// import icons from react-icons
import { GrMail, GrMapLocation } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaHome, FaRegUser } from "react-icons/fa";
import { RiServiceLine, RiProjectorLine, RiArticleFill } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      id: 1,
      link: "/",
      icon: FaHome,
    },
    {
      id: 2,
      link: "/about",
      icon: FaRegUser,
    },
    {
      id: 3,
      link: "/services",
      icon: RiServiceLine,
    },
    {
      id: 4,
      link: "/projects",
      icon: RiProjectorLine,
    },
    {
      id: 5,
      link: "/blog",
      icon: RiArticleFill,
    },
    {
      id: 6,
      link: "/contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front-end Developer",
    firstName: "RASIKA",
    LastName: "JAYASINGHE",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        id: 0,
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        id: 1,
        count: "30+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    icon: MdArrowForward,

    skills_content: [
      {
        name: "Figma",
        para: "Basic",
        logo: figma,
        catgory: "front-end",
      },
      {
        name: "Node js",
        para: "Intermediate",
        logo: nodejs,
        catgory: "Back-end",
      },
      {
        name: "Adobe Photoshop",
        para: "Advanced",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "App Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo4,
      },
      {
        title: "UI / UX Designing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "Video Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo6,
      },
      {
        title: "Sound Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo5,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        id: "1",
        title: "David Pieris Motor Company (pvt) Ltd.",
        image: project1,
        url: "https://www.dpmco.com/",
      },
      {
        id: "2",
        title: "Assetline Insurance Brokers (Private) Limited",
        image: project2,
        url: "https://www.aibl.lk/",
      },
      {
        id: "3",
        title: "The Pearlbay Sri Lanka",
        image: project3,
        url: "https://www.thepearlbay.com/",
      },
    ],
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        id: "1",
        text: "rasikajayasinghe@gmail.com",
        icon: GrMail,
        link: "mailto:rasikajayasinghe@gmail.com",
      },
      {
        id: "2",
        text: "+94 70 336 8058",
        icon: MdCall,
        link: "https://wa.me/0703368058",
      },
    ],
  },
};
