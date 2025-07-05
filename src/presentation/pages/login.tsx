import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();


  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login:', data);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mx-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-900">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-900">Password</label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md"
            onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';}}
          >
            Log In
          </button>
        </form>
      </div>    
    </div>
  );
}
