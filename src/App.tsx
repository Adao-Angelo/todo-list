import { CirclePlus, Rocket, Trash2 } from "lucide-react";

function App() {
  return (
    <main className="bg-gray-600 min-h-screen text-gray-300 text-[1.6rem]">
      <div className="bg-gray-700 pt-[7.2rem] pb-[8rem] flex justify-center items-center">
        <div className="flex items-center gap-[1.2rem]">
          <Rocket className="w-[2.4rem] text-purpleDark"></Rocket>
          <h1 className="text-[4rem] font-black">
            <span className="text-blue">to</span>
            <span className="text-purpleDark">do</span>
          </h1>
        </div>
      </div>
      <div>
        <section className="flex  m-auto mt-[-3rem]  items-center gap-[0.8rem] max-w-[73.6rem]">
          <input
            className="flex-1 border outline-none border-gray-700 text-[1.6rem] bg-gray-500 rounded-[0.8rem] p-[1.6rem] placeholder:text-gray-300 focus:border-purpleDark focus:text-gray-100"
            type="text"
            placeholder="Add a new task..."
          />

          <button className="text-[1.4rem] flex bg-blueDark hover:bg-blue gap-[0.8rem] font-bold rounded-[0.8rem] p-[1.6rem] text-gray-100">
            Create <CirclePlus></CirclePlus>
          </button>
        </section>
        <div className="mt-[9.2rem] m-auto max-w-[73.6rem]">
          <div className="flex justify-between">
            <div className="flex gap-[0.8rem]">
              <p className="font-bold text-blue text-[1.4rem]">Tasks created</p>
              <span className=" font-bold bg-gray-400 rounded-full text-gray-100 text-[1.2rem] px-[0.8rem] py-[0.2rem]">
                0
              </span>
            </div>
            <div className="flex gap-[0.8rem]">
              <p className="font-bold text-purpleDark text-[1.4rem]">
                Completed
              </p>
              <span className=" font-bold bg-gray-400 rounded-full text-gray-100 text-[1.2rem] px-[0.8rem] py-[0.2rem]">
                0
              </span>
            </div>
          </div>
          <div className="mt-[2.4rem] grid gap-[1.2rem]">
            <div className=" rounded-[0.8rem] flex items-start gap-[1.2rem] p-[1.6rem] bg-gray-500 border border-gray-400">
              <div className="min-w-[2.2rem] min-h-[2.2rem] rounded-full border-2 border-blueDark hover:border-blue"></div>
              <p className="text-gray-100">
                The entire urn is sometimes a mass of free author and not always
                ugly. Homelessness or complete starvation.
              </p>
              <Trash2
                size={32}
                className="hover:bg-gray-400 hover:text-Danger rounded-[0.4rem] p-[0.5rem]"
              ></Trash2>
            </div>
            <div className=" rounded-[0.8rem] flex items-start gap-[1.2rem] p-[1.6rem] bg-gray-500 border border-gray-400">
              <div className="min-w-[2.2rem] min-h-[2.2rem] rounded-full bg-purpleDark hover:bg-purple"></div>
              <p className="line-through text-gray-300">
                The entire urn is sometimes a mass of free author and not always
                ugly. Homelessness or complete starvation.
              </p>
              <Trash2
                size={32}
                className="hover:bg-gray-400 hover:text-Danger rounded-[0.4rem] p-[0.5rem]"
              ></Trash2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
