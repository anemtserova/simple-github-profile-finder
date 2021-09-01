import React from 'react';
import PropTypes from "prop-types";
import RepoItem from "../Repos/RepoItem";

export const Repos = ({ repos }) => {
  return (
    repos.map((repo, i) => <RepoItem repo={repo} key={repo.id} />)
  )

};

Repos.propTypes = {
  repos: PropTypes.array,
}

export default Repos;