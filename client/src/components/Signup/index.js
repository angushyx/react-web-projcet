import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
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
  RadioStyle,
} from "./SignElement";

import {
  RadioInput,
  RadioWrapper,
  RadioLabel,
} from "../Payment/PaymentElement";
import AuthService from "../../services/authApi";

const Signup = () => {
  const navigate = useNavigate();
  // 引入SweetAlert
  const AuthSwal = withReactContent(Swal);
  //判斷狀態，1. 是否登入?  2. 是否 load 中
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
  const updateData = {
    email: formData.email,
    password: formData.password,
    role: formData.role,
    name: formData.firstName + formData.lastName,
    confirmPassword: formData.confirmPassword,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let errorMessage;
  /**
   * USE JWT login or signup
   * @param {event} e
   */
  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await AuthService.signup(
        updateData.name,
        updateData.email,
        updateData.password,
        updateData.role,
        updateData.confirmPassword
      );

      await setIsLoading(false);
      await AuthSwal.fire({
        title: "Success",
        text: "Authentication Success",
        icon: "success",
      });

      await navigate("/login");
    } catch (error) {
      await AuthSwal.fire({
        title: "Failed",
        text: error.response.data,
        icon: "error",
      });
    }

    setIsLoading(false);
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
      <SignupCard translateY="5%">
        <Headline> SIGNUP</Headline>
        <From method="POST" action="/" onSubmit={handlerSubmit}>
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
          />{" "}
          <br />
          <br />
          <InputWrapper>
            <RadioWrapper>
              <RadioInput
                checkedbgc="var(--color-primary)"
                name="role"
                onChange={handleChange}
                value="consumer"
                id="consumer"
              />
              <RadioLabel htmlFor="role">consumer</RadioLabel>{" "}
            </RadioWrapper>
            <RadioWrapper>
              <RadioInput
                checkedbgc="var(--color-primary)"
                name="role"
                onChange={handleChange}
                value="seller"
                id="seller"
              />
              <RadioLabel htmlFor="role">seller</RadioLabel>
            </RadioWrapper>
          </InputWrapper>
          <ButtonWrapper>
            <BtnStyle type="submit" mt="2rem">
              Signup
            </BtnStyle>
            {isLoading && <LoadingSpinner />}{" "}
            <BtnStyle fontSize="1.3rem" type="button" mt="2rem">
              {" "}
              <Link style={{ all: "unset" }} to="/login">
                {" "}
                Login with existing account{" "}
              </Link>
            </BtnStyle>{" "}
          </ButtonWrapper>
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

export default Signup;

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
