export default function slug(service){
    return(
        <>
        </>
    )
}
export async function getServerSideProps(context) {
    const {slug} = context.query
    const {API_URL} = process.env
    const res = await fetch(`${API_URL}/services?slug=${slug}`)
    const data = await res.json()
    return {
      props: {
          service: data
      },
    }
  }