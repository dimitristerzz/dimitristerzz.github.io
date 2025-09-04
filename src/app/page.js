export default function Page() {
  return(
    <div className="h-screen-dvh flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-y-16">
        <img src="/assets/icon.svg" className="h-60 w-auto" />
        <a
          href="/download"
          className=" bg-primary text-background px-20 py-5 rounded-2xl text-3xl hover:bg-background hover:text-primary font-semibold transition cursor-pointer"
        >
          Download
        </a>
      </div>
      <div className="absolute bottom-15 text-text-primary flex flex-row justify-center gap-6">
        <a className="hover:text-primary transition" href="/privacy">
          Privacy Policy
        </a>
        <a className="hover:text-primary transition" href="/tos">
          Terms of Service
        </a>
        <a className="hover:text-primary transition" href="/contact">
          Contact Us
        </a>
      </div>
    </div>
  )
}