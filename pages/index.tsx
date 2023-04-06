import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import Footer from "../components/general/Footer";
import LinkButton, { ETypes } from "../components/general/LinkButton";
import LoginForm from "../components/home/LoginForm";
import Course from "../models/CourseModel";
import { ROUTES } from "../utils/constants";
import { connectDB } from "../utils/database";
import { SelectOptionProps } from "../components/controls/Select";
import { useState } from "react";
import Logo from "../components/general/Logo";
import Creators from "../components/general/Creators";

export interface ICourse extends SelectOptionProps {}

const Home = ({ courses }) => {
  const [coursesData, setCoursesData] = useState<ICourse[]>(() => {
    return JSON.parse(courses).length > 0
      ? JSON.parse(courses).map((c) => {
          return { value: c._id, text: c.title };
        })
      : [];
  });
  return (
    <div className="bg-senateBuilding bg-no-repeat bg-cover bg-primary bg-blend-multiply backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center min-h-screen p-5">
      <NextSeo title="Home" />
      <div className="my-8 w-full flex justify-center">
        {/* <Logo size="large" /> */}
      </div>
      <div className="text-primary space-y-4 w-full max-w-lg min-h-[300px] bg-gray-50 bg-opacity-95 backdrop-filter backdrop-blur-sm p-5 rounded-md">
        <h1 className="text-center text-ascent md:text-lg pt-3">
          WELCOME TO <br />
          <span className="font-black text-primary text-2xl md:text-4xl inline-block pt-2">
            MUBZY CBT MOCK TEST
            <br />
          </span>
        </h1>
        <Creators />
        <p className="!mt-12 text-sm text-center text-secondary">
          In order to have access to the questions, please provide the details
          below.
          <LinkButton
            href={ROUTES.RESULTS_CHECKER}
            txt=" OR check your results here"
            type={ETypes.TEXT}
          />
        </p>
        <LoginForm courses={coursesData} />
        <div className="mt-4 w-full text-center">
          <LinkButton
            href={ROUTES.REGISTRATION}
            txt="Students Registration"
            type={ETypes.TEXT}
            color=""
          />
          |
          <LinkButton
            href={ROUTES.DASHBOARD}
            txt="Administrator"
            type={ETypes.TEXT}
            color=""
          />{" "}
        </div>
      </div>
      <div className="text-gray-200 mt-6 max-w-md mx-auto text-center">
        <Footer />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let courses = [];
  try {
    await connectDB();
    courses = await Course.find({});
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      courses: JSON.stringify(courses),
    },
  };
};

export default Home;
