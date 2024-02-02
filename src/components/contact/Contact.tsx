import { AtSign, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div id='contact' className='w-full h-screen flex justify-center'>
      <div className='max-w-3xl flex h-full flex-col items-center justify-center gap-4'>

        <div className='flex w-full items-center justify-center'>
          <p className='text-slate-400 text-6xl mb-4'>
            Meu <span className='text-violet-800'>Contato</span>
          </p>
        </div>

        <div className='flex gap-4'>
          <button className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40">
            <AtSign className='text-slate-400' size={35} />
          </button>

          <button className="cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40">
            <Linkedin className='text-slate-400' size={35} />
          </button>

        </div>
      </div>
    </div>
  )
}