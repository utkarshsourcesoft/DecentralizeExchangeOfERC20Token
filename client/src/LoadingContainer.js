import React, { useState , UseEffect} from 'react';
import { getWeb3, getContracts } from  './utils.js';
import App from './App.js';


function LoadingContainer() {
    const [web3, setWeb3] = useState(undefined);
    const [acccounts, setAccounts] = useState([]);
    const [contracts, setContracts] = useState(undefined);

    useEffect( () => {
        const init = async () => {
            const web3 = await getWeb3();
            const contracts = await getContracts(web3);
            const acccounts = await web3.eth.getAccounts();
            setWeb3(web3);
            setContracts(contracts);
            setAccounts(acccounts);

       }
      init();
    },[]);

    const isReady = () => {

        return (
            typeof web3 !== 'undefined'
            && typeof contracts !== 'undefined'
            && acccounts.length > 0
        );
    }

    if(!isReady()) {
        <div>Loading..</div>;
    }

    return (
        <App 
          web3 = {web3}
          acccounts={acccounts}
          contracts={contracts}
        />
    );

}

export default LoadingContainer;