import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export async function getEvents(startAt?: string, locationId?: string) {
    try {
        const res = await axios.get(`${BASE_URL}/events`, {
            params: {
                ...(startAt && { startAt }),
                ...(locationId && { locationId })
            },
        })
        return res.data
    } catch (err) {
        console.error('Failed to fetch events: ', err)
        return []
    }
}