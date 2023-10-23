import React, { useState, useEffect } from 'react'

function DummyData() {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/users")
          .then(res => res.json())
          .then(data => setUsers(data.users))
          .catch(err => console.log(err));
      }, []);
    console.log(users)
    return (
        <div className='bg-dark w-100'>
            <h1 className='text-center text-white '>Dummy Data</h1>
            <table className='table table-dark table-bordered'>
                <thead>
                    <tr>
                        <th > SNo</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    { users && 
                        users.map(record => {
                           return (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td><figure><img src={record.image} alt={record.id + "profile"} className='img-fluid' style={{height:"50px"}}></img></figure></td>
                                <td>{record.firstName}</td>
                                <td>{record.lastName}</td>
                                <td>{record.gender}</td>
                                <td>{record.email}</td>
                                <td>{record.username}</td>
                                <td>{record.domain}</td>
                                <td>{record.ip}</td>
                                <td>{record.university}</td>
                            </tr>
                           )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DummyData
