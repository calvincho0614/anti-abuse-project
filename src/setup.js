export const observeByExactTime = false;
/*
    Set to True -> observe the time interval (hourly based)
    [example]
    input: 1591515739
    output: "1970/01/19 18:05:00-18:59"

    Set to False -> observe the exact time (minute based)
    [example]
    input: 1591515739
    output: "1970/01/19-18:05:15"
*/