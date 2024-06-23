"use client";
import { useState } from "react";
import CNavbar from "./components/CNavbar";
import CategoryDropdown from "./components/CategoryDropdown";
import CButton from "./components/CButton";
import { Icon } from '@iconify/react';
import BlogCard from "./components/blogs/BlogCard";

const blogs = [
  {
    id: 1,
    authorName: "Wittawat",
    title: "The Beginning of the End of the World",
    content: "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.",
    category: "History",
    commentCount: 29,
  },
  {
    id: 1,
    authorName: "Wittawat",
    title: "The Beginning of the End of the World",
    content: "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.",
    category: "History",
    commentCount: 29,
  },
  {
    id: 1,
    authorName: "Wittawat",
    title: "Camp",
    content: "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.",
    category: "History",
    commentCount: 29,
  },
];

const handleSearch = (search: string, postCategory: string) => {
  return blogs.filter(blog => { return blog.title.toLowerCase().includes(search.toLowerCase()) && postCategory.toLowerCase() == blog.category.toLowerCase() })
}

export default function Home() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [postCategory, setPostCategory] = useState('History');
  const [search, setSearch] = useState('');

  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };


  return (
    <main className="min-h-screen bg-grey-100">
      <CNavbar />
      <section className="w-full mt-[5rem]">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex space-x-4 justify-between md:justify-center  items-center">
              <div className={isOpenSearch ? `flex md:hidden items-center border-2 focus-within:border-green-100 border-green-100 w-full bg-transparent rounded` : ``}>
                <Icon icon="mdi:magnify" width={28} height={28} className="flex md:hidden ml-2 cursor-pointer" color="black" onClick={() => {
                  toggleSearch()
                }} />
                {/* set this input  to toggleSearch */}
                <input
                  className={isOpenSearch ? "flex md:hidden input bg-transparent focus:outline-0 border-0 input-bordered w-full placeholder:text-base pl-2" : 'hidden'}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search"
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      toggleSearch();
                  }}
                />
              </div>
              <div className="hidden md:flex items-center border-2 focus-within:border-green-100 border-green-100 max-w-[535px] w-full bg-transparent rounded">
                <Icon icon="mdi:magnify" width={20} height={20} className="ml-2" color="black" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="input bg-transparent focus:outline-0 border-0 input-bordered w-full placeholder:text-base pl-2"
                />
              </div>
              <div className={isOpenSearch ? 'hidden md:flex' : 'flex'}>
                <CategoryDropdown postCategory={postCategory} setPostCategory={setPostCategory} />
                <CButton textValue="Create" icon="mdi:plus" />
              </div>
            </div>
            {isOpenSearch ? <p className="flex md:hidden text-[14px] text-gray-500 ml-1">enter to completed search ...</p> : ''}
            <div className="flex flex-col items-center py-10 space-y-1">
              {handleSearch(search, postCategory).map((blog, index) => (
                <BlogCard
                  key={index}
                  authorName={blog.authorName}
                  title={blog.title}
                  category={blog.category}
                  content={blog.content}
                  commentCount={blog.commentCount}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
