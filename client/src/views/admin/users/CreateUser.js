import React from "react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
function CreateUser() {
  return (
    <div>
      {/* we want to render the sign up component in /signup.
        We will override the <SignInAndUp> component to only show the sign up
        UI on this route. See the init function call above for how to do this*/}
      <EmailPassword.SignInAndUp />
    </div>
  );
}

export default CreateUser;
