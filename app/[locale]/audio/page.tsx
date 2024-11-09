// "use client";

// import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// const PAGE_SIZE = 5;

// const AUDIO_FILE_PATHS = [
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
//   "/audio/sample.mp3",
// ];
// const TOTAL_PAGES = Math.ceil(AUDIO_FILE_PATHS.length / PAGE_SIZE);
// export default function SoundFilesPage() {
//   const [currentPage, setCurrentPage] = useState(0);

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center md:items-start pt-6 md:pt-10 gap-y-6 md:gap-x-10 px-4 md:px-12 mx-auto">
//       <div className="w-full md:w-1/2 max-w-md flex items-center justify-center">
//         <Image
//           className="w-full object-contain"
//           width={800}
//           height={800}
//           src={"/images/neel_book.png"}
//           alt={"Puls 4 book cover"}
//         />
//       </div>
//       <div className="w-full md:w-1/2 max-w-xl space-y-6">
//         <h1 className="text-3xl md:text-4xl font-semibold break-words text-center md:text-left">
//           Lydfiler til Puls 4
//         </h1>
//         <div className="rounded-lg border-gray-100 border-2 shadow-lg">
//           <div className="bg-slate-50 gap-x-4 items-center flex flex-row p-2">
//             <span>
//               <button
//                 className="p-2 hover:bg-slate-100 rounded-full"
//                 onClick={() =>
//                   setCurrentPage((prev) => (prev === 0 ? 0 : prev - 1))
//                 }
//               >
//                 <ChevronLeftSquare size={24} />
//               </button>
//               <button
//                 className="p-2 hover:bg-slate-100 rounded-full"
//                 onClick={() =>
//                   setCurrentPage((prev) =>
//                     prev === TOTAL_PAGES - 1 ? TOTAL_PAGES - 1 : prev + 1
//                   )
//                 }
//               >
//                 <ChevronRightSquare size={24} />
//               </button>
//             </span>
//             <span className="font-medium text-sm md:text-base">
//               Øvelse {PAGE_SIZE * currentPage + 1}-
//               {Math.min(PAGE_SIZE * (currentPage + 1), AUDIO_FILE_PATHS.length)}{" "}
//               af {AUDIO_FILE_PATHS.length}
//             </span>
//           </div>
//           <div className="max-h-[450px] md:pr-4 space-y-2 scrollable p-4 pt-2 pb-8 overflow-y-auto">
//             {AUDIO_FILE_PATHS.slice(
//               currentPage * PAGE_SIZE,
//               currentPage * PAGE_SIZE + PAGE_SIZE
//             ).map((audioFilePath, idx) => {
//               return (
//                 <div className="gap-y-1 flex flex-col" key={idx}>
//                   <span className="text-sm md:text-base fo">
//                     Øvelse {currentPage * PAGE_SIZE + (idx + 1)}
//                   </span>
//                   <audio controls src={audioFilePath} className="w-full" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
