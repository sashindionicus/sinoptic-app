const key = '7fZCvP4GIT1QgdeoYKWmwQTKH9xcZArV';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'

    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()

    console.log(data[0]);
};

getCity('Kharkiv');