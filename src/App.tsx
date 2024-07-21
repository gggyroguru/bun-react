import './App.css';
import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {toast, Toaster} from 'sonner';


const App = () => {

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(input => ({...input, [e.target.name]: e.target.value}))
    }

    const signUp = async () => {
        try {
            const response:AxiosResponse = await axios.post('https://backdrops-api.onrender.com/api/user/signup', input);
            console.log(response.data);
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <Toaster position={'top-right'} expand={true} richColors={true} duration={1500} gap={16}/>
            <div className={'w-dvw h-dvh flex items-center justify-center'}>

                <div className={'w-[90%] max-w-[30rem] p-6 bg-gray-900 rounded-3xl'}>
                    <form className={'w-full flex flex-col gap-6'} onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <div className={''}>
                            <h1 className={'text-center text-2xl font-medium'}>Sign Up</h1>
                        </div>
                        <div className={'flex flex-col gap-6'}>
                            <div className={'flex flex-col gap-3'}>
                                <span className={'px-3 opacity-[.69]'}>Username</span>
                                <span className={'px-3 py-1.5 flex bg-gray-800 rounded-xl'}>
                                        <span>@</span>
                                    <input
                                        className={'w-full bg-gray-800 outline-0 rounded-tr-xl rounded-br-xl'}
                                        name={'username'} autoComplete={"off"} value={input.username}
                                        onChange={(e) => inputChange(e)}/>
                                    </span>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <span className={'px-3 opacity-[.69]'}>Email</span>
                                <input
                                    className={'px-3 py-1.5 bg-gray-800 outline-0 rounded-xl'}
                                    name={'email'} autoComplete={"off"} value={input.email}
                                    onChange={(e) => inputChange(e)}/>
                            </div>
                            <div className={'flex flex-col gap-3'}>
                                <span className={'px-3 opacity-[.69]'}>Password</span>
                                <input
                                    className={'px-3 py-1.5 bg-gray-800 outline-0 rounded-xl'}
                                    name={'password'} autoComplete={"off"} value={input.password}
                                    onChange={(e) => inputChange(e)}/>
                            </div>
                        </div>
                        <div className={'mt-3'}>
                            <button className={'w-full px-3 py-1.5 bg-blue-600 rounded-xl'}
                                    onClick={() => signUp()}>
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default App;
