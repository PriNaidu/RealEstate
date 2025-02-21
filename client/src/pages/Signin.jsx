import React from "react";

function Signin() {
  return (
    <>
      <form>
        <div className="flex">
          <input type="text" placeholder="Please enter email" />
          <input type="text" placeholder="Please enter password" />
          <button>Sign in</button>
          <button> Forgot Password</button>
        </div>
      </form>
    </>
  );
}

export default Signin;
