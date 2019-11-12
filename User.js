import React, {Component} from 'react';
import axios from 'axios'
import CardUser from './CardUser'
import {Link } from 'react-router-dom'

class User extends React.Component{
  constructor(){
    super()
    this.state = {
        user : []
    }
}

componentDidMount = async() => {
    await axios.get("http://localhost/reactapi/user.php")
    .then(response=>this.setState({
        user: response.data
    }))
    console.log(this.state)
}

  render(){
    const renderData = this.state.user.map(user=>{
    return (
        <CardUser user={user} key={user.id} refresh={this.componentDidMount}/>
    )

})
        return(
            <div className="container">
            <h2>𝑳𝒊𝒔𝒕 𝑶𝒇 𝑼𝒔𝒆𝒓</h2>
            <Link className="btn btn-outline-danger btn-sm" to={'/Form'}>𝙰𝚍𝚍</Link>
            <table class="table table-hoverk">
                <thead>
                    <tr class="table-warning">
                    <th scope="col">𝗜𝗱</th>
                    <th scope="col">𝗡𝗮𝗺𝗲</th>
                    <th scope="col">𝗔𝗱𝗱𝗿𝗲𝘀𝘀</th>
                    <th scope="col">𝗢𝗽𝘁𝗶𝗼𝗻</th>
                    </tr>

                </thead>
                <tbody>
                    {renderData}
                </tbody>
            </table>
        </div>
        );
    }
}
export default User;
