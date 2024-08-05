import { Box, Typography } from "@mui/material";
import { P_HIGHLIGHT_COLOR } from "../../../constants/Portfolio";

function TechStack() {
  const TechStack: string[] = [
    "React",
    "Typescript",
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
    "GitHub",
    "Docker",
    "PostMan",
    "JAVA",
    "Android Studio",
    "Kotlin",
    "Firebase",
    "C++",
    "C#",
    "Python",
    "Java",
    "JavaScript",
    "C",
    "TypeScript",
  ];

  const highlightTech = ["React", "NodeJS", "Express", "MongoDB", "TypeScript", "TailwindCSS", "Redux", "React Native", "GitHub", "JavaScript"];

  return (
    <>
      <Typography variant="h4" sx={{ color: "white", mb: "1.5rem" }}>
        Tech Stack
      </Typography>
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
          const isHighlighted = highlightTech.includes(t);
          return (
            <Typography
              key={t}
              sx={{
                color: isHighlighted ? P_HIGHLIGHT_COLOR : "white",
                border: `1px solid ${
                  isHighlighted ? P_HIGHLIGHT_COLOR : "white"
                }`,
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
    </>
  );
}

export default TechStack;
