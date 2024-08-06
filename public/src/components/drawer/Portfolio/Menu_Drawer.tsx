import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { P_HIGHLIGHT_COLOR, P_PRIMARY_BG } from "../../../constants/Portfolio";
import Icons, { iconProps } from "../../icons/Icons";
import styles from "../../navbar/Portfolio/styles.module.css";
import { Link } from "react-router-dom";

interface MenuDrawerProps {
  MyIcons: iconProps[];
  MyTabs: { name: string; link: string }[];

}
function Menu_Drawer({ MyIcons, MyTabs }: MenuDrawerProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        sx={{
          color: "white",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            background: P_PRIMARY_BG,
          }}
        >
          <IconButton
            sx={{
              color: "white",
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
              },
            }}
            onClick={() => setDrawerOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "self-start",
            paddingX: "20px",
            background: P_PRIMARY_BG,
            height: "100vh",
            color: "white",
          }}
        >
          

          {MyTabs.map((item, index) => (
            <Typography key={index} className={styles.nav_text}>
              <Link to={item.link}>{item.name}</Link>
            </Typography>
          ))}

          <Box
            sx={{
              width: "100%",
              background: P_HIGHLIGHT_COLOR,
              height: "1px",
              borderRadius: "20px",
              margin: "20px 0",
            }}
          />
          <Box>
            {MyIcons.map((item, index) => (
              <Icons
                key={index}
                Icon={item.Icon}
                onClick={item.onClick}
                sx={{
                  color: "white",
                  marginX: "10px",
                  "&:hover": { color: P_HIGHLIGHT_COLOR },
                }}
              />
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Menu_Drawer;
