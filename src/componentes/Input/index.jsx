import { motion } from "framer-motion";

const Input = ({ type, placeholder, Choi }) => {
  return (
    <motion.input
    
      className="bg-slate-300 rounded-lg w-1/6 p-2 text-laranja-escuro dark:bg-noturno-card"
      type={type}
      placeholder={placeholder}
      whileFocus={{
        scale: 1.05, // Aumenta ligeiramente ao focar
        boxShadow: "0px 0px 10px rgba(255, 140, 0, 0.8)", // Adiciona um brilho laranja
      }}
      transition={{ duration: 0.3 }} // Transição suave
    />
  );
};

export default Input;
