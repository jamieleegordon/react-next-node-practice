import { useEffect, useState } from "react"

type NewProps = {
    name: string,
    age: number
}

export default function New({name, age} : NewProps) {
    const [message, setMessage] = useState("")
    
    useEffect(() => {
        const fetchMessage = async () => {
            const res = await fetch("/api/contact")
            const data = await res.json()
            setMessage(data.message)
        }

        fetchMessage()
    }, [])

    return (
        <div>
            <h1>New</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{message}</h1>
        </div>
    )
}