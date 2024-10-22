import City from "../../models/City.js";

let allCity = async(req,res,next) => {
    try {
      let {name} = req.query
      console.log(name);
       let query = {}

       if (name) {
          query.name = {$regex: '^'+name, $options: 'i'}
       }
      let all = await City.find(query)
      return res.status(200).json({
          response: all
      })
    } catch (error) {
      next(error)
    }  
  }

  
  let citiesByContinent = async(req,res,next) => {
    try {
    let continentQuery = req.params.x
    let all = await City.find({continent:continentQuery} )
    return res.status(200).json({
      response: all
    })
  } catch (error) {
    next(error)
    }
  }  

  let citiesById = async(req,res,next) => {
    try {
    let idQuery = req.params.id
    let all = await City.findById(idQuery)
    return res.status(200).json({
      response: all
    })
  } catch (error) {
    next(error)
    }
  }

export {allCity,citiesByContinent,citiesById} 