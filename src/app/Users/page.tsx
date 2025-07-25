import { getUsers } from "@/api/getUsers";
import UsersChart from "@/components/Users";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "اطلاعات کاربران"
};

const Users = async () => {
  const users = await getUsers();
  return <UsersChart users={users} />;
};

export default Users;
