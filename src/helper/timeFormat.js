// If 'toSecond' is true, it will display time unit to 'second' -> observe the exact time
// Otherwise, it will just display time unit to 'hour' -> observe by hourly-based unit
const timeFormat = (time, toSecond = true) => {
    var date,
        yyyy,
        mm,
        day,
        hr,
        min,
        s,
        type = typeof(time);

    if (time === 'null' || !time) 
        return null;
    
    if (type === 'number') { // timestamp
        date = new Date(time);
    } else {
        return null;
    }

    yyyy = date.getFullYear();
    mm = numberLessThanTen(date.getMonth() + 1);
    day = numberLessThanTen(date.getDate());
    hr = numberLessThanTen(date.getHours());
    min = numberLessThanTen(date.getMinutes());
    s = numberLessThanTen(date.getSeconds());

    return toSecond 
    ? yyyy + "/" + mm + "/" + day + "-" + hr + ":" + min + ":" + s
    : yyyy + "/" + mm + "/" + day + " " + hr + ":00-" + hr + ":59";
};
const numberLessThanTen = n => {
    return (n < 10)
        ? "0" + n
        : n;
};
export {
    timeFormat,
    numberLessThanTen
};