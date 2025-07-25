"use client";
import { IUsersProps } from "@/types";
import { FC } from "react";

const UsersChart: FC<IUsersProps> = ({ users }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">لیست کاربران</h1>
      <table className="w-full border-collapse border mb-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-right">نام</th>
            <th className="border px-4 py-2 text-right">ایمیل</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersChart;
