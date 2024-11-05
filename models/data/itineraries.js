import "dotenv/config.js"
import '../../config/database.js'
import Itinerary from "../Itinerary.js"

const itineraries = [
    {
      name: "Ross Geller",
      description: "Explore the ancient temples of Chiang Mai",
      photo: "https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2017/08/22/17C10B2A-7B04-4686-A3F5-959ACD199DB2/98.jpg?crop=1995,1122,x0,y0&width=1900&height=1069&optimize=low&format=webply",
      price: 3,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Temples", "#Culture", "#History"],
      city: "67186c53ec53e42fd6395895"
    },
    {
      name: "Monica Geller",
      description: "Jungle adventure in Chiang Mai",
      photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwDet7uAdautnZXYK_iY7iXlRguSoUhpbzX1Lo340HhAbChItMXhHB_HR9bf8fgEggfZ2ZLY9m4_F0OY8Xi2jHzYtkeDoizw5SdyhPRA",
      price: 4,
      duration: "6 hours",
      likes: "0",
      hashtags: ["#Nature", "#Adventure", "#Trekking"],
      city: "67186c53ec53e42fd6395895"
    },
    {
      name: "Rachel Green",
      description: "Gastronomic route in Chiang Mai",
      photo: "https://media.vogue.es/photos/5d825103a260de0008c02c84/2:3/w_2560%2Cc_limit/GettyImages-908311.jpg",
      price: 2,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Food", "#Culture", "#Markets"],
      city: "67186c53ec53e42fd6395895"
    },
    {
      name: "Walter White",
      description: "Historical tour of Kyoto",
      photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNoEt_JjxruNZ7ts5QuYzGMYtgcRH2SrT_UVGJ0sPA-tpes_uNf2Z2WVKskaGn0SGmFZGD0IKe2fUvPjoYfG8ebH1ZWBogUKJO8ZSPzco",
      price: 3,
      duration: "4 hours",
      likes: "0",
      hashtags: ["#History", "#Temples", "#Kyoto"],
      city: "67186c53ec53e42fd6395896"
    },
    {
      name: "Jesse Pinkman",
      description: "Garden and shrine tour in Kyoto",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrieotSSNLe7eZYKwZD1GNR0Xx5msTyG6jA&s",
      price: 2,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Nature", "#Culture"],
      city: "67186c53ec53e42fd6395896"
    },
    {
      name: "Daenerys Targaryen",
      description: "Art and culture in Florence",
      photo: "https://pbs.twimg.com/profile_images/1243475459125456896/e-zIQiFY_400x400.jpg",
      price: 3,
      duration: "4 hours",
      likes: "0",
      hashtags: ["#Art", "#History", "#Renaissance"],
      city: "67186c53ec53e42fd6395897"
    },
    {
      name: "Jon Snow",
      description: "Gastronomic tour of Florence",
      photo: "https://hips.hearstapps.com/hmg-prod/images/jon-snow-1655450297.jpg?crop=0.6655xw:1xh;center,top&resize=640:*",
      price: 3,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Food", "#Wine", "#Culture"],
      city: "67186c53ec53e42fd6395897"
    },
    {
      name: "Michael Scott",
      description: "Oaxaca gastronomy",
      photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRmkRn2X8vAlCvakN5CIirl5lqwko6-ihKfXKAIyJstbepPdITbHbOkrViiHHMZnkrXOblS_3AvJSC44-exq-8CyINjcLBwNpLEeFPEBA",
      price: 2,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Food", "#Culture", "#Tradition"],
      city: "67186c53ec53e42fd6395898"
    },
    {
      name: "Jim Halpert",
      description: "Markets and mezcal in Oaxaca",
      photo: "https://i.blogs.es/1a1feb/jimhalpert/450_1000.jpg",
      price: 3,
      duration: "4 hours",
      likes: "0",
      hashtags: ["#Mezcal", "#Tradition", "#Culture"],
      city: "67186c53ec53e42fd6395898"
    },
    {
      name: "Eleven",
      description: "Lantern tour in Hoi An",
      photo: "https://hips.hearstapps.com/hmg-prod/images/millie-bobby-brown-eleven-mike-1563787099.jpg?crop=0.502xw:1.00xh;0.170xw,0&resize=640:*",
      price: 1,
      duration: "2 hours",
      likes: "0",
      hashtags: ["#Lanterns", "#Culture", "#Night"],
      city: "67186c53ec53e42fd6395899"
    },
    {
      name: "Dustin Henderson",
      description: "Bicycle tour in Hoi An",
      photo: "https://www.clarin.com/img/2022/07/04/ThtEgZcsV_720x0__1.jpg",
      price: 2,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Adventure", "#Culture", "#Tour"],
      city: "67186c53ec53e42fd6395899"
    },
    {
      name: "Sherlock Holmes",
      description: "Explore Ubud and its temples",
      photo: "https://srunners.com/wp-content/uploads/2021/05/sherlock-holmes-min-1024x576.jpg",
      price: 3,
      duration: "4 hours",
      likes: "0",
      hashtags: ["#Spirituality", "#Culture", "#Temples"],
      city: "67186c53ec53e42fd639589b"
    },
    {
      name: "John Watson",
      description: "Rice field tour in Ubud",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgL6Z1AhOfNGZ7SUTo-1c8YugxWyU1U4LxA&s",
      price: 2,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Nature", "#Landscapes", "#Adventure"],
      city: "67186c53ec53e42fd639589b"
    },
    {
      name: "Tony Soprano",
      description: "Food tour in Rome",
      photo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Tony_Soprano_2.jpg",
      price: 4,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Food", "#History", "#Italy"],
      city: "67186c53ec53e42fd639589d"
    },
    {
      name: "Carmela Soprano",
      description: "Historical tour of Rome",
      photo: "https://pyxis.nymag.com/v1/imgs/8c9/6ff/79ad10df073e25cb8346845369e4fa3968-carmelo-soprano-1.rsquare.w400.jpg",
      price: 5,
      duration: "5 hours",
      likes: "0",
      hashtags: ["#History", "#Monuments", "#Rome"],
      city: "67186c53ec53e42fd639589d"
    },
    {
      name: "Phoebe Buffay",
      description: "Tour of fountains and squares in Rome",
      photo: "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2017/08/22/F886E747-6A8F-4838-8CE8-A6DF3466FFF2/98.jpg?crop=650,366,x0,y8&width=1900&height=1069&optimize=low&format=webply",
      price: 3,
      duration: "4 hours",
      likes: "0",
      hashtags: ["#Fountains", "#Squares", "#Architecture"],
      city: "67186c53ec53e42fd639589d"
    },
    {
      name: "Homer Simpson",
      description: "Cenotes and culture in Mérida",
      photo: "https://th.bing.com/th/id/R.dfbddf7c530ab5f4cd70154409651f9d?rik=8QvA9SuYyK9OPA&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f86%2f15%2fQJnf5U.jpg&ehk=L5LnlrESXwjMJakswo9IpboPEqfCGEbIvgtLJAXqSCc%3d&risl=&pid=ImgRaw&r=0",
      price: 3,
      duration: "4 hours",
      likes: "0",
      hashtags: ["#Cenotes", "#Culture", "#History"],
      city: "67186c53ec53e42fd63958a1"
    },
    {
      name: "Bart Simpson",
      description: "Tango tour in Buenos Aires",
      photo: "https://los40ar00.epimg.net/los40/imagenes/2020/09/09/cine/1599665083_011413_1599665845_noticia_normal.jpg",
      price: 2,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Tango", "#Culture", "#Night"],
      city: "67186c53ec53e42fd63958a2"
    },
    {
      name: "Tyrion Lannister",
      description: "Sydney harbor tour",
      photo: "https://upload.wikimedia.org/wikipedia/en/5/50/Tyrion_Lannister-Peter_Dinklage.jpg",
      price: 4,
      duration: "4 hours",
      likes: "0",
      hashtags: ["#Harbor", "#Nature", "#Landscapes"],
      city: "67186c53ec53e42fd63958a3"
    },
    {
      name: "Arya Stark",
      description: "Cultural tour of Sydney",
      photo: "https://static.wikia.nocookie.net/hieloyfuego/images/3/3e/Arya_Stark_HBO_Season_8.PNG.png/revision/latest?cb=20220811175927",
      price: 3,
      duration: "3 hours",
      likes: "0",
      hashtags: ["#Culture", "#Museums", "#History"],
      city: "67186c53ec53e42fd63958a3"
    }
  ];
  
    
  



Itinerary.insertMany(itineraries)