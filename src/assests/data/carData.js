import a4 from "../images/cars-img/audi_a4.jpg";
import yaris from "../images/cars-img/toyota_yaris.jpg"
import juke from "../images/cars-img/nissan_juke.jpg"
import axio from "../images/cars-img/toyota_axio.jpg"
import chr from "../images/cars-img/toyota_CHR.jpg"
import vezel from "../images/cars-img/honda_vezel.jpg"
import rangerover from "../images/cars-img/range_rover.jpg"
import sorento from "../images/cars-img/kia_sorento.jpg"

const carData = [
    {
        id : 1,
        brand : "Audi",
        rating : 120,
        carName : "Audi A4",
        imgUrl : a4,
        model : "A4",
        price : 80,
        fuelType : "Petrol",
        gps : "GPS Navigation",
        seatType : "Heated seats",
        Transmission : "Automatic",
        description : 
            "Company Director use Audi A4 S Line Sport Drive Year of Manufacturing 2018 (Made in Germany)   Fully loaded /Petrol / Auto"
    },

    {
        id : 2,
        brand : "Honda",
        rating : 108,
        carName : "Honda Vezel",
        imgUrl : vezel,
        model : "vezel RS",
        price : 70,
        fuelType : "Hybrid",
        gps : "GPS Navigation",
        seatType : "Heated seats",
        Transmission : "Automatic",
        description : 
            "The Honda Vezel 2019 is a stylish and compact crossover SUV, offering a perfect blend of efficiency and versatility with its sleek design and spacious interior. Its advanced features and reliable performance make it a popular choice among urban drivers."
    },
    {
        id : 3,
        brand : "Kia",
        rating : 108,
        carName : "Kia Sorento",
        imgUrl : sorento,
        model : "Sorento",
        price : 65,
        fuelType : "Hybrid",
        gps : "GPS Navigation",
        seatType : "Heated seats",
        Transmission : "Automatic",
        description : 
        "The Kia Sorento 2023 is a sophisticated and versatile SUV that combines elegant design with exceptional performance. With its spacious cabin, advanced safety features, and cutting-edge technology, it offers a comfortable and enjoyable driving experience for both city commutes and off-road adventures."
    },
    {
        id : 4,
        brand : "Nissan",
        rating : 98,
        carName : "Nissan Juke",
        imgUrl : juke,
        model : "juke",
        price : 58,
        fuelType : "Hybrid",
        gps : "GPS Navigation",
        seatType : "Heated seats",
        Transmission : "Automatic",
        description : 
        "The Nissan Juke is a uniquely designed compact crossover that stands out with its bold and sporty styling. Packed with innovative features and agile performance, it offers a thrilling driving experience while providing ample interior space for both passengers and cargo."
    },
    {
        id : 5,
        brand : "Range Rover",
        rating : 135,
        carName : "Range Rover Sport",
        imgUrl : rangerover,
        model : "sport 2019",
        price : 98,
        fuelType : "Petrol",
        gps : "GPS Navigation",
        seatType : "Heated seats",
        Transmission : "Tiptronic",
        description : 
        "The Land Rover Range Rover Sport is a luxurious and capable SUV that combines rugged off-road capabilities with refined on-road performance. With its distinctive design, advanced technology, and spacious interior, it offers a sophisticated driving experience for those seeking both adventure and comfort."
    },
    {
        id : 6,
        brand : "Toyota",
        rating : 112,
        carName : "Toyota Axio",
        imgUrl : axio,
        model : "Axio",
        price : 60,
        fuelType : "Hybrid",
        gps : "GPS Navigation",
        seatType : "Heated seats",
        Transmission : "Automatic",
        description : 
        "The Toyota Axio 2018 is a reliable and fuel-efficient sedan that delivers a comfortable and smooth ride. With its spacious interior, advanced safety features, and commendable performance, it offers a practical and enjoyable driving experience for daily commuting and long journeys alike."
    },
    {
        id : 7,
        brand : "Toyota",
        rating : 118,
        carName : "Toyota CHR",
        imgUrl : chr,
        model : "CHR",
        price : 72,
        fuelType : "Hybrid",
        gps : "GPS Navigation",
        seatType : "Heated seats",
        Transmission : "Automatic",
        description : 
        "The Toyota C-HR is a stylish and compact crossover that effortlessly combines bold design with agile performance. With its eye-catching exterior, comfortable interior, and advanced safety features, it offers a dynamic and enjoyable driving experience for urban adventures."
    },
    {
        id : 8,
        brand : "Toyota",
        rating : 90,
        carName : "Toyota Yaris",
        imgUrl : yaris,
        model : "Yaris",
        price : 62,
        fuelType : "Hybrid",
        gps : "GPS Navigation",
        seatType : "Heated seats",
        Transmission : "Automatic",
        description : 
        "Designed with passion, driven by obsession. The Yaris seizes the moment with expressive design that conveys its passion for life and love of movement. The rounded curves and glossy skin are re-invented throughout the design of the Yaris."
    },

];

export default carData;
