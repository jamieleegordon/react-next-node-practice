type PersonProps = {
    name: string
    age: number
}

export default function Person({name, age}: PersonProps) {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}