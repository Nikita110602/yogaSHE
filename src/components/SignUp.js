import React,{useState} from 'react'

const SignUp = () => {

    const [userRegistration, setUserRegistration,] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",

    });
    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);

        setUserRegistration({...userRegistration,[name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...userRegistration, id:new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setUserRegistration({ username:"", email:"",phone:"", password:"", });
    }
        const PostData = async (e) => {
            e.preventDefault();
            const { name,email,phone,password } =userRegistration;
try
{
            const res = await fetch("/register_f" , {
                method:"POST",
                headers: {
                    "Content -Type" : "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, password
                })
            });
            const data = await res.json();                                   
            console.log(data)

        }
         catch (error) {
            
            console.log(error);
            
          }
        }
  return (
   <>
  <div className="container-signup">
    <form action="" onSubmit={handleSubmit}>
        <div className='one'>
            <label htmlFor="username">Fullname</label>
        <div>
            <input type="text" autoComplete="off"
            value={userRegistration.username}
            onChange={handleInput}
             name="username" id="username"/>
        </div>
        </div>
          <div className='two'>
               <label htmlFor="username">email</label>
        <div>
               <input type="text"  autoComplete= "off"
               value={userRegistration.email}
            onChange={handleInput} 
               name="email" id="email"/>
        </div>
        </div>
        <div className='third'>
            <label htmlFor="username">phone</label>
        <div>
            <input type="text" autoComplete='off'
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone" id="phone"/>
        </div>
        </div>
        <div className='four'>
            <label htmlFor="username">password</label>
        <div>
            <input type="password" autoComplete='off'
            value={userRegistration.password}
            onChange={handleInput}
            name="password" id="password" />
        </div>
        </div>
        
        <button type="submit">Registration</button>
        
    </form>
    <div>
        {
            records.map((curElem) => {
                return(
                    <div className='showDataStyle'>
                        <p>{curElem.username}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.phone}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            })
        }
    </div>
    </div>
    
   </>
  )
}

export default SignUp