import { Router } from "express";
import {allCity, citiesByContinent, citiesById} from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js"

const router = Router()

router.get('/all', allCity)
router.get('/continent/:x',citiesByContinent)
router.get('/id/:id',citiesById)
router.post('/create',create)


export default router