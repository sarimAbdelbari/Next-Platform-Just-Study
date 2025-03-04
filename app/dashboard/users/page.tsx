import { UserTable } from "@/components/features/users/usersTable";
import CreateUserForm from "@/components/features/users/createForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus, Mail, Settings2, UserPlus } from "lucide-react";



export default function Page() {
  return (
    <div className="flex flex-col gap-3 my-4">
      <div className="flex items-center justify-between">

       <div className="flex flex-col ">
        <h3 className="text-2xl font-bold ">User List</h3>
        <p className="text-muted-foreground">Manage Your users and their subscriptions here.</p>
       </div>
       <div className="flex gap-3">
        <Button variant="outline" >
           <span>Invite User</span> <Mail/>
        </Button >
        <CreateUserForm/>

       </div>
      </div>
      <div>
         <UserTable/>
      </div>
    </div>
   );
}