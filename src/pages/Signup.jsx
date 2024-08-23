import signUpImg from '../assets/signup-img.png';
import { SignupForm } from '../components';
const Signup = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row gap-8 justify-between items-center'>
      <img
        src={signUpImg}
        alt='sign-up img'
        className='md:h-full md:w-1/2 object-cover'
      />

      <div className='md:w-1/2 flex justify-center'>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
