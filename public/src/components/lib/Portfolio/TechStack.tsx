import { Box, Typography } from "@mui/material";
import { P_HIGHLIGHT_COLOR } from "../../../constants/Portfolio";

function TechStack() {
  const TechStack: string[] = [
    "React",
    "Typescript",
    "Vite",
    "Redux",
    "TailwindCSS",
    "MaterialUI",
    "React Native",
    "HTML",
    "CSS",
    "SASS",
    "JQuery",
    "NodeJS",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "Heroku",
    "Netlify",
    "Cypress",
    "Jest",
    "GitHub Actions",
    "Docker",
    "PostMan",
    "JAVA",
    "Android Studio",
    "Android SDK",
    "Kotlin",
    "Firebase",
    "C++",
    "C#",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        flexWrap: "wrap",
        my: "1rem",
        justifyContent: "center",
        border: "1px solid white",
              padding: "20px",
        borderRadius: "10px",
      }}

    >
      {TechStack.map((t) => {
        return (
          <Typography
            key={t}
            sx={{
              color: "white",
              border: `1px solid ${P_HIGHLIGHT_COLOR}`,
              borderRadius: "5px",
              padding: "5px 10px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                cursor: "pointer",
                transform: "scale(1.1)",
              },
            }}
          >
            {t}
          </Typography>
        );
      })}
    </Box>
  );
}

export default TechStack;
