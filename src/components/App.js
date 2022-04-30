import React from "react";
import axios from "axios";
import UserCardList from "./UserCardList";
import "./app.css"

export default class App extends React.Component {
    state = { data: [], loading: false }
    onUsersRequested = () => {
        this.setState({ loading: true })
        axios.get('https://reqres.in/api/users?page=1').then((res) => {
            console.log(res);
            setTimeout(() => {
                this.setState({ loading: false })
            }, 2000)
            // this.setState({ data: [] })
            this.setState({ data: res.data.data })
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        const toRender = () => {
            if (this.state.data.length === 0) {
                return (
                    <div style={{ textAlign: 'center', margin: '99px' }}><h2>Hey! Welcome to the GetUserAPI</h2></div>
                )
            } else if (this.state.loading) {
                return (
                    <div class="d-flex justify-content-center" style={{ margin: '40px' }} >
                        < div class="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
                        </div>
                    </div >
                );
            } else {
                return <UserCardList data={this.state.data} />
            }
        }
        return (
            <div >
                <div class="ui secondary  menu">
                    <a class="active item" href="#" style={{ fontSize: 'large' }}>
                        GetUserData API
                    </a>
                    <a class="item" href="#">
                        @LGMVIP Project
                    </a>
                    <div class="right menu">
                        <button className="ui-primary-button" onClick={this.onUsersRequested}>GetUserData</button>
                    </div>
                </div>
                {toRender()}
            </div >

        )
    }
}

