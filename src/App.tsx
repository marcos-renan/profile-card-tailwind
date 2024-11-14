function App() {

  return (
    <div className=" flex h-dvh w-dvw justify-center items-center bg-gradient-to-tr from-[#0cd2d1] to-[#0857c0] px-20 ">
      <div className=" flex w-max flex-col items-center justify-center rounded-2xl bg-gray-950 text-white shadow-lg lg:flex-row lg:py-8">
        <div className="relative -mt-16 flex h-40 min-w-40 items-center justify-center overflow-hidden rounded-full md:h-56 md:w-[70%] md:rounded-2xl transition-all duration-200 ease-linear lg:-ml-16 lg:mt-0 lg:h-52 lg:w-[175px]">
          <img
            src="/src/assets/woman.png"
            alt="Retrato da Astoria Hannelore, TailWind CSS"
            width={208}
            height={208}
            className="absolute inset-0 aspect-square h-full w-full object-cover transition-all duration-300 ease-in-out hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className=" max-w-xs px-2 py-5 text-center md:max-w-sm lg:text-start lg:px-6">
          <h2 className="text-2xl ">Astoria Hannelore</h2>
          <h3 className=" mb-3 text-base opacity-65 ">TailWind CSS</h3>
          <p className="mb-8 text-sm opacity-45 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.
          </p>

          <div className=" flex justify-center gap-x-3 lg:justify-start ">
            <button
              aria-label=" Visualizar perfil de Astosria Hannelore "
              className=" w-2/5 min-w-24 rounded-full border border-gray-200 px-6 py-2 font-medium lg:mr-4 "
            >
              Profile
            </button>

            <button
              aria-label=" Seguir a Astoria Hannelore"
              className=" w-2/5 min-w-24 rounded-full border border-gray-200 bg-gray-200 px-6 py-2 font-medium text-black "
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App
