import axios, { AxiosError } from 'axios';
import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(
                `${import.meta.env.VITE_URL}/user/signup`,
                {
                    name,
                    email,
                    password
                }
            );
            setLoading(false);
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
            toast.success(data.message);
        } catch (error: unknown) {
            setName('');
            setEmail('');
            setPassword('');
            setLoading(false);

            if (error instanceof AxiosError) {
                console.log(error);
                toast.error(error.response?.data?.message);
            }
        }
    }

    return (
        <section className=" dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50">
            <div className="p-2 md:p-0  md:h-screen  flex items-center justify-center h-screen py-8   lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <form
                        onSubmit={submitHandler}
                        className="flex max-w-md p-3 md:p-10 flex-col gap-4"
                    >
                        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                Sign{' '}
                            </span>
                            Up
                        </h1>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Name" />
                            </div>
                            <TextInput
                                id="name"
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                shadow
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput
                                id="email2"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@gamil.com"
                                required
                                shadow
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password2"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password2"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="* * * *"
                                required
                                shadow
                            />
                        </div>
                        <Button
                            isProcessing={loading}
                            disabled={loading}
                            type="submit"
                            color="blue"
                            className="my-2"
                        >
                            Register new account
                        </Button>

                        <div className="mt-1  opacity-80  text-center gap-2">
                            Already have an account{' '}
                            <Link to={'/login'}>
                                <span className="text-blue-600 underline dark:text-blue-500">
                                    Login
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export { Signup };
