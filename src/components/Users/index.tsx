"use client";
import { IUsersProps } from "@/types";
import { FC } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const UsersChart: FC<IUsersProps> = ({ users }) => {
  const chartData = {
    labels: users.map((user) => user.name),
    datasets: [
      {
        label: "تعداد حروف نام",
        data: users.map((user) => user.name.replace(/\s/g, "").length),
        backgroundColor: "rgba(59, 130, 246, 0.5)"
      }
    ]
  };

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

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">نمودار تعداد حروف نام‌ها</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default UsersChart;
