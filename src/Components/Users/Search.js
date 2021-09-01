import React, { useState, useContext } from 'react';

import GithubContext from '../../Context/github/githubContext';
import AlertContext from '../../Context/alert/alertContext';

export const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter something', 'danger');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					value={text}
					onChange={onChange}
					placeholder="Search users..."
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-primary btn-block"
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className="btn btn-light btn-block"
					onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
