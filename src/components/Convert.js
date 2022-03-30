import React from 'react';
import axios from 'axios';



const Convert = (props) => {
    const { language, text } = props;
    const [translated, setTranslated] = React.useState('')


    React.useEffect(() => {
       
        const translateLanguage = async () => {

            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                 params: {
                     q: text,
                     target: language.value,
                     key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                 }
             })
            setTranslated(response.data.data.translations[0].translatedText)
            
        }
        translateLanguage()
        

    }, [ language, text ])

    return (
        <div>{translated}</div>
    )
}


export default Convert;

