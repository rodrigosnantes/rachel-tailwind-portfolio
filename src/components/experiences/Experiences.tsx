export default function Experiences() {
  return (
    <div id='experiences' className='w-full h-screen flex justify-center'>
      <div className='max-w-3xl w-full flex flex-col justify-center gap-2'>

        <div className='flex w-full items-center justify-center'>
          <p className='text-slate-400 text-6xl mb-4'>
            Minhas <span className='text-violet-800'>Experiencias</span>
          </p>
        </div>

        <ol className="border-l md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full md:-mt-[5px] md:ml-0 md:mr-0 bg-purple-400"></div>
              <p className="mt-2 text-slate-400 text-lg">
                10/02/2019 - 13/09/2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <p className='mb-1.5 text-xl font-semibold text-slate-400'>Web Developer</p>
              <p className='text-slate-400 text-md font-thin'>
                Experiência em um Web E-commerce de grande porte, onde fui responsável
                pelo desenvolvimento de soluções inteligentes, bem como pela criação de interfaces responsivas,
                atraentes e intuitivas. Além disso, trabalhei na otimização de desempenho
                e na garantia de compatibilidade entre os navegadores.
              </p>
            </div>
          </li>


          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full md:-mt-[5px] md:ml-0 md:mr-0 bg-purple-400"></div>
              <p className="mt-2 text-slate-400 text-lg">
                10/02/2019 - 13/09/2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <p className='mb-1.5 text-xl font-semibold text-slate-400'>Web Developer</p>
              <p className='text-slate-400 text-md font-thin'>
                Experiência em um Web E-commerce de grande porte, onde fui responsável
                pelo desenvolvimento de soluções inteligentes, bem como pela criação de interfaces responsivas,
                atraentes e intuitivas. Além disso, trabalhei na otimização de desempenho
                e na garantia de compatibilidade entre os navegadores.
              </p>
            </div>
          </li>

        </ol>
      </div>

    </div>
  )
}