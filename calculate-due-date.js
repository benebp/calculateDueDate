'use strict';

const calculateDueDate = ({ submitDate, turnaroundTime }) => {
  // throw error when no input
  if (!submitDate || !turnaroundTime) {
   throw new Error('One or both inputs are not given.');
  }
  
  // throw error when no input
  if (typeof turnaroundTime !== Date || typeof turnaroundTime !== Number) {
    throw new Error('One or both given inputs are not valid.');
  }

}

module.exports = calculateDueDate;
