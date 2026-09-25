import React from 'react'
import "./common.css"
import './MsgToast.css'
import { ToastContainer, toast } from 'react-toastify';

const MsgToast = () => {
 const [message, setMessage] = React.useState('');
 const [type, setType] = React.useState('success');
 const [isVisible, setIsVisible] = React.useState(false);
 const [autoClose, setAutoClose] = React.useState(3000);

 const showToast = (msg, type = 'success', autoClose = 3000) => {
    setMessage(msg);
    setType(type);
    setAutoClose(autoClose);
    setIsVisible(true);
    };

    return (
    <div className={`msg-toast msg-toast--${type} ${isVisible ? 'msg-toast--visible' : ''} `} style={{ transition: 'opacity 0.5s ease-in-out' }}>
      {message}
        <button className="msg-toast__close" onClick={() => setIsVisible(false)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>×</button>
    </div>
  )
}

export default MsgToast