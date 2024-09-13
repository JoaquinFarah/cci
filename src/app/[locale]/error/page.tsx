import Image from 'next/image'
import Link from 'next/link'

export default function ErrorPage() {
    return (
      <div>
        <button type="button" 
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ml-5">
          <Link href="/">Home</Link>
        </button>
        <Image 
          className="mx-auto"
          src="/404-error.png" 
          alt="error" 
          width={670} 
          height={670} />         
      </div>

    )
  }