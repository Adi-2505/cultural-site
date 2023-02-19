import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./Styles/PageStyle.css";

function Register() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsVisible((current) => !current);
  };

  return (
    <div className="img_reg">
      <div className="register">
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{
            // delay: 0.5,
            type: "spring",
            damping: 12,
            duration: 0.12,
          }}
          className="register_dialog  "
        >
          <form action="" className="form_register">
            {isVisible && (
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, origin: 1, ease: "easeInOut" }}
                className={
                  isVisible
                    ? "register_input2 visible_input"
                    : "register_input2 hidden_input "
                }
                type="text"
                placeholder="Name"
              />
            )}
            <input
              className="register_input2"
              type="email"
              placeholder="E-mail"
            />

            <AnimatePresence>
              {isVisible && (
                <motion.input
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1, origin: 1 }}
                  className={
                    isVisible
                      ? "register_input2 visible_input"
                      : "register_input2 hidden_input "
                  }
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="Contact No."
                />
              )}
            </AnimatePresence>

            {isVisible && (
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, origin: 1 }}
                className={
                  isVisible
                    ? "register_input2 visible_input"
                    : "register_input2 hidden_input "
                }
                type="text"
                placeholder="Institute"
              />
            )}
            <AnimatePresence>
              <input
                className="register_input2"
                type="password"
                placeholder="Password"
              />
            </AnimatePresence>
            <br />
            {/* Register button */}
            <AnimatePresence>
              {isVisible && (
                <motion.button
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 40, opacity: 1 }}
                  // transition={{ duration: 1, origin: 1 }}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "white",
                    color: "black",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    origin: 1,
                  }}
                  className="submit_reg_detail"
                >
                  Register
                </motion.button>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {/* Sign In button */}
              {!isVisible && (
                <motion.button
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 40, opacity: 1 }}
                  // transition={{ duration: 1, origin: 1 }}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "white",
                    color: "black",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    duration: 6,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    origin: 1,
                  }}
                  className="submit_reg_detail"
                >
                  Sign in
                </motion.button>
              )}
            </AnimatePresence>
          </form>

          <div className="loginText">
            {isVisible && "Already have account? "}
            {!isVisible && "Don't have Account? "}

            <motion.button
              whileHover={{
                scale: 1.1,
                color: "purple",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              style={{ textDecoration: "underline" }}
              onClick={handleClick}
              href="/register"
            >
              {isVisible && "Sign in"}
              {!isVisible && "Sign Up"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
