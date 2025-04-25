export default async function PreviewPage() {
  return (
    <section className="flex flex-col  pb-32">
      <h1 className="header">Læseprøve</h1>
      {/* <p className="text-lg">
        Bladr igennem de første 10 sider af Facet for at få et indtryk af
        indholdet og opbygningen.
      </p> */}
      <div className="w-full py-10 md:w-4/5 mx-auto">
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
