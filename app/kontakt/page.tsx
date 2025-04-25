export default function ContactPage() {
  return (
    <section className="flex flex-col space-y-8">
      <h1 className="header">Kontakt</h1>
      <p className="paragraph">
        Har du spørgsmål eller kommentarer, så ring eller send os en mail.
        <br />
        Vi bestræber os på at svare inden for et par dage.
      </p>
      <div className="flex flex-col max-w-md">
        <div className="flex justify-between">
          <span className="">TELEFON</span>
          <span>60550776</span>
        </div>
        <div className="flex justify-between">
          <span className="">E-MAIL</span>
          <span>forlagetdit@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
