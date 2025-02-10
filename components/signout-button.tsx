import { signOut } from "@/lib/actions";
import { LogOut } from "lucide-react";

function SignOutButton() {
  return (
    <form action={signOut}>
      <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-zinc-400 transition-colors hover:bg-zinc-950 hover:text-white">
        <LogOut className="h-5 w-5" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
