import React from "react";
import { useNavigate } from "react-router-dom";

import { ImageStyleFree, ButtonWrapper } from "../Detail/DetailElement";
import { BtnStyle } from "../UI/Button";
import Button from "../UI/Button";
import Input from "../UI/Input";

import { GoogleLogin } from "react-google-login";

import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/Auth-context";
import { useSelector, useDispatch } from "react-redux";

import { login, logout, auth, signIn, signup } from "../../slices/auth-slice";

import withReactContent from "sweetalert2-react-content";
import LoadingSpinner from "../UI/LoadingSpinner";
import Swal from "sweetalert2";

import {
  Wrapper,
  Headline,
  SignupCard,
  From,
  ChangeModeBtn,
  InputWrapper,
} from "./AuthForm";

const AuthForm = () => {
  //記憶 email 和 password 的值
  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();

  const navigate = useNavigate();

  // 引入SweetAlert
  const AuthSwal = withReactContent(Swal);

  //判斷狀態，1. 是否登入?  2. 是否 load 中
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //轉換登入、建立帳號模式
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  // /**
  //  * 註冊、登入功能，送出帳號資料比對資料庫中的帳號(firebase)
  //  * @param {event} event
  //  */
  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   // const enteredEmail = emailInputRef.current.value;
  //   // const enteredPassword = passwordInputRef.current.value;

  //   //fetch user login or not
  //   let url;
  //   let errorMessage;
  //   setIsLoading(true);
  //   if (isLogin) {
  //     url =
  //       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXtMvHm26CZpI8TGMM5LgW89bZ5WpU6Yc";
  //     errorMessage = "帳號或密碼錯誤";
  //   } else {
  //     setIsLoading(false);
  //     url =
  //       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXtMvHm26CZpI8TGMM5LgW89bZ5WpU6Yc";
  //     errorMessage = "已有使用過的帳號";
  //   }

  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: enteredEmail,
  //       password: enteredPassword,
  //       returnSecureToken: true,
  //     }),
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       setIsLoading(false);
  //       if (res.ok) {
  //         return res.json().then(
  //           AuthSwal.fire({
  //             title: "Success",
  //             text: "Authentication Success",
  //             icon: "success",
  //           })
  //         );
  //       } else {
  //         return res.json().then((data) => {
  //           throw new Error(errorMessage);
  //         });
  //       }
  //     })
  //     .then((data) => {
  //       //set expirationTime
  //       const expirationTime = new Date(
  //         new Date().getTime() + +data.expiresIn * 1000
  //       );
  //       //把 idToken 放到 Ctx 裡 再透過是否有 idToken 來改變 UI --> Nav
  //       authCtx.login(data.idToken, expirationTime.toISOString());
  //       //when user success login redirect to /
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       AuthSwal.fire({
  //         title: "ERROR",
  //         text: err.message,
  //         icon: "error",
  //       });
  //     });
  // };

  /**************JWT VERSION 2*************/

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * USE JWT login or signup
   * @param {event} e
   */
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData));
      // navigate("/");
    } else {
      dispatch(signIn(formData));
      // navigate("/");
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
      // navigate("/");
    } catch (error) {}
  };
  const googleFailure = async (res) => {};

  return (
    <Wrapper>
      {" "}
      <SignupCard>
        <Headline>{isLogin ? "LOGIN" : "SIGNUP"}</Headline>
        <From method="POST" action="/" onSubmit={handlerSubmit}>
          {!isLogin && (
            <InputWrapper>
              <Input
                label="First Name"
                required
                onChange={handleChange}
                input={{
                  type: "text",
                  id: "firstName",
                  placeholder: "First Name",
                  name: "firstName",
                  width: "80%",
                }}
              />
              <Input
                label="Last Name"
                required
                onChange={handleChange}
                input={{
                  type: "text",
                  id: "lastName",
                  placeholder: "Last Name",
                  name: "lastName",
                  width: "80%",
                }}
              />
            </InputWrapper>
          )}
          <Input
            icon="fa-solid fa-envelope"
            label="userEmail"
            required
            onChange={handleChange}
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
            onChange={handleChange}
            input={{
              type: "password",
              id: "userPassword",
              placeholder: "password",
              name: "password",
            }}
          />
          {!isLogin && (
            <Input
              icon="fa-solid fa-lock"
              label="userPassword"
              required
              onChange={handleChange}
              input={{
                type: "password",
                id: "confirmPassword",
                placeholder: "Password again",
                name: "confirmPassword",
              }}
            />
          )}
          {!isLoading && (
            <Button type="submit" mt="2rem">
              {isLogin ? "Login" : "Creat Account"}
            </Button>
          )}
          {isLoading && <LoadingSpinner />}
          <BtnStyle
            fontSize="1.3rem"
            type="button"
            mt="2rem"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Creat new account" : "Login with existing account"}
          </BtnStyle>
          <br />
          <br />

          {isLogin && (
            <>
              <h2>----------------OR----------------</h2>
              <ButtonWrapper>
                <Button hoverBgc="#1877f2" radius="3rem" pe="button">
                  <ImageStyleFree
                    src={require("../../image/Social Media/facebook-logo-2019.png")}
                    alt="login with facebook"
                  />
                  FACEBOOK{" "}
                </Button>
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
          )}
        </From>
      </SignupCard>
    </Wrapper>
  );
};

export default AuthForm;
