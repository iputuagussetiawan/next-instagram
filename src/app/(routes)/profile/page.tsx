import PostsGrid from "@/components/PostsGrid";
import { CheckIcon, ChevronLeft, Cog } from "lucide-react";
import Link from "next/link";

export default function ProfilePage(){
    return(
        <main>
            <section className="flex justify-between items-center">
                <button>
                    <ChevronLeft/>
                </button>
                <div className="font-bold flex items-center gap-2">
                    My Name
                    <div className="size-5 rounded-full bg-red-600 inline-flex justify-center items-center text-white">
                        <CheckIcon size={16}/>
                    </div>
                </div>
                <button><Cog/></button>
            </section>
            <section className="mt-8 flex justify-center">
                <div className="size-48 p-2 bg-gradient-to-tr from-red-500 to-orange-500 rounded-full">
                    <div className="size-44 p-2 bg-white rounded-full">
                        <div className="size-40 aspect-square overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center mt-4">
                <h1 className="text-xl font-bold">Jhone</h1>
                <p className="text-gray-500 my-1">Bussiness Account</p>
                <p>Front End Web Developer</p>
            </section>

            <section className="mt-4">
                <div className="flex justify-center gap-4 font-bold">
                    <Link href="/">Posts</Link>
                    <Link className="text-gray-500" href="/highlights">Highlights</Link>
                </div>
            </section>

            <section className="mt-4">
                <PostsGrid/>
            </section>
        </main>
    )
}