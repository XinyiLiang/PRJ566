import React from 'react';
import 'antd/dist/antd.css';
import '../scoreBoard.css';
import { Table, Tag, Space } from 'antd';

const { Column } = Table;

const data = [
  {
    key: '1',
    ranking: '1',
    teamName: 'Team 1',
    scores: 80000,
    tags: ['Golden'],
  },
  {
    key: '2',
    ranking: '2',
    teamName: 'Team 2',
    scores: 70000,
    tags: ['Silver'],
  },
  {
    key: '3',
    ranking: '3',
    teamName: 'Team 3',
    scores: 50000,
    tags: ['Bronze'],
  },
  {
    key: '4',
    ranking: '4',
    teamName: 'Team 3',
    scores: 10000,
    tags: ['4th place'],
  },
];
class FinalScoreBoard extends React.Component {
  render() {
    return(
    <Table dataSource={data}>
    <Column  className='column'title="Ranking" dataIndex="ranking" key="ranking" />
    <Column  className='column'title="Team Name" dataIndex="teamName" key="teamName" />
    <Column className='column'title="Scores" dataIndex="scores" key="scores" />
    <Column className='column'
      title="Badge"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="orange" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    
  </Table>
    );
  }
}

export default FinalScoreBoard;

