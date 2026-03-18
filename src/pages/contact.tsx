import { useEffect, useState } from "react"

export default function ContactUs() {
    const [message, setMessage] = useState<string>("")

    useEffect(() => {
        const fetchMessage = async () => {
            const res = await fetch('/api/contact')
            const data = await res.json()
            setMessage(data.message)
        }

        fetchMessage()
    })
  
    return (
        <div>
            <h1>Contact Us</h1>
            <p>{message}</p>
        </div>
    )
  }