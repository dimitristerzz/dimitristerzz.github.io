export default function Page() {
  return(
    <div className="flex flex-row h-screen-dvh justify-center items-center gap-60">
      <div className='flex flex-col gap-y-8'>
        <p className="text-6xl font-bold text-text-primary">Download<br/>GrooveShare</p>
        <div className="flex flex-row gap-5">
          <a target="_blank" href="https://play.google.com/store/apps/details/YouTube?id=com.google.android.youtube&hl=en_ZA">
              <img src="/assets/googleplay.png" className="h-12 w-auto transition-transform duration-300 transform hover:scale-105"/>
          </a>
          <a target="_blank" href="https://apps.apple.com/us/app/youtube/id544007664">
              <img src="/assets/appstore.png" className="h-12 w-auto transition-transform duration-300 transform hover:scale-105 "/>
          </a>
        </div>
      </div>
      <a href="/"><img src="/assets/icon.svg" className="h-58 w-auto"/></a>
    </div>
  )
}