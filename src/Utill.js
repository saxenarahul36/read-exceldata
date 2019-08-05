export const ExcelDateToJSDate = serial => {
  const dateLable = serial[2].indexOf("date") > -1;
  if (dateLable) {
    serial = serial[3] ? serial[3] : serial[4];
    var utc_days = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;
    var date_info = new Date(utc_value * 1000);

    var fractional_day = serial - Math.floor(serial) + 0.0000001;

    var total_seconds = Math.floor(86400 * fractional_day);

    var seconds = total_seconds % 60;

    total_seconds -= seconds;

    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
    const date = new Date(
      date_info.getFullYear(),
      date_info.getMonth(),
      date_info.getDate(),
      hours,
      minutes,
      seconds
    );

    return date.toDateString();
  } else {
    serial = serial[3] ? serial[3] : serial[4];
    return serial;
  }
};
