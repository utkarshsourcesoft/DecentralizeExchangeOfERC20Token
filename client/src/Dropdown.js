import React, {useState } from 'react';

function Dropdown({onSelect, activeItem, items} ) {
    const [dropdownvisible , setDropdownVisible] = useState(false);

    const selectitem = (e, item) => {
        e.preventDefault();
        setDropdownVisible(!dropdownvisible);
        onSelect(item);

    }

    return (
        <div className='dropdown ml-3'>
            <button 
              type='button'
              onclick = {() => setDropdownVisible(!dropdownvisible)}
            >{activeItem.label}
            </button>    
            <div className={`dropdown-menu ${dropdownvisible ? 'visible' : ''}`}>
                {items && items.map((item, i) => (
                    <a href='#'
                    onClick={e => selectItem(e, item.value)}
                    >
                        {item.label}

                    </a>
                ))}

            </div>

        </div>


    )

}

export default Dropdown;