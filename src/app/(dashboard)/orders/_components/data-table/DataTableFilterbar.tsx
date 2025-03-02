"use client"

import { useState, useRef } from "react"
import { useDebouncedCallback } from "use-debounce"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Textarea } from "@/components/Textarea"
import { Label } from "@/components/Label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog"

interface FilterBarProps {
  globalFilter: string
  setGlobalFilter: (value: string) => void
  registeredOnly: boolean
  setRegisteredOnly: (checked: boolean) => void
}

export function FilterBar({ globalFilter, setGlobalFilter }: FilterBarProps) {
  const [searchTerm, setSearchTerm] = useState(globalFilter)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const debouncedSetGlobalFilter = useDebouncedCallback((value) => {
    setGlobalFilter(value)
  }, 300)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTerm(value)
    debouncedSetGlobalFilter(value)
  }

  const handleClear = () => {
    setSearchTerm("")
    setGlobalFilter("")
    searchInputRef.current?.focus()
  }

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    location: "",
    phoneNumber: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add API request here if needed
  }

  return (
    <div className="flex flex-wrap items-center gap-6 rounded-lg  py-2">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Orders List
          </h1>
          <p className="text-gray-500 sm:text-sm/6 dark:text-gray-500">
            Monitor orders and manage your process
          </p>
        </div>
      </div>
      <div className="flex ml-auto flex-col sm:flex-row gap-2 w-full sm:w-fit">
        <Input
          ref={searchInputRef}
          className="w-full sm:w-96"
          type="search"
          placeholder="Search all columns..."
          value={searchTerm ?? ""}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            onClick={handleClear}
            className="border border-gray-200 px-2.5 font-semibold text-blue-500 sm:border-none sm:py-1 dark:border-gray-800 dark:text-blue-500"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Create New Order Form */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create New +</Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Create New Order</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new order.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "company", label: "Company", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "location", label: "Location", type: "text" },
                { id: "phoneNumber", label: "Phone Number", type: "tel" },
              ].map(({ id, label, type }) => (
                <div key={id} className="flex flex-col gap-3 items-start">
                  <Label htmlFor={id} className="text-right">
                    {label}
                  </Label>
                  <Input
                    id={id}
                    type={type}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
              ))}

              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Save Order</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
