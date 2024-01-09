import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Page } from "@/models/Page";
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoose from "mongoose";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  let page=false;
  if(session){
    mongoose.connect(process.env.MONGO_URI);
    page = await Page.findOne({ owner: session?.user?.email });
  }

  return (
    <main>
      {!!session && page && (
      <>
               <div className="p-4 bg-slate-300 flex justify-around items-center rounded-3xl ">
        <div>
          {!!session && (
            <>
              <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
                <Image
                  src={session.user.image}
                  width={256}
                  height={256}
                  alt={"avatar"}
                />
              </div>

              {page && (
                <div className="flex  items-center">
                  <h2 className="mr-3 font-bold">Profile : </h2>
                <Link
                  target="_blank"
                  href={"/" + page.uri}
                  className="text-center  flex gap-1 items-center justify-center"
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={faLink}
                    className="text-blue-500"
                  />
                  <span className="text-xl text-gray-300">/</span>
                  <span>{page.uri}</span>
                </Link>
                </div>
              )}
            </>
          )}
        </div>

        {!!session && (
          <>
            <div className="">
              <h1 className="text-3xl">Edit Profile</h1>

              <Link href={"/account"} className="text-blue-600">
                {session?.user?.name}
              </Link>
            </div>
          </>
        )}
      </div>

      </>
      )}

     
      <section className="pt-20">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link
            <br />
            for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>

        <HeroForm user={session?.user} />
      </section>
    </main>
  );
}
