import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployee } from "./action";
// memanggil aksi reducer tambah dan kurang
// import { tambah, kurang, reset } from "./counterHelper";

const Employee = () => {
  // untuk mengakses redux store
  const user = useSelector((state) => state.employee);
  console.log(user);
  // untuk memberikan aksi pada reducer
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchEmployee());
  //   }, [dispatch]);

  return <>{user.map((emp) => emp.firstName)}</>;
};

export default Employee;
