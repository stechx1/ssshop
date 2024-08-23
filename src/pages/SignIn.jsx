import signUpImg from '../assets/signup-img.png';
import { SignInForm } from '../components';

const SignIn = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row gap-8 justify-between items-center'>
      <img
        src={signUpImg}
        alt='sign-up img'
        className='md:h-full md:w-1/2 object-cover'
      />

      <div className='md:w-1/2 flex justify-center mb-6'>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
