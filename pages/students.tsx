import { useState, useRef, useEffect } from "react";
import { NextSeo } from "next-seo";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { useUser } from "../hooks/auth";
import api from "../utils/fetcher";
import { errorMessage } from "../utils/errorHandler";
import DataTable from "../components/general/DataTable";
import useSWR, { useSWRConfig } from "swr";
import { TypeAlert } from "../components/general/Alert";
import Input from "../components/controls/Input";

interface IFormData {
  fullName: string;
  phoneNumber: string;
}

const Students = () => {
  useUser();
  const { mutate } = useSWRConfig();

  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    phoneNumber: "",
  });
  const [submitText, setSubmitText] = useState<string>("Add Student");
  const [searchVal, setSearchVal] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ msg: string; type: TypeAlert }>({
    msg: "",
    type: "info",
  });

  const resetMessage = () => {
    if (message.msg.length > 0)
      setMessage((prev) => ({ msg: "", type: "info" }));
  };

  const handleSearch = async (val: string) => {
    resetMessage();
    setSearchVal(val);
  };
  const handleEdit = (id: string) => {
    resetMessage();
  };
  const handlePagination = (page: number) => {
    resetMessage();
    setPage((prev) => page);
  };

  const handleFormChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    switch (submitText) {
      case "Add Student":
        break;

      case "Upload Student":
        break;
      default:
        return;
    }
  };
  return (
    <>
      <NextSeo title="Students" nofollow={true} noindex={true} />
      <DashboardLayout className="">
        <h2 className="text-lg text-primary mb-5 font-bold">
          Students Management
        </h2>
        <section className="shadow-md w-full md:w-1/5">
          <form onSubmit={handleAddStudent}>
            <Input
              type="text"
              placeholder="Enter the student Full Name"
              showLabel
              labelValue="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange(e.target.value, e.target.name)
              }
            />
            <Input
              type="tel"
              placeholder="Enter the student Phone Number"
              showLabel
              labelValue="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange(e.target.value, e.target.name)
              }
            />
            <Input name="submit" type="submit" value={submitText} isBtn />
          </form>
        </section>
        <section className="shadow-md w-full md:w-4/5">Data Table</section>
      </DashboardLayout>
      ;
    </>
  );
};

export default Students;
