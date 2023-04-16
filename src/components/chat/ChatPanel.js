import React from 'react'
import './ChatPanel.css'

const ChatPanel = (props) =>  {
 
    return (
      <div className={`chat-panel ` + (props.showChat && 'show-chat')}>ChatPanel</div>
    )
  
}
export default ChatPanel