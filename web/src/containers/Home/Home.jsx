import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StrippedBarLoading from '../../components/StrippedBarLoading/StrippedBarLoading';
import { retrieveStarredRepos } from '../../core/store/home/actions';
import useInput from '../../utils/useInput';
import HomeForm from './HomeForm/HomeForm';
import { StyledContainer } from './styles';

const Home = () => {
  const userInput = useInput('github-user');
  const loading = useSelector(({ home }) => home.loading);
  const history = useHistory();

  const dispatch = useDispatch();

  const submitCallback = () => {
    history.push(`/repository-list/${userInput.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(retrieveStarredRepos(userInput.value, submitCallback));
  };

  return (
    <StrippedBarLoading isLoading={loading} text="Getting the repositories list from Github...">
      <StyledContainer>
        <HomeForm handleSubmit={handleSubmit} userInput={userInput} />
      </StyledContainer>
    </StrippedBarLoading>
  );
};

export default Home;
