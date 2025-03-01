"use client"

import { Badge } from "@/components/Badge"
import { ProgressCircle } from "@/components/ProgressCircle"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { Button } from "@/components/Button"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/Drawer"
import { CircleCheck, Ellipsis, Mail, Package, Phone, User } from "lucide-react"
import { cx } from "@/lib/utils"

const columnHelper = createColumnHelper<any>()
const statusColorMap: Record<string, string> = {
  "quote-request": "border border-yellow-500 !text-yellow-500",
  "price-alert": "border border-orange-500 !text-orange-500",
  "expert-assigned": "border border-blue-500 !text-blue-500",
  "expert-checkout": "border border-indigo-500 !text-indigo-500",
  "in-construction": "border border-purple-500 !text-purple-500",
  "done": "border border-green-500 !text-green-500",
  "canceled": "border border-red-500 !text-red-500",
  "suspended": "border border-gray-500 !text-gray-500"
};

const activity = [
  {
    id: 1,
    type: "quote-requested",
    person: { name: "Emily Ross" },
    description: "requested a new quote",
    date: "3d ago",
    dateTime: "2024-02-26T14:20",
  },
  {
    id: 2,
    type: "price-alert",
    person: { name: "Daniel Green" },
    description: "exact price was delivered by phone call from arshia",
    date: "2d ago",
    dateTime: "2024-02-27T11:45",
  },
  {
    id: 3,
    type: "expert-assigned",
    person: { name: "Sophia Carter" },
    description: "Abbas was assigned to Emily by arshia for finalizing the factor",
    date: "1d ago",
    dateTime: "2024-02-28T09:30",
  },
  {
    id: 4,
    type: "expert-checkout",
    person: { name: "Liam Johnson" },
    description: "Abbas Confirmed the construction service with emily for 1,500 $",
    date: "12h ago",
    dateTime: "2024-02-28T21:10",
  },
  {
    id: 5,
    type: "in-construction",
    person: { name: "Olivia Brown" },
    description: "The project is currently in construction. with estimated 3 months deadline",
    date: "6h ago",
    dateTime: "2024-02-29T03:15",
  },
  {
    id: 6,
    type: "done",
    person: { name: "Noah Smith" },
    description: "The project has been successfully completed and confirmed by emily.",
    date: "",
    dateTime: "2024-02-29T07:45",
  },
  // {
  //   id: 7,
  //   type: "canceled",
  //   person: { name: "Emma Wilson" },
  //   description: "The project has been canceled.",
  //   date: "30min ago",
  //   dateTime: "2024-02-29T09:15",
  // },
  // {
  //   id: 8,
  //   type: "suspended",
  //   person: { name: "Jack Anderson" },
  //   description: "The project has been temporarily suspended.",
  //   date: "10min ago",
  //   dateTime: "2024-02-29T09:35",
  // },
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
                  {activity.map((activityItem, activityItemindex) => (
                    <li key={activityItem.id} className="relative flex gap-x-4">
                      <div
                        className={cx(
                          activityItemindex === activity.length - 1 ? "h-6" : "-bottom-6",
                          "absolute left-0 top-0 flex w-6 justify-center",
                        )}
                      >
                        <span className="w-px bg-gray-200 dark:bg-gray-800" aria-hidden="true" />
                      </div>
                      <>
                        <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-[#090E1A]">
                          {activityItemindex === activity.length - 1 ?
                            <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300 dark:bg-[#090E1A] dark:ring-gray-700" />
                            :
                            <div className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-[#090E1A]">
                              <CircleCheck
                                className="size-5 text-blue-500 dark:text-blue-500"
                                aria-hidden="true"
                              />
                            </div>
                          }
                        </div>
                        <p className="flex-auto py-0.5 items-center text-xs leading-5 text-gray-500 dark:text-gray-500">
                          <span className="font-medium text-gray-900 dark:text-gray-50">
                            {activityItem.type}
                          </span>
                          <span className="ml-1">{activityItem.description} </span>
                        </p>
                        <time
                          dateTime={activityItem.dateTime}
                          className="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-gray-500"
                        >
                          {activityItem.date}
                        </time>
                        {activityItemindex !== activity.length - 1 &&
                          <Button variant="secondary" className="h-6 text-xs cursor-pointer">
                            Details
                          </Button>}
                      </>
                    </li>
                  ))}
                </ul>
              </>
            </div>

            <DrawerFooter className="flex inset-x-0 w-full absolute bottom-0 p-5 !justify-between items-center">
              <DrawerClose>
                <Button variant="secondary">
                  Close
                </Button>
              </DrawerClose>
              <Button>
                {row.original.status === "quote-request" ? "User is Alerted for exact Price" :
                  row.original.status === "price-alert" ? "Assign order To Abbas" :
                    row.original.status === "expert-assigned" ? "Send Abbas to Confirm order" :
                      row.original.status === "expert-checkout" ? "Start construction" :
                        row.original.status === "in-construction" ? "Construction is Done" : "Show Details"}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    ),
  }),
] as ColumnDef<any>[];
