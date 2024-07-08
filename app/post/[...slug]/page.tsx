import {notFound} from 'next/navigation'

export default function Post({params}:{
    params: {
        slug: string[]
    };
}) {
    if (params.slug.length >= 1 && params.slug.length <= 2) {
        return <h1>Post {params.slug[0]} subpost {params.slug[1]}</h1>
    } else {
        notFound()
    }
}