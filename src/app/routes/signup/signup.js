import * as React from "react";
import "./signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { Spin, message } from "antd";

const initialValues = {
  firstName: "",
  lastName: "",
  nationalCode: "",
  phoneNumber: "",
};

function Signup() {
  const [formValues, setFormValues] = React.useState(initialValues);
  const [stage, setStage] = React.useState("form");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  function onFormChange(value, field) {
    var lastChar = value.split("")[value.split("").length - 1];
    if (value !== "") {
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
        return;
      }
    }
    setFormValues({
      ...formValues,
      [field]: value,
    });
  }

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

    setTimeout(() => setLoading(false), 3000);
    message.success("ثبت نام شما با موفقیت انجام شد");

    setTimeout(() => message.info("به صفحه ورود منتقل میشوید..."), 1000);

    setTimeout(() => navigate("/signin"), 3000);
  }

  return (
    <div className='app-signup'>
      <h1>ثبت نام دانشجو</h1>
      <p>برای ثبت نام در سامانه اطلاعات زیر را کامل کنید</p>
      <form>
        <div>
          <label>نام</label>
          <input
            placeHolder='نام را وارد کنید'
            type='text'
            maxLength={20}
            value={formValues.firstName}
            onChange={(e) => onFormChange(e.target.value, "firstName")}
          />
        </div>
        <div>
          <label>نام خانوادگی</label>
          <input
            placeHolder='نام خانوادگی را وارد کنید'
            type='text'
            maxLength={30}
            value={formValues.lastName}
            onChange={(e) => onFormChange(e.target.value, "lastName")}
          />
        </div>
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
          <label>شماره موبایل</label>
          <input
            placeHolder='شماره موبایل را وارد کنید'
            dir={formValues.phoneNumber ? "ltr" : "rtl"}
            type='text'
            maxLength={11}
            value={formValues.phoneNumber}
            onChange={(e) => onFormNumChange(e.target.value, "phoneNumber")}
          />
        </div>

        {loading ? (
          <Spin spinning={loading} />
        ) : (
          <button
            className={`${
              !formValues.firstName ||
              !formValues.lastName ||
              !formValues.nationalCode ||
              !formValues.phoneNumber
                ? "disabled"
                : ""
            }`}
            disabled={
              !formValues.firstName ||
              !formValues.lastName ||
              !formValues.nationalCode ||
              !formValues.phoneNumber
            }
            onClick={() => onSubmitHandle()}
          >
            ثبت نام
          </button>
        )}

        <span>
          حساب کاربری دارید؟ <Link to='/signin'>وارد شوید</Link>
        </span>
      </form>
      <footer>
        طراحی و توسعه توسط{" "}
        <a href='https://linkedin.com/in/ghadir-shamohamadi'>غدیر شامحمدی</a>
      </footer>
    </div>
  );
}
export default Signup;
