import { Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
            <Route path="/home" component={Home} />
            <Route path="/detailMovie" component={DetailMovie} />
        </Switch>
        
      <Footer />
      </Box>
    </Router>
  );
}

export default App;
