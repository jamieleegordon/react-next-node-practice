import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../lib/store'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Return all users
        return res.status(200).json(users)
    }

    if (req.method === 'POST') {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' })
        }

        // Check if user already exists
        if (users.find(user => user.email === email)) {
        return res.status(409).json({ error: 'Email already registered' })
        }

        // Add to in-memory "database"
        users.push({ username, email, password })

        return res.status(201).json({ message: 'Account registered!', users })
    }

    // Reject other methods
    res.status(405).json({ error: 'Method Not Allowed' })
}