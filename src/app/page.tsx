import Layout from "./components/Homepage";
import { setupTranslateAPI } from "@translateapi/translateapi.js";

setupTranslateAPI({
  readToken: "superDMkey",
  defaultLanguage: "en_US",
  defaultNamespace: "default",
});

export default function Home() {
  return <Layout />;
}
