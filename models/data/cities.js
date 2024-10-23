import "dotenv/config.js"
import '../../config/database.js'
import City from "../City.js"

const cities = [
    {
      name: "Chiang Mai",
      country: "Tailandia",
      image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/97D6/production/_96907883_gettyimages-508054022.jpg.webp",
      description: "Chiang Mai es una ciudad famosa por sus templos antiguos y cultura vibrante.",
      continent: "Asia",
      population: 127240
    },
    {
      name: "Kioto",
      country: "Japón",
      image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/13416/production/_96907887_gettyimages-538589734.jpg.webp",
      description: "Kioto es conocida por sus palacios imperiales, templos budistas y jardines tradicionales.",
      continent: "Asia",
      population: 1474570
    },
    {
      name: "Florencia",
      country: "Italia",
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15B26/production/_96907888_gettyimages-642451368.jpg.webp",
      description: "Florencia es cuna del Renacimiento y hogar de arte y arquitectura mundialmente famosos.",
      continent: "Europe",
      population: 382258
    },
    {
      name: "Oaxaca",
      country: "México",
      image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/18236/production/_96907889_gettyimages-517739928.jpg.webp",
      description: "Oaxaca es conocida por su rica herencia indígena y colonial, así como por su gastronomía.",
      continent: "North America",
      population: 300050
    },
    {
      name: "Hoi An",
      country: "Vietnam",
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/268E/production/_96907890_gettyimages-543569320.jpg.webp",
      description: "Hoi An es una antigua ciudad portuaria conocida por sus canales y arquitectura bien conservada.",
      continent: "Asia",
      population: 152160
    },
    {
      name: "Ciudad del Cabo",
      country: "Sudáfrica",
      image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/4D9E/production/_96907891_gettyimages-514928156.jpg.webp",
      description: "Ciudad del Cabo es famosa por su belleza natural, incluyendo la Montaña de la Mesa.",
      continent: "Africa",
      population: 433688
    },
    {
      name: "Ubud",
      country: "Indonesia",
      image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/15BF8/production/_96908098_gettyimages-522557886.jpg.webp",
      description: "Ubud es el corazón cultural de Bali, conocido por sus centros de arte, templos y arrozales.",
      continent: "Asia",
      population: 74675
    },
    {
      name: "Santa Fe",
      country: "EE.UU.",
      image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/10DD8/production/_96908096_gettyimages-495925646.jpg.webp",
      description: "Santa Fe es una ciudad conocida por su arquitectura única de adobe y su vibrante escena artística.",
      continent: "North America",
      population: 84683
    },
    {
      name: "Roma",
      country: "Italia",
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/E6C8/production/_96908095_gettyimages-539115110.jpg.webp",
      description: "Roma, la capital de Italia, es famosa por su historia antigua, incluyendo el Coliseo y el Vaticano.",
      continent: "Europe",
      population: 2872800
    },
    {
      name: "Siam Reap",
      country: "Camboya",
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/BFB8/production/_96908094_gettyimages-504122496.jpg.webp",
      description: "Siam Reap es conocida por su proximidad a los templos de Angkor Wat, un sitio del patrimonio mundial.",
      continent: "Asia",
      population: 139458
    },
    {
      name: "Udaipur",
      country: "India",
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/98A8/production/_96908093_gettyimages-487487153.jpg.webp",
      description: "Udaipur, la ciudad de los lagos, es famosa por sus palacios y arquitectura histórica.",
      continent: "Asia",
      population: 451100
    },
    {
      name: "Barcelona",
      country: "España",
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/7198/production/_96908092_gettyimages-625648834.jpg.webp",
      description: "Barcelona es conocida por su arte, arquitectura modernista y la obra de Gaudí.",
      continent: "Europe",
      population: 1620343
    },
    {
      name: "Merida",
      country: "Venezuela",
      image: "https://navicu.com/storage/app/uploads/public/657/708/f08/657708f08aea0491837340.webp",
      description: "Merida es conocida por su proximidad a los Andes venezolanos y su teleférico, el más largo y alto del mundo.",
      continent: "South America",
      population: 204879
    },
    {
      name: "Buenos Aires",
      country: "Argentina",
      image: "https://www.travelandleisure.com/thmb/zvWBxyJ3Nj56uHYXH73NXXgC3iA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/world-class-design-buenos-aires-BAVISIT0418-5e990a610aab499bb9991771dac5fb54.jpg", 
      description: "Buenos Aires, la capital de Argentina, es conocida por su vibrante escena cultural y sus raíces europeas.",
      continent: "South America",
      population: 3075646
    },
    {
      name: "Sídney",
      country: "Australia",
      image: "https://fotografias.larazon.es/clipping/cmsimages02/2019/08/07/4DA2DAB5-8E42-4872-A15A-4EA75C9CB7F9/98.jpg?crop=1031,580,x0,y50&width=1900&height=1069&optimize=low&format=webply", 
      description: "Sídney es la ciudad más grande de Australia, conocida por su Ópera icónica y playas.",
      continent: "Australia",
      population: 5312163
    }
  ];
  

City.insertMany(cities)