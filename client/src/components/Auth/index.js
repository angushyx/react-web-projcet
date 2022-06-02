import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { login, logout } from "../../slices/auth-slice";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoadingSpinner from "../UI/LoadingSpinner";
import AuthContext from "../../store/Auth-context";

import {
  Wrapper,
  Headline,
  SignupCard,
  From,
  FacebookBtn,
  GoogleBtn,
  ChangeModeBtn,
} from "./AuthForm";
import { useDispatch } from "react-redux";

const AuthForm = () => {
  //記憶 email 和 password 的值
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  // 引入SweetAlert
  const AuthSwal = withReactContent(Swal);

  //判斷狀態，1. 是否登入?  2. 是否 load 中
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.authReducer);

  console.log(cartReducer);

  //轉換登入、建立帳號模式
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  /**
   * 註冊、登入功能，送出帳號資料比對資料庫中的帳號
   * @param {event} event
   */
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //fetch user login or not
    let url;
    let errorMessage;
    setIsLoading(true);
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXtMvHm26CZpI8TGMM5LgW89bZ5WpU6Yc";
      errorMessage = "帳號或密碼錯誤";
    } else {
      setIsLoading(false);
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXtMvHm26CZpI8TGMM5LgW89bZ5WpU6Yc";
      errorMessage = "已有使用過的帳號";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json().then(
            AuthSwal.fire({
              title: "Success",
              text: "Authentication Success",
              icon: "success",
            })
          );
        } else {
          return res.json().then((data) => {
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        //set expirationTime
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        //把 idToken 放到 Ctx 裡 再透過是否有 idToken 來改變 UI --> Nav
        authCtx.login(data.idToken, expirationTime.toISOString());
        console.log(authCtx.login);
        //when user success login redirect to /
        navigate("/");
      })
      .catch((err) => {
        AuthSwal.fire({
          title: "ERROR",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <Wrapper>
      {" "}
      <SignupCard>
        {" "}
        <Headline>{isLogin ? "LOGIN" : "SIGNUP"}</Headline>
        <From method="POST" action="/" onSubmit={submitHandler}>
          {" "}
          <Input
            icon="fa-solid fa-envelope"
            label="userEmail"
            required
            input={{
              ref: emailInputRef,
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
            input={{
              ref: passwordInputRef,
              type: "password",
              id: "userPassword",
              placeholder: "Password",
              name: "Password",
            }}
          />
          {!isLoading && (
            <Button type="submit">{isLogin ? "Login" : "Creat Account"}</Button>
          )}
          {isLoading && <LoadingSpinner />}
          <ChangeModeBtn type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Creat new account" : "Login with existing account"}
          </ChangeModeBtn>
          <br />
          <br />
          <h2>----------------OR----------------</h2>
          <FacebookBtn type="submit">FACEBOOK</FacebookBtn>
          <GoogleBtn type="submit">GOOGLE</GoogleBtn>
        </From>
      </SignupCard>
    </Wrapper>
  );
};

export default AuthForm;
