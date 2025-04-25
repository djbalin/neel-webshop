"use client";
import { useState } from "react";
import { CONSTANTS } from "../constants";

interface AudioPlayerProps {
  chapters: string[];
  chapterTitles: { [key: string]: string };
  sectionTitles: { [key: string]: { [key: string]: string } };
  audioStructure: {
    [chapter: string]: {
      [section: string]: {
        [exercise: string]: string[];
      };
    };
  };
}

export default function AudioPlayer({
  chapters,
  chapterTitles,
  audioStructure,
  sectionTitles,
}: AudioPlayerProps) {
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);

  // Zip files are names kapitel1.zip, kapitel2.zip, etc.
  const zipFileName = `kapitel${selectedChapter.replace("chp", "")}.zip`;

  return (
    <div className="space-y-6">
      {/* Chapter Selection and Download */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="flex-grow">
          <label
            htmlFor="chapter-select"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Kapitel
          </label>
          <select
            id="chapter-select"
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="text-lg border-2 rounded-md w-full p-2"
          >
            {chapters.map((chapter) => (
              <option key={chapter} value={chapter}>
                {chapterTitles[chapter] || chapter}
              </option>
            ))}
          </select>
        </div>
        <a
          href={`${CONSTANTS.LINKS.AUDIO}/${zipFileName}`}
          download={`Facet5-${zipFileName}`}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download filer
        </a>
      </div>

      {/* All Audio Files */}
      {selectedChapter && audioStructure[selectedChapter] && (
        <div className="space-y-8">
          {Object.keys(audioStructure[selectedChapter]).map((section) => (
            <div key={section} className="space-y-4">
              <h3 className="font-bold text-lg border-b pb-1">
                {sectionTitles[selectedChapter][section]}
              </h3>

              {Object.keys(audioStructure[selectedChapter][section]).map(
                (exercise) => (
                  <div key={exercise} className="space-y-3">
                    <h4 className="font-semibold text-md">
                      {exercise.replace("opg", "Opgave ")}
                    </h4>

                    <div className="space-y-2 ml-4">
                      {audioStructure[selectedChapter][section][exercise].map(
                        (fileName, idx) => {
                          const fileNameParts = fileName
                            .split(".")[0]
                            .split("_");
                          const displayName =
                            fileNameParts.length > 1
                              ? fileNameParts[1]
                              : fileName;
                          const audioPath = `/audio/${selectedChapter}/${section}/${exercise}/${fileName}`;

                          return (
                            <div
                              key={idx}
                              className="space-y-1 flex flex-row  place-items-center"
                            >
                              <div className="flex w-2/5 flex-col">
                                <span className="">
                                  {displayName.replace(".m4a", "")}
                                </span>
                              </div>
                              <audio
                                controls
                                src={audioPath}
                                className="text-sm h-12 w-3/5"
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
