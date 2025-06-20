import { Request, Response } from "express";
import * as eventService from "../services/eventService"

export const createLocation = async (req: Request, res: Response) => {
    const location = await eventService.createLocation(req.body)
    res.status(201).json(location)
}

export const createSpeaker = async (req: Request, res: Response) => {
    const speaker = await eventService.createSpeaker(req.body)
    res.status(201).json(speaker)
}

export const createEvent = async (req: Request, res: Response) => {
    const event = await eventService.createEvent(req.body)
    res.status(201).json(event)
}

export const getItems = async (req: Request, res: Response) => {
    const locationId = typeof req.query.locationId === "string" ? req.query.locationId : undefined

    const startAtStr = typeof req.query.startAt === "string" ? req.query.startAt : undefined
    const startAt = startAtStr ? new Date(startAtStr) : undefined

    const events = await eventService.getEvents(locationId, startAt)

    return res.json(events)
}