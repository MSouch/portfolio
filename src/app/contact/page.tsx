export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Contact Page */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <div className="flex justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/maxwell-souchereau/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/msouch" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800"
          >
            GitHub
          </a>
          <a 
            href="mailto:msouch3@gmail.com"
            className="text-green-600 hover:text-green-900"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}