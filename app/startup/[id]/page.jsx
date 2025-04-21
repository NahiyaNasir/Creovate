
import Image from "next/image";
import Link from "next/link";
import {getStartUpDetails} from "@/lib/getStartUp"
import { formatDate } from "@/lib/utils";

export default async function page  ({params}) {

    const details =  await getStartUpDetails(params.id)
    console.log(details);
    const {title, pitch, img, category,author,_createdAt} = details || {}
    return (
        <div >
   <section className="pink_container !min-h-[230px]">
        <p className="tag">{_createdAt}</p>

        <h1 className="heading">{title}</h1>
        {/* <p className="sub-heading !max-w-5xl">{title}</p> */}
      </section>

      <section className="section_container">
        <Image
          src={img || "/no"}
          alt={"thumbnail"|| ""}
          width={100}
          height={0}
          className="w-full h-auto rounded-xl"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${author?.id|| ""}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={author?.image ||"/no"}
                alt={"avatar"|| ""}
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{author?.name}</p>
                <p className="text-16-medium !text-black-300">
                  {/* @{author.username} */}
                </p>
              </div>
            </Link>

            <p className="category-tag">{category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          {pitch}</p>
          </div>
</section>
      </div>
    );
};


