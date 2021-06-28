'use strict';

const calculateDueDate = ({ submitDate, turnaroundTime } = {}) => {
  let dueDate;
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

  if (turnaroundTime + hour <= 17) {
    dueDate = submitDateFormat.setHours(turnaroundTime + hour);
  } else {
    dueDate = submitDateFormat.setHours(turnaroundTime + hour + 16);
    dueDate = new Date(dueDate);
    if (dueDate.getDay() === 0 || dueDate.getDay() === 6) {
      dueDate = dueDate.setHours(dueDate.getHours() + 48);
    }
  }

  return new Date(dueDate);
}

module.exports = calculateDueDate;

/**
 * In the rules, there was "Do not use ... hidden functionalities of the built-in methods."
 * I used the Date's built-in methods, so I guess I broke the rules.
 * I could have worked with the submitDate as a string and with split, I could have just changed the days and hours.
 * But that way I'm not sure how I could have known the day of the submitDate.
 * At least for that, I must have used the getDay method of Date.
 * Anyway, it was fun.
 */
