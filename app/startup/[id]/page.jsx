
import Image from "next/image";
import Link from "next/link";
import {getStartUpDetails} from "@/lib/getStartUp"

const page = async ({params}) => {
    const details =  await getStartUpDetails(params.id)
    // console.log(details);
    const {title, description, img, _id,category,author_name,author_photo} = details
    return (
        <div className=" my-12">
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"></h1>
  
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
              <img
                className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                src={img}
                alt="  startup details"
              />
  
              <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-sm text-pink-500 uppercase">{category}</p>
  
                <a
                  href="#"
                  className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
                >
                  {title}
                </a>
  
                <p className="mt-3 text-base text-neutral-800  line-height-3 dark:text-gray-300 md:text-sm">
                  {description}
                  <br />
          
                </p>
  
                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src={author_photo}
                    alt=""
                  />
  
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      {author_name}
                    </h1>
                    {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                      {postedDate}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default page;
