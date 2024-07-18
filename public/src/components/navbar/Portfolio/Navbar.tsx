import { GitHub } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTube from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import Icons from "../../icons/Icons";

import { useEffect, useState } from "react";
import { P_HIGHLIGHT_COLOR } from "../../../constants/Portfolio";
import Menu_Drawer from "../../drawer/Portfolio/Menu_Drawer";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const HandleClick = (link: string) => {
    window.open(link, "_blank");
  };

  const MyIcons = [
    {
      Icon: GitHub,
      onClick: () => HandleClick("https://github.com/ritikraj07"),
    },
    {
      Icon: YouTube,
      onClick: () =>
        HandleClick("https://www.youtube.com/@UltimateCodingBeast"),
    },
    {
      Icon: LinkedInIcon,
      onClick: () => HandleClick("https://www.linkedin.com/in/ritik-raj07"),
    },
    {
      Icon: InstagramIcon,
      onClick: () =>
        HandleClick("https://www.instagram.com/coding_beast_ritik/"),
    },
    { Icon: XIcon, onClick: () => HandleClick("github") },
  ];
  const MyTabs = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blogs" },
    { name: "Products", link: "/products" },
    {name:"Services",link:"#services"}
  ]



  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: {
          xs: "space-between",
          sm: "space-between",
          // md: "space-around",
          // lg: "space-around",
        },
        width: "100%",
        paddingY: "1rem",
        paddingX: scrolled
          ? { xs: "1rem", sm: "3rem", md: "5rem", lg: "5rem" }
          : {},
        // background: P_PRIMARY_BG,
      }}
      className={
        !scrolled ? styles.navbar : styles.navbar + " " + styles.scrolled
      }
    >
      <Box
        sx={{
          display: "inline-flex",
        }}
      >
        <Typography
          sx={{ letterSpacing: "5px", color: "white", cursor: "pointer" }}
        >
          <span style={{ color: P_HIGHLIGHT_COLOR, fontSize: "35px" }}>R</span>
          itik
          <span
            style={{
              color: P_HIGHLIGHT_COLOR,
              fontSize: "35px",
              marginLeft: "20px",
            }}
          >
            R
          </span>
          aj
        </Typography>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "inline-flex",
            lg: "inline-flex",
          },
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          fontWeight: "light",
          fontSize: "10px",
          position: "relative",
        }}
        className={" text-slate-300 text-sm  "}
      >
        {MyTabs.map((item, index) => ( <Typography key={index} className={styles.nav_text}>
          <Link to={item.link} >{item.name}</Link>
        </Typography>))}

       
        <Box
          sx={{
            width: "1.5px",
            background: P_HIGHLIGHT_COLOR,
            height: "30px",
            borderRadius: "20px",
          }}
          className={styles.hrline}
        />
        {MyIcons.map((item, index) => (
          <Icons
            key={index}
            Icon={item.Icon}
            onClick={item.onClick}
            sx={{
              color: "white",
              marginX: "-15px",
              "&:hover": { color: P_HIGHLIGHT_COLOR },
            }}
          />
        ))}
      </Box>

      <Menu_Drawer MyIcons={MyIcons} />
    </Box>
  );
}

export default Navbar;
