import React, { useRef, useEffect, } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import autoAnimate from '@formkit/auto-animate';

type BlogCardProps = {
  id: number
  authorName: string;
  title: string;
  content: string;
  category: string;
  commentCount: number;
};
const BlogCard = ({ id, authorName, title, content, category, commentCount }: BlogCardProps) => {
  const parent = useRef(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <Link href={`/blogs/` + id}>
      <div className="card w-full max-w-[798px] min-h-[200px] h-full bg-white px-10 py-7 hover:drop-shadow-lg" ref={parent}>
        <div className="avatar flex items-center">
          <div className="w-10 rounded-full">
            <img
              alt="avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
          <h2 className="text-base ml-3">{authorName}</h2>
        </div>
        <div className="bg-grey-100 w-[65px] text-center rounded-[16px] p-1 mt-4">
          <p className="text-xs text-base">{category}</p>
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-semibold">
            {title}
          </h2>
          <p className="line-clamp-3 md:line-clamp-2 overflow-hidden text-ellipsis">
            {content}
          </p>
        </div>
        <div className='flex items-center mt-2'>
          <Icon icon="mdi:comment-outline" color="black" />
          <p className='text-sm text-base ml-2'>Comments {commentCount}</p>
        </div>
      </div>
    </Link>

  );
};

export default BlogCard;
