import { Checkbox, Input } from 'antd';
import { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
export const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState();
  return (
    <div className='flex flex-col gap-4 max-w-[400px]'>
      <h1 className='font-bold text-3xl'>Sign Up</h1>
      <p className='text-gray-600'>
        Already have an account?{' '}
        <Link to={'/login'} className='font-bold text-green-500'>
          Sign in
        </Link>
      </p>
      <Input className='' placeholder='Your Name' />
      <Input placeholder='Email Address' />
      <Input.Password
        placeholder='Password'
        visibilityToggle={{
          visible: passwordVisible,
          onVisibleChange: setPasswordVisible,
        }}
      />
      <Checkbox className='text-gray-600' onChange={() => ''}>
        I agree with <strong className='text-black'>Privacy Policy</strong> and{' '}
        <strong className='text-black'>Terms of Use</strong>
      </Checkbox>

      <Button>Sign Up</Button>
    </div>
  );
};
