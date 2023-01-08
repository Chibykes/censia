import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

import { IoIosPeople } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const router = useRouter();
  const [form, setForm] = useState({ });
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.username === "superadmin"){
      if(form.password === "censia2022"){
        toast('✅ Login Successful');
        return router.push('/dashboard');
      }
      
      return toast('❌ Password Incorrect');
    }


    let staff = JSON.parse(localStorage.getItem('staffs') || '[]')?.find(s => s.username === form.username);
    if(staff){
      if(form.password === staff.password){
        toast('✅ Login Successful');
        return router.push('/dashboard');
      }
      
      return toast('❌ Password Incorrect');
    }
  }

  useEffect(() => {
    setTimeout(() => setError(''),3000);
  }, [error]);

  return (
    <div>
      <Head>
        <title>Censia.ng</title>
        <meta name="description" content="Census Mnagement System" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>

      <main className="fixed top-0 left-0 w-full h-full bg-app-main flex justify-center items-center">
        <div className='w-2/3 h-full flex justify-center items-center'>
          <p className='flex items-center justify-center gap-2 pb-4 text-2xl font-bold'>
            <IoIosPeople className="text-white text-4xl" />
            <span className='text-white text-3xl'>
              Censia.ng
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className='bg-white w-1/3 h-full flex flex-col justify-center items-center p-20 space-y-4'>
          <p className='flex items-center justify-center gap-2 pb-4 text-2xl font-bold'>
            Sign In
          </p>

          <Input
            name="username"
            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
            label="Username"
            placeholder="Enter username"
          />

          <Input
            name="password"
            onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
            label="Password"
            type="password"
            placeholder="Enter password"
          />

          <Button />

        </form>
      </main>


    </div>
  )
}
