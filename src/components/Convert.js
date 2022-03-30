import React from 'react';



const Convert = (props) => {
    const { language, text } = props;


    React.useEffect(() => {
        conbsole.log('new language or text')
    }, [ language, text ])

    return (
        <div></div>
    )
}


export default Convert;

// https://translation.googleapis.com/language/translate/v2
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM