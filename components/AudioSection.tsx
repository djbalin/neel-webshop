const AUDIO_FILE_PATHS = [
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
];

export default function AudioSection() {
  return (
    <div className="w-full h-full border-gray-100 border-2 shadow-lg rounded-lg">
      <h1 className="bg-gray-100 py-2 border-b-2 border-gray-200 text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
        Lydafspiller til Facet 5
      </h1>
      <div className="h-full max-h-[400px] xl:max-h-[600px] space-y-6 scrollable p-6  overflow-auto ">
        {AUDIO_FILE_PATHS.map((audioFilePath, idx) => {
          return (
            <div className="space-y-1 flex flex-col" key={idx}>
              <span className="font-semibold text-sm md:text-base">
                Øvelse {idx + 1}
              </span>
              <audio
                controls
                src={audioFilePath}
                className="text-sm h-10 w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
