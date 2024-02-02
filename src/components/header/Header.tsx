import { AtSign, Instagram, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <div className='fixed top-0 w-full z-50'>
      <div className='flex justify-between p-4'>
        <h1 className='text-slate-400	text-2xl pl-12'>RBullmann</h1>
        <div className='flex gap-4 pr-12'>
          <Instagram className='cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40 text-slate-400' size={35} />
          <Linkedin className='cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40 text-slate-400' size={35} />
          <AtSign className='cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40 text-slate-400' size={35} />
        </div>
      </div>
    </div>
  )
}