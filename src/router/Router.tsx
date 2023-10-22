import { HashRouter } from "react-router-dom";
import HomeRouter from "./HomeRouter";

export default function Router() {
  return (
    <HashRouter>
      <HomeRouter />
    </HashRouter>
  );
}
