import React, { useState } from 'react';
import NavbarMenu from './navbar/NavbarMenu';
import { LuHelpCircle } from 'react-icons/lu';
import { useNavigate  } from 'react-router-dom';
import SideBar from './sidebar/SideBar';



const AddUsers = () => {
    const navigate = useNavigate();
    const [showEmailWindow, setShowEmailWindow] = useState(false);
    const [forcePasswordChange, setForcePasswordChange] = useState(false);
    const [email, setEmail] = useState('');
    const [showMore, setShowMore] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        username: false,
        password: false,
    });

    const handleShowMore = () => {
        setShowMore(true);
    };

    const handleShowLess = () => {
        setShowMore(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleAddClick = () => {
        const { firstName, password } = formData;
        const errors = {
          firstName: !firstName,
          password: !password,
        };
        setFormErrors(errors);
    
        if (Object.values(errors).some((error) => error)) {
          alert('Please fill in all required fields.');
          return;
        }
        
        if (formData.forcePasswordChange && forcePasswordChange) {
          setShowEmailWindow(true);
          navigate('/reset-password-window-1', { state: { firstName } });
        } else if (formData.forcePasswordChange) {
          setShowEmailWindow(true);
        } if (!forcePasswordChange && !formData.forcePasswordChange) {
            window.location.href = '/login';
          } else if (!formData.forcePasswordChange && forcePasswordChange) {
            navigate('/reset-password-window-1', { state: { firstName } });
          }
      };
    


    const handleSendEmail = () => {
        // Logic to send the email goes here
        console.log('Email sent:', email);
        // After sending the email, navigate to /login
        navigate('/login');
        // Show alert after sending email
        alert('Email sent successfully.');
    };


    return (
        <div>
            <SideBar/>
        <div className='w-full'>
            <NavbarMenu />
            <div className='flex justify-end mr-12 '>
                <div className='mt-1 -mr-6'>
                    <span className='text-xl'>
                        Enter the basic user details. The username will get auto-filled based on the Preferred Email Format set.
                        If you prefer any
                        <br />
                        other username from the given suggestions, you can edit the Username field.{' '}
                    </span>
                    {!showMore && (
                        <span
                            onClick={handleShowMore}
                            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                            className='text-xl'
                        >
                            Show More
                        </span>
                    )}
                    {showMore && (
                        <div>
                            <span className='text-xl'> Additional details or content goes here...</span>
                            <br />
                            <span
                                onClick={handleShowLess}
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                className='text-xl'
                            >
                                Show Less
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <div className='flex flex-col -mr-6'>
                    <div className='flex flex-row'>
                        <input
                            type="text"
                            className={`border border-black rounded mr-3 mt-5 w-96 h-12 px-3 ${formErrors.firstName ? 'border-red-500' : ''}`}
                            placeholder="First Name *"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            
                            
                            required
                        />
                        <input
                            type="text"
                            className={`border border-black rounded mr-3 mt-5 w-96 h-12 px-3 ${formErrors.lastName ? 'border-red-500' : ''}`}
                            placeholder="Last Name *"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <input
                        type="text"
                        className={`border border-black rounded mr-3 mt-5 w-192 h-12 px-3 ${formErrors.username ? 'border-red-500' : ''}`}
                        placeholder="Username *"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password"
                        className={`border border-black rounded mr-3 mt-5 w-192 h-12 px-3 ${formErrors.password ? 'border-red-500' : ''}`}
                        placeholder="Password *"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="flex items-center mt-8">
                        <input 
                        type="checkbox" 
                        className="form-checkbox h-5 w-5 text-blue-500"
                        onChange={(e) => setFormData({ ...formData, forcePasswordChange: e.target.checked })}
                        
                         />
                        <span className="ml-2">Send credentials via Email </span>
                        <div className="ml-3 text-teal-500 cursor-pointer">
                            <LuHelpCircle className="w-6 h-6" />
                        </div>
                    </div>
                    {showEmailWindow && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <input 
                            type="text" 
                            className="border border-gray-300 rounded px-4 py-2 mb-4 w-80" 
                            placeholder="Enter your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button 
                            className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded mr-2 ml-2"
                            onClick={() => {

                                console.log('Email sent:', email);
                                 handleSendEmail();
                                
                            }}
                        >
                            Send
                        </button>
                        <button 
                            className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded"
                            onClick={() => {
                                setShowEmailWindow(false);
                            }}
                        >
                            close
                        </button>
                        
                    </div>
                </div>
            )}
                    
                    <div className="flex items-center mt-2">
                        <input 
                        type="checkbox" 
                        className="form-checkbox h-5 w-5 text-teal-500" 
                        onChange={(e) => setForcePasswordChange(e.target.checked)}/>
                        <span className="ml-2">Force user to change password on first log in</span>
                        <div className="ml-3 text-teal-500 cursor-pointer">
                            <LuHelpCircle className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className='bg-blue-200 px-6 py-8 mt-14 flex items-center justify-start ml-72 '>
            
                <button className='bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded mr-4 ml-2' onClick={() => {handleAddClick() }}>
                    Add
                </button>
            
                <button className='bg-gray-200 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded'>Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default AddUsers;
