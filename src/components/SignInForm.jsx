import { Checkbox, Input } from 'antd';
import { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
export const SignInForm = () => {
  const [passwordVisible, setPasswordVisible] = useState();
  return (
    <div className='flex flex-col gap-4 max-w-[500px]'>
      <h1 className='font-bold text-3xl'>Sign In</h1>
      <p className='text-gray-600'>
        Don&apos;t have an account yet?{' '}
        <Link to={'/signup'} className='font-bold text-green-500'>
          Sign Up
        </Link>
      </p>
      <Input placeholder='Email Address' />
      <Input.Password
        placeholder='Password'
        visibilityToggle={{
          visible: passwordVisible,
          onVisibleChange: setPasswordVisible,
        }}
      />
      <div className='flex justify-between'>
        <Checkbox className='text-gray-600' onChange={() => ''}>
          Remember Me
        </Checkbox>
        <p className='font-bold text-sm'>Forgot Password? </p>
      </div>

      <Button>Sign In</Button>
    </div>
  );
};
