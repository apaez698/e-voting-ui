import React from 'react';
import useVoting from '../hooks/useVoting';


const AdministratorForm = () => {
	const votingProcessState = useVosaddsting();
	return (
		<div className="AdministratorForm">
			<p>
				Estado: {votingProcessState}
			</p>
		</div>
	);
}

export default AdministratorForm;