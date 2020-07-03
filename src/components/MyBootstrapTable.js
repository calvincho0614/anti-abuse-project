import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { ColumnToggle, Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;
const { ToggleList } = ColumnToggle;

const MyBootstrapTable = (props) => {
  const options = {
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    showTotal: true,
    sizePerPageList: [ {text: '50', value: 50} ] 
  };
  return (props.results && props.columns && props.defaultSorted ?
    <div data-test="MyBootstrapTableComponent">
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

MyBootstrapTable.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    Time: PropTypes.string.isRequired,
    WeeklyTime: PropTypes.string.isRequired,
    DailyTime: PropTypes.string.isRequired,
    HourlyTime: PropTypes.string.isRequired,
    WeeklyInternal: PropTypes.number.isRequired,
    WeeklyRecipients: PropTypes.number.isRequired,
    WeeklyEmails: PropTypes.number.isRequired,
    HourlyBCC: PropTypes.number.isRequired,
    WeeklyUndelivered: PropTypes.number.isRequired,
    DailyRecipients: PropTypes.number.isRequired,
    BannedNum: PropTypes.number.isRequired,
    Type: PropTypes.string.isRequired,
    Blackhole: PropTypes.number.isRequired,
    DailyBCC: PropTypes.number.isRequired,
    WeeklyIncoming: PropTypes.number.isRequired,
    Reputation: PropTypes.number.isRequired,
    HourlyEmails: PropTypes.number.isRequired,
    WeeklySpam: PropTypes.number.isRequired,
    WeeklyBCC: PropTypes.number.isRequired,
    DailyEmails: PropTypes.number.isRequired,
    WeeklyBadInternal: PropTypes.number.isRequired,
    HourlyRecipients: PropTypes.number.isRequired,
    Trust: PropTypes.number.isRequired,
    'User level': PropTypes.number.isRequired
  })).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    dataField: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    sort: PropTypes.bool.isRequired
  })).isRequired,
  defaultSorted: PropTypes.arrayOf(PropTypes.shape({
    dataField: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired
  })).isRequired
};

export default MyBootstrapTable;