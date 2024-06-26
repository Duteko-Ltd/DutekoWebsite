import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden  py-24 sm:py-32">
        <div
          className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-lg font-semibold leading-8 tracking-tight text-red-600">About Duteko</p>
            {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1> */}
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Duteko is a platform that connects people who need to send packages with independent delivery providers within Europe. We offer a convenient and affordable way to get your packages delivered quickly and securely.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
              </svg>
              <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    Our mission is to make package delivery easier and more accessible for everyone. We believe that everyone should have a safe and reliable way to send packages, regardless of their budget or location.
                  </p>
                </blockquote>
                {/* <figcaption className="mt-8 flex gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Brenna Goyette</div>
                  <div className="text-gray-600">@brenna</div>
                </div>
              </figcaption> */}
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">How We Work</h2>
              <p className="mt-6">
                Duteko is easy to use. Simply enter your pick-up and delivery locations, and let us know what you need to send. We&apos;ll connect you with a network of independent delivery providers who will compete for your business. You can choose the provider that offers the best price and service for your needs.

              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Safety and Security</h2>
              <p className="mt-6">
                We take the safety and security of your packages seriously. We have a number of measures in place to protect your packages, including:
              </p>

              <p className="mt-6">
                <b>Community Guidelines:</b> All users of Duteko must follow our community guidelines, which promote a safe and respectful environment.
                Background Checks: We conduct background checks on all of our delivery providers. </p>


                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why Choose Duteko?</h2>
              <p className="mt-6">
              There are a number of reasons to choose Duteko for your package delivery needs:    </p>

              <p className="mt-6">
             <b> Convenience:</b> Duteko is a convenient way to get your packages delivered. You can book a delivery in minutes from your phone or computer. </p>
           
           
             <p className="mt-6">
             <b> Affordability:</b> We offer competitive rates on package delivery. </p>

             <p className="mt-6">
             <b> Choice:</b> You can choose from a network of independent delivery providers to find the best price and service for your needs. </p>
           

             <p className="mt-6">
             <b> Security:</b> We take the safety and security of your packages seriously. </p>

             <p className="mt-6">
             We are confident that Duteko is the best way to get your packages delivered quickly, securely, and affordably. </p>


             <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Ready to get started?</h2>
              <p className="mt-6">
              Download the Duteko app or visit our website to learn more and book your first delivery today!    </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
