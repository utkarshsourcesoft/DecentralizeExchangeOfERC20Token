import React from 'react';
import Dropdown from './Dropdown';

function Header({
    user, 
    tokens,
    contracts,
    selectToken
}) {
    return (
        <header id='header' className='card'>
            <div className='row'> 
               <div className='col-sm-3 flex'>
                   <Dropdown
                     items ={tokens.map(token => ({
                         label: token.ticker,
                         value: token
                     }))}
                     activeItem={{
                         label: user.selectedToken.ticker,
                         value: user.selectedToken
                     }}
                     onSelect={selectToken}
                   />

               </div>
               <div className='col-sm-9'>
                    <span>Contract Address :
                         <span>
                             {contracts.dex.options.address}
                         </span>
                    </span>
                </div>
            </div>


        </header>
    );


}


export default Header;

