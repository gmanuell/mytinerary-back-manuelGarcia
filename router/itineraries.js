import { Router } from "express";
import {allItinerary, itinerariesById, itinerariesByCityId} from "../controllers/itineraries/read.js";
import { create } from "../controllers/itineraries/create.js"
import { update } from "../controllers/itineraries/update.js";
import { deleteOne } from "../controllers/itineraries/delete.js";

const router = Router()

router.get('/all', allItinerary)
router.get('/cityid/:x',itinerariesByCityId)
router.get('/id/:id',itinerariesById)
router.post('/create',create)
router.put('/update',update)
router.delete('/deleteOne',deleteOne)


export default router