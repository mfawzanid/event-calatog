import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createLocation = async (data: { name: string; address?: string | null; gmapUrl?: string | null }) => {
    return prisma.location.create({
        data: {
            name: data.name,
            address: data.address || null,
            gmapUrl: data.gmapUrl || null
        }
    });
};

export const createSpeaker = async (data: { name: string }) => {
    return prisma.speaker.create({
        data: {
            name: data.name,
        }
    })
}

export const createEvent = async (data: { name: string; startAt: Date; locationId: string; speakerId?: string | null }) => {
    return prisma.event.create({
        data: {
            name: data.name,
            startAt: data.startAt,
            locationId: data.locationId,
            speakerId: data.speakerId || null,
        }
    });
};

export const getEvents = async (locationId?: string | null, startAt?: Date | null) => {
    return prisma.event.findMany({
        where: {
            ...(locationId && { locationId }),
            ...(startAt && { startAt }),
        },
        orderBy: { startAt: "desc" },
    });
};