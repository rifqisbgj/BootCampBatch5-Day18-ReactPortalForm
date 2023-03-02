import React from "react";
import { useSelector } from "react-redux";

const Employee = () => {
  // untuk mengakses redux store
  const user = useSelector((state) => state.employee);
  console.log(user.firstName);

  return (
    <>
      Nama: {user.firstName} {user.lastName}
      <br />
      Status Bekerja: {!user.employed ? "Tidak" : "Ya"} <br />
      Pendidikan Terakhir: {user.education} <br />
      Keahlian: {user.expertise
        ? user.expertise.map((a) => <>{a},</>)
        : "-"}{" "}
      <br />
      Teknologi yang dikuasai: {user.preferredTechnology} <br />
      Notes: {user.notes} <br />
    </>
  );
};

export default Employee;
