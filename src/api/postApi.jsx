import axios from "axios";

const api = axios.create({
   baseURL: "https://restcountries.com/v3.1", 
});

//HTTP get method
export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET method for individual country name
export const getCountryIndData = (name) => {
    return api.get(
        `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
};


//#️⃣url: https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags

//axios ke andar ye method hai "create" jisse hum ek custom instance bana sakte hai.
//instance kya hai? ek aisa object jisme hum apne custom configurations define kr skte h.
// custom configuration matlab: baseURL, headers, timeouts, etc

// we create an instance using axios.create() method.
// then we store this instance in a variable "api"

//then we create functions jo alag alag API calls ko handle karenge.
// eg.HTTP - get, post, push, patch, delete methods.
// eg. api.get = here we use get method of axios instance to fetch data from server; we write the remaining part of the url here only.

//watch video: react js crud operation with rest api using axios.