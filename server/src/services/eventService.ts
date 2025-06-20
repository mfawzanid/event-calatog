import * as eventRepo from "../repositories/eventRepository"

export const createLocation = async (data: { name: string; address?: string | null; gmapsUrl?: string | null }) => {
    return eventRepo.createLocation(data)
};

export const createSpeaker = async (data: { name: string }) => {
    return eventRepo.createSpeaker(data)
}

export const createEvent = async (data: { name: string; startAt: Date; locationId: string; speakerId?: string | null }) => {
    return eventRepo.createEvent(data)
}

export const getEvents = async (locationId?: string | null, startAt?: Date | null) => {
    return eventRepo.getEvents(locationId, startAt)
}