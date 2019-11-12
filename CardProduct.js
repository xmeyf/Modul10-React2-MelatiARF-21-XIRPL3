import React from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function CardProduct({product, refresh}){
  function deleteProduct(){
    swal({
        title: "Are you sure?",
        text: "Once deleted, data ("  + product.nama + ") will not be able to recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then(async (willDelete) => {
    if (willDelete) {
        swal("data (" + product.nama + ") has been deleted!", {icon: "success",});

        await axios.delete("http://localhost/reactapi/deleteProduct.php?id=" + product.id)

        return refresh()
    } else {
        swal("data (" + product.nama + ") is safe!");
    }
    });
  }


    return(
        <tr>
            <th scope="row">{product.id}</th>
            <th scope="row">{product.nama}</th>
            <th scope="row">{product.harga}</th>
            <th scope="row">
            <Link className="btn btn-outline-warning btn-sm" to={'/editProduct/' + product.id}>𝗘𝗱𝗶𝘁</Link>
            <button type="button" class="btn btn-outline-danger btn-sm" onClick={deleteProduct}>𝗗𝗲𝗹𝗲𝘁𝗲</button>
            </th>
        </tr>

    )
    }

    export default CardProduct
