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
        return 'N/A';
    
    if (type === 'number') { // timestamp
        date = new Date(time);
    } else {
        return 'N/A';
    }

    yyyy = date.getFullYear();
    mm = numberLessThenTen(date.getMonth() + 1);
    day = numberLessThenTen(date.getDate());
    hr = numberLessThenTen(date.getHours());
    min = numberLessThenTen(date.getMinutes());
    s = numberLessThenTen(date.getSeconds());

    return toSecond 
    ? yyyy + "/" + mm + "/" + day + "-" + hr + ":" + min + ":" + s
    : yyyy + "/" + mm + "/" + day + " " + hr + ":00-" + hr + ":59";
};
const numberLessThenTen = n => {
    return (n < 10)
        ? "0" + n
        : n;
};
export default timeFormat;