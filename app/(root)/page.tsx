import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1 className="head-text text-white">Home</h1>
    </>
  );
}
