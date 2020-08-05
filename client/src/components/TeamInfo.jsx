import React from 'react';
import 'antd/dist/antd.css';

import { Table, Typography } from 'antd';

const { Text } = Typography;

const columns = [
  {
    title: 'Event Name',
    dataIndex: 'eventName',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Score',
    dataIndex: 'score',
  },
  {
    title: 'Ranking',
    dataIndex: 'ranking',
  },
];

const data = [
  {
    key: '1',
    eventName: 'Indenpendence Day',
    date: 'June 15',
    score: 7500,
    ranking: 3,
  },
  {
    key: '2',
    eventName: 'Tycoon Code',
    date: 'June 22',
    score:  10000,
    ranking: 3,
  },
  {
    key: '3',
    eventName: 'Winner Cruise',
    date: 'June 30',
    score:  17500,
    ranking: 1,
  },
  {
    key: '4',
    eventName: 'New Life',
    date: 'July 6',
    score:  12500,
    ranking: 2,
  },
];

class TeamInfo extends React.Component {
  render() {
    return(
<Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      summary={pageData => {
        let totalScore = 0;
        let totalRanking = 0;

        pageData.forEach(({ score, ranking }) => {
          totalScore += score;
        });

        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell>Total</Table.Summary.Cell>
              <Table.Summary.Cell></Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalScore}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text>{totalRanking}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />
    );
  }
}

 
export default TeamInfo;