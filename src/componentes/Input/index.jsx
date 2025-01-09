import { motion } from "framer-motion";

const Input = ({ type, placeholder, Choi }) => {
  return (
    <motion.input
    
      className=" bg-slate-300 rounded-lg w-full sm:w-96 p-2 text-laranja-escuro dark:bg-noturno-bg  ml-[15px]"
      type={type}
      placeholder={placeholder}
      whileFocus={{
        scale: 1.05, 
        boxShadow: "0px 0px 10px rgba(255, 140, 0, 0.8)"
      }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default Input;
