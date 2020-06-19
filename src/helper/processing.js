import timeFormat from '../helper/timeFormat';
import {generateColorList} from '../helper/color';

const processTableData = data => {
    return { ...data, results: data.results.map(o => ({
        ...o,
        Time: timeFormat(o.Time, true),
        WeeklyTime: timeFormat(o.WeeklyTime, true),
        DailyTime: timeFormat(o.DailyTime, true),
        HourlyTime: timeFormat(o.HourlyTime, true)
      })
    )};
  }
  
  const processDiagramData = (data, observeExactTime) => {
    let type_dict = {};
    // sort the data list by Timestamp
    let sorted_results = data.results.sort((a, b)=>(a.Time - b.Time)).map(o => {
      // to record how many types from the data list
      if(!type_dict[o.Type]) type_dict[o.Type] = true;
      // the returned value will be hourly-based time unit
      return({
        Time: timeFormat(o.Time, observeExactTime),
        Type: o.Type,
      });
    });
    // go through each type to categorize its data
    let catgorized_data = Object.keys(type_dict).map(type => {
      let time_dict = {};
      // use a dict to count how many records on specific type
      sorted_results.filter(o=>(o.Type === type)).map(o2 => {
        if(time_dict[o2.Time])
          time_dict[o2.Time]+=1;
        else
          time_dict[o2.Time]=1;
        return null;
      });
      // adjust the data structure to showcase the diagram
      return {
        name: type,
        data: Object.keys(time_dict).map(time=>({
          date: time,
          data: time_dict[time]
        }))
      }
    });
    // remove the redundant dates
    let final_data = {
      date: [...new Set(sorted_results.map(o=>o.Time))], 
      data: catgorized_data
    };
    // dynamically generate color for diagram
    let colorList = generateColorList(catgorized_data.length);
    // each type has its color setting
    return { ...reshapeDiagramData(final_data, colorList) };
  }
  
  const reshapeDiagramData = (data, colorList) =>({
      date: data.date,
      data: data.data.map((o, i) => ({
          ...o,
          color: colorList[i]
      }))
  })

export {
    processTableData,
    processDiagramData
}
