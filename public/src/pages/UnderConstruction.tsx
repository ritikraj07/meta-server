import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const UnderConstruction = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffcc00",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          marginBottom: "20px",
        }}
      >
        🚧
      </motion.div>
      <Typography variant="h3" component="h1" gutterBottom>
        Under Construction
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        We're working hard to bring you the best experience. Please check back
        soon!
      </Typography>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Typography variant="body1">Thank you for your patience.</Typography>
      </motion.div>
    </Box>
  );
};

export default UnderConstruction;
