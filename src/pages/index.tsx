import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Card from '@/components/card'
import Item from '@/components/item'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../store/counterSlice'
import type { RootState } from '../store'
import Player from './player'
import Person from './person'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  const [message, setMessage] = useState<string>('')

  const cardNames: string[] = ["Jamie-Lee", "Alisa", "Ben", "Charlie"]
  const items: string[] = ["Apple", "Banana", "Orange"]

  const router = useRouter()

  const handleIncrement = () => {
    dispatch(increment())
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
  const goToDogsPage = () => {
    router.push('/dogs')
  }
  const goToPlayerPage = () => {
    router.push('/player')
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

      {items.map((item, index) => (
        <Item key={index} itemName={item} indexValue={index} />
      ))}

      <p>Count: {count}</p>
      <button 
        className={styles.button} 
        onClick={handleIncrement}
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

      <button 
        className = {styles.button}
        onClick={goToDogsPage}
      >
        Dogs
      </button>

      <button 
        className = {styles.button}
        onClick={goToPlayerPage}
      >
        Player
      </button>

      {cardNames.map((name, index) => (
        <Card key={index} name={name} />
      ))}

      <Player message='hellooooo'/>

      <Person name = "Jamie-Lee" age = {22} />

      <p>{message}</p>
    
    </div>
  )
}
