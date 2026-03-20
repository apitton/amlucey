import { Pagination,  PaginationNext, PaginationPrevious } from '@/components/ui/tailwind/pagination'
import type { Art, article } from '@/App';


export default function Article({articles, currentArticle, setCurrentArticle, client}: {articles: article[], currentArticle: Art, setCurrentArticle: (newArticle: Art)=>void, client: {firstName: string, lastName: string, url: string, role: string, photo: string}}) {
    function handleClick(direction: string) {
        const index: number = articles.findIndex((article: article)=>article.id===currentArticle.id);
        let newIndex: number;
        direction==="prev"?newIndex=Math.max(index-1,0):newIndex=Math.min(index+1, articles.length-1)
        console.log('click')
        console.log('newArticle ', articles[newIndex]);
        console.log({id: articles[newIndex].id, title: articles[newIndex].title, article: articles[newIndex].content.rendered, excerpt: articles[newIndex].excerpt})
        setCurrentArticle({id: articles[newIndex].id, title: articles[newIndex].title.rendered, article: articles[newIndex].content.rendered, excerpt: articles[newIndex].excerpt.rendered})
        console.log('done')
    }

    return (
        
        <div className="px-6 py-10 lg:px-8 dark:bg-gray-900 relative min-h-[calc(100dvh-20*var(--spacing))] animate-on-scroll">
            
            <div className="min-h-100 flex flex-col items-center mx-auto text-base/7 text-gray-700 dark:text-gray-300 bg-white rounded-xl">        
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                {currentArticle.title}
                </h1>
                <figure className="mt-10 border-l border-indigo-600 pl-9 dark:border-indigo-400">
                <blockquote className="font-semibold text-gray-900 dark:text-white">
                    <div dangerouslySetInnerHTML={{__html: currentArticle.excerpt}} />                
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                    <img
                    alt=""
                    src={client.photo}
                    className="size-6 flex-none rounded-full bg-gray-50 dark:bg-gray-800"
                    />
                    <div className="text-sm/6">
                    <strong className="font-semibold text-gray-900 dark:text-white">{`${client.firstName} ${client.lastName}`}</strong> – {client.role}
                    </div>
                </figcaption>
                </figure>
                <div dangerouslySetInnerHTML={{__html: currentArticle.article}} className="mt-8"/>
                <Pagination className="mt-auto">
                    <PaginationPrevious show={articles.findIndex((article: article)=>article.id===currentArticle.id)>0?"#":null} onClick={handleClick} />
                    <PaginationNext show={articles.findIndex((article: article)=>article.id===currentArticle.id)<articles.length-1?"#":null} onClick={handleClick} />
                </Pagination>
            </div>
        </div>
        
    )
}



