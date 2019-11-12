import React, {Component} from 'react';
import axios from 'axios'
import CardProduct from './CardProduct'
import {Link } from 'react-router-dom'

class Product extends React.Component{
  constructor(){
    super()
    this.state = {
        product : []
    }
}

componentDidMount = async() => {
    await axios.get("http://localhost/reactapi/product.php")
    .then(response=>this.setState({
        product: response.data
    }))
    console.log(this.state)
}

  render(){
    const renderData = this.state.product.map(product=>{
    return (
        <CardProduct product={product} key={product.id} refresh={this.componentDidMount}/>
    )

})
        return(
            <div className="container">
            <h2>𝑳𝒊𝒔𝒕 𝑶𝒇 𝑷𝒓𝒐𝒅𝒖𝒄𝒕</h2>
            <Link className="btn btn-outline-danger btn-sm" to={'/FormProduct'}>𝙰𝚍𝚍</Link>
            <table class="table table-hoverk">
                <thead>
                    <tr class="table-warning">
                    <th scope="col">𝙸𝚍 𝙿𝚛𝚘𝚍𝚞𝚌𝚝</th>
                    <th scope="col">𝙽𝚊𝚖𝚎</th>
                    <th scope="col">𝙿𝚛𝚒𝚌𝚎</th>
                    <th scope="col">𝙾𝚙𝚝𝚒𝚘𝚗</th>
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
export default Product;
