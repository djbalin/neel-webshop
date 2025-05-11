export default async function PreviewPage() {
  return (
    <section className="flex flex-col pb-32">
      <h1 className="header">Preview</h1>
      <p className="text-sm mt-2">
        If the preview does not load below,{" "}
        <a
          href="/pdf/book-preview.pdf"
          className="underline font-medium text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here to download
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
