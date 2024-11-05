import { Router } from "express";
import citiesRouter from './cities.js'
import itineraryRouter from './itineraries.js'



const router = Router()

router.use('/cities', citiesRouter)
router.use('/itineraries', itineraryRouter)

export default router;