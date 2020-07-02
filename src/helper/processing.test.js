import * as Processing from './processing';

describe('Test Processing', () => {
  
  it('convert timestamp to readable time', () => {
    const input = [
      {
        Type: "ES",
        Time: 1590729375,
        DailyTime: 1590729375,
        HourlyTime: 1590729375,
        WeeklyTime: 1590729375
      }
    ], output = [
      { 
        id: 0,
        Type: "ES",
        Time: "1970/01/19-17:52:09",
        DailyTime: "1970/01/19-17:52:09",
        HourlyTime: "1970/01/19-17:52:09",
        WeeklyTime: "1970/01/19-17:52:09"
      }
    ];
    let result = Processing.timestampToReadableTime(input);
    expect(result).toEqual(output);
  });

  it('sort data list by Time (asc)', () => {
    const input = [
      { Item: 'C', Time: 1590729790 },
      { Item: 'B', Time: 1590729689 },
      { Item: 'A', Time: 1590729375 }
    ], output = [
      { Item: 'A', Time: 1590729375 },
      { Item: 'B', Time: 1590729689 },
      { Item: 'C', Time: 1590729790 }
    ];
    const result = Processing.sortData(input);
    expect(result).toEqual(output);
  });

  it('extract Type list from data list', () => {
    const input = [
      { Item: 'C', Type: "ES", Time: 1590729790 },
      { Item: 'B', Type: "ESN", Time: 1590729689 },
      { Item: 'A', Type: "S", Time: 1590729375 }
    ], output = {
      type_list: ["ES", "ESN", "S"],
    };
    const {type_list} = Processing.labelData(input, false);
    expect(type_list).toEqual(output.type_list);
  });
  
  it('extract Time list from data list', () => {
    const input = [
      { Item: 'C', Type: "ES", Time: 1590729790 },
      { Item: 'B', Type: "ESN", Time: 1590729689 },
      { Item: 'A', Type: "S", Time: 1590729375 }
    ], output = {
      time_list:["1970/01/19 17:00-17:59"]
    };
    const {time_list} = Processing.labelData(input, false);
    expect(time_list).toEqual(output.time_list);
  });
  
  it('label data list with readable Time and Type', () => {
    const input = [
      { Item: 'C', Type: "ES", Time: 1590729790 },
      { Item: 'B', Type: "ESN", Time: 1590729689 },
      { Item: 'A', Type: "S", Time: 1590729375 }
    ], output = {
      labeled_list:[
        {Time: "1970/01/19 17:00-17:59", Type: "ES"},
        {Time: "1970/01/19 17:00-17:59", Type: "ESN"},
        {Time: "1970/01/19 17:00-17:59", Type: "S"}
      ]
    };
    const {labeled_list} = Processing.labelData(input, false);
    expect(labeled_list).toEqual(output.labeled_list);
  });

  it('catagorize data by Type', () => {
    const type_list = ["ESN", "ES", "B", "S"],
          color_list = ["rgba(99,225,254,0.5)", "rgba(138,231,115,0.9)", "rgba(143,186,157,0.2)", "rgba(149,37,101,0.2)"],
          data_list = [
            {Time: "1970/01/19 17:00-17:59", Type: "ESN"},
            {Time: "1970/01/19 17:00-17:59", Type: "ES"},
            {Time: "1970/01/19 17:00-17:59", Type: "ESN"},
            {Time: "1970/01/19 17:00-17:59", Type: "ES"},
            {Time: "1970/01/19 17:00-17:59", Type: "ES"},
            {Time: "1970/01/19 17:00-17:59", Type: "B"},
            {Time: "1970/01/19 17:00-17:59", Type: "ESN"},
            {Time: "1970/01/19 17:00-17:59", Type: "ES"},
            {Time: "1970/01/19 17:00-17:59", Type: "S"},
            {Time: "1970/01/19 17:00-17:59", Type: "ES"}
          ],
          output = [
            {name: "ESN", data: [{date: "1970/01/19 17:00-17:59", data: 3}], color: "rgba(99,225,254,0.5)"},
            {name: "ES", data: [{date: "1970/01/19 17:00-17:59", data: 5}], color: "rgba(138,231,115,0.9)"},
            {name: "B", data: [{date: "1970/01/19 17:00-17:59", data: 1}], color: "rgba(143,186,157,0.2)"},
            {name: "S", data: [{date: "1970/01/19 17:00-17:59", data: 1}], color: "rgba(149,37,101,0.2)"}
          ];
    const result = Processing.catagorizeData(type_list, color_list, data_list);
    expect(result).toEqual(output);
  });
  
  it('get data by Type', () => {
    const input = [
      { Item: 'C', Type: "ES", Time: 1590729790 },
      { Item: 'B', Type: "ESN", Time: 1590729689 }, 
      { Item: 'A', Type: "S", Time: 1590729375 },
      { Item: 'D', Type: "ESN", Time: 1590729243 }
    ],
    type = "ESN",
    output = [
      { Item: 'B', Type: "ESN", Time: 1590729689 }, 
      { Item: 'D', Type: "ESN", Time: 1590729243 }
    ];
    const result = Processing.getDataByType(input, type);
    expect(result).toEqual(output);
  });

  it('reshape data', () => {
    const type = "ESN",
    time_dict = {"1970/01/19 17:00-17:59": 45, "1970/01/19 18:00-18:59": 40},
    color = "rgba(77,37,133,0.9)",
    output = {
      name: "ESN",
      color: "rgba(77,37,133,0.9)",
      data: [
        { date: "1970/01/19 17:00-17:59", data: 45 },
        { date: "1970/01/19 18:00-18:59", data: 40 }
      ]
    };
    const result = Processing.reshapeData(type, time_dict, color);
    expect(result).toEqual(output);
  });
  
});