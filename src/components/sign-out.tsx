'use client'
import { LogOut } from "lucide-react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useClerk } from "@clerk/nextjs";

export default function SignOutComp(){

    const { signOut } = useClerk();

    return(
        <>
            <DropdownMenuItem className="text-red-500" onClick={()=> signOut({ redirectUrl: '/' })}> 
             <LogOut />
                                Log out
             </DropdownMenuItem>
        </>
    )
}