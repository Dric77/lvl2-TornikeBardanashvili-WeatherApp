import axios from 'axios';




 const getAPI = async (url) => {
    const res = await fetch(url);
    return res.json(); 
}

const getDays =  async (daysURL) => {
    const res = await fetch(daysURL);
    return res.json(); 
};


let dayesData = [
    {
        daye: 'Sat',
        month: 'June',
        number: 12,
        icon: 'c01d',
        temp: '23/15',
        clouds: 'clearly sky'

    },
    {
        daye: 'Sat',
        month: 'June',
        number: 12,
        icon: 'c01d',
        temp: '23/15',
        clouds: 'clearly sky'

    },
    {
        daye: 'Sat',
        month: 'June',
        number: 12,
        icon: 'c01d',
        temp: '23/15',
        clouds: 'clearly sky'

    },
    {
        daye: 'Sat',
        month: 'June',
        number: 12,
        icon: 'c01d',
        temp: '23/15',
        clouds: 'clearly sky'

    },
    {
        daye: 'Sat',
        month: 'June',
        number: 12,
        icon: 'c01d',
        temp: '23/15',
        clouds: 'clearly sky'

    },
    {
        daye: 'Sat',
        month: 'June',
        number: 12,
        icon: 'c01d',
        temp: '23/15',
        clouds: 'clearly sky'

    },
    {
        daye: 'Sat',
        month: 'June',
        number: 12,
        icon: 'c01d',
        temp: '23/15',
        clouds: 'clearly sky'

    },
    {
        daye: 'Sat',
        month: 'June',
        number: 12,
        icon: 'c01d',
        temp: '23/15',
        clouds: 'clearly sky'

    },
]

export {getAPI, getDays, dayesData}