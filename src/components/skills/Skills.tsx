
import { Linkedin } from 'lucide-react'

export default function Skills() {
  return (
    <div id='skills' className='w-full h-screen flex justify-center'>
      <div className='max-w-3xl flex flex-col h-full items-center justify-center gap-4'>

        <p className='text-slate-400 text-6xl'>
          Minhas <span className='text-violet-800'>Habilidades</span>
        </p>

        <div className="w-full flex flex-col items-center content-center ">
          <SkillItem skillName='01' value={90} />
          <SkillItem skillName='02' value={90} />
          <SkillItem skillName='03' value={90} />
          <SkillItem skillName='04' value={90} />
          <SkillItem skillName='04' value={90} />
          <SkillItem skillName='04' value={90} />
          <SkillItem skillName='04' value={90} />
          <SkillItem skillName='04' value={90} />
        </div>

      </div>

    </div>
  )
}

function SkillItem({ skillName, value }: { skillName: string, value: number }) {
  return (
    <div className="w-full flex items-center content-center">
      <div className="mr-4">
        <Linkedin className='text-slate-400 border border-violet-800 p-2 rounded-md hover:bg-sky-700' size={35} />
      </div>

      <dl className="grow">
        <dt className="text-lg font-medium text-slate-400">
          {skillName}
        </dt>
        <dd className="flex items-center mb-3 ">
          <div className="w-full bg-slate-400 rounded h-2.5 mr-2 ">
            <div
              className="h-2.5 rounded bg-violet-800"
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm font-medium text-slate-400">
            {10}%
          </span>
        </dd>
      </dl>
    </div>
  )
}