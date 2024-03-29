

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post hello: {params.slug}</div>
  }