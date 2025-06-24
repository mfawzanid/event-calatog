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
    if (!startAt && !locationId) {
        return prisma.event.findMany({
            orderBy: { startAt: "desc" }
        })
    }

    const conditions: string[] = []
    const params: any[] = []

    if (startAt) {
        conditions.push(`DATE("startAt") = $${params.length + 1}::date`)
        params.push(startAt.toISOString().split("T")[0])
    }
    if (locationId) {
        conditions.push(`"locationId" = $${params.length + 1}`)
        params.push(locationId)
    }

    const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : ""

    const query = `SELECT 
                        e.*,
                        l.name AS "locationName",
                        s.name AS "speakerName"
                    FROM "event" e 
                    INNER JOIN "location" l ON e."locationId"  = l.id
                    LEFT JOIN speaker s ON e."speakerId" = s.id
                    ${whereClause}
                    ORDER BY "startAt" DESC`

    return prisma.$queryRawUnsafe(query, ...params)
};