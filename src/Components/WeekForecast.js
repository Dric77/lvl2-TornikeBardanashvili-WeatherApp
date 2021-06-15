
export const WeekForecast = async () => {

            fetch("http://pro.openweathermap.org/data/2.5/forecast/hourly?q=Tbilisi&appid=05cd735c65e813dd88833314cab2f4f1")
                .then(res => res.json())
                .then(
                    (result) => {
                      console.log(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
    }