import { Router } from "express";
import {allCity, citiesByContinent, citiesById} from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js"
import { update } from "../controllers/cities/update.js";
import { deleteOne } from "../controllers/cities/delete.js";

const router = Router()

router.get('/all', allCity)
router.get('/continent/:x',citiesByContinent)
router.get('/id/:id',citiesById)
router.post('/create',create)
router.put('/update',update)
router.delete('/deleteOne',deleteOne)


export default router