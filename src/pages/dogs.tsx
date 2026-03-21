import { useEffect, useState } from "react"

export default function Dogs() {
  const [dogs, setDogs] = useState<string[]>([])

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await fetch("https://dogapi.dog/api/v2/breeds")
      const data = await res.json()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dogNames = data.data.map((dog: any) => dog.attributes.name)

      setDogs(dogNames)
    }

    fetchDogs()
  }, [])

  return (
    <div>
      <h1>Dog Breeds</h1>
      <h2>There are {dogs.length} dog breeds</h2>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>{dog}</li>
        ))}
      </ul>
    </div>
  )
}