import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus } from 'lucide-react'


export default function CreateUserForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default"> <span className="font-semibold">Add User</span> <UserPlus /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <DialogDescription>
            Create A User Without Assigning A Provider 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-3 items-start">
            <Label htmlFor="username" className="text-left text-nowrap">
              Display Name
            </Label>
            <Input id="username" type='text' placeholder="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <Label htmlFor="email"  className="text-left text-nowrap">
              Email
            </Label>
            <Input id="email" type='email' placeholder="Pedro@peduarte.com" className="col-span-3" />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <Label htmlFor="password" className="text-left text-nowrap">
              Password
            </Label>
            <Input id="password" type='password' placeholder="Pedro@peduarte.com" className="col-span-3" />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <Label htmlFor="confirmPassword" className="text-left text-nowrap">
              Confirm Password
            </Label>
            <Input id="confirmPassword" type='password' placeholder="Pedro@peduarte.com" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Register User</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
