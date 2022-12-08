import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Spiner from "../../Components/Spiner/Spiner";

const SingleMail = () => {
  const [msgs, setMsgs] = useState(null);
  const { domain, email, mailID } = useParams();
  console.log(mailID);
  useEffect(() => {
    if (email) {
      fetch(
        `https://c.digitalproductsbd24.com/api/messages/${email}@${domain}/Ta6Do80ArjghtHyz5GKP`
      )
        .then((res) => res.json())
        .then((data) =>
          setMsgs(...data.filter((m) => m.id === parseInt(mailID)))
        );
    }
  }, [email, mailID, domain]);

  if (!msgs) {
    return <Spiner />;
  }
  console.log(msgs);

  return (
    <>
      <Nav />
      <div className="flex justify-center md:pt-12  ">
        <section className="w-full  border shadow-lg md:w-8/12 mx-auto px-4 flex flex-col bg-white rounded-r-3xl">
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
