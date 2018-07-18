import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { LoadableHomepage, LoadableSummarypage,LoadableCreateTalentPage, LoadableLandingPage } from "./loadable";
import store from "./store";
import { Provider } from "react-redux";
import AddSkillModal from './components/AddSkillModal/AddSkillModal';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route path="/home" component={LoadableHomepage} />
              <Redirect exact={true} from="/" to="/home" />
            </Switch>
            <Route path="/landingpage/summary" component={LoadableSummarypage} />
            <Route exact={true} path="/landingpage" render={() => (
                <div className="App">
                  <LoadableLandingPage />
                </div>
              )}/>
            <Route exact={true} path="/landingpage/add-skill" render={() => (
              <div className="App">
                <AddSkillModal />
              </div>
            )}/>
            <Route exact={true} path="/landingpage/add-talent" render={() => (
                <div className="App">
                  <LoadableCreateTalentPage />
                </div>
              )}/>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
