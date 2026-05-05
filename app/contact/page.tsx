import ContactForm from "./ContactForm"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FEF9F2] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8A7A67]">
            Get in touch
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#533F2E] md:text-5xl">
            Let’s talk.
          </h1>

          <p className="mx-auto max-w-xl text-lg leading-8 text-[#6A5A48]">
            Whether you’re interested in what we’re building, want to work with
            us, or just have a thought — we’d love to hear from you.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}