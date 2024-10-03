import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-1 px-6 py-16  items-center justify-center md:grid-cols-2 gap-8 lg:px-40">
      {/* Row 1: Text | Image */}
      <div className="flex items-center p-4">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Om os</h1>
          <h2 className="text-xl font-bold">Integer egestas ultrices euis</h2>
          <br></br>
          <p className="text-sm lg:text-base">
            Etiam id risus ante. Morbi laoreet, quam vel placerat ullamcorper,
            nulla tortor faucibus neque, non egestas massa turpis et nisi.
            Quisque sollicitudin laoreet risus, at imperdiet nulla luctus quis.
            Nam ut egestas lorem, ac aliquam odio. In bibendum sapien vel risus
            pulvinar ultricies. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. In et sem id dui dignissim placerat. Duis dapibus a
            nibh ac dignissim. Praesent et odio vel dolor egestas rutrum.
            Aliquam magna quam, vestibulum nec turpis ut, sollicitudin tristique
            dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus a tortor sit amet dolor tincidunt aliquam. Curabitur eu
            nibh quis lectus tincidunt semper nec feugiat lacus. Proin sagittis
            sagittis fermentum.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        <Image
          src={"/images/neel_persons.png"}
          alt={""}
          className="w-full max-w-sm h-auto"
        />
      </div>

      {/* Row 2: Image | Text */}
      <div className="flex justify-center items-center p-4">
        <Image
          src={"/public/images/neel_book.png"}
          alt={""}
          className="w-full max-w-sm h-auto"
        />
      </div>
      <div className="flex items-center p-4">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Serien Puls</h1>
          <h2 className="text-xl font-bold">Maecenas vel lacinia massa</h2>
          <p className="text-sm lg:text-base">
            Ut placerat hendrerit turpis, id imperdiet massa volutpat
            vestibulum. Nullam imperdiet eleifend justo, ut rhoncus ante sodales
            at. Suspendisse dictum elit quis leo imperdiet, sed tincidunt tellus
            interdum. Praesent non magna eget odio lobortis dapibus quis ornare
            erat. Fusce mollis odio nisi, eu rhoncus tellus euismod porttitor.
            Nullam commodo elementum felis euismod lacinia. Maecenas eleifend
            pellentesque est vel tempor.
          </p>
          <br></br>
          <p className="text-sm lg:text-base">
            Nunc vel aliquam tortor, egestas lacinia nunc. Curabitur in tempor
            metus. Etiam sit amet justo eu elit elementum tempus et id dui. Sed
            pharetra lacinia velit nec varius. Nullam condimentum in velit
            iaculis mattis. Nam eget luctus magna. Nulla quam metus, euismod ut
            porta sed, laoreet vitae urna.
          </p>
        </div>
      </div>
    </div>
  );
}
