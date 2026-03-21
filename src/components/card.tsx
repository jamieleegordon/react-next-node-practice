import styles from '../styles/Card.module.css'

type CardProps = {
    name: string
}
  
export default function Card({ name }: CardProps) {
    return (
      <div className={styles.Card}>
        <h1>This is a card component</h1>
        <h2>{name}</h2>
      </div>
    )
}