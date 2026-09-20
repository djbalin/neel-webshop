import { readdirSync, statSync } from "fs";
import path from "path";
import AudioSelector from "./AudioSelector";

const ROOT_GROUP = "_root";

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
            (file) => !statSync(path.join(exercisePath, file)).isDirectory(),
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

  // Komplet audio: simpler structure — chapter -> group (root files or a
  // named subfolder) -> files.
  const kompletAudioDir = path.join(process.cwd(), "public/audio-komplet");

  const kompletChapterDirs = readdirSync(kompletAudioDir)
    .filter((dir) => statSync(path.join(kompletAudioDir, dir)).isDirectory())
    .sort((a, b) => {
      const numA = parseInt(a.replace("Kap", ""));
      const numB = parseInt(b.replace("Kap", ""));
      return numA - numB;
    });

  const kompletAudioStructure: {
    [chapter: string]: {
      [group: string]: string[];
    };
  } = {};

  kompletChapterDirs.forEach((chapter) => {
    const chapterPath = path.join(kompletAudioDir, chapter);
    kompletAudioStructure[chapter] = {};

    const entries = readdirSync(chapterPath).sort();

    const rootFiles = entries.filter((entry) =>
      statSync(path.join(chapterPath, entry)).isFile(),
    );
    if (rootFiles.length > 0) {
      kompletAudioStructure[chapter][ROOT_GROUP] = rootFiles;
    }

    const subDirs = entries.filter((entry) =>
      statSync(path.join(chapterPath, entry)).isDirectory(),
    );
    subDirs.forEach((subDir) => {
      const subDirPath = path.join(chapterPath, subDir);
      const files = readdirSync(subDirPath)
        .filter((file) => statSync(path.join(subDirPath, file)).isFile())
        .sort();
      kompletAudioStructure[chapter][subDir] = files;
    });
  });

  const kompletChapterTitles = kompletChapterDirs.reduce<{
    [key: string]: string;
  }>((acc, chapter) => {
    const num = chapter.replace("Kap", "");
    acc[chapter] = `Kapitel ${num}`;
    return acc;
  }, {});

  return (
    <AudioSelector
      facetChapters={chapterDirs}
      facetChapterTitles={chapterTitles}
      facetAudioStructure={audioStructure}
      facetSectionTitles={sectionTitles}
      kompletChapters={kompletChapterDirs}
      kompletChapterTitles={kompletChapterTitles}
      kompletAudioStructure={kompletAudioStructure}
    />
  );
}
