
import { Button } from "@/components/ui/button";
import { Author, Startup } from "@/lib/type";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export type StartUpCardType = Omit<Startup, "author"> & { author?: Author };

const StartUpCard = ({ post }: { post: StartUpCardType }) => {
  const {
    createdAt,
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
          <p className="startup_card_date">{formatDate(createdAt)}</p>
        
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary" />
            <span className="text-16-medium">{views}</span>
          </div>
        </div>

        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${author?.id}`}>
              <p className="text-16-medium line-clamp-1">{author?.name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${author?.id|| ""}`}>
            <Image
              src={author?.image || ""}
              alt={author?.name|| ""}
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        </div>

        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">{description}</p>



          <Image
              src={image || "vv" }
              alt={ "Default description"}
              width={164}
              height={100}
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
