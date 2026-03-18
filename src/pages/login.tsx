import { useState } from "react"
import { useRouter } from "next/router"

export default function Login() {
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const router = useRouter()

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
            } else {
                setSuccess(true)
                router.push('/')
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
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username" 
                        type="text" 
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
        </div>
    )
}