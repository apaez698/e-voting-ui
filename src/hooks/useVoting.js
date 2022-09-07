import { useEffect, useState } from "react";
import '../../libs/web3.min.js';
import '../../libs/truffle-contract'
import '../../libs/jquery'
import abi from '../../contracts/SimpleVoting.json'

var SimpleVoting;

const useVoting = () => {
    const [votingStatus, setVotingStatus] = useState(0);
    useEffect(() => {
        try {
            var workflowStatusDescription;
            SimpleVoting = TruffleContract(abi);
            SimpleVoting.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
            SimpleVoting.deployed()
                .then(instance => instance.getWorkflowStatus())
                .then(workflowStatus => {

                    switch (workflowStatus.toString()) {
                        case '0':
                            workflowStatusDescription = "Registering Voters";
                            break;
                        case '1':
                            workflowStatusDescription = "Proposals registration Started";
                            break;
                        case '2':
                            workflowStatusDescription = "Proposals registration Ended";
                            break;
                        case '3':
                            workflowStatusDescription = "Voting session Started";
                            break;
                        case '4':
                            workflowStatusDescription = "Voting session Ended";
                            break;
                        case '5':
                            workflowStatusDescription = "Votes have been tallied";
                            break;
                        default:
                            workflowStatusDescription = "Unknown status";
                    }
                    setVotingStatus(Math.floor(workflowStatus.toString))
                    return votingStatus;
                });
        } catch (err) {
            console.error(err);
        }
    }, []);


}

export default useVoting;