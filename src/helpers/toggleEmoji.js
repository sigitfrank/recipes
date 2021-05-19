
import Picker from 'emoji-picker-react'
import { groupNames, groupVisibility } from '../constants/emoji'
import Fade from 'react-reveal/Fade'
export const toggleEmoji = (showEmoji, onEmojiClick) => {
    let display = 'none'

    if (showEmoji) {
        display = 'block'
    }
    const toggleEmojiDisplay = {
        display: display
    }
    return (<div className='emoji-container' style={toggleEmojiDisplay}>
        <Fade>
            <Picker
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                disableSearchBar={true}
                groupNames={groupNames}
                groupVisibility={groupVisibility}
            />
        </Fade>
    </div>)
}