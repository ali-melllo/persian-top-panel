"use client"
import { getColumns } from "@/app/(dashboard)/agents/_components/Columns"
import { experts } from "@/data/transactions"
import React from "react"
import { DataTable } from "./_components/DataTable"

export default function Example() {

  const columns = getColumns({
    onEditClick: () => {

    },
  })

  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Details
      </h1>
      <div className="mt-4 sm:mt-6 lg:mt-10">
        <DataTable
          data={experts}
          columns={columns}
        />
      </div>
    </>
  )
}
