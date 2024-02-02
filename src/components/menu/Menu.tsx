import { Brain, Briefcase, Contact, Home, MessageCircle, MessageCircleWarning } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Menu() {
  return (
    <div className='fixed right-10 top-0 bottom-0 flex items-center justify-center z-50'>

      <div className='flex flex-col gap-4'>

        <MenuButton to='home'>
          <Home className='text-slate-400' />
        </MenuButton>

        <MenuButton to='about'>
          <MessageCircleWarning className='text-slate-400' />
        </MenuButton>

        <MenuButton to='skills'>
          <Brain className='text-slate-400' />
        </MenuButton>

        <MenuButton to='experiences'>
          <Briefcase className='text-slate-400' />
        </MenuButton>

        <MenuButton to='contact'>
          <Contact className='text-slate-400' />
        </MenuButton>
      </div>
    </div>
  )
}

function MenuButton({ children, to }: { children: any, to: string }) {
  return (
    <Link
      className='cursor-pointer border-solid border-2 border-violet-800 p-1 rounded-lg shadow-lg hover:shadow-violet-800/40'
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={50}
      duration={200}
    >
      {children}
    </Link>
  )
}