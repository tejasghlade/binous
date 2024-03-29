

export default function Page({ params }: { params: { id: string } }) {
    return <div>My Post hello: {params.id}</div>
  }