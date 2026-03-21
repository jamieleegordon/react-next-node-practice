import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Card from '@/components/card'

export default function Home() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState<string>('')

  const cardNames: string[] = ["Jamie-Lee", "Alisa", "Ben", "Charlie"]

  const router = useRouter()

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const goToAboutPage = () => {
    router.push('/about')
  }
  const goToContactUsPage = () => {
    router.push('/contact')
  }
  const goToRegisterPage = () => {
    router.push('/register')
  }
  const goToLoginPage = () => {
    router.push('/login')
  }
  const goToNotesPage = () => {
    router.push('/notes')
  }

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch('/api/hello')
      const data = await res.json()
      setMessage(data.message)
    }
  
    fetchMessage()
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button 
        className={styles.button} 
        onClick={increment}
      >
        Increment
      </button>

      <button 
        className = {styles.button}
        onClick={goToAboutPage}
      >
        About
      </button>

      <button 
        className = {styles.button}
        onClick={goToContactUsPage}
      >
        Contact
      </button>
      
      <button 
        className = {styles.button}
        onClick={goToRegisterPage}
      >
        Register
      </button>

      <button 
        className = {styles.button}
        onClick={goToLoginPage}
      >
        Login
      </button>

      <button 
        className = {styles.button}
        onClick={goToNotesPage}
      >
        Notes
      </button>

      {cardNames.map((name, index) => (
        <Card key={index} name={name} />
      ))}

      <p>{message}</p>
    
    </div>
  )
}
