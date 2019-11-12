import React from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function CardUser({user, refresh}){
  function deleteUser(){
    swal({
        title: "Are you sure?",
        text: "Once deleted, data ("  + user.nama + ") will not be able to recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then(async (willDelete) => {
    if (willDelete) {
        swal("data (" + user.nama + ") has been deleted!", {icon: "success",});

        await axios.delete("http://localhost/reactapi/deleteUser.php?id=" + user.id)

        return refresh()
    } else {
        swal("data (" + user.nama + ") is safe!");
    }
    });
  }

  
    return(
        <tr>
            <th scope="row">{user.id}</th>
            <th scope="row">{user.nama}</th>
            <th scope="row">{user.alamat}</th>
            <th scope="row">
            <Link className="btn btn-outline-warning btn-sm" to={'/editUser/' + user.id}>𝗘𝗱𝗶𝘁</Link>
            <button type="button" class="btn btn-outline-danger btn-sm" onClick={deleteUser}>𝗗𝗲𝗹𝗲𝘁𝗲</button>
            </th>
        </tr>

    )
}

export default CardUser
