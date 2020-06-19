import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { ColumnToggle, Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;
const { ToggleList } = ColumnToggle;

export default (props) => {
  const options = {
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    showTotal: true,
    sizePerPageList: [ {text: '50', value: 50} ] 
  };
  return (props.results && props.columns && props.defaultSorted ?
    <div>
    <ToolkitProvider
      keyField="id"
      data={ props.results }
      columns={ props.columns }
      search
      columnToggle
    >
      {
        props =>
        <div>
          <h3>View/Hide specific Field</h3>
          <ToggleList { ...props.columnToggleProps } />
          <hr />
          <h3>Input to search fields &nbsp;
          <SearchBar { ...props.searchProps } /></h3>
          It will render the row which fields have partially identical text
          <hr />
          <BootstrapTable
            { ...props.baseProps }
            defaultSorted={ props.defaultSorted }
            pagination={ paginationFactory(options) }
          />
        </div>
      }
    </ToolkitProvider>
  </div>
  :null)
}