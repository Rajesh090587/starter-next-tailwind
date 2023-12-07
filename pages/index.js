import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ul role="list" class="p-6 divided-y divide-slate-200">
      <li class="flex py-4 first:pt-0 last-pb-0">
        <img class="h-10 w-10 rounded-full bg-red" src="../next.svg"></img>
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900">Rajesh</p>
          <p class="text-sm text-slate-500">rajesh.thulasingam@gmail.com</p>
        </div>
      </li>
    </ul>
  );
}
