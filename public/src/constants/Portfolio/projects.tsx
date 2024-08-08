import { SERVER } from "../../config";

export const projects = [
  {
    name: "LinkPod",
    desc: (
      <>
        It is a{" "}
        <a href="https://www.linkedin.com/in/ritik-raj07/" target="_blank">
          <strong style={{ color: "white" }}>LinkedIn</strong>
        </a>{" "}
        extension that allows users to interact seamlessly with LinkedIn posts.
        As a full-stack developer on the LinkPod project, I contributed to the
        development of features such as post likes, comments, and interactions
        on behalf of the user.
      </>
    ),
    techs: ["MERN", "LinkedIn-Api", "MUI"],
    features: [],
    link: "https://linkpod.ritik.online/",
    github: "https://github.com/ritikraj07/LinkPod-Client",
    image: `${SERVER}/portfolio/image?image=linkpod.png`,
  },
  {
    name: "FutureIQRA",
    desc: (
      <>
        It is an online educational platform offering a curated collection of
        pre-recorded lectures. As a full-stack developer, I played a pivotal
        role in the development and maintenance of the platform, ensuring a
        seamless user experience and robust functionality.
      </>
    ),
    techs: ["MERN", "Payment Integration", "Firebase", "Chakra-UI"],
    features: [],
    link: "https://www.futureiqra.in/",
    github: "https://github.com/ritikraj07/FutureIQRA_Front-end-",
    image: `${SERVER}/portfolio/image?image=futureiqra.png`,
  },
  {
    name: "Portfolio",
    desc: (
      <>
        This project showcases my personal portfolio. It highlights my skills,
        projects, and experiences. As a full-stack developer, I built this
        portfolio to provide a comprehensive view of my professional background
        and technical capabilities. The design focuses on simplicity and
        user-friendly navigation.
      </>
    ),
    techs: ["MERN", "Tailwind", "MUI"],
    features: [],
    link: "https://ritik.online/",
    github: "https://github.com/ritikraj07/Portfolio",
    image: `${SERVER}/portfolio/image?image=portfolio.png`,
  },
  {
    name: "Spotify",
    desc: (
      <>
        This project is a clone of{" "}
        <strong style={{ color: "white" }}>Spotify</strong>, a digital music,
        podcast, and video service that gives you access to millions of songs
        and other content from creators all over the world. Basic functions such
        as playing music are totally free, but you can also choose to upgrade to
        Spotify Premium.
      </>
    ),
    techs: ["HTML", "CSS", "Javascript", "Spotify-Api"],
    features: [],
    link: "https://ritikraj07.github.io/Project_Spotify.com/",
    github: "https://github.com/ritikraj07/Project_Spotify.com",
    image: `${SERVER}/portfolio/image?image=spotify.png`,
  },
  {
    name: "Hotstar",
    desc: (
      <>
        This project is a clone of{" "}
        <strong style={{ color: "white" }}>Hotstar</strong>, an online video
        streaming platform owned by Novi Digital Entertainment Private Limited,
        a wholly owned subsidiary of Star India Private Limited. Disney+ Hotstar
        currently offers over 100,000 hours of TV content and every major sport
        covered live.
      </>
    ),
    techs: ["MERN", "Tailwind"],
    features: [],
    link: "https://github.com/ritikraj07/Project_Disney-Hotstar.com",
    github: "https://github.com/ritikraj07/Project_Disney-Hotstar.com",
    image: `${SERVER}/portfolio/image?image=hotstar.png`,
  },
  {
    name: "Makro-Music",
    desc: (
      <>
        This project is a clone of <strong>Makro-Music</strong>. Discover people
        with matching music tastes. With Makro-Music, you can discover people
        who share your music taste, meet new people, and chat.
      </>
    ),
    techs: ["React Native", "Express", "Node", "RN Element", "Spotify-API"],
    features: [],
    link: "https://github.com/ritikraj07/MakroMusic-App",
    github: "https://github.com/ritikraj07/Portfolio",
    image: `${SERVER}/portfolio/image?image=makromusic.png`,
  },
];
