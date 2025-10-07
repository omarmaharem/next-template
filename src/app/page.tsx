import { env } from "@/lib/env";

export default function Home() {
  return (
    <h1 className="p-2 text-2xl font-bold">
      Hello in {env.NEXT_PUBLIC_APP_NAME}
    </h1>
  );
}
