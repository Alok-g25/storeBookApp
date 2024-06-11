import React from "react";

function Card({ item }) {
  return (
    <>
      <div className="mt-5 my-3 p-3">
        <div className="card w-92 shadow-xl hover:scale-110 duration-500 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}!
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between items-center">
              <div className="badge badge-outline">${item.price}</div>
              <div className="px-2 py-1 border-[1px] border-gray-700 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white duration-700">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
