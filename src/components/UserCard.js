import React from "react";
export default class UserCard extends React.Component {
    render() {
        const { email, first_name, last_name, avatar } = this.props;
        return (
            <div className="card" style={{ alignItems: 'center' }}>
                <div className="image">
                    <img src={avatar} />
                </div>
                <div className="content">
                    <div className="header">{`${first_name} ${last_name}`}</div>
                    <div className="meta">
                        <a>{email}</a>
                    </div>
                </div>
            </div>
        )
    }
}