/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  mysqlIcon,
  phpIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  gotoko,
  sv,
  krustryKrab,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hi guys, i'm happy you here! :)",

    "My name is Ali, I'm 21 and a freshgraduate of Informatics Engineering from Sebelas Maret University. I have a passion for the website development.",

    "Outside of my regular activities, I'm love to jogging whenever i have time. I'm also a huge cat lover and love to playing games for fun.",

    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated!",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Go-Toko",
    description: 'Website that will help MSME Enterpreneur to organize his goods, employee, and another. Created with Laravel, MySQL as DBMs, and some of library to complete system requirements.',
    image: gotoko,
    source_code_link: 'https://gitd3ti.vokasi.uns.ac.id/Hasan/go-toko',
    demo_link: 'http://go-toko.id'
  },
  {
    name: 'SV Company Profile',
    description: 'Creating website to \'Sekolah Vokasi\' Company profile that will help user to maintenance profile and content of the company. Using Laravel framework to build this website and MySQL.',
    image: sv,
    source_code_link: 'https://gitd3ti.vokasi.uns.ac.id/Hasan/vokasi-web',
    demo_link: 'https://vokasi.uns.ac.id/',
  },
  {
    name: 'Krusty Krabs Cashier',
    description: 'Fun project that i build in bootcamp last project with my team. The project is like cashier that will show menus and can checkout the cart and pay it. We build it using react and nodeJS and MongoDB.',
    image: krustryKrab,
    source_code_link: 'https://github.com/refido/Kashier-Krusty-Krab',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
      'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
      'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'php',
    title: 'PHP',
    icon: phpIcon,
    description:
    'I have 2 years experience of using PHP and more often using laravel framework while build website.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I have experience using AWS and proficient in working with EC2, RDS instances and S3 Bucket, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
      'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'mysql',
    title: 'mySQL',
    icon: mysqlIcon,
    description:
      'I have a basic command of mySQL, encompassing a wide range of skills such as database normalization, triggers, and front-end connectivity',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
