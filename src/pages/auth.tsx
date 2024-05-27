import React from "react";
import { AuthStyled } from "./auth.styles";
import { Logo } from "../components/logo";

export const Auth: React.FC = () => {
  return (
    <AuthStyled>
      <div className="auth-content-wrapper">
        <div className="auth-left">
          <div className="auth-logo-area">
            <Logo />
          </div>
          <form action="" className="auth-form">
            <div className="input-wrapper">
              <label htmlFor="auth-first-name">First Name</label>
              <input type="text" name="first_name" id="auth-first-name" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="auth-last-name">Last Name</label>
              <input type="text" name="last_name" id="auth-last-name" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="auth-email">Email</label>
              <input type="email" name="email" id="auth-email" />
            </div>
            <div className="input-wrapper breaker">
              <label htmlFor="auth-phone">Phone</label>
              <input type="tel" name="phone" id="auth-phone" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="auth-password">Password</label>
              <input type="password" name="password" id="auth-password" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="auth-confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                id="auth-confirm-password"
              />
            </div>

            <button type="submit">SIGN UP</button>
          </form>
        </div>
        <div className="auth-right">
          <p className="auth-right-header">
            <span></span> or sign up using <span></span>
          </p>
          <ul>
            <li>
              <svg>
                <use xlinkHref="#google"></use>
              </svg>
              <a href=""></a>
            </li>

            <li>
              <svg>
                <use xlinkHref="#meta"></use>
              </svg>
              <a href=""></a>
            </li>

            <li>
              <svg>
                <use xlinkHref="#linkedin"></use>
              </svg>
              <a href=""></a>
            </li>

            <li>
              <svg>
                <use xlinkHref="#github"></use>
              </svg>
              <a href=""></a>
            </li>
          </ul>
          <div className="auth-optional-redirect-area">
            <span>already have an account?</span> <a href="">login</a>
          </div>
        </div>
      </div>
    </AuthStyled>
  );
};
