import Link from "next/link";

function Card({ profile }:any){

    return(
        <div>
            <Link href={`/profile/${profile.slug}`}>
                <button
                    type="submit"
                    className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
                >
                    Example 1
                </button>
            </Link>
        </div>
    )
}

export default Card;