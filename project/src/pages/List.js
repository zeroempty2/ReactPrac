import React from 'react'

const User = ({userData}) =>{
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
}
const UserList = () =>{
    const users = [
        {email : 'user1@gmail.com',
        name : '김'
        },
        {email : 'lee@gmail.com',
        name : '이'
        },
        {email : 'park@gmail.com',
        name : '박'
        },
        {email : 'jung@gmail.com',
        name : '정'
        }
    ];

    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
        
        <tbody>
            {users.map(user => <User userData = {user}/>)}
        </tbody>
        </table>
    );
}

export default UserList;