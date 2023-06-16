const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    params: { model: 'corolla' },
    headers: {
        'X-RapidAPI-Key': 'b1fb2c59f3msh0c1b95a99bf55d6p1a2e1ajsnb266d0cee41e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};


export async function fetchCars() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
 const basePricePerDay = 50
 const mileageFactor = 0.1
 const ageFactor = 0.05
 const mileageRate = city_mpg * mileageFactor
 const ageRate = (new Date().getFullYear() - year) * ageFactor
 const rentalRatePerDay =  basePricePerDay + mileageRate + ageRate
 return rentalRatePerDay.toFixed(0)
}