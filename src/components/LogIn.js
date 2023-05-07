import React, { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = () => {
        const newEntry = { email: email, password: password};

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }



  return (
    <>
    <div className='container'>
    <form action="" onSubmit={submitForm} className='form-2'>
        <div className='A'>
            <label htmlFor="email">Email</label>
            <input type="D" name='email' id='email' 
            autoComplete='off' value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='B'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' 
                autoComplete='off' value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type='submit'>Log in</button>

    </form>
    </div>
    <div>
        {
            allEntry.map((curElem) => {
                return (
                    <div className='showDataStyles'>
                    <p>{curElem.email}</p>
                    <p>{curElem.password}</p>

                    </div>
                )
            } 
            )
        }
    </div>
    
    </>
  )
}




export default BasicForm;