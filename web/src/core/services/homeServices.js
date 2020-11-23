import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

const getStareedRepos = async (userName) => {
  const url = `${BASE_URL}/${userName}/starred`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err.message;
  }
};

export { getStareedRepos };
