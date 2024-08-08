import { Box, Button, Grid, Typography, Skeleton } from "@mui/material";
import { projects } from "../../../constants/Portfolio/projects";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  P_HIGHLIGHT_COLOR,
  P_TEXT_DARK_COLOR,
} from "../../../constants/Portfolio";
import Icons from "../../icons/Icons";
import { useState } from "react";

function Project() {
  
  return (
    <Box sx={{ mt: "2rem" }}>
      <Typography variant="h4" sx={{ color: "white", mb: "1.5rem" }}>
        Checkout My Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, i) => {
          const [isLoading, setIsLoading] = useState(true);
          return (
          <Grid item xs={12} sm={6} md={6} lg={4} key={i}>
            <Box
              sx={{
                background: "rgb(23,31,56)",
                padding: { xs: "1rem", sm: ".5rem", md: "1rem" },
                minWidth: "100px",
                borderRadius: "10px",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  transform: "scale(1.02)",
                  zIndex: "1",
                  transition: "all 1s ease-in-out",
                  boxShadow: `0px 0px 10px 0px ${P_HIGHLIGHT_COLOR}`,
                },
              }}
            >
              {isLoading && (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  sx={{ borderRadius: "10px" }}
                />
              )}
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src={project.image}
                alt={project.name}
                onLoad={() => setIsLoading(false)}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                {/* Project Name */}
                <Box sx={{ my: "1rem" }}>
                  <a href={project.link} target="_blank">
                    <Typography
                      sx={{ color: "white", fontWeight: "bold", mb: "0.5rem" }}
                    >
                      {project.name}
                    </Typography>
                  </a>
                  <Typography
                    sx={{
                      color: P_TEXT_DARK_COLOR,
                      fontSize: "0.8rem",
                      mb: "0.5rem",
                    }}
                  >
                    {project.desc}
                  </Typography>
                </Box>
                {/* Descriptions */}
                <Box sx={{ position: "relative" }}>
                  {project.techs.map((tech: string, i: number) => (
                    <Button
                      onClick={() =>
                        window.open(
                          `https://www.google.com/search?q=${tech}`,
                          "_blank"
                        )
                      }
                      key={i}
                      variant="contained"
                      sx={{
                        mr: "0.5rem",
                        mb: "0.5rem",
                        background: P_TEXT_DARK_COLOR,
                        padding: 0.5,
                        fontSize: "0.6rem",
                        "&:hover": {
                          background: P_HIGHLIGHT_COLOR,
                        },
                      }}
                    >
                      {tech}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* features */}

              {/* Icons */}
              <Box
                sx={{
                  mt: "1rem",
                  gap: "25px",
                  display: "flex",
                  justifyContent: "end",
                  position: "absolute",
                  right: 20,
                  bottom: 5,
                }}
              >
                <Icons
                  Icon={GitHubIcon}
                  onClick={() => window.open(project.github, "_blank")}
                  sx={{
                    color: "white",
                    marginX: "-15px",
                    "&:hover": { color: P_HIGHLIGHT_COLOR },
                  }}
                />
                <Icons
                  Icon={LanguageIcon}
                  onClick={() => window.open(project.link, "_blank")}
                  sx={{
                    color: "white",
                    marginX: "-15px",
                    "&:hover": { color: P_HIGHLIGHT_COLOR },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        )})}
      </Grid>
    </Box>
  );
}

export default Project;
