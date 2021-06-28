'use strict';

const calculateDueDate = ({ submitDate, turnaroundTime } = {}) => {
  let finishDate;
  if (!submitDate || !turnaroundTime) {
   throw new Error('One or both inputs are not given.');
  }
  
  if (typeof turnaroundTime !== 'number') {
    throw new Error('One or both given inputs are not valid.');
  }

  const submitDateFormat = new Date(submitDate);

  if (submitDateFormat.toString() === 'Invalid Date') {
    throw new Error('One or both given inputs are not valid.');
  }

  const day = submitDateFormat.getDay();
  const hour = submitDateFormat.getHours();

  if (day === 0 || day === 6 || hour > 17 || hour < 9) {
    throw new Error('Submit date is out of working hours.');
  }

  return finishDate;
}

module.exports = calculateDueDate;
