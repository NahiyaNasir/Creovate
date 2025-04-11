/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartUpCard = ({ post }: { post: StartUpCardType }) => {
  const {
    _createdAt,
    _id,
    description,
    image,
    category,
    title,
    views,
    author,
  } = post;
  // console.log(post);
  return (
    <div>
      <li className="startup-card group">
        <div className="flex-between">
          <p className="startup_card_date">{formatDate(_createdAt)}</p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary" />
            <span className="text-16-medium">{views}</span>
          </div>
        </div>

        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${author?._id}`}>
              <p className="text-16-medium line-clamp-1">{author?.name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${author?._id}`}>
            <Image
              src={author?.image}
              alt={author?.name}
              width={164}
              height={100}
              className="rounded-full"
            />
          </Link>
        </div>

        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">{description}</p>

          {/* <Image
    src={image}
    alt="placeholder"
    height={164}
    width={100}
    className="startup-card_img"
  /> */}

{/*       
          <img src={image} alt="" height={164}  width={100}className="startup-card_img" /> */}
          <Image
              src={image}
              alt={ "Default description"}
              width={48}
              height={48}
              className="startup-card_img"
            />
        </Link>

        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
      </li>
    </div>
  );
};

export default StartUpCard;
