const RercentBooking = () => {
  const data = [
    {
      item: "New York",
      description: "Discover America",
      total: "$130",
      paid: "$0",
      status: { color: "bg-dasbord", text: "dark-4", label: "Pending" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "New York",
      description: "Discover America",
      total: "$130",
      paid: "$0",
      status: { color: "bg-dasbord", text: "green-2", label: "Confirmed" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "New York",
      description: "Discover America",
      total: "$130",
      paid: "$0",
      status: { color: "bg-dasbord", text: "red-2", label: "Rejected" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "New York",
      description: "Discover America",
      total: "$130",
      paid: "$0",
      status: { color: "bg-dasbord", text: "green-2", label: "Confirmed" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "New York",
      description: "Discover America",
      total: "$130",
      paid: "$0",
      status: { color: "bg-dasbord", text: "green-2", label: "Confirmed" },
      createdAt: "04/04/2022 08:16",
    },
  ];
  return (
    <div className="overflow-scroll scroll-bar-1 pt-30 px-10">
      <table className="table-2 col-12">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {row.item}
                <br /> {row.description}
              </td>
              <td className="fw-500">{row.total}</td>
              <td>{row.paid}</td>
              <td>
                <div
                  className={`rounded-100 py-4 text-center col-12 text-14 fw-500 bg-${row.status.color} text-${row.status.text}`}
                >
                  {row.status.label}
                </div>
              </td>
              <td>{row.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RercentBooking;
