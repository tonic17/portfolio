import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About, Navbar, ProjectList, Video, Contact } from "./components";

class App extends Component {
    state = {
        navOpen: false
    };

    handleNavBar = () => {
        this.setState(prev => ({
            navOpen: !prev.navOpen
        }));
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar
                        handleCloseNavBar={this.handleCloseNavBar}
                        handleNavBar={this.handleNavBar}
                        navOpen={this.state.navOpen}
                    />
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return <About />;
                        }}
                    />
                    <Route
                        exact
                        path="/projects"
                        render={() => {
                            return <ProjectList />;
                        }}
                    />
                    <Route
                        exact
                        path="/contact"
                        render={() => {
                            return <Contact />;
                        }}
                    />
                </div>
                {/* <ScContact />
                <Video /> */}
            </Router>
        );
    }
}

export default App;
