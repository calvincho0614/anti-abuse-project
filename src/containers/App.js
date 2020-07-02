import React, { useState, useEffect } from 'react';
import MyBootstrapTable from '../components/MyBootstrapTable.js';
import MyDiagram from '../components/MyDiagram';
import MyBlock from '../components/MyBlock';
import MyIcon from '../components/MyIcon';
import {data} from '../data_store/data';
import * as Processing from '../helper/processing';
// Set observeByExactTime to True -> observe the time interval, False -> observe the exact time
const observeByExactTime = false;

function App() {
  const [table_data, set_table_data] = useState([]);
  const [diagram_data, set_diagram_data] = useState([]);
  const [loading_table, set_loading_table] = useState(false);
  const [loading_digagram, set_loading_digagram] = useState(false);

  const renderTable = () => <MyBootstrapTable {...table_data} />;
  const renderDiagram = () => <MyDiagram {...diagram_data} title='Volume of Records' />;
  const renderTableLoading = () => <MyIcon text='loading table...' />;
  const renderDiagramLoading = () => <MyIcon text='loading diagram...' />;

  useEffect(() => {
    fetchTableData();
    fetchDiagramData();
  }, []);

  const fetchTableData = async () => {
    try {
      set_loading_table(true);
      //const data = await fetch('serverurl');
      Processing.processTableData(data).then(result =>{
        console.log('table_data = ',result);
        set_table_data(result);
        // simulate loading time for 5 sec
        setTimeout(() => set_loading_table(false), 5000);
      });
    } catch (error) {
      set_loading_table(false);
    }
  };

  const fetchDiagramData = async () => {
    try {
      set_loading_digagram(true);
      //const data = await fetch('serverurl');
      Processing.processDiagramData(data, observeByExactTime).then(result => {
        console.log('diagram_data = ',result);
        set_diagram_data(result);
        // simulate loading time for 1 sec
        setTimeout(() => set_loading_digagram(false), 1000); 
      });
    } catch (error) {
      set_loading_digagram(false);
    }
  };
  
  return (<div className="App">
    {
    loading_table
      ? <MyBlock backgroundColor="white" title="Table" render={renderTableLoading} />
      : <MyBlock backgroundColor="white" title="Table" render={renderTable} />
    }
    {
    loading_digagram
      ? <MyBlock backgroundColor="white" title="Diagram" render={renderDiagramLoading} />
      : <MyBlock backgroundColor="white" title="Diagram" render={renderDiagram} />
    }
  </div>);
}

export default App;
