import React from "react";

function NavBar() {
  return (
    <div className="w-full h-[80px] flex justify-between items-center mb-[100px]">
      <div >
        <span>
            <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M9.25621 15.7628L26.7802 4.768C30.097 2.6872 34.4002 5.0796 34.4002 9.0052V30.9948C34.4002 34.92 30.097 37.3128 26.7802 35.232L9.25621 24.2372C6.1366 22.2796 6.1366 17.7204 9.25621 15.7628Z"
                fill="#4BB7FD"
            />
            <path
                d="M30.7441 15.7628L13.2201 4.768C9.9033 2.6872 5.6001 5.0796 5.6001 9.0052V30.9948C5.6001 34.92 9.9033 37.3128 13.2201 35.232L30.7441 24.2372C33.8637 22.2796 33.8637 17.7204 30.7441 15.7628Z"
                fill="#7B6EF6"
            />
            </svg>
        </span>
      </div>
      <div className = 'flex gap-[30px] text-white'>
        <p>Movies</p>
        <p>Tv Shows</p>
        <p className='flex items-center gap-3 text-white'>Suggest me <span className='text-white'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.61987 3.95331L13.6665 7.99997L9.61987 12.0466" stroke="#A8AEBF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.33325 8H13.5533" stroke="#A8AEBF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> </p>
      </div>
    </div>
  );
}

export default NavBar;