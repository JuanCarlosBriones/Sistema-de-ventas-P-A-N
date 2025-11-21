import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Card, IconButton, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = [
  "No.",
  "CÓDIGO",
  "DESCRIPCIÓN",
  "OPCIONES"
]


 
const TABLE_ROWS = [
  {
    number: "#MS-415646",
    customer: "CompanyINC",
  },
  {
    number: "#MS-415647",
    customer: "CompanyINC",
  },
  {
    number: "#MS-415648",
    customer: "CompanyINC",
  },
  {
    number: "#MS-415649",
    customer: "CompanyINC",
  },
];
 
export function TableWithoutBorder() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ number, customer, amount}) => {
            return (
              <tr key={number}>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {number}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {customer}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {amount}
                  </Typography>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <IconButton variant="text" size="sm">
                      <DocumentIcon className="h-4 w-4 text-gray-900" />
                    </IconButton>
                    <IconButton variant="text" size="sm">
                      <ArrowDownTrayIcon
                        strokeWidth={3}
                        className="h-4 w-4 text-gray-900"
                      />
                    </IconButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}