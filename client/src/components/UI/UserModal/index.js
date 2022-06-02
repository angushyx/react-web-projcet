import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  DetailBox,
  UserInfoWrapper,
  SettingWrapper,
  LanguageWrapper,
  SubscriptionWrapper,
  LogoutWrapper,
  UserName,
} from "./UserModalElement";

const UserModal = (props) => {
  return (
    <>
      <DetailBox>
        <UserInfoWrapper>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </div>
          <UserName>
            <strong>Angus</strong>
            <div>sickmi14798@gmail.com</div>
          </UserName>
        </UserInfoWrapper>

        <SettingWrapper>
          <FontAwesomeIcon icon="fa-solid fa-gear" /> <span>編輯設定</span>
        </SettingWrapper>
        <LanguageWrapper>
          <FontAwesomeIcon icon="fa-solid fa-earth-africa" />
          <span>語言</span>
        </LanguageWrapper>
        <SubscriptionWrapper>
          <FontAwesomeIcon icon="fa-solid fa-earth-africa" />
          <span>訂閱方案</span>
        </SubscriptionWrapper>

        <LogoutWrapper onClick={props.onLogout}>
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
          <span>登出</span>
        </LogoutWrapper>
      </DetailBox>
    </>
  );
};

export default UserModal;
