import React, { useMemo, useState } from "react";
import "./Table.css";

const config = [
  { name: "id", title: "#", isSort: true },
  { name: "title", title: "Title", isSort: false },
  { name: "number", title: "Number", isSort: true },
];

const Table = ({ data }) => {
  const [sortBy, setSortBy] = useState({ name: "id", sort: "asc" });
  const [tableData, setTableData] = useState(
    data.map((item, id) => ({
      id: id + 1,
      ...item,
    }))
  );

  const sortTableData = useMemo(() => {
    const sortedData = [...tableData];
    return sortedData.sort((a, b) =>
      sortBy.sort === "asc"
        ? a[sortBy.name] - b[sortBy.name]
        : b[sortBy.name] - a[sortBy.name]
    );
  }, [tableData, sortBy]);
  return (
    <table>
      <tbody>
        <tr>
          {config.map(({ name, title, isSort }) => (
            <th key={name}>
              {title}
              {isSort && (
                <button
                  onClick={() =>
                    setSortBy((prev) => ({
                      name,
                      sort:
                        prev.name !== name
                          ? "asc"
                          : prev.sort === "asc"
                          ? "desc"
                          : "asc",
                    }))
                  }
                >
                  {sortBy.name === name
                    ? sortBy.sort === "asc"
                      ? "+"
                      : "-"
                    : "+/-"}
                </button>
              )}
            </th>
          ))}
        </tr>
        {sortTableData.map((row) => (
          <tr key={row.id}>
            {config.map((cell) => (
              <td key={cell.name}>{row[cell.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
