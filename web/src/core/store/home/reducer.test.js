import homeReducer, { getAllSuccess, loading } from './reducer';

describe('Home reducer', () => {
  test('it updates repo data', () => {
    const mockData = [
      {
        id: '999999',
        name: 'Test Repo',
        description: 'Test description',
        url: 'www.test.com',
        language: 'Typescrit',
      },
    ];

    expect(
      homeReducer(
        {},
        {
          type: getAllSuccess.type,
          payload: mockData,
        },
      ),
    ).toEqual({ starredRepos: mockData });
  });

  test('it should update loading state', () => {
    expect(homeReducer({}, { type: loading.type, payload: true })).toEqual({ loading: true });
  });
});
