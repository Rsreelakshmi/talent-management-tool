import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { LoadableUserdetailpage, LoadableUserSkillspage, LoadableSummarypage,LoadableCreateTalentPage, LoadableLandingPage } from "./loadable";
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
            <Route exact={true} path="/landingpage/summary" component={LoadableSummarypage} />
            <Route exact={true} path="/landingpage/skills" component={LoadableUserSkillspage} />
            <Switch>
            <Route exact={true} path="/landingpage/home" render={() => (
                <div className="App">
                  <LoadableLandingPage />
                </div>
              )}/>
              <Redirect exact={true} from="/" to="/landingpage/home" />
            </Switch>
            <Route exact={true} path="/landingpage/add-skill" render={() => (
              <div className="App">
                <AddSkillModal />
              </div>
            )}/>
            <Route path="/landingpage/profile" component={LoadableUserdetailpage} />
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
