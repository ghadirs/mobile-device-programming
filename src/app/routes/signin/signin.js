import * as React from "react";
import "./signin.scss";
import { Link, useNavigate } from "react-router-dom";
import { Spin, message } from "antd";

const initialValues = {
  nationalCode: "",
  password: "",
};

function SignIn() {
  const [formValues, setFormValues] = React.useState(initialValues);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  function onFormNumChange(value, field) {
    var lastChar = value.split("")[value.split("").length - 1];

    if (value !== "")
      if (
        lastChar == "1" ||
        lastChar == "2" ||
        lastChar == "3" ||
        lastChar == "4" ||
        lastChar == "5" ||
        lastChar == "6" ||
        lastChar == "7" ||
        lastChar == "8" ||
        lastChar == "9" ||
        lastChar == "0"
      ) {
        value = value;
      } else {
        return;
      }

    setFormValues({
      ...formValues,
      [field]: value,
    });
  }

  function onSubmitHandle() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      message.error("متاسفانه سامانه موقتاٌ در دسترس نمی باشد");
    }, 3000);
  }

  return (
    <div className='app-signin'>
      <h1>ورود به پنل کاربری دانشجو</h1>
      <p>برای ورود به پنل کاربری، کد ملی و شماره موبایل خود را وارد کنید</p>
      <form>
        <div>
          <label>کد ملی</label>
          <input
            placeHolder='کد ملی را وارد کنید'
            dir={formValues.nationalCode ? "ltr" : "rtl"}
            type='text'
            maxLength={10}
            value={formValues.nationalCode}
            onChange={(e) => onFormNumChange(e.target.value, "nationalCode")}
          />
        </div>
        <div>
          <label>رمز عبور</label>
          <input
            placeHolder='رمز عبور را وارد کنید'
            type='password'
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
        </div>

        {loading ? (
          <Spin spinning={loading} />
        ) : (
          <button
            className={`${
              !formValues.nationalCode || !formValues.password ? "disabled" : ""
            }`}
            disabled={!formValues.nationalCode || !formValues.password}
            onClick={() => onSubmitHandle()}
          >
            ورود
          </button>
        )}

        <span>
          حساب کاربری ندارید؟ <Link to='/signup'>ثبت نام کنید</Link>
        </span>
      </form>
      <footer>
        طراحی و توسعه توسط{" "}
        <a href='https://linkedin.com/in/ghadir-shamohamadi'>غدیر شامحمدی</a>
      </footer>
    </div>
  );
}
export default SignIn;
