import { useState, useEffect } from "react"

interface User {
  username: string
  email: string
  password: string
}

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [users, setUsers] = useState<User[]>([])

  // Run once on component mount
  useEffect(() => {
    const fetchUsers = async () => {
        try {
          const res = await fetch("/api/register")
          const data: User[] = await res.json()
          setUsers(data)
        } catch {
          console.error("Failed to fetch users")
        }
      }

    fetchUsers()
  }, [success])

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("All fields are required")
      return
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
      } else {
        setSuccess("Account created successfully!")
        setUsername("")
        setEmail("")
        setPassword("")
        
      }
    } catch {
      setError("Network error")
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      <h2>Current Users</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            {user.username} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}