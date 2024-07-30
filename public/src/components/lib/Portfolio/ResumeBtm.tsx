import { Button } from "@mui/material";
import { P_HIGHLIGHT_COLOR, P_PRIMARY_BG } from "../../../constants/Portfolio";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useGetResumeQuery } from "../../../redux/rtkQuery/portfolio";

function ResumeBtm() {
  const { data, error, isLoading } = useGetResumeQuery();

  function downloadAndOpenResume() {
    if (data) {
      const url = window.URL.createObjectURL(data);

      // Create a link to download the file
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "Ritik_Raj_Fullstack_Developer.pdf";
      downloadLink.click();

      // Create a link to open the file in a new tab
      const viewLink = document.createElement("a");
      viewLink.href = url;
      viewLink.target = "_blank";
      viewLink.click();

      // Revoke the object URL to free up memory
      window.URL.revokeObjectURL(url);
    } else {
      console.error("Failed to download resume");
    }
  }


  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading resume</p>;

  return (
    <Button
      variant="contained"
      sx={{
        mt: "2rem",
        py: "0.5rem",
        background: P_HIGHLIGHT_COLOR,
        color: "white",
        "&:hover": {
          color: P_PRIMARY_BG,
        },
      }}
      onClick={downloadAndOpenResume}
      endIcon={<CloudDownloadIcon />}
    >
      {error ? "Error" : isLoading ? "Loading..." : "Download Resume"}
    </Button>
  );
}

export default ResumeBtm;
