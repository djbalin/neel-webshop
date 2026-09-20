"use client";
import { useState } from "react";

interface KompletAudioPlayerProps {
  chapters: string[];
  chapterTitles: { [key: string]: string };
  audioStructure: {
    [chapter: string]: {
      [group: string]: string[];
    };
  };
}

const ROOT_GROUP = "_root";

export default function KompletAudioPlayer({
  chapters,
  chapterTitles,
  audioStructure,
}: KompletAudioPlayerProps) {
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="flex-grow">
          <label
            htmlFor="komplet-chapter-select"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Kapitel
          </label>
          <select
            id="komplet-chapter-select"
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
      </div>

      {selectedChapter && audioStructure[selectedChapter] && (
        <div className="space-y-8">
          {Object.keys(audioStructure[selectedChapter]).map((group) => (
            <div key={group} className="space-y-4">
              {group !== ROOT_GROUP && (
                <h3 className="font-bold text-lg border-b pb-1">{group}</h3>
              )}

              <div className="space-y-2 sm:ml-4">
                {audioStructure[selectedChapter][group].map((fileName) => {
                  const displayName = fileName.replace(/\.mp3$/i, "");
                  const audioPath = `/audio-komplet/${encodeURIComponent(
                    selectedChapter,
                  )}/${group !== ROOT_GROUP ? `${encodeURIComponent(group)}/` : ""}${encodeURIComponent(fileName)}`;

                  return (
                    <div
                      key={fileName}
                      className="space-y-1 flex flex-col sm:flex-row place-items-center"
                    >
                      <div className="flex w-full sm:w-2/5 flex-row sm:flex-col">
                        {displayName}
                      </div>
                      <audio
                        controls
                        src={audioPath}
                        className="text-sm h-12 w-full sm:w-3/5"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
