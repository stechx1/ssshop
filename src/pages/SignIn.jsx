import signUpImg from '../assets/signup-img.png';
import { SignInForm } from '../components/SignInForm';

const SignIn = () => {
  return (
    <div className='h-screen flex gap-8 justify-between items-center'>
      <img
    
        src={signUpImg}
        alt='sign-up img'
        className='h-full w-1/2 object-cover'
      />

      <div className='w-1/2 flex justify-center'>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn