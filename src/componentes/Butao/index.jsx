import { motion } from "framer-motion";

const Butao = ({ type, children }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="relative flex justify-center"
    >
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 1 },
          hover: { opacity: [0.2, 0.15, 0.2], scale: 1.15 }
        }}
        transition={{ repeat: Infinity, duration: 2 }}
     
      />
      <motion.div
        variants={{
          hover: {
            scale: 1.05,
            transition: {
              duration: 0.2,
              staggerChildren: 0.075
            }
          }
        }}
        className="relative"
      >
        <motion.button
          type={type}
          variants={{
            initial: {
              background: "linear-gradient(45deg, #FF8C38 0%, #FFB168 100%)"
            },
            hover: {
              scale: 1.05,
              background: "linear-gradient(45deg, #FFB168 0%, #FF8C38 100%)",
          
            }
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.2,
            background: { duration: 0.3 }
          }}
          className="relative py-2 px-6 rounded-full font-semibold text-white 
                     overflow-hidden shadow-md transform dark:text-black
                     w-full"
        >
          <motion.span
            variants={{
              initial: { x: "-40%", opacity: 0 },
              hover: {
                x: ["40%", "-40%"],
                opacity: [0, 0.3, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2
                }
              }
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent 
                       via-white to-transparent opacity-20"
          />
          <motion.span
            variants={{
              hover: {
                scale: [1, 1.05, 1],
                transition: {
                  repeat: Infinity,
                  duration: 2
                }
              }
            }}
            className="relative z-10 bg-gradient-to-r from-white to-orange-100 
                       bg-clip-text text-transparent font-bold"
          >
            {children}
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Butao;