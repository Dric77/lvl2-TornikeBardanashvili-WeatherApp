

export const CurrentTime = () => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let min = newDate.getMinutes();

    return(hours + ':' + min + ',' + date + '/' + month)

    
}