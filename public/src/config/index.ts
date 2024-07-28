const stage = import.meta.env.VITE_STAGE;
let SERVER: string;

switch (stage) {
  case "local":
    console.log("LOCAL SERVER");
    SERVER = import.meta.env.VITE_SERVER_DEVELOPMENT;
    break;
  case "dev":
    console.log("DEV SERVER");
    SERVER = import.meta.env.VITE_SERVER_DEVELOPMENT;
    break;
  case "prod":
    console.log("PROD SERVER");
    SERVER = import.meta.env.VITE_SERVER_PRODUCTION;
    break;
  default:
    console.warn("Unknown stage:", stage);
    SERVER = ""; // Provide a default value to avoid undefined SERVER
}

export { SERVER };
