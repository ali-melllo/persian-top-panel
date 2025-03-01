import { columns } from "@/app/(dashboard)/orders/_components/data-table/columns"
import { DataTable } from "@/app/(dashboard)/orders/_components/data-table/DataTable"
import { orders } from "@/data/orders"
import React from "react"

export default function Agents() {

  return (
    <main>
      <section >
        <DataTable data={orders} columns={columns} />
      </section>
    </main>
  )
}