import React from "react";
import UserCard from "./UserCard";
export default class UserCardList extends React.Component {
    render() {
        const { data } = this.props;
        const toRender = data.map(({ id, first_name, last_name, email, avatar }) => {
            return (
                <div className="four wide column" key={id} >
                    <UserCard
                        first_name={first_name}
                        last_name={last_name}
                        email={email}
                        avatar={avatar}
                    />
                </div>)
        })
        return <div className="ui grid">{toRender}</div>
    }
}