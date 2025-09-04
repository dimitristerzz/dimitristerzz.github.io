export default function Page() {
  return(
    <div className="h-screen-dvh flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-y-16">
        <a href="/"><img src="/assets/icon.svg" className="h-60 w-auto"/></a>
        <div className="flex flex-row gap-8">
          <a target="_blank" href="https://www.instagram.com/groooveshare/">
              <img src="/assets/insta.svg" className="h-19 w-auto transition-transform duration-300 transform hover:scale-105"/>
          </a>
          <a target="_blank" href="mailto:support@groooveshare.com">
              <img src="/assets/mail.svg" className="h-19 w-auto transition-transform duration-300 transform hover:scale-105 "/>
          </a>
        </div>
      </div>
    </div>
  )
}