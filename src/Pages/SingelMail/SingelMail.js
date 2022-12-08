import React from "react";

const SingleMail = ({ msgs }) => {
  return (
    <>
      <div className="flex justify-center   ">
        <section className="w-full  border   mx-auto px-4 flex flex-col bg-white ">
          <div className="flex justify-between items-center py-5 border-b-2 mb-8 ">
            <div className="flex space-x-4 items-center">
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{msgs.sender_name}</h3>
                <p className="text-light text-gray-400">{msgs.sender_email}</p>
              </div>
            </div>
            <div>
              <ul className=" text-right text-gray-400 space-x-4">
                <p>{msgs.date}</p>
                <p>{msgs.datediff}</p>
              </ul>
            </div>
          </div>
          <section>
            <h1 className="font-bold text-2xl">{msgs.subject}</h1>
            <article className="py-8 text-gray-500 leading-7 tracking-wider">
              <div dangerouslySetInnerHTML={{ __html: msgs.content }} />
            </article>
          </section>
        </section>
      </div>
    </>
  );
};

export default SingleMail;
