import React, { useEffect, useState } from 'react'

// Styles
import './Description.scss'

const Description = ({text}) => {
    const [content, setContent] = useState(text.length > 300 ? text.slice(0, 300) : text)

    const [openedText, setOpenedText] = useState(false)
    const [buttonText, setButtonText] = useState('more...')

    useEffect(() => {
        if (openedText) {
            setContent(text.split("\n").join("<br/>"))
            setButtonText('...less')
        } else {
            setContent(text.slice(0, 300).split("\n").join("<br/>"))
            setButtonText('more...')
        }
    }, [openedText])

    return (
        <div className='desc' dangerouslySetInnerHTML={{__html: text.split("\\n").join("<br/>")}}>
            {/*{content}*/}
        </div>
    )
}

export default Description
