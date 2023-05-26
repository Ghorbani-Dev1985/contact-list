import { toast } from "react-toastify";
import { BiBookAdd } from "react-icons/bi";
import { BiListOl } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import addContact from "../services/addContactService";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Common/Input";
import TextArea from "../Common/TextArea";

//? Formik
const initialValues = {
  firstName: "",
  lastName: "",
  job: "",
  phoneNumber: "",
  cellPhone: "",
  email: "",
  address: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("ورود نام الزامی می باشد")
    .min(3, "حداقل ۳ کاراکتر وارد نمایید"),
  lastName: Yup.string()
    .required("ورود نام خانوادگی الزامی می باشد")
    .min(5, "حداقل ۵ کاراکتر وارد نمایید"),
  job: Yup.string().min(3, "حداقل ۳ کاراکتر وارد نمایید"),
  phoneNumber: Yup.string()
    .required("ورود شماره موبایل الزامی می باشد")
    .matches(/^[0-9]{11}$/, "شماره موبایل را به درستی وارد نمایید")
    .nullable(),
  cellPhone: Yup.string()
    .required("ورود تلفن ثابت الزامی می باشد")
    .matches(
      /^0[0-9]{2,}[0-9]{7,}$/,
      "شماره تلفن را به درستی همراه کد شهرستان وارد نمایید"
    )
    .nullable(),
  email: Yup.string().email("ایمیل وارد شده اشتباه است"),
  address: Yup.string()
    .required("ورود آدرس الزامی می باشد")
    .min(20, "حداقل ۲۰ کاراکتر وارد نمایید"),
});

const AddContact = (props) => {
  let Navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await addContact(values);
      Navigate("/");
      toast.success("کاربر جدید با موفقیت به لیست اضافه گردید");
    } catch (error) {
      toast.error("خطا در برقراری ارتباط با سرور");
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <>
      <section className="w-full max-w-lg flex justify-between items-center">
        <div className="w-full flex items-center max-w-lg mb-4 ">
          <BiBookAdd className="ml-2 text-lg text-orange-500" />
          <h1 className="font-bold text-lg bg-slate-300 px-3 py-1 rounded-lg">
            افزودن
          </h1>
        </div>
        <div className="w-full flex justify-end items-center">
          <BiListOl className="ml-2 text-3xl text-orange-500" />
          <Link to="/" className="flex justify-center items-center">
            <h1 className="font-bold text-lg bg-slate-300 px-3 py-1 rounded-lg">
              مشاهده لیست
            </h1>
          </Link>
        </div>
      </section>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex max-w-lg bg-white p-4 mb-4 rounded-lg flex-col"
      >
        <Input
          label="نام"
          name="firstName"
          formik={formik}
          value="firstName"
          placeholder="لطفا نام را وارد نمایید"
        />
        <Input
          label=" نام خانوادگی "
          name="lastName"
          formik={formik}
          value="lastName"
          placeholder="لطفا  نام خانوادگی را وارد نمایید"
        />
        <Input
          label="شغل "
          name="job"
          formik={formik}
          value="job"
          placeholder="لطفا شغل را وارد نمایید"
        />
        <Input
          label="شماره موبایل  "
          name="phoneNumber"
          formik={formik}
          value="phoneNumber"
          placeholder="لطفا شماره موبایل را وارد نمایید"
        />
        <Input
          label=" تلفن ثابت "
          name="cellPhone"
          formik={formik}
          value="cellPhone"
          placeholder="لطفا تلفن ثابت را وارد نمایید"
        />
        <Input
          label="ایمیل "
          name="email"
          formik={formik}
          value="email"
          placeholder="لطفا ایمیل را وارد نمایید"
        />
        <TextArea
          label="آدرس کامل "
          name="address"
          formik={formik}
          value="address"
          placeholder="لطفا آدرس خود را وارد نمایید"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="w-full disabled:opacity-30"
        >
          افزودن
        </button>
      </form>
    </>
  );
};

export default AddContact;
