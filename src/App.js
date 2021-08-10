import { Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Footer, Header } from "src/components"
import { Home } from "src/pages/Home";
import { DetailMovie } from "src/pages/DetailMove";
import { CategoryList } from "./components/CategoryList";

function App() {
  return (
    <Router>
      <Box>
      <Header />
        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" exact component={Home} />
            <Route path="/xem-phim/:MovieId" component={DetailMovie} />
            <Route path="/home/:CategoryList" component={CategoryList} />
        </Switch>
        
      <Footer />
      </Box>
    </Router>
  );
}

export default App;
