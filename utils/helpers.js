module.exports = {
    format_date: date => {
        console.log(date);
        return `${new Date(date).getFullYear()}`;},
  format_time: (date) => {

    return date.toLocaleTimeString();

  },
  format_date: (date) => {

    newDate = new Date(date).toTimeString();

    return `${new Date(date).getMonth() + 1} / ${new Date(date).getFullYear()} - ${newDate[0]}${newDate[1]}${newDate[2]}${newDate[3]}${newDate[4]}`;

  },
  format_day: (date) => {

    return `${new Date(date).getDate()}`;

  },
};
