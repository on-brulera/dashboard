import React from 'react'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const IconMainContent = () => {
    const handleCopyIcon = (value) => {
        try {
          // Copy the input value to the clipboard
          navigator.clipboard.writeText(value);
    
          // Show success toast
          toast.success('Icon code copied to clipboard!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000, // Toast will automatically close after 2 seconds
          });
        } catch (error) {
          // Handle errors if copying to clipboard fails
          toast.error('Failed to copy icon code.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      };
  return (
    <div className="main-content">
        <div className="row">
            <div className="col-12">
                <div className="panel">
                    <div className="panel-header">
                        <h5>Font Awesome 6</h5>
                    </div>
                    <div className="panel-body">
                        <div className="icon-row">
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-house"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-house"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-house"></i></span>
                                    <span className="icon-name">house</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-house"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-house"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-house"></i></span>
                                    <span className="icon-name">house</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-house"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-house"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-house"></i></span>
                                    <span className="icon-name">house</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-house"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-house"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-house"></i></span>
                                    <span className="icon-name">house</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-house"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-house"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-house"></i></span>
                                    <span className="icon-name">house</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-house"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-house"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-house"></i></span>
                                    <span className="icon-name">house</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-house"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-house"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-house"></i></span>
                                    <span className="icon-name">house</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-magnifying-glass"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-magnifying-glass"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                                    <span className="icon-name">magnifying glass</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-magnifying-glass"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-magnifying-glass"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-magnifying-glass"></i></span>
                                    <span className="icon-name">magnifying glass</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-magnifying-glass"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-magnifying-glass"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-magnifying-glass"></i></span>
                                    <span className="icon-name">magnifying glass</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-magnifying-glass"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-magnifying-glass"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-magnifying-glass"></i></span>
                                    <span className="icon-name">magnifying glass</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-magnifying-glass"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-magnifying-glass"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-magnifying-glass"></i></span>
                                    <span className="icon-name">magnifying glass</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-magnifying-glass"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-magnifying-glass"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></span>
                                    <span className="icon-name">magnifying glass</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-magnifying-glass"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-magnifying-glass"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-magnifying-glass"></i></span>
                                    <span className="icon-name">magnifying glass</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-user"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-user"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                                    <span className="icon-name">user</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-user"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-user"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-user"></i></span>
                                    <span className="icon-name">user</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-user"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-user"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-user"></i></span>
                                    <span className="icon-name">user</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-user"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-user"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-user"></i></span>
                                    <span className="icon-name">user</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-user"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-user"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-user"></i></span>
                                    <span className="icon-name">user</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-user"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-user"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-user"></i></span>
                                    <span className="icon-name">user</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-user"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-user"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-user"></i></span>
                                    <span className="icon-name">user</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-check"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-check"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="icon-name">check</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-check"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-check"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-check"></i></span>
                                    <span className="icon-name">check</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-check"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-check"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-check"></i></span>
                                    <span className="icon-name">check</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-check"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-check"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-check"></i></span>
                                    <span className="icon-name">check</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-check"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-check"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-check"></i></span>
                                    <span className="icon-name">check</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-check"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-check"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-check"></i></span>
                                    <span className="icon-name">check</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-check"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-check"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-check"></i></span>
                                    <span className="icon-name">check</span>
                                </div>
                            </div>
                            
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-download"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-download"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-download"></i></span>
                                    <span className="icon-name">download</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-download"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-download"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-download"></i></span>
                                    <span className="icon-name">download</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-download"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-download"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-download"></i></span>
                                    <span className="icon-name">download</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-download"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-download"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-download"></i></span>
                                    <span className="icon-name">download</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-download"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-download"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-download"></i></span>
                                    <span className="icon-name">download</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-download"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-download"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-download"></i></span>
                                    <span className="icon-name">download</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-download"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-download"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-download"></i></span>
                                    <span className="icon-name">download</span>
                                </div>
                            </div>
                            
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-image"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-image"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-image"></i></span>
                                    <span className="icon-name">image</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-image"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-image"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-image"></i></span>
                                    <span className="icon-name">image</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-image"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-image"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-image"></i></span>
                                    <span className="icon-name">image</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-image"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-image"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-image"></i></span>
                                    <span className="icon-name">image</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-image"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-image"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-image"></i></span>
                                    <span className="icon-name">image</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-image"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-image"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-image"></i></span>
                                    <span className="icon-name">image</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-image"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-image"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-image"></i></span>
                                    <span className="icon-name">image</span>
                                </div>
                            </div>
                            
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-phone"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-phone"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                    <span className="icon-name">phone</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-phone"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-phone"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-phone"></i></span>
                                    <span className="icon-name">phone</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-phone"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-phone"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-phone"></i></span>
                                    <span className="icon-name">phone</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-phone"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-phone"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-phone"></i></span>
                                    <span className="icon-name">phone</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-phone"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-phone"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-phone"></i></span>
                                    <span className="icon-name">phone</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-phone"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-phone"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-phone"></i></span>
                                    <span className="icon-name">phone</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-phone"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-phone"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-phone"></i></span>
                                    <span className="icon-name">phone</span>
                                </div>
                            </div>
                            
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-bars"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-bars"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-bars"></i></span>
                                    <span className="icon-name">bars</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-bars"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-bars"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-bars"></i></span>
                                    <span className="icon-name">bars</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-bars"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-bars"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-bars"></i></span>
                                    <span className="icon-name">bars</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-bars"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-bars"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-bars"></i></span>
                                    <span className="icon-name">bars</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-bars"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-bars"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-bars"></i></span>
                                    <span className="icon-name">bars</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-bars"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-bars"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-bars"></i></span>
                                    <span className="icon-name">bars</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-bars"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-bars"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-bars"></i></span>
                                    <span className="icon-name">bars</span>
                                </div>
                            </div>
                            
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-solid fa-envelope"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-solid fa-envelope"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                                    <span className="icon-name">envelope</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-regular fa-envelope"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-regular fa-envelope"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                                    <span className="icon-name">envelope</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-light fa-envelope"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-light fa-envelope"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-light fa-envelope"></i></span>
                                    <span className="icon-name">envelope</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-thin fa-envelope"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-thin fa-envelope"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-thin fa-envelope"></i></span>
                                    <span className="icon-name">envelope</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-duotone fa-envelope"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-duotone fa-envelope"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-duotone fa-envelope"></i></span>
                                    <span className="icon-name">envelope</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-solid fa-envelope"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-solid fa-envelope"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-solid fa-envelope"></i></span>
                                    <span className="icon-name">envelope</span>
                                </div>
                            </div>
                            <div className="icon-col">
                                <div className="icon-box">
                                    <button className="btn-flush copy-icon" onClick={() => handleCopyIcon('<i className="fa-sharp fa-regular fa-envelope"></i>')}><i className="fa-light fa-clone"></i></button>
                                    <input type='text' className='icon-code' value='<i className="fa-sharp fa-regular fa-envelope"></i>' hidden readOnly/>
                                    <span className="icon"><i className="fa-sharp fa-regular fa-envelope"></i></span>
                                    <span className="icon-name">envelope</span>
                                </div>
                            </div>
                            <div className="w-100 text-center">
                                <Link to="https://fontawesome.com/" target="_blank" className="btn btn-sm btn-primary">See More Icons <i className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default IconMainContent