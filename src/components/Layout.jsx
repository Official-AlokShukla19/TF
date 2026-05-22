import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const isChapterPage = [
    '/education-growth',
    '/community-roots',
    '/innovative-horizons'
  ].includes(pathname);

  const pageTurnVariants = {
    initial: {
      rotateY: 90,
      rotateZ: 0,
      opacity: 0,
      transformOrigin: "left center",
    },
    animate: {
      rotateY: 0,
      rotateZ: 0,
      opacity: 1,
      transformOrigin: "left center",
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo for a smooth "swinging open" feel
      }
    },
    exit: {
      rotateY: -90,
      rotateZ: 0,
      opacity: 0,
      transformOrigin: "left center",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      transition: {
        duration: 1,
        ease: [0.7, 0, 0.84, 0],
      }
    }
  };

  const standardVariants = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } },
    exit: { 
      opacity: 0, 
      filter: "blur(10px)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      transition: { duration: 0.5 } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-heritage-gold/30 bg-heritage-parchment overflow-x-hidden">
      <Navbar />
      <main className="flex-grow relative bg-heritage-parchment" style={{ perspective: "1500px" }}>
        {isChapterPage && (
          <div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-black/20 to-transparent z-40 pointer-events-none" />
        )}
        
        <AnimatePresence mode="popLayout">
          <motion.div
            key={pathname}
            variants={isChapterPage ? pageTurnVariants : standardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ 
              backfaceVisibility: "hidden", 
              WebkitBackfaceVisibility: "hidden",
              transformStyle: "preserve-3d"
            }}
            className="w-full min-h-screen"
          >
            {isChapterPage && (
              <motion.div 
                className="absolute inset-0 z-50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ 
                  opacity: 0.3,
                  background: "linear-gradient(to right, rgba(0,0,0,0.4), transparent)"
                }}
                transition={{ duration: 0.8 }}
              />
            )}
            <div className="bg-heritage-parchment min-h-screen">
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
