import React from 'react';

const LoginButton = (props) => {
  return(
    <button type="button" className="btn btn-primary" onClick={() => onSubmit(props.loginInfo)}>Login</button>
  );
};

function onSubmit(obj){
  console.log(obj);
}

export default LoginButton;
