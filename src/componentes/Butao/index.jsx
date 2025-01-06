import { motion } from "framer-motion";

const Butao = ({ type, children }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="relative"
    >
    
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 1 },
          hover: { opacity: [0.5, 0.4, 0.5], scale: 1.35 }
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute inset-0 bg-laranja-escuro rounded-full blur-xl"
      />

  
      <motion.div
        variants={{
          hover: {
            scale: 1.1,
            transition: {
              duration: 0.3,
              staggerChildren: 0.075
            }
          }
        }}
        className="relative"
      >
       
        {/* Botão principal */}
        <motion.button
          type={type}
          variants={{
            initial: { 
              background: "linear-gradient(45deg, #FF8C38 0%, #FFB168 100%)" 
            },
            hover: { 
              scale: 1.1,
              background: "linear-gradient(45deg, #FFB168 0%, #FF8C38 100%)",
              boxShadow: "0 0 20px rgb(255, 255, 255)"
            }
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            duration: 0.1,
            background: { duration: 0.5 }
          }}
          className="relative py-2 px-6 rounded-full font-semibold text-white 
                     overflow-hidden shadow-lg transform dark:text-black"
        >
       
          <motion.span
            variants={{
              initial: { x: "-100%", opacity: 0 },
              hover: { 
                x: ["100%", "-100%"],
                opacity: [0, 1, 0],
                transition: {
                  repeat: Infinity,
                  duration: 1.5
                }
              }
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent 
                       via-white to-transparent opacity-30"
          />

       
          <motion.span
            variants={{
              hover: {
                scale: [1, 1.1, 1],
                transition: {
                  repeat: Infinity,
                  duration: 1.5
                }
              }
            }}
            className="relative z-10 bg-gradient-to-r from-white to-orange-100 
                       bg-clip-text text-transparent font-bold "
          >
            {children}
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Butao;