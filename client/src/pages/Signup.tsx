import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          password,
        },
      );
      setLoading(true);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
      toast.success(data.message);
    } catch (error: unknown) {
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <div className="  dark:bg-gray-900 bg-blend-multiply text-gray-800 dark:text-gray-50  ">
      <div className="flex flex-col w-screen mx-auto   justify-center px-6 py-8   lg:py-0">
        <form onSubmit={submitHandler} className="flex max-w-md flex-col gap-4">
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
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              shadow
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link to={"/"}>
                <span className="text-blue-600 underline dark:text-blue-500">
                  terms and conditions
                </span>
              </Link>
            </Label>
          </div>
          <Button
            isProcessing={loading}
            disabled={loading}
            type="submit"
            color="blue"
          >
            Register new account
          </Button>

          <div className="mt-2  opacity-80  text-center gap-2">
            Already have an account
            <Link to={"/login"}>
              <span className="text-blue-600 underline dark:text-blue-500">
                Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Signup };
