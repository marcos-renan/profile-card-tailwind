function App() {

  return (
    <div className=" flex h-dvh w-dvw justify-center items-center bg-gradient-to-tr from-[#0cd2d1] to-[#0857c0] px-20 ">

      <div className=" flex w-64 flex-col justify-center items-center rounded-2xl bg-gray-950 text-white shadow-lg">

        <div className="relative -mt-16 flex justify-center min-h-40 min-w-40 max-w-40 overflow-hidden rounded-full ">
          <img
            src="/src/assets/woman.png"
            alt="Retrato da Astoria Hannelore, TailWind CSS"
            width={208}
            height={208}
            className="absolute inset-0 h-full w-full bg-center object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className=" px-2 py-5 text-center ">
          <h2 className="text-2xl ">Astoria Hannelore</h2>
          <h3 className=" mb-3 text-base opacity-65 ">TailWind CSS</h3>
          <p className="mb-8 text-sm opacity-45 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.
          </p>

          <div className=" flex justify-center gap-x-3 ">
            <button
              aria-label=" Visualizar perfil de Astosria Hannelore "
              className=" w-2/5 min-w-24 rounded-full border border-gray-200 px-6 py-2 font-medium "
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
