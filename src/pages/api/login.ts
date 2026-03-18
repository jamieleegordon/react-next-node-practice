import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../lib/store'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  const user = users.find(u => u.email === email)

  if (!user) {
    return res.status(401).json({ error: 'User not found' })
  }

  if (user.password !== password) {
    return res.status(401).json({ error: 'Incorrect password' })
  }

  return res.status(200).json({ message: 'Login successful', username: user.username })
}