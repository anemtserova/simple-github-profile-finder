import React, { useContext } from 'react';
import AlertContext from '../../Context/alert/alertContext';

export const Alert = () => {
	const alertContext = useContext(AlertContext);

	const { alert } = alertContext;

	return (
		alert && (
			<div className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle"> {alert.msg}</i>
			</div>
		)
	);
};

export default Alert;