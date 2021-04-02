import { Component } from "react";
import Body from "./components/Body";
import Details from "./components/Details";
import Error from "./components/Error";
import Container from "@material-ui/core/Container";
import Header from './components/Header';
import Footer from './components/Footer';

import { Switch, Route } from "react-router-dom";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Container maxWidth="md">
          <Header style={this.styles} />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route path="/details" component={Details} />
            <Route component={Error} />
          </Switch>
        </Container>
        
        {/*<Body /> */}
      </>
    );
  }
}

export default App;
