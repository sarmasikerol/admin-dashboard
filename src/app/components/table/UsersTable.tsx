import React from "react";
import TableContainer from ".";
import { getUsers } from "@/app/utils/api";
import { FaEye, FaTrash } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

const UsersTable = async () => {
  const users = await getUsers();
  return (
    <TableContainer>
      <thead className="border-b shadow">
        <tr>
          <th className="py-4">#</th>
          <th>İsim</th>
          <th>Eposta</th>
          <th>Ülke</th>
          <th>Şehir</th>
          <th>Eylem</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="border-b">
            <td className="py-8">{key}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
            <td>
              <div className="flex gap-3">
                <Link
                  href={`?show=${user.id}`}
                  className="border border-none shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition"
                >
                  <FaEye />
                </Link>
                <DeleteButton userId={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <tbody></tbody>
    </TableContainer>
  );
};

export default UsersTable;
