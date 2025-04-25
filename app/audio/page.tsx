import { readdirSync, statSync } from "fs";
import path from "path";
import dynamic from "next/dynamic";

// Import AudioPlayer with dynamic import and no SSR since it uses browser APIs
const AudioPlayer = dynamic(() => import("../components/AudioPlayer"), {
  ssr: false,
});

export default function AudioPage() {
  const audioDir = path.join(process.cwd(), "public/audio");

  // Get all chapter directories
  const chapterDirs = readdirSync(audioDir)
    .filter((dir) => statSync(path.join(audioDir, dir)).isDirectory())
    .sort((a, b) => {
      // Sort chapters numerically
      const numA = parseInt(a.replace("chp", ""));
      const numB = parseInt(b.replace("chp", ""));
      return numA - numB;
    });

  // Map chapters to their structure
  const audioStructure: {
    [chapter: string]: {
      [section: string]: {
        [exercise: string]: string[];
      };
    };
  } = {};

  chapterDirs.forEach((chapter) => {
    const chapterPath = path.join(audioDir, chapter);
    audioStructure[chapter] = {};

    // Get sections for each chapter
    const sections = readdirSync(chapterPath)
      .filter((dir) => statSync(path.join(chapterPath, dir)).isDirectory())
      .sort();

    sections.forEach((section) => {
      const sectionPath = path.join(chapterPath, section);
      audioStructure[chapter][section] = {};

      // Get exercises for each section
      const exercises = readdirSync(sectionPath)
        .filter((dir) => statSync(path.join(sectionPath, dir)).isDirectory())
        .sort((a, b) => {
          // Sort exercises numerically
          const numA = parseInt(a.replace("opg", "")) || 0;
          const numB = parseInt(b.replace("opg", "")) || 0;
          return numA - numB;
        });

      exercises.forEach((exercise) => {
        const exercisePath = path.join(sectionPath, exercise);

        // Get audio files for each exercise
        const files = readdirSync(exercisePath)
          .filter(
            (file) => !statSync(path.join(exercisePath, file)).isDirectory()
          )
          .sort((a, b) => {
            // Sort by the number before the underscore
            const numA = parseInt(a.split("_")[0]) || 0;
            const numB = parseInt(b.split("_")[0]) || 0;
            return numA - numB;
          });

        audioStructure[chapter][section][exercise] = files;
      });
    });
  });

  const chapterTitles = {
    chp1: "Kapitel 1: Arbejde og identitet",
    chp2: "Kapitel 2: Penge og økonomi",
    chp3: "Kapitel 3: Kultur og livsstil",
    chp4: "Kapitel 4: Kriminalitet og straf",
  };

  const sectionTitles = {
    chp1: {
      secA: "A: LÆSEFORSTÅELSE OG ORDKENDSKAB",
      secC: "C: MUNDTLIG KOMMUNIKATION OG SPROGBRUG",
    },
    chp2: {
      secA: "A: LÆSEFORSTÅELSE OG ORDKENDSKAB",
      secC: "C: MUNDTLIG KOMMUNIKATION OG SPROGBRUG",
    },
    chp3: {
      secA: "A: LÆSEFORSTÅELSE OG ORDKENDSKAB",
      secB: "B: SKRIFTLIG FREMSTILLING OG SPROGBRUG",
      secC: "C: MUNDTLIG KOMMUNIKATION OG SPROGBRUG",
    },
    chp4: {
      secA: "A: LÆSEFORSTÅELSE OG ORDKENDSKAB",
      secC: "C: MUNDTLIG KOMMUNIKATION OG SPROGBRUG",
    },
  };

  return (
    <div className="flex flex-row py-10 justify-between">
      <section className="flex flex-col pr-8">
        <header className="space-y-4 md:space-y-8">
          <h1 className="header lg:mb-0 mb-10 text-center lg:text-left">
            Lydfiler
          </h1>
          <p className=" text-lg text-center md:text-left">
            Lydfiler til <b>Facet</b> kan frit afspilles og downloades her på
            siden.
          </p>
        </header>
      </section>

      <div className="h-full min-w-[700px] border-gray-100 border-2 shadow-lg rounded-lg">
        <div className="bg-gray-200 space-y-2 p-2 border-b-2 border-gray-200 text-center">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-medium">
            Lydafspiller
          </h3>
        </div>
        <div className="h-full max-h-[400px] xl:max-h-[600px] space-y-6 scrollable p-6 overflow-auto">
          <AudioPlayer
            chapters={chapterDirs}
            chapterTitles={chapterTitles}
            audioStructure={audioStructure}
            sectionTitles={sectionTitles}
          />
        </div>
      </div>
    </div>
  );
}
