"use client";
import { IUsersProps } from "@/types";
import { FC } from "react";

const UsersChart: FC<IUsersProps> = ({ users }) => {
  console.log(users);
  return <div>Users</div>;
};

export default UsersChart;
