import signUpImg from '../assets/signup-img.png';
import { SignupForm } from '../components';
const Signup = () => {
  return (
    <div className='h-screen flex gap-8 justify-between items-center'>
      <img
    
        src={signUpImg}
        alt='sign-up img'
        className='h-full w-1/2 object-cover'
      />

      <div className='w-1/2 flex justify-center'>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
