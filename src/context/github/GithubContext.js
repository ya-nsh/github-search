import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    loading: false
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const fetchUsers = async () => {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });

    const data = await res.json();

    // setUsers(data);
    // setLoading(false);

    dispatch({ type: 'GET_USERS', payload: data }); // payload is the data that we want to pass to the reducer
  };

  const searchUsers = async text => {
    setLoading();
    const params = new URLSearchParams({
      q: text
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });

    const { items } = await res.json();
    dispatch({ type: 'GET_USERS', payload: items });
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
