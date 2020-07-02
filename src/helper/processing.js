import {timeFormat} from './timeFormat';
import {generateColorList} from './color';

const processTableData = async data => {
  return { ...data, results: await timestampToReadableTime(data.results)};
}

// convert timestamp to readable time
const timestampToReadableTime = data_list => {
  return data_list.map((data,i) => ({
        ...data,
        id: i,
        Time: timeFormat(data.Time, true),
        WeeklyTime: timeFormat(data.WeeklyTime, true),
        DailyTime: timeFormat(data.DailyTime, true),
        HourlyTime: timeFormat(data.HourlyTime, true)
      })
    );
}

const processDiagramData = async (data, observeExactTime) => {
  let sorted_list = sortData(data.results);
  // console.log('sorted_list = ', sorted_list);
  let {type_list, time_list, labeled_list} = labelData(sorted_list, observeExactTime);
  // console.log('type_list = ', type_list);
  // console.log('time_list = ', time_list);
  let color_list = generateColorList(type_list.length);
  // console.log('color_list = ', color_list); 
  let categorized_list = catagorizeData(type_list, color_list, labeled_list)
  // console.log('categorized_list = ', categorized_list);
  return await { date: time_list, data: categorized_list };
}

// sort the data list by timestamp
const sortData = (data_list) => {
  return data_list.sort((a, b)=>(a.Time - b.Time));
}

// label data list with readable Time and Type
const labelData = (data_list, observeExactTime) => {
  let type_list = [],
      time_list = [],
      labeled_list = data_list.map(data => {
        // record different Type
        if(!type_list.includes(data.Type)) 
        type_list.push(data.Type);
        // record different Time
        let readable_time = timeFormat(data.Time, observeExactTime);
        if(!time_list.includes(readable_time)) 
        time_list.push(readable_time);
        // observeExactTime: false -> the returned value will be hourly-based time unit
        return({
          Time: readable_time,
          Type: data.Type
        });
      });
  return {type_list, time_list, labeled_list};
}

// catagorize data list by Type
const catagorizeData = (type_list, color_list, data_list) => {
  return type_list.map((type, i) => {
      let time_dict = {};
      // count how many records on specific type
      let data_list_of_type = getDataByType(data_list, type);
      data_list_of_type.forEach(data => {
        if(time_dict[data.Time])
          time_dict[data.Time] += 1;
        else
          time_dict[data.Time] = 1;
      });
      return reshapeData(type, time_dict, color_list[i]);
    });
}

// get data list by type
const getDataByType = (data_list, type) => {
  return data_list.filter(data=>(data.Type === type));
}

// reshape data to showcase the diagram
const reshapeData = (type, time_dict, color) => {
  return {
    name: type,
    data: Object.keys(time_dict).map(time => ({
      date: time,
      data: time_dict[time]
    })),
    color: color
  }
}

export {
  processTableData,
  timestampToReadableTime,
  processDiagramData,
  sortData,
  labelData,
  catagorizeData,
  getDataByType,
  reshapeData
}
