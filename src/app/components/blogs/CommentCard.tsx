import React from 'react'

const CommentCard = () => {
  return (
    <div className='py-2'>
      <div className="avatar flex items-center">
        <div className="w-10 rounded-full">
          <img
            alt="avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
        <h2 className="text-base ml-3">aa</h2>
        <p className='ml-1 text-[12px] text-grey-300'>12h ago</p>
      </div>
      <p className='ml-1 lg:ml-12 mt-2 w-full'>Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.</p>
    </div>
  )
}

export default CommentCard