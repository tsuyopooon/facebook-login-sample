import React from 'react';
import { FacebookProvider, LoginButton} from 'react-facebook';

const FacebookLoginButton = () => {
    const handleSuccess = (response: any) => {
        console.log(response.status);
    }

    const handleError = (error: Error) => {
        console.log(error);
    }
  return (
    <FacebookProvider appId="162304233470938">
      <LoginButton
        scope="email"
        onSuccess={handleSuccess}
        onError={handleError}
      >
        <span>Login via Facebook</span>
      </LoginButton>
    </FacebookProvider>
  );
}

export {FacebookLoginButton };
