import { useSelector } from 'react-redux';
import Table from '../../components/Table/Table';
import { StyledButton } from '../../core/themes/styles';

// const mockDataSource = [];

// for (let i = 0; i <= 10; i += 1) {
//   mockDataSource.push({
//     id: i,
//     name: `Test Data ${i}`,
//     description: `This is a long description to test the tablecell ${i}`,
//     url: `www.test${i}.com`,
//     language: `Test Language ${i}`,
//   });
// }

const RepoList = () => {
  const tableData = useSelector(({ home }) => home.starredRepos);
  const renderTagValues = (tags) => {
    if (tags) {
      return tags.map((tag) => <div key={tag}>{`# ${tag}`}</div>);
    }
    return 'No tags';
  };

  const tableColumns = [
    {
      title: 'Repository',
      key: 'name',
      dataIndex: 'name',
      render: (value, record) => <a href={record.url}>{value}</a>,
    },
    {
      title: 'Description',
      align: 'left',
      key: 'description',
      dataIndex: 'description',
      width: '30%',
      ellipsis: true,
    },
    {
      title: 'Language',
      key: 'language',
      dataIndex: 'language',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: renderTagValues,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <StyledButton color="primary" type="button">
          Edit
        </StyledButton>
      ),
      align: 'center',
    },
  ];
  return <Table tableWidth="100%" dataSource={tableData} columns={tableColumns} rowKey="id" />;
};

export default RepoList;
