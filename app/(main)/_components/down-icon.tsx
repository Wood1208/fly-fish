"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";

const DownIcon = () => {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
      }}
      initial={{ y: 0 }} // 初始位置
      animate={{ y: [0, -20, 0] }} // 循环的动画
      transition={{
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <ChevronDown size={30} color="#ffffff" />
    </motion.div>
  );
};

export default DownIcon;