import Image from 'next/image'
import Link from 'next/link'

export default function Card(props){
    const {API_URL} = process.env
    return(
            <Link href={`/Services/[slug]`} as={`Services/${props.services.slug}`}>
            <a>
                <div className="lg:max-w-sm rounded-xl lg:flex-col w-11/12 sm:w-11/12 mb-16 mx-auto flex overflow-hidden shadow-2xl">
                <Image
                src={ props.services.Image.url}
                height={300}
                width={500}
                className="blackW w"
                alt={props.services.Description_IMG}
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.services.Service_Titel}</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
        </a>
        </Link>
    )
}