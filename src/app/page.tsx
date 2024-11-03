import { SignedOut, SignInButton } from "@clerk/nextjs";

export default  function Home() {

  return (
      <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
      </div>
  );
}