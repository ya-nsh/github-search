import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();
const axios = require('axios');

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
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

  // const getSingleUser = async login => {
  //   setLoading();

  //   const res = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`
  //     }
  //   });

  //   if (res.status === 404) {
  //     window.location = '/notfound';
  //   } else {
  //     const { data } = await res.json();
  //     console.log('data');
  //     console.log(data);
  //     dispatch({ type: 'GET_USER', payload: data });
  //   }
  // };

  async function getSingleUser(login) {
    setLoading();

    try {
      const response = await axios.get(`${GITHUB_URL}/users/${login}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`
        }
      });
      if (response.status === 404) {
        window.location = '/notfound';
      } else {
        // const { data } = await response.json();
        console.log(response);
        console.log('data');
        console.log(response.data);

        dispatch({ type: 'GET_USER', payload: response.data });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getSingleUser,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
