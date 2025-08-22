import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Add this

interface LoginProps {
  isLogged: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}
interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login({ isLogged, setIsLoggedIn }: LoginProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate(); // Use React Router navigation

  if (isLogged) {
    // ✅ Use React Router navigation instead of window.location
    navigate('/');
    return null;
  }

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login:', data);
    setIsLoggedIn(true);
    navigate('/'); // ✅ Navigate after successful login
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-grey-500">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mx-4 ">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-900">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-900">Password</label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-black font-semibold py-2 px-4 rounded-md" // Fixed text color
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}