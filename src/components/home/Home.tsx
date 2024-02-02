import avatar from '../../assets/avatar.png'

export default function Home() {
  return (
    <div id='home' className='h-full flex h-screen items-center'>
      <div className='w-1/3 ml-20'>
        <p className='text-slate-400 text-6xl mb-4'>
          <span className='text-violet-800'>Cyber Security</span> Engineer
        </p>
        <span className='text-slate-400 text-lg'>Sit magna litora aliquam ut turpis nullam iaculis id mauris, suspendisse aptent urna cursus porta gravida integer habitant</span>
      </div>
      <img src={avatar} alt="avatar" className='absolute bottom-0 right-10' />
    </div>
  )
}