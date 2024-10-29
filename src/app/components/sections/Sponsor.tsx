import Image from "next/image";

export default function SponsorSection() {
    return (
      <section id= "sponsor-section" className="bg-transparent py-24 sm:py-32">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900 to uppercase">
            SPONSORS
            {/* <br/>
            {t('description')} */}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              alt="Tekno"
              src="/tekno.png"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-2"
            />
            <Image
              alt="Barmatic"
              src="/barmatic.png"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Chandon"
              src="/chandon.png"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-2"
            />
            <Image
              alt="Endumel"
              src="/endumel.png"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <Image
              alt="impsa"
              src="/impsa.jfif"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-36 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
            <Image
              alt="Incotec"
              src="/incotec.jfif"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <Image
              alt="Acys"
              src="/acys.jfif"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            />
             <Image
              alt="Albion"
              src="/albion.jfif"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Altieri"
              src="/altieri.jfif"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-2"
            />
            <Image
              alt="Domizi"
              src="/domizi.jfif"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Martini"
              src="/martini.jfif"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-36 w-full object-contain sm:col-start-auto lg:col-span-2"
            />
            <Image
              alt="Servicemen"
              src="/servicemen.jfif"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-36 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
            <Image
              alt="Torvato"
              src="/trovato.jfif"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-36 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
            <Image
              alt="Endumel"
              src="/endumel.png"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <Image
              alt="Barmatic"
              src="/barmatic.png"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Acys"
              src="/acys.jfif"
              width={158}
              height={48}
              className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            />

          </div>
        </div>
      </section>
    )
  }
  