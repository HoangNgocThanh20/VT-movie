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

function App() {
  return (
    <Router>
      <Box>
      <Header />

        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" exact component={Home} />
            <Route path="/detailMovie" component={DetailMovie} />
        </Switch>
        
      <Footer />
      </Box>
    </Router>
  );
}

export default App;
