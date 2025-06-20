import { Router, Request, Response, NextFunction } from "express"
import * as eventController from "../controllers/eventController"

const router = Router();

router.post("/locations", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await eventController.createLocation(req, res)
    } catch (err) {
        next(err)
    }
})

router.post("/speakers", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await eventController.createSpeaker(req, res)
    } catch (err) {
        next(err)
    }
})

router.post("/events", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await eventController.createEvent(req, res)
    } catch (err) {
        next(err)
    }
})

router.get("/events", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await eventController.getItems(req, res)
    } catch (err) {
        next(err)
    }
})

export default router;