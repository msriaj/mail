import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.split("@");
    if (e.target.email.value) {
      navigate(`/inbox/${email[0]}/${email[1]}`);
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="container flex flex-col justify-center items-center mx-auto my-8 py-10">
        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)",
          }}
          className="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
        ></div>

        <div className="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
          <div className="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
            <div className="px-2 -mt-6">
              <div className="text-center">
                <h1 className="font-normal text-3xl text-grey-800 font-medium leading-loose my-3 w-full">
                  Search Email From Temp Email
                </h1>
                <div className="w-full text-center">
                  <form onSubmit={handleSubmit}>
                    <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                      <input
                        name="email"
                        type="email"
                        placeholder="yourmail@example.com"
                        className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
