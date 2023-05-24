import React, { useState } from 'react';
import { Avatar, Button, TextInput, Label } from 'flowbite-react';
import "./UserProfileCard.css";
import { useNavigate } from 'react-router-dom';

const UserProfileCard = () => {
  const [userName, setUserName] = useState('Testing Name');
  const [email, setEmail] = useState('testing@student.fulbright.edu.vn');
  const [remainingStorage] = useState('5GB');

  const navigator = useNavigate();

  return (
    <div className="mt-9 bg-gray-900 flex flex-col gap-8 w-30rem">
      <div className="text-gray-50 text-2xl font-semibold mb-4">
        User profile
      </div>
      <Avatar size="xl" rounded="true"></Avatar>
      <form className="flex flex-col gap-4 ">
        <div>
          <div className="mb-2 block text-sm font-medium">
            <Label
              htmlFor="username"
              value="User Name"
              className="text-white"
            />
          </div>
          <TextInput
            id="userName"
            type="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block text-sm font-medium">
            <Label
              htmlFor="email1"
              value="FUV email"
              className="text-white"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-white/50 text-sm ">Remaining Storage: {remainingStorage}</div>
        <div className=" gap-4 button-row">
          <Button color="dark" onClick={() => { navigator('/change-password') }}>Change Password</Button>
          <Button type="submit" className="bg-teal-500">Save changes</Button>
        </div>
      </form>
    </div>

  );
}

export default UserProfileCard;
