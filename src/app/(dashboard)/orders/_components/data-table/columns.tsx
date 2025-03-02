"use client"

import { Badge } from "@/components/Badge"
import { ProgressCircle } from "@/components/ProgressCircle"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { Button } from "@/components/Button"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/Drawer"
import { CheckCheck, CircleCheck, Ellipsis, Mail, Package, Phone, User } from "lucide-react"
import { cx } from "@/lib/utils"


const columnHelper = createColumnHelper<any>()
const statusColorMap: Record<string, string> = {
  "initial-contact": "border border-yellow-500 !text-yellow-500",
  "information-sent": "border border-blue-500 !text-blue-500",
  "personal-meeting": "border border-orange-500 !text-orange-500",
  "purchase-offer": "border border-green-500 !text-green-500"
};


const mockData = [
  {
    status: "initial-contact",
    description: "First interaction with the client, introducing our services.",
    date: "2025-03-01T10:00:00Z",
  },
  {
    status: "information-sent",
    description: "Sent detailed information about our offerings and pricing.",
    date: "2025-03-02T14:30:00Z",
  },
  {
    status: "personal-meeting",
    description: "Scheduled and attended a meeting to discuss client needs.",
    date: "2025-03-05T09:00:00Z",
  },
  {
    status: "purchase-offer",
    description: "Client received a purchase offer and is considering options.",
    date: "2025-03-07T16:45:00Z",
  },
];

const statusOrder = [
  "initial-contact",
  "information-sent",
  "personal-meeting",
  "purchase-offer",
];

export const columns = [
  columnHelper.accessor("customer_name", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Name",
    },
    cell: ({ row }) => (
      <span className="tabular-nums text-gray-900 dark:text-gray-50">
        {row.original.customer_name}
      </span>
    ),
  }),
  columnHelper.accessor("customer_email", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Detail" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Customer",
    },
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <span className="font-medium text-gray-900 dark:text-gray-50">
          {row.original.customer_phone}
        </span>
        <div className="flex text-gray-500 dark:text-gray-500 items-center gap-1 text-xs">
          <span className="font-mono font-medium uppercase tabular-nums ">
            {row.original.customer_email}
          </span>
        </div>
      </div>

    ),
  }),
  columnHelper.accessor("request_date", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Request Date" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Request Date",
    },
    cell: ({ row }) => (
      <span className="tabular-nums text-gray-900 dark:text-gray-50">
        {new Date(row.original.request_date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </span>
    ),
  }),
  columnHelper.accessor("zipCode", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Zip Code" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Zip Code",
    },
    cell: ({ row }) => (
      <span className="text-gray-500">
        {row.original.zipCode}
      </span>
    ),
  }),
  columnHelper.accessor("estimated_price", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Estimated Price" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Total Price",
    },
    cell: ({ row }) => (
      <span className="font-medium text-gray-900 dark:text-gray-50">
        ${new Intl.NumberFormat().format(row.original.estimated_price)}
      </span>
    ),
  }),
  columnHelper.accessor("progress", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    enableSorting: false,
    meta: {
      className: "text-left",
      displayName: "Progress",
    },
    cell: ({ row }) => {
      return (
        <ProgressCircle
          value={row.original.progress}
          radius={14}
          strokeWidth={3}
          variant={
            row.original.progress >= 85
              ? "success"
              : row.original.progress >= 60
                ? "warning"
                : "default"
          }
        >
          <span className="text-[11px] font-semibold ml-9 ">
            {row.original.progress}%
          </span>
        </ProgressCircle>
      )
    },
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Status",
    },
    cell: ({ row }) => {
      return (
        <Badge className={`${statusColorMap[row.original.status]} w-28 py-1 flex justify-center items-center !bg-transparent font-medium `}>
          {row.original.status}
        </Badge>
      );
    },
  }),
  columnHelper.accessor("actions", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    enableSorting: false,
    meta: {
      className: "text-left",
      displayName: "Actions",
    },
    cell: ({ row }) => (
      <>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              className="group aspect-square p-1.5 hover:border hover:border-gray-300 data-[state=open]:border-gray-300 data-[state=open]:bg-gray-50 hover:dark:border-gray-700 data-[state=open]:dark:border-gray-700 data-[state=open]:dark:bg-gray-900"
            >
              <Ellipsis
                className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-data-[state=open]:text-gray-700 group-hover:dark:text-gray-300 group-data-[state=open]:dark:text-gray-300"
                aria-hidden="true"
              />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="w-full flex flex-col gap-y-5">
              <div className="font-bold flex items-center justify-between w-full gap-2">Order Detail
                <div className="text-gray-500 flex items-center gap-5 font-medium">
                  <Badge className={`${statusColorMap[row.original.status]} py-1 text-sm flex justify-center items-center !bg-transparent font-medium `}>
                    {row.original.status}
                  </Badge>
                  {new Date(row.original.request_date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}</div>
              </div>
              <h2 className="font-semibold flex items-center gap-2"><User className="size-5" />From : <span className="text-gray-500 font-medium">{row.original.customer_name}</span></h2>
              <h2 className="font-semibold flex items-center gap-2"><Phone className="size-5" />Phone : <span className="text-gray-500 font-medium">{row.original.customer_phone}</span></h2>
              <h2 className="font-semibold flex items-center gap-2"><Mail className="size-5" />Email : <span className="text-gray-500 font-medium">{row.original.customer_email}</span></h2>
              <h2 className="font-semibold flex items-center gap-2"><Package className="size-5" />Zip Code : <span className="text-gray-500 font-medium">{row.original.zipCode}</span></h2>

              <>
                <ul role="list" className="space-y-6 mt-10">
                  {statusOrder.map((status, index) => {
                    const isCompleted = index < statusOrder.indexOf(row.original.status);
                    const isCurrent = index === statusOrder.indexOf(row.original.status);

                    return (
                      <li key={status} className="relative flex gap-x-4 items-center">
                        {/* Vertical line for timeline */}
                        {index !== statusOrder.length - 1 && (
                          <div className="absolute left-3 top-10 h-full w-px bg-gray-300 dark:bg-gray-700" />
                        )}

                        {/* Step Icon */}
                        <div
                          className={cx(
                            "relative flex size-6 flex-none items-center justify-center rounded-full border-2",
                            isCompleted
                              ? "border-green-500 bg-green-500 text-white"
                              : isCurrent
                                ? "border-blue-500 bg-white dark:bg-gray-900 text-blue-500"
                                : "border-gray-300 bg-gray-100 dark:bg-gray-800 opacity-50"
                          )}
                        >
                          {isCompleted ? (
                            <CheckCheck className="size-4 text-white" />
                          ) : (
                            <CircleCheck className="size-4" />
                          )}
                        </div>

                        {/* Status Label */}
                        <div className="flex flex-col">
                          <span className={cx("font-medium", isCurrent ? "text-blue-500" : isCompleted ? "text-white" : "text-gray-500")}>
                            {status.replace("-", " ")}
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <span className={cx(" text-xs", isCurrent ? "text-blue-500" : isCompleted ? "text-white" : "text-gray-500")}>
                            {mockData.find((x) => x.status === status)?.description}
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <span className={cx(" text-xs", isCurrent ? "text-blue-500" : isCompleted ? "text-white" : "text-gray-500")}>
                            {
                              new Date(mockData.find((x) => x.status === status)?.date || "").toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })
                            }
                          </span>
                        </div>

                      </li>
                    );
                  })}
                </ul>

              </>
            </div>

            <DrawerFooter className="flex inset-x-0 w-full absolute bottom-0 p-5 !justify-between items-center">
              <DrawerClose>
                <Button variant="secondary">
                  Close
                </Button>
              </DrawerClose>
              <Button className="flex justify-center items-center gap-2">
                {row.original.status === "initial-contact" ? "User Received exact information" :
                  row.original.status === "information-sent" ? "Set Up Personal Meeting" :
                    row.original.status === "personal-meeting" ? "User Purchased Offer" :
                      row.original.status === "done" ? "Start construction" : "Show Details"}
                <CheckCheck />
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    ),
  }),
] as ColumnDef<any>[];
