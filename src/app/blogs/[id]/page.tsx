"use client";

import Link from "next/link";
import CButton from "../../components/CButton";
import ViewBlogCard from "../../components/blogs/ViewBlogCard";
import DefaultLayout from "../../layout/DefaultLayout";
import { Icon } from '@iconify/react';
import CBackButton from "../../components/CBackButton";
import CommentCard from "../../components/blogs/CommentCard";

const BlogPost = () => {
  const blog =
  {
    id: 1,
    authorName: "Wittawat",
    title: "The Beginning of the End of the World",
    content: "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.",
    category: "History",
    commentCount: 29,
  }


  return (
    <DefaultLayout>
      <section className="w-full mt-[5rem]">
        <CBackButton />
        <div className="container mx-auto px-4">
          <div>
            <ViewBlogCard
              id={blog.id}
              authorName={blog.authorName}
              title={blog.title}
              category={blog.category}
              content={blog.content}
              commentCount={blog.commentCount}></ViewBlogCard>
          </div>
          <div className="flex justify-center py-4 space-y-4">
            <textarea className="textarea textarea-bordered w-full max-w-[1000px] bg-transparent mt-3 border-3 border-gray-700 focus:border-gray-700" placeholder="comment"></textarea>
          </div>
          <div className="modal-action">
            <CButton textValue="Close"
              className="w-[120px] hover:bg-success hover:text-white"
              outline
            />
            <CButton textValue="Post"
              className="w-[120px]"
            />
          </div>
          <div className="pb-5" >
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </section>
    </DefaultLayout>

  );
};

export default BlogPost;
