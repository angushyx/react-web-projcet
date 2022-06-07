import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login, logout, auth, signIn, signup } from "../../slices/auth-slice";
import { GoogleLogin } from "react-google-login";

import { ImageStyleFree, ButtonWrapper } from "../Detail/DetailElement";
import { BtnStyle } from "../UI/Button";
import Input from "../UI/Input";
import withReactContent from "sweetalert2-react-content";
import LoadingSpinner from "../UI/LoadingSpinner";
import Swal from "sweetalert2";
import {
  Wrapper,
  Headline,
  SignupCard,
  From,
  InputWrapper,
} from "../Signup/SignElement";
import AuthService from "../../services/authApi";

const Login = () => {
  const navigate = useNavigate();

  // 引入SweetAlert
  const AuthSwal = withReactContent(Swal);

  //判斷狀態，1. 是否登入?  2. 是否 load 中
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  //轉換登入、建立帳號模式

  /**************JWT VERSION 2*************/

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateData = {
    email: formData.email,
    password: formData.password,
    role: formData.role,
    name: formData.firstName + formData.lastName,
  };

  const switchAuthModeHandler = () => {
    setIsSignup((prevState) => !prevState);
    setIsLogin((prevState) => !prevState);
  };

  let errorMessage;
  /**
   * USE JWT login or signup
   * @param {event} e
   */
  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isSignup) {
      AuthService.signup(
        updateData.name,
        updateData.email,
        updateData.password,
        updateData.role
      )
        .then(() => {
          setIsLoading(false);
          AuthSwal.fire({
            title: "Success",
            text: "Authentication Success",
            icon: "success",
          });
        })
        .catch((err) => {
          AuthSwal.fire({
            title: "Success",
            text: err.response.data,
            icon: "error",
          });
        });
      setIsLoading(false);
    } else {
      // dispatch(signIn(formData));
      // getUserAuth(formData);
      navigate("/");
    }
  };

  /**
   * Google auth system
   * @param {Promise} res
   */
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch(auth(result));
      navigate("/");
    } catch (error) {}
  };
  const googleFailure = async (res) => {};

  return (
    <Wrapper>
      {" "}
      <SignupCard>
        <Headline>LOGIN</Headline>
        <From method="POST" action="/" onSubmit={handlerSubmit}>
          <Input
            icon="fa-solid fa-envelope"
            label="userEmail"
            required
            // onChange={handleChange}
            input={{
              type: "email",
              id: "userEmail",
              placeholder: "User name / Email",
              name: "email",
            }}
          />
          <Input
            icon="fa-solid fa-lock"
            label="userPassword"
            required
            // onChange={handleChange}
            input={{
              type: "password",
              id: "userPassword",
              placeholder: "password",
              name: "password",
            }}
          />
          <BtnStyle type="submit" mt="2rem">
            Login
          </BtnStyle>
          {/* <LoadingSpinner /> */}

          <BtnStyle
            fontSize="1.3rem"
            type="button"
            mt="2rem"
            onClick={switchAuthModeHandler}
          >
            {" "}
            <Link style={{ all: "unset" }} to="/signup">
              Creat new account{" "}
            </Link>
          </BtnStyle>

          <br />
          <br />

          <>
            <h2>----------------OR----------------</h2>
            <ButtonWrapper>
              <BtnStyle hoverBgc="#1877f2" radius="3rem" pe="button">
                <ImageStyleFree
                  src={require("../../image/Social Media/facebook-logo-2019.png")}
                  alt="login with facebook"
                />
                FACEBOOK{" "}
              </BtnStyle>
            </ButtonWrapper>

            <ButtonWrapper>
              <GoogleLogin
                clientId="472610148148-acvlomegqtfkp1a32drp8oqaft1rnoae.apps.googleusercontent.com"
                render={(renderProps) => (
                  <BtnStyle
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    radius="3rem"
                  >
                    <ImageStyleFree
                      src={require("../../image/Social Media/google.png")}
                      alt="login with google"
                    />
                    GOOGLE
                  </BtnStyle>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </ButtonWrapper>
          </>
        </From>
      </SignupCard>
    </Wrapper>
  );
};

export default Login;
