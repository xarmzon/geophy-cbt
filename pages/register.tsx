import React, { useState } from "react";
import { NextSeo } from "next-seo";
import LinkButton, { ETypes } from "../components/general/LinkButton";
import Footer from "../components/general/Footer";
import { APP_NAME, ROUTES } from "../utils/constants";
import Logo from "../components/general/Logo";
import Input from "../components/controls/Input";
import MessageBox from "../components/general/MessageBox";

export interface DataProps {
  error: string;
  value: string;
}

export interface FormDataProps {
  jamb: DataProps;
  fullName: DataProps;
  phoneNumber: DataProps;
  department: DataProps;
  courses: {
    values: Array<string>;
    error: string;
  };
}

const RegisterPage = () => {
  const [canRegister, _] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormDataProps>({
    jamb: {
      error: "",
      value: "",
    },
    fullName: {
      error: "",
      value: "",
    },
    department: {
      error: "",
      value: "",
    },
    phoneNumber: {
      error: "",
      value: "",
    },
    courses: {
      error: "",
      value: [],
    },
  });

  const resetErrors = () => {
    setFormData((prev) => ({
      ...prev,
      jamb: { ...prev.jamb, error: "" },
      fullName: { ...prev.fullName, error: "" },
      department: { ...prev.department, error: "" },
      phoneNumber: { ...prev.phoneNumber, error: "" },
      courses: { ...prev.courses, error: "" },
    }));
  };

  const handleChange = (type: string, value: string) => {
    setFormData((prev) => ({ ...prev, [type]: { error: "", value } }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <NextSeo title="Students Registration" />
      <div className="bg-senateBuilding bg-no-repeat bg-cover bg-primary bg-blend-multiply backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center min-h-screen p-5">
        <div className="mt-5 mb-1 w-full flex justify-center">
          <Logo size="large" />
        </div>
        <div className="text-primary space-y-4 w-full max-w-lg min-h-[300px] bg-gray-50 bg-opacity-95 backdrop-filter backdrop-blur-sm p-5 rounded-md">
          <h1 className="text-center text-ascent md:text-lg pt-3">
            <span className="font-bold text-primary text-2xl md:text-3xl inline-block pt-2">
              {APP_NAME}
              <br />{" "}
              <span className="text-lg md:text-xl">
                Mock Examination Registration
              </span>
            </span>
          </h1>
          <p className="text-sm text-center text-secondary">
            In order to have access to the questions, please provide the details
            below.
          </p>

          {canRegister ? (
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col space-y-3"
            >
              <Input
                name="jamb"
                value={formData.jamb.value}
                error={formData.jamb.error}
                showLabel
                labelValue="Matric/JAMB Reg. No:"
                placeholder="Eg: 71483233AD"
                minLength={10}
                maxLength={10}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value);
                }}
                required
              />
              <Input
                name="fullName"
                value={formData.fullName.value}
                error={formData.fullName.error}
                showLabel
                labelValue="Full Name"
                placeholder="E.g Adelola Kayode Samson"
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value);
                }}
                required
              />
              <Input
                name="department"
                value={formData.department.value}
                error={formData.department.error}
                showLabel
                labelValue="Department"
                placeholder="E.g Mathematics"
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value);
                }}
                required
              />
              <Input
                name="phoneNumber"
                value={formData.phoneNumber.value}
                error={formData.phoneNumber.error}
                showLabel
                labelValue="Phone Number"
                placeholder="E.g 08141161177"
                type="tel"
                inputMode="tel"
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value);
                }}
                required
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm md:text-md">
                  Choose Your Courses
                </label>
                <div className="flex flex-col gap-3 items-start">
                  <label
                    htmlFor="MAT411"
                    className="flex items-center gap-1 text-secondary"
                  >
                    <input
                      name="courses"
                      type="checkbox"
                      id={`MAT411`}
                      onChange={(e) => {
                        console.log(e.target);
                      }}
                      className="border border-primary ring-0 focus:ring-0 text-primary rounded"
                    />
                    MAT411
                  </label>
                </div>
                <MessageBox
                  msg={formData.courses.error}
                  type="error"
                  show={Boolean(formData.courses.error)}
                />
              </div>
              <Input type="submit" name="submit" value="Register" isBtn />
            </form>
          ) : (
            <h3 className="!mt-5 md:!mt-14 text-xl text-red-600 font-bold text-center">
              Registration Closed
            </h3>
          )}
        </div>
        <div className="text-gray-200 mt-6 max-w-md mx-auto text-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
