import React, { useState } from 'react'
import styles from './Form.module.css'

export default function Form() {
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState(''); 
    const [zip, setZip] = useState('');

    const [fnameError, setfNameError] = useState('');
    const [lnameError, setlNameError] = useState('');
    const [birthError, setBirthError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [stateError, setStateError] = useState('');
    const [zipError, setZipError] = useState('');

    const validateDOB = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        return birthDate.getFullYear()<today.getFullYear() && birthDate.getFullYear()>=1920;
    }
    const validate = () => {
        const regName = /^[a-zA-Z ]{2,30}$/;
        const regPhone = /^([0-9]{10})$/;
        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
        const regState = /^[a-zA-Z]{2,10}$/;
        if(!fname.match(regName)){
            setfNameError('Please enter a valid first name.');
        }
        else setfNameError('');

        if(!lname.match(regName)){
            setlNameError('Please enter a valid last name.');
        }
        else setlNameError('');

        if(!validateDOB(birth)){
            setBirthError('Please choose a valid birth date.');
        }
        else setBirthError('');

        if(gender === ''){
            setGenderError('Please select a gender.');
        }
        else setGenderError('');

        if(!phone.match(regPhone)){
            setPhoneError('Please enter a valid phone number.');
        }
        else setPhoneError('');

        if(!email.match(regEmail)){
            setEmailError('Please enter a valid email.');
        }
        else setEmailError('');

        if(!address.match(regAddress)){
            setAddressError('Please enter a valid address.');
        }
        else setAddressError('');

        if(!state.match(regState)){
            setStateError('Please enter a valid state.');
        }
        else setStateError('');

        if(zip.length!==6){
            setZipError('Please enter a valid zip code.');
        }
        else setZipError('');
    }

    const submit = (e) => {
        e.preventDefault();
        validate();
    }

    return (
        <div className={styles.container}>

            <form className="row g-3 needs-validation" novalidate onSubmit={submit}>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className='form-control' id="validationCustom01" value={fname}  onChange={(e)=>{setfName(e.target.value)}} required />
                    <div className={styles.error}>
                        {fnameError}
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value={lname} onChange={(e)=>{setlName(e.target.value)}} required />
                    <div className={styles.error}>
                        {lnameError}
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustomUsername" className="form-label">Birth Date</label>
                    <div className="input-group has-validation">
                        <input type="Date" className="form-control" id="validationCustomUsername" value={birth} onChange={(e)=>{setBirth(e.target.value)}} required />
                        <div className={styles.error}>
                            {birthError}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Gender</label>
                    <div className={styles.radioBtn}>
                        <div className={styles.radioCont}>
                            <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" value = 'male' onChange={(e)=>{setGender(e.target.value);}} />
                            <label className="form-check-label" htmlFor="validationFormCheck2">Male</label>
                        </div>
                        <div className={styles.radioCont}>
                            <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" value = 'female' onChange={(e)=>{setGender(e.target.value);}}  />
                            <label className="form-check-label" htmlFor="validationFormCheck3">Female</label>
                        </div>
                        <div className={styles.radioCont}>
                            <input type="radio" className="form-check-input" id="validationFormCheck4" name="radio-stacked" value = 'other' onChange={(e)=>{setGender(e.target.value);}}  />
                            <label className="form-check-label" htmlFor="validationFormCheck4">Other</label>
                        </div>
                    </div>
                    <div className={styles.error}>
                        {genderError}
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="validationCustom05" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
                    <div className={styles.error}>
                        {phoneError}
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">E-mail Address</label>
                    <input type="email" className="form-control" id="validationCustom05" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                    <div className={styles.error}>
                        {emailError}
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustom05" className="form-label">Address</label>
                    <input type="text" className="form-control" id="validationCustom05" value={address} onChange={(e)=>{setAddress(e.target.value)}} required />
                    <div className={styles.error}>
                        {addressError}
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">State</label>
                    <input type="text" className="form-control" id="validationCustom04" value={state} onChange={(e)=>{setState(e.target.value)}} required />
                    <div className={styles.error}>
                        {stateError}
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                    <input type="number" className="form-control" id="validationCustom05" value={zip} onChange={(e)=>{setZip(e.target.value)}} required />
                    <div className={styles.error}>
                        {zipError}
                    </div>
                </div>
                <div className="col-12" >
                    <div className="form-check" style={{ display: 'flex', flexDirection:'column', alignItems:'center' }}>
                        <div>
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}
