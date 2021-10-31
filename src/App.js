import {
  HomePage,
  AboutPage,
  ServicePage,
  ContactPage,
  GalleryPage,
  PortfolioPage,
  // NotFoundPage,
} from "./containers";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/service" component={ServicePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
