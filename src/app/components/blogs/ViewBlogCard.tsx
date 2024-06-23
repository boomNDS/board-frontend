import React, { useRef, useEffect, } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import autoAnimate from '@formkit/auto-animate';

type ViewBlogCardProps = {
  id: number
  authorName: string;
  title: string;
  content: string;
  category: string;
  commentCount: number;
};
const ViewBlogCard = ({ id, authorName, title, content, category, commentCount }: ViewBlogCardProps) => {
  const parent = useRef(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div className="card w-full max-w-[800px] min-h-[200px] h-full bg-transparent px-10 py-7" ref={parent}>
      <div className="avatar flex items-center">
        <div className="w-10 rounded-full">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
        <h2 className="text-base ml-3">{authorName}</h2>
        <p className='ml-1 text-[12px] text-grey-300'>5 mo ago</p>
      </div>
      <div className="bg-grey-100 w-[65px] text-center rounded-[16px] p-1 mt-4">
        <p className="text-xs text-base">{category}</p>
      </div>
      <div className="mt-2">
        <h2 className="text-3xl font-semibold">
          {title}
        </h2>
        <p className="overflow-hidden text-ellipsis text-[16px] mt-2">
          {content}
        </p>
      </div>
      <div className='flex items-center mt-2'>
        <Icon icon="mdi:comment-outline" color="black" />
        <p className='text-sm text-base ml-2'>Comments {commentCount}</p>
      </div>
    </div>
  );
};

export default ViewBlogCard;
