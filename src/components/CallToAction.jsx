import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden mt-10 bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get Started today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
          Ready to experience a smarter way to deliver? Sign up as a sender or courier today and join the Duteko community!
          </p>
          <div className="mt-8 flex gap-5 justify-center">
           
             <a href="https://apps.apple.com/ng/app/duteko/id6503954529">
               <img
                 className='w-30 h-15 apple'
                 src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
                 alt="Download on the App Store" />
             </a>
            <div className='-mt-3'>
            <a href='https://play.google.com/store/apps/details?id=com.duteko.Duteko&hl=en_US'>
               <img
                 className='w-30 h-16  android'
                 alt='Get it on Google Play'
                 src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' />
             </a>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  )
}
