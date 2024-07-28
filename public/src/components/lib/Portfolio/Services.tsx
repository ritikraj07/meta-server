import { Box, Paper, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { services } from "../../../constants/Portfolio/services";

function Services() {
  return (
    <Box sx={{ paddingY: "2rem", mY: "2rem" }}>
      <Typography variant="h4" sx={{ color: "white", mb: "1.5rem" }}>
        Checkout My Services
      </Typography>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
      >
        {services.map((service) => (
          <Paper
            key={service.id}
            elevation={1}
            sx={{
              position: "relative",
              height: "80vh",
              backgroundSize: "cover",
            //   backgroundPosition: "center",
              backgroundImage: `url(${service.image})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {service.name}
              </Typography>
              <Typography variant="body1">{service.desc}</Typography>
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default Services;
