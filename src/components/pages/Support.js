import React, { useRef, useState} from 'react';
import FormInput from '../FormInputs';
import './Support.css';

function Support() {
        const [values, setValues] = useState({
            username: "",
            email: "",
            password: ""
        });

        const inputs = [
            {
                id:1,
                name:"Full Name",
                type:"text",
                placeholder:"Full Name",
                label: "Full Name",
                required: true,
            },
            {
                id:2,
                name:"email",
                type:"email",
                placeholder:"Email",
                label:"Email", 
                required: true,
            },
            {
                id:3,
                name:"Message",
                type:"text",
                placeholder:"Describe the issue",
                label:"Message",
                required: true,
            },
        ]
    
        const handleSubmit = (e) => {
            e.preventDefault();// prevent refresh of the page when clicked
        }


        const onChange = (e) => {
            setValues({...values, [e.target.name]: e.target.value})
        }

        console.log(values);

        return (
            <div className='signup-container'>
                <form onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>
                    {
                        inputs.map((input) => (
                            <FormInput 
                                key={input.id} 
                                {...input} 
                                value={values[input.name]} 
                                onChange={onChange} 
                            />
                        ))
                    }
                    <button>Submit</button>
                </form>
            </div>
        );
    }

export default Support;