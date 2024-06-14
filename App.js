import React, { useState } from 'react';
import './App.css';

function App() {
    const [form, setForm] = useState({
        studentName: '',
        class: '',
        email: '',
        phoneNumber: '',
        username: '',
        password: '',
        reEnterPassword: '',
        userType: ''
    });

    const [errors, setErrors] = useState({});
    const [loginMessage, setLoginMessage] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.studentName = form.studentName ? "" : "This field is required.";
        tempErrors.class = form.class ? "" : "This field is required.";
        tempErrors.email = form.email ? "" : "This field is required.";
        tempErrors.phoneNumber = form.phoneNumber ? "" : "This field is required.";
        tempErrors.username = form.username ? "" : "This field is required.";
        tempErrors.password = form.password ? "" : "This field is required.";
        tempErrors.reEnterPassword = form.reEnterPassword ? "" : "This field is required.";
        tempErrors.userType = form.userType ? "" : "This field is required.";

        if (form.password !== form.reEnterPassword) {
            tempErrors.reEnterPassword = "Passwords do not match.";
        }

        setErrors(tempErrors);

        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setRegistrationMessage('You have successfully registered!');
            console.log("Form Submitted", form);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginMessage('Welcome, Please Make a Payment to Proceed Further');
    };

    return (
        <div className="App">
            <h2>Student Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Student Name</label>
                    <input type="text" name="studentName" value={form.studentName} onChange={handleChange} />
                    {errors.studentName && <span>{errors.studentName}</span>}
                </div>
                <div>
                    <label>Class</label>
                    <select name="class" value={form.class} onChange={handleChange}>
                        <option value="">Select Class</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                    </select>
                    {errors.class && <span>{errors.class}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
                    {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={form.username} onChange={handleChange} />
                    {errors.username && <span>{errors.username}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Re Enter Password</label>
                    <input type="password" name="reEnterPassword" value={form.reEnterPassword} onChange={handleChange} />
                    {errors.reEnterPassword && <span>{errors.reEnterPassword}</span>}
                </div>
                <div>
                    <label>User Type</label>
                    <input type="text" name="userType" value={form.userType} onChange={handleChange} />
                    {errors.userType && <span>{errors.userType}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
            {registrationMessage && <p>{registrationMessage}</p>}

            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input type="text" name="loginUsername" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="loginPassword" />
                </div>
                <button type="submit">Submit</button>
            </form>
            {loginMessage && <p>{loginMessage}</p>}
        </div>
    );
}

export default App;
