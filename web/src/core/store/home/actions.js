import { getStareedRepos } from '../../services/homeServices';
import { getAllSuccess, loading } from './reducer';

const retrieveStarredRepos = (userName, callback) => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const repos = await getStareedRepos(userName);
      const mappedReppos = repos.map((repo) => {
        const { id, name, description, language } = repo;
        return {
          id,
          name,
          description,
          url: repo.html_url,
          language,
        };
      });
      dispatch(loading(false));
      dispatch(getAllSuccess(mappedReppos));
      if (callback) callback();
    } catch (err) {
      dispatch(loading(false));
    }
  };
};

export { retrieveStarredRepos };
