import React from 'react';


const Accordion = (props) => {

    const [activeIndex, setActiveIndex] = React.useState(null)

    const onTitleClick = (index) => {
        
        setActiveIndex(index)
       
    }



let renderedItems = props.items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    

    return (
        <React.Fragment key={item.title}>
            <div 
            onClick={() => onTitleClick(index)}
            className={`title ${active}`}
            >
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div> 
        </React.Fragment>
    )
})



    return (
        <div className="ui styled accordion">
            {renderedItems}
           
        </div>
    )
}


export default Accordion;