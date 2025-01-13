import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SIGNUP_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${SIGNUP_URL}`, {
            username,
            password
        });
        alert("You have signed up!");

        // navigate user to signin page
        navigate("/signin");
    }

    return <div className="h-screen w-screen bg-gray-200
    flex justify-center items-center">
        <div className="bg-white rounded-xl p-8 border min-w-48">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className="flex justify-center py-4">
                <Button onClick={signup} variant="primary" text="Signup" fullWidth={true} loading={false} />
            </div>
        </div>
    </div>
}