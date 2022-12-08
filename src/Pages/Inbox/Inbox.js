import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Spiner from "../../Components/Spiner/Spiner";

const Inbox = () => {
  const [msgs, setMsgs] = useState(null);
  const { email } = useParams();

  useEffect(() => {
    fetch(
      `https://c.digitalproductsbd24.com/api/messages/${email}/Ta6Do80ArjghtHyz5GKP`
    )
      .then((res) => res.json())
      .then((data) => setMsgs(data));
  }, [email]);

  if (!msgs) {
    return <Spiner />;
  }

  return (
    <>
      <Nav />
      <div className="grid place-items-center">
        <section className="flex flex-col pt-3 w-full md:w-7/12 mx-auto shadow-lg bg-gray-50 h-full  ">
          <div className="p-5">
            <p className="text-gray-400">Inbox Of</p>
            <h1 className="text-2xl text-gray-500">{email}</h1>
          </div>
          <ul className="mt-6">
            {!msgs.length && (
              <p className="px-2 py-12 border text-red-400 text-center">
                No Mail Found On This Email
              </p>
            )}
            {msgs.map((msg) => (
              <Link key={msg.id} to={`/mail/${email}/${msg.id}`}>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{msg.sender_name}</h3>
                    <p className="text-md text-gray-400">{msg.datediff}</p>
                  </div>
                  <div className="text-md italic text-gray-400">
                    {msg.subject}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Inbox;
