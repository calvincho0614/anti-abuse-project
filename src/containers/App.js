import React from 'react';
import MyBootstrapTable from '../components/MyBootstrapTable.js';
import MyDiagram from '../components/MyDiagram';
import MyBlock from '../components/MyBlock';
import {data} from '../data_store/data';
import {processTableData, processDiagramData} from '../helper/processing';
// Set observeByExactTime to True -> observe the time interval, False -> observe the exact time
const observeByExactTime = false;

const renderTable = () => (
    <MyBootstrapTable {...processTableData(data)} /> 
);
const renderDiagram = () => (
    <MyDiagram {...processDiagramData(data, observeByExactTime)} title='Volume of Records'/>
);

function App() {
  return (
    <div className="App">
      <MyBlock backgroundColor="white" title="Table" render={renderTable} />
      <MyBlock backgroundColor="white" title="Diagram" render={renderDiagram} />
    </div>
  );
}

export default App;
