import ToDoList from "@/components/ToDoList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "لیست کار ها",
};
const ListPage = () => {
  return <ToDoList />;
};

export default ListPage;
