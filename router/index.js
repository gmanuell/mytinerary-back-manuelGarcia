import { Router } from "express";
import citiesRouter from './cities.js'
import itineraryRouter from './itineraries.js'
import routerAuth from "./auth.js";
import routerUsers from './users.js'



const router = Router()

router.use('/cities', citiesRouter)
router.use('/itineraries', itineraryRouter)
router.use('/users', routerUsers)
router.use('/auth', routerAuth)


export default router;