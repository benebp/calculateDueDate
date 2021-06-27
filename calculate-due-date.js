'use strict';

const calculateDueDate = ({ submitDate, turnaroundTime }) => {
  console.log('submitDate :>> ', submitDate);
  console.log('turnaroundTime :>> ', turnaroundTime);

  // throw error when no input
  if (!submitDate || !turnaroundTime) {
   throw new Error('One or both inputs are not given.');
  }
  
  // throw error when no input
  // if (typeof turnaroundTime !== Date || typeof turnaroundTime !== Number) {
  //   throw new Error('One or both given inputs are not valid.');
  // }

  const submitDateFormat = new Date(submitDate);
  const day = submitDateFormat.getDay();
  const hour = submitDateFormat.getHours();

  console.log('day :>> ', day);
  console.log('hour :>> ', hour);

  if (day === 0 || day === 6 || 17 < hour < 9) {
    throw new Error('Submit date is out of working hours.');
  }

}

module.exports = calculateDueDate;
