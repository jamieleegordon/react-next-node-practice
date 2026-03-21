import styles from '../styles/Item.module.css'

type ItemProps = {
    itemName: string
    indexValue: number
}

export default function Item({itemName, indexValue} : ItemProps) {
    return (
        <div className={styles.Item}>
            <h1>{itemName}</h1>
            <h1>{indexValue}</h1>
        </div>
    )
}
