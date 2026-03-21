import { useState } from "react"
import { useRouter } from "next/router"

export default function Login() {
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [successFailMessage, setSuccessFailMessage] = useState<string>("")

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error)
                setSuccessFailMessage("Incorrect Details, please try again")
            } else {
                setSuccess(true)
                setSuccessFailMessage("Logged in successfully")
            }
        } catch {
            setError("Network error")
        }
    }  

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={login}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange = {e => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        id="password" 
                        value={password}
                        onChange = {e => setPassword(e.target.value)} 
                        type="password" 
                        required 
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>

            <h1>{successFailMessage}</h1>
        </div>
    )
}