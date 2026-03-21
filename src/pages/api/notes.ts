import type { NextApiRequest, NextApiResponse } from 'next'

const notes: string[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ notes })
  } 
  else if (req.method === 'POST') {
    notes.push(req.body.note)
    res.status(201).json({ message: 'Note added' })
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}