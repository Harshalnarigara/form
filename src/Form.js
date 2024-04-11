import React, { useState, useEffect } from 'react';

function Form() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [add, setAdd] = useState([]);

  useEffect(() => {
    localStorage.setItem("FORM", JSON.stringify(add));
  }, [add]);

  function SubBtn() {
    if (user !== "" && email !== "") {
      const newData = {
        id: new Date().getTime(),
        text1: user,
        text2: email
      };
      setAdd([...add, newData]);
      setUser("");
      setEmail("");
    }
  }

  return (
    <>
      <div className='form'>
        <h1><font color='red'>F</font>orm</h1>
        <form>
          <label>User_name : </label>
          <input type='text' placeholder='Enter your User_name...' value={user} onChange={(e) => setUser(e.target.value)} />
          <label>E-mail : </label>
          <input type='text' placeholder='Enter your E-mail...' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="button" onClick={SubBtn}>Submit</button>
      <ul>
        {add.map((e) => (
          <li key={e.id}>
            <li><h4>User_name : {e.text1}</h4></li>
            <li><h4>E-mail : {e.text2}</h4></li>
          </li>
        ))}
      </ul>
        </form>
      </div>
    </>
  );
}

export default Form;
