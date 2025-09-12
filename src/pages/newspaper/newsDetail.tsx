import { useParams } from 'react-router-dom'
import { useDetailNews } from '@/api/query/news'
import NewsList from '@/components/shared/newsList'
import he from 'he'
import parse, { domToReact } from 'html-react-parser'
import { openWebview } from 'zmp-sdk/apis'

const DOMAIN = 'https://thongtinvieclamkhanhhoa.vn'

export default function NewsDetailPage() {
  const { id } = useParams()
  const { data, isLoading, isError } = useDetailNews({ id: id || '' })

  if (!id) return null

  if (isLoading) {
    return (
      <div className='max-w-md mx-auto p-4 animate-pulse'>
        <div className='h-6 bg-gray-300 rounded w-3/4 mb-4'></div>
        <div className='h-4 bg-gray-200 rounded w-1/3 mb-6'></div>
        <div className='space-y-3'>
          <div className='h-4 bg-gray-200 rounded'></div>
          <div className='h-4 bg-gray-200 rounded'></div>
          <div className='h-4 bg-gray-200 rounded'></div>
        </div>
      </div>
    )
  }

  if (isError || !data?.Data?.Data) {
    return (
      <div className='max-w-md mx-auto p-4 text-center text-gray-500'>
        Không thể tải dữ liệu
      </div>
    )
  }

  const news = data.Data.Data

  const rawDesc = news.description || ''
  const decodedDesc = he.decode(rawDesc)

  const fixedDesc = decodedDesc
    ?.replace(/src="\/(.*?)"/g, `src="${DOMAIN}/$1"`)
    .replace(/<img([^>]*?)style=".*?"([^>]*?)>/g, '<img$1$2>')
    .replace(/href="\/(.*?)"/g, `href="${DOMAIN}/$1"`)
    .replace(
      /<iframe([^>]*?)>/g,
      '<div class="w-full overflow-hidden"><iframe$1 style="max-width:100%" class="w-full"></iframe></div>'
    )

  const content = parse(fixedDesc, {
    replace: (domNode) => {
      if (
        domNode.type === 'tag' &&
        domNode.name === 'a' &&
        domNode.attribs?.href
      ) {
        const href = domNode.attribs.href
        return (
          <a
            href={href}
            onClick={(e) => {
              e.preventDefault()

              openWebview({
                url: href,
              })
            }}
            className=''
          >
            {domToReact(
              domNode.children as unknown as import('html-react-parser').DOMNode[]
            )}
          </a>
        )
      }
    },
  })

  return (
    <div className='bg-gray-50'>
      <div className='max-w-md mx-auto px-4 pb-6'>
        <h1 className='text-xl font-bold text-gray-900 leading-tight mb-3'>
          {news.title}
        </h1>

        <div className='flex items-center justify-between mb-6 pb-4 border-b border-gray-200 mt-8'>
          <p className='text-xs text-gray-500'>{news.publishdate}</p>
        </div>

        <div
          className='text-gray-900 leading-relaxed space-y-4 prose max-w-none'
          style={{
            fontSize: '16px',
            lineHeight: '1.7',
          }}
        >
          {content}
        </div>
      </div>

      {news.relatedNews && (
        <div className='mt-4 mb-6 px-4'>
          <h3 className='text-base font-semibold text-gray-700 uppercase relative'>
            Bài viết liên quan
            <span className='absolute -bottom-1 left-0 h-0.5 w-44 bg-color-1'></span>
          </h3>
          <div className='mt-4'>
            <NewsList data={news.relatedNews.slice(0, 5)} />
          </div>
        </div>
      )}
    </div>
  )
}
