// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "motion/react";

// export default function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     // Mouse movement track karna
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     // Link/Button hover detection
//     const handleMouseOver = (e) => {
//       if (
//         e.target.tagName === "A" ||
//         e.target.tagName === "BUTTON" ||
//         e.target.closest("a") ||
//         e.target.closest("button")
//       ) {
//         setIsHovering(true);
//       } else {
//         setIsHovering(false);
//       }
//     };

//     window.addEventListener("mousemove", mouseMove);
//     window.addEventListener("mouseover", handleMouseOver);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//       window.removeEventListener("mouseover", handleMouseOver);
//     };
//   }, []);

//   return (
//     <>
//       {/* Main Cursor (The Mouse Shape) */}
//       <motion.div
//         className="fixed top-0 left-0 border-2 border-blue-600 rounded-full pointer-events-none z-[9999] flex justify-center pt-1"
//         animate={{
//           x: mousePosition.x - 12, // Center align karne ke liye width ka half minus kiya
//           y: mousePosition.y - 18, // Height ka half minus kiya
//           width: isHovering ? 40 : 24, // Hover par bada hoga
//           height: isHovering ? 40 : 36, // Hover par shape change
//           backgroundColor: isHovering ? "rgba(37, 99, 235, 0.1)" : "transparent", // Hover par light blue tint
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 28,
//           mass: 0.5,
//         }}
//         style={{
//           // Agar hover ho to circle ban jaye, warna mouse shape (pill) rahe
//           borderRadius: isHovering ? "50%" : "9999px", 
//         }}
//       >
//         {/* Inner Scroll Dot (Sirf tab dikhe jab hover na ho raha ho) */}
//         {!isHovering && (
//           <div className="w-1 h-2 bg-blue-600 rounded-full animate-pulse" />
//         )}
//       </motion.div>
      
//       {/* Small Center Dot (Optional - Precision ke liye) */}
//       <motion.div 
//          className="fixed top-0 left-0 w-1 h-1 bg-blue-600 rounded-full pointer-events-none z-[9999]"
//          animate={{ x: mousePosition.x, y: mousePosition.y }}
//          transition={{ duration: 0 }}
//       />
//     </>
//   );
// }