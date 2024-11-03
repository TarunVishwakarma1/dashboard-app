import { SignIn } from "@clerk/nextjs";

export default function Home(){
    return(
        <>
        <div className="h-full w-full items-center justify-center flex flex-col">
            <SignIn/>
        </div>
        </>
    )
}