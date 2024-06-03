"use client"

import { useMyProfileQuery, useUpdateUserInfoMutation } from '@/redux/features/auth/authApi'
import { Button, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: profileInfo, isSuccess } = useMyProfileQuery(undefined)
  const [updateUserInfo, { isSuccess: isSuccessUpdateUserInfo, isLoading: isLoadingUpdateUserInfo, isError }] = useUpdateUserInfoMutation()

  const [userEmail, setUserEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [userAge, setUserAge] = useState("")
  const [userBio, setUserBio] = useState("")

  useEffect(() => {
    if (isSuccessUpdateUserInfo) {
      message.success("User profile date update successfull");
    }
  }, [isSuccessUpdateUserInfo])

  useEffect(() => {
    if (isError) {
      message.error("Failed to update information");
    }
  }, [isError])

  useEffect(() => {
    if (isSuccess && profileInfo) {
      const { user: { name, email }, age, bio } = profileInfo?.data;

      setUserName(name)
      setUserEmail(email)
      setUserAge(age)
      setUserBio(bio)
    }
  }, [isSuccess, profileInfo])

  function handleSubmit() {
    const updateInfo = {
      age: userAge,
      bio: userBio
    }

    updateUserInfo(updateInfo)
  }

  return (
    <section>
      <div>
        <h3 className='mb-6 text-3xl font-semibold'>You can upate only age and bio</h3>
        <Form onFinish={handleSubmit} className="mt-10">
          <div className='mb-6'>
            <Input size='large' placeholder='Email' value={userEmail} readOnly />
          </div>
          <div className='mb-6'>
            <Input size='large' placeholder='Name' name="name" value={userName} readOnly />
          </div>
          <div className='mb-6'>
            <Input size='large' placeholder='Age' name="age" onChange={e => setUserAge(e.target.value)} value={userAge} />
          </div>
          <div className='mb-6'>
            <TextArea size='large' placeholder='Bio' name="bio" onChange={e => setUserBio(e.target.value)} value={userBio} />
          </div>
          <div>
            <Button loading={isLoadingUpdateUserInfo} size='large' htmlType='submit' type="primary">Update Profile</Button>
          </div>
        </Form>
      </div>
    </section>
  )
}
