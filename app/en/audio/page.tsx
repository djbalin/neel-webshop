import { readdirSync, statSync } from "fs";
import path from "path";
import AudioSelector from "../../audio/AudioSelector";

type AudioStructure = {
  [chapter: string]: {
    [section: string]: {
      [exercise: string]: string[];
    };
  };
};

function readAudioStructure(audioDir: string, chapterPrefix: string) {
  // Get all chapter directories
  const chapterDirs = readdirSync(audioDir)
    .filter((dir) => statSync(path.join(audioDir, dir)).isDirectory())
    .sort((a, b) => {
      const numA = parseInt(a.replace(chapterPrefix, ""));
      const numB = parseInt(b.replace(chapterPrefix, ""));
      return numA - numB;
    });

  const audioStructure: AudioStructure = {};

  chapterDirs.forEach((chapter) => {
    const chapterPath = path.join(audioDir, chapter);
    audioStructure[chapter] = {};

    const sections = readdirSync(chapterPath)
      .filter((dir) => statSync(path.join(chapterPath, dir)).isDirectory())
      .sort();

    sections.forEach((section) => {
      const sectionPath = path.join(chapterPath, section);
      audioStructure[chapter][section] = {};

      const exercises = readdirSync(sectionPath)
        .filter((dir) => statSync(path.join(sectionPath, dir)).isDirectory())
        .sort((a, b) => {
          const numA = parseInt(a.replace("opg", "")) || 0;
          const numB = parseInt(b.replace("opg", "")) || 0;
          return numA - numB;
        });

      exercises.forEach((exercise) => {
        const exercisePath = path.join(sectionPath, exercise);

        const files = readdirSync(exercisePath)
          .filter(
            (file) => !statSync(path.join(exercisePath, file)).isDirectory(),
          )
          .sort((a, b) => {
            const numA = parseInt(a.split("_")[0]) || 0;
            const numB = parseInt(b.split("_")[0]) || 0;
            return numA - numB;
          });

        audioStructure[chapter][section][exercise] = files;
      });
    });
  });

  return { chapterDirs, audioStructure };
}

export default function AudioPage() {
  const { chapterDirs, audioStructure } = readAudioStructure(
    path.join(process.cwd(), "public/audio"),
    "chp",
  );

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

  const {
    chapterDirs: kompletChapterDirs,
    audioStructure: kompletAudioStructure,
  } = readAudioStructure(
    path.join(process.cwd(), "public/audio-komplet"),
    "chp",
  );

  const kompletChapterTitles = {
    chp1: "Kapitel 1: Rundt om arbejde",
    chp2: "Kapitel 2: Rundt om familieliv",
    chp3: "Kapitel 3: Rundt om bolig",
    chp4: "Kapitel 4: Rundt om livskvalitet",
  };

  const kompletSectionTitles = {
    chp1: {
      secA: "A: LÆSNING",
      secB: "B: SKRIVNING",
      secC: "C: MUNDTLIG KOMMUNIKATION",
    },
    chp2: {
      secA: "A: LÆSNING",
      secB: "B: SKRIVNING",
      secC: "C: MUNDTLIG KOMMUNIKATION",
    },
    chp3: {
      secA: "A: LÆSNING",
      secC: "C: MUNDTLIG KOMMUNIKATION",
    },
    chp4: {
      secA: "A: LÆSNING",
    },
  };

  return (
    <AudioSelector
      facetChapters={chapterDirs}
      facetChapterTitles={chapterTitles}
      facetAudioStructure={audioStructure}
      facetSectionTitles={sectionTitles}
      kompletChapters={kompletChapterDirs}
      kompletChapterTitles={kompletChapterTitles}
      kompletAudioStructure={kompletAudioStructure}
      kompletSectionTitles={kompletSectionTitles}
      isEn
    />
  );
}
