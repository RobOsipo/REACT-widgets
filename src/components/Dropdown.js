import React from 'react';


const Dropdown = (props) => {

    const [open, setOpen] = React.useState(false);
    const ref = React.useRef();

    
    React.useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
          setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);

   
   
   
    const renderedOptions = props.options.map((option) => {
    if (option.value === props.selected.value) return null;
    
    return (
        
        <div onClick={() => props.onSelectedChange(option) } key={option.value} className='item'>
            {option.value}
        </div>
       
    )
    });






    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{props.label}</label>
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