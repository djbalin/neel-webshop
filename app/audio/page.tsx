import fs from "fs";
import path from "path";

const audioDir = path.join(process.cwd(), "public/audio/1");
const fileNames = fs.readdirSync(audioDir);

export default async function AudioPage() {
  //   const [opgave, setOpgave] = useState(1);
  const opgave = 1;
  const chapter = 1;

  const folderDir = `/audio/${chapter}`;

  //   const t = await getTranslations("Guide");

  return (
    // <div className="flex flex-col pt-0  pb-10 lg:pt-2 md:px-6 sm:px-8 lg:px-10  mx-auto space-y-4">
    //   {/* <div className="flex md:flex-row w-full flex-col md:space-x-10 space-y-8 md:space-y-0"> */}
    <div className="flex flex-row  py-10justify-between">
      <section className="flex flex-col pr-8 ">
        <header className="space-y-4 md:space-y-8">
          <h1 className="header lg:mb-0 mb-10  text-center lg:text-left">
            Lydfiler
          </h1>
          <p className="font-semibold text-lg text-center md:text-left">
            Lydfiler til <b>Facet</b> kan frit afspilles og downloades her på
            siden.
          </p>
        </header>
      </section>

      <div className=" h-full border-gray-100 border-2 shadow-lg rounded-lg">
        <div className="bg-gray-200 space-y-2 p-2 border-b-2 border-gray-200 text-center">
          <h3 className=" text-2xl lg:text-3xl xl:text-4xl font-medium ">
            Kapitel 1: Arbejde og Identitet
          </h3>
          <h4 className=" text-lg font-normal text-center">
            Side XX: Opgave {opgave}. Fordele og ulemper
          </h4>
        </div>
        <div className="h-full max-h-[400px] xl:max-h-[600px] space-y-6 scrollable p-6  overflow-auto ">
          <select className="text-lg border-2 rounded-md w-min">
            <option className="text-sm">
              Kapitel 1 - Arbejde og Identitet
            </option>
            <option className="text-sm">Kapitel ...</option>
          </select>
          {fileNames.map((fileName, idx) => {
            console.log(path.join(folderDir, fileName));

            return (
              <div
                className="space-y-1 flex flex-row justify-between place-items-center"
                key={idx}
              >
                <div className="flex flex-col">
                  {/* <span className="font-semibold text-sm md:text-base">
                    Opgave {opgave}
                  </span> */}
                  <span className="font-semibold">
                    {fileName.split(".")[0].split("_")[1]}
                  </span>
                </div>
                <audio
                  controls
                  src={path.join(folderDir, fileName)}
                  //   src={"/audio/1/Interview med Asta.m4a"}
                  className="text-sm h-10"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
