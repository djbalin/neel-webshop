export default function ContactPage() {
  return (
    <section className="flex flex-col space-y-8">
      <h1 className="header">Contact</h1>
      <p className="paragraph">
        Got questions or comments? Give us a call or drop us an email. We’ll do
        our best to get back to you within a couple of days.
        <br />
      </p>
      <div className="flex flex-col max-w-md">
        <div className="flex justify-between">
          <span className="">PHONE</span>
          <span>+45 60550776</span>
        </div>
        <div className="flex justify-between">
          <span className="">EMAIL</span>
          <span>forlagetdit@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
