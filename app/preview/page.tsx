export default async function PreviewPage() {
  return (
    <section className="flex flex-col pb-32">
      <h1 className="header">Læseprøve</h1>
      <p className="text-sm mt-2">
        Hvis læseprøven ikke indlæses forneden, kan den downloades{" "}
        <a
          href="/pdf/book-preview.pdf"
          className="underline font-medium text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          ved at trykke her
        </a>
        .
      </p>

      <div className="w-full py-10  mx-auto">
        <embed
          src="/pdf/book-preview.pdf"
          type="application/pdf"
          height="800px"
          width="100%"
          className="rounded-md shadow-lg"
        ></embed>
      </div>
    </section>
  );
}
