import { Button } from "@/components/Button"
import { Checkbox } from "@/components/Checkbox"
import { ColumnDef, createColumnHelper, Row } from "@tanstack/react-table"
import { Ellipsis } from "lucide-react"
import { DataTableColumnHeader } from "./DataTableColumnHeader"

const columnHelper = createColumnHelper<any>()

export const getColumns = ({
  onEditClick,
}: {
  onEditClick: (row: Row<any>) => void
}) =>
  [
    columnHelper.display({
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected()
              ? true
              : table.getIsSomeRowsSelected()
              ? "indeterminate"
              : false
          }
          onCheckedChange={() => table.toggleAllPageRowsSelected()}
          className="translate-y-0.5"
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onClick={(e) => e.stopPropagation()}
          onCheckedChange={() => row.toggleSelected()}
          className="translate-y-0.5"
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
      meta: {
        displayName: "Select",
      },
    }),
    columnHelper.accessor("name", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Expert Name" />
      ),
      enableSorting: true,
      enableHiding: false,
      meta: {
        className: "text-left",
        displayName: "Expert Name",
      },
    }),
    columnHelper.accessor("expertise", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Field of Expertise" />
      ),
      enableSorting: false,
      meta: {
        className: "text-left",
        displayName: "Expertise Field",
      },
    }),
    columnHelper.accessor("company", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Company" />
      ),
      enableSorting: false,
      meta: {
        className: "text-left",
        displayName: "Company",
      },
    }),
    columnHelper.accessor("region", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Region" />
      ),
      enableSorting: true,
      meta: {
        className: "text-left",
        displayName: "Region",
      },
    }),
    columnHelper.accessor("country", {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Country" />
      ),
      enableSorting: true,
      meta: {
        className: "text-left",
        displayName: "Country",
      },
    }),
    columnHelper.display({
      id: "edit",
      header: "Edit",
      enableSorting: false,
      enableHiding: false,
      meta: {
        className: "text-right",
        displayName: "Edit",
      },
      cell: ({ row }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => onEditClick?.(row)}
            className="group aspect-square p-1.5 hover:border hover:border-gray-300 data-[state=open]:border-gray-300 data-[state=open]:bg-gray-50 hover:dark:border-gray-700 data-[state=open]:dark:border-gray-700 data-[state=open]:dark:bg-gray-900"
          >
            <Ellipsis
              className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-data-[state=open]:text-gray-700 group-hover:dark:text-gray-300 group-data-[state=open]:dark:text-gray-300"
              aria-hidden="true"
            />
          </Button>
        )
      },
    }),
  ] as ColumnDef<any>[]
