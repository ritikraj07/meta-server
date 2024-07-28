import { Box, Button, Typography } from "@mui/material";
import Navbar from "../components/navbar/Portfolio/Navbar";

import {
  P_HIGHLIGHT_COLOR,
  P_PRIMARY_BG,
  P_TEXT_DARK_COLOR,
} from "../constants/Portfolio";
import styles from "./styles.module.css";
import { Helmet } from "react-helmet-async";
import TechStack from "../components/lib/Portfolio/TechStack";
import Project from "../components/lib/Portfolio/Project";
import Services from "../components/lib/Portfolio/Services";
import Footer from "../components/footers/Portfolio/Footer";
import ResumeBtm from "../components/lib/Portfolio/ResumeBtm";

function Portfolio() {
  const connectWithMe = () => {
    const email = "ritikra3rrr@gmail.com";
    const subject = "Portfolio: ";
    const body = "";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Ritik Raj - Dev and Instructor</title>
        <meta name="title" content="Ritik Raj - Dev and Instructor" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="src\assets\images\p_icon.png"
        />

        <meta
          name="description"
          content="Hi there! My name is Ritik Raj and I’m a software engineer with over 2 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ritik.online" />
        <meta property="og:title" content="Ritik Raj - Dev and Instructor" />
        <meta
          property="og:description"
          content="Hi there! My name is Ritik Raj and I’m a software engineer with over 2 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />
        <meta
          property="og:image"
          content="https://www.ritik.online/images/seo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ritik.online" />
        <meta
          property="twitter:title"
          content="Ritik Raj - Dev and Instructor"
        />
        <meta
          property="twitter:description"
          content="Hi there! My name is Ritik Raj and I’m a software engineer with over 2 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />
        <meta
          property="twitter:image"
          content="https://www.ritik.online/images/seo.png"
        />
      </Helmet>

      <Box
        sx={{
          background: P_PRIMARY_BG,
          minHeight: "100vh",
          width: "100%",
          px: { xs: "1rem", sm: "3rem", md: "5rem", lg: "5rem" },
        }}
      >
        <Navbar />

        <Box
          sx={{
            width: "100%",
            minHeight: "85vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "50%", md: "50%" } }}>
            <Typography
              sx={{
                color: P_HIGHLIGHT_COLOR,
                fontSize: "1rem",
                fontWeight: "lighter",
              }}
              className={styles.helloThere}
            >
              Hello There
            </Typography>
            <Box>
              <div className={styles.typewriter}></div>
              <Typography
                sx={{
                  display: "inline-flex",
                  color: P_TEXT_DARK_COLOR,
                  fontSize: "smaller",
                  mb: "2rem",
                }}
              >
                Fullstack App & Web Developer
              </Typography>
              <p className={styles.p_description}>
                Hey! My name is{" "}
                <span style={{ color: P_HIGHLIGHT_COLOR }}>Ritik Raj</span> and
                I’m a software engineer with over 2 years of experience in the
                industry. I love all things tech and coding, and on my channel,
                I share my knowledge and experience with others.
              </p>
            </Box>
            <Box sx={{ display: "flex",}} >
              <Button
                variant="contained"
                sx={{
                  mt: "2rem",
                  py: "0.5rem",
                  mr: "1rem",
                  "&:hover": {
                    background: P_HIGHLIGHT_COLOR,
                    color: P_PRIMARY_BG,
                  },
                }}
                onClick={connectWithMe}
              >
                Connet with me
              </Button>
              <ResumeBtm />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "flex", md: "flex" },
              justifyContent: "end",
              width: { xs: "60%", sm: "45%", md: "35%" },
              borderRadius: { xs: "10%", sm: "30%", md: "100%" },
              overflow: "hidden",
              // mt: { xs: "10rem", sm: "0", md: "0" },
            }}
          >
            <img
              style={{}}
              src="https://avatars.githubusercontent.com/u/117502397?v=4"
              alt="ritik raj"
            />
          </Box>
        </Box>

        {/* Tech Stack */}

        <TechStack />

        {/* Projects */}

        <Project />
        {/* Services */}

        <Services />

        <Footer />
      </Box>
    </>
  );
}

export default Portfolio;
