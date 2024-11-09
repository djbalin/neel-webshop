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
    <div className="w-full h-full space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold ">Lydfiler til Facet 5</h1>
      <div className="h-full space-y-6 scrollable p-6 border-gray-100 border-2 shadow-lg rounded-lg ">
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
