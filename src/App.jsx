import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/find-users' render={() => <FindUsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initialized: state.appReducer.initialized,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

