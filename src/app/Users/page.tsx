import { getUsers } from "@/api/getUsers";
import UsersChart from "@/components/Users";

const Users = async () => {
  const users = await getUsers();
  return <UsersChart users={users} />;
};

export default Users;
