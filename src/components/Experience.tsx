import justice from '../assets/justice.jpg'
import hammer from '../assets/hammer.jpg'
import lawbook from '../assets/lawbook.png'

const features = [
  {
    name: 'I go to court for you',
    description: 'and rip their balls off.',
    icon: hammer,    
  },
  {
    name: 'I know the law',
    description: 'The others are just wankers',
    icon: justice,
  },
  {
    name: "Don't fuck about",
    description: "I'm irish",
    icon: lawbook,
  }
]

export default function Experience() {
  return (
    <div className="py-10 dark:bg-gray-900 justify-center animate-on-scroll" id="/experience">    
      <div className="mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="mx-auto max-w-2xl">          
          <h1 className="text-3xl cinzel-font imgToAnimate mt-2 bg-purple-400/40 rounded-xl p-4 font-semibold tracking-tight text-pretty text-center">
            I can represent in various matters of family and international law.
          </h1>
          <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300 text-center">
            With over 20 years of experience, I provide legal representation in family and international law matters. I assist individuals and families with complex cross-border issues. Fluent in French, I work with both domestic and international clients to deliver practical legal solutions tailored to their situation.
          </p>
        </div>
        <div className="w-3/4 mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16 dark:text-gray-400">
          {features.map((feature, index) => (
            <div key={index} className="relative pl-9 bg-sky-700/60 backdrop-blur-3xl hover:scale-110 transition duration-125 hover:bg-sky-700/80 hover:text-black rounded-xl p-6 text-white">
              <dt className="inline font-semibold text-black-900 dark:text-white">

                <img src={feature.icon} className="size-12 float-left mr-2 rounded-md"
                />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
