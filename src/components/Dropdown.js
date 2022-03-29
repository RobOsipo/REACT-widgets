import React from 'react';


const Dropdown = (props) => {

    const [open, setOpen] = React.useState(false);
    const ref = React.useRef();

    

    React.useEffect(() => {
        document.body.addEventListener(
          "click",
          (e) => {
           if (ref.current.contains(e.target)) return
           
            setOpen(false);
          },
          { capture: true }
        )
      }, []);

   
   
   
    const renderedOptions = props.options.map((option) => {
    if (option.value === props.selected.value) return null;
    
    return (
        <div onClick={() => props.onSelectedChange(option) } key={option.value} className='item'>
            {option.label}
        </div>
    )
    });




    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>Select a Color</label>
                  <div 
                    onClick={() => setOpen(prevState => !prevState)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}` }
                   >
                    <i className='dropdown icon'></i>
                    <div className='text'>{props.selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dropdown;