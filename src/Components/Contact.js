import React, { useState } from 'react'
import './Contact.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle';
const Contact = () => {
    const [data, setData] = useState(
        {
            fullname: '',
            phone: '',
            email: '',
            msg: '',
        }
    );
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal, [name]: value,
            }
        })
    }
    const formSumbit = (e) => {
        e.preventDefault();
        alert(` Hello ${data.fullname} . your Form has been submitted`);
    }

    return (

        <div>
            <div className='my-5'>
                <h1 className='text-center'> Contact Me</h1>
            </div>
            <div className='container contact_div'>
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSumbit}>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">FullName</label>
                                <input type="text"
                                    required className="form-control" id="exampleFormControlInput1"
                                    name='fullname'
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput2">Phone Number</label>
                                <input type="number"
                                    required
                                    className="form-control" id="exampleFormControlInput2"
                                    name='phone'
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile Number" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput3" >Email address</label>
                                <input type="email" required className="form-control" id="exampleFormControlInput3"
                                    name='email'
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea4" >Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea4" rows="2"
                                    name='msg'
                                    value={data.msg}
                                    onChange={InputEvent}>

                                </textarea>
                            </div>
                            <div className='col-12 form-group'>
                                <button type="submit" className="btn  BtnContact">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>




    )
}

export default Contact;
