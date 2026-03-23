import photo from '../assets/profile_pic.png'
import { Link } from 'react-scroll';
import type { Art } from '../App'

interface Article {
    title:{
        rendered: string;
    } ;
    id: number;
    content: {
        rendered: string;
    };
    date: string;
    category: number;
    excerpt: {
        rendered: string;
    }
}
interface Category {
    id: number;
    name: string;
}



export default function ArticlesSection({setCurrentArticle, client, articles, categories}: {setCurrentArticle: (newArticle: Art)=>void, client: {firstName: string, lastName: string, url: string, role: string, photo: string}, articles: any, categories: any}) {
    function convertDate(date: string): string {
          const [ year, month, day ] = date.split('T')[0].split('-');
          return `${day}-${month}-${year}`
      }
    return (    
        <div className="py-10 mx-10 min-h-[calc(100dvh-20*var(--spacing))] animate-on-scroll" id="/articlesSection">
            <div className="dark:bg-gray-900 bg-white rounded-xl py-6">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                            Articles
                        </h2>
                        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
                            See below my latest publications
                        </p>
                    </div>
                    <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-5 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
                        {articles.map((article: Article) => (
                            <article key={article.id} className="flex max-w-xl flex-col items-start justify-between bg-gray-500/10 rounded-xl p-4">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={article.date} className="text-gray-500 dark:text-gray-400">
                                    {convertDate(article.date)}
                                    </time>
                                    <div                                    
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
                                    >
                                    {categories.find((cat: Category)=>cat.id===article.id)?.name || 'General'}
                                    </div>
                                </div>
                                <div className="group relative grow">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                                    <Link to="/article" onClick={()=>setCurrentArticle({id: article.id, title: article.title.rendered, article: article.content.rendered, excerpt: article.excerpt.rendered})} offset={-80} smooth={true} duration={500}>
                                        <span className="absolute inset-0" />                                    
                                            {article.title.rendered}                                    
                                    </Link>
                                    </h3>
                                    <div className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{__html: article.excerpt.rendered}} />
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                                    <img alt="" src={photo} className="size-10 rounded-full bg-gray-50 dark:bg-gray-800" />
                                    <div className="text-sm/6">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        <a href={''}>
                                        <span className="absolute inset-0" />
                                        {`${client.firstName} ${client.lastName}`}
                                        </a>
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">{client.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


