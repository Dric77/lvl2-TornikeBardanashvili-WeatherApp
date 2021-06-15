import axios from 'axios';


 const getAPI = async (url) => {
    const res = await fetch(url);
    return res.json(); 
}

const getDays =  async (daysURL) => {
    const res = await fetch(daysURL);
    return res.json(); 
};


export {getAPI, getDays}