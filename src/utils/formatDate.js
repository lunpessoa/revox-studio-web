const formatDateHour = (date) => {
  if (!date) return "";
  const data = new Date(date);
  return (
    ("0" + data.getDate()).slice(-2) +
    "/" +
    ("0" + (data.getMonth() + 1)).slice(-2) +
    "/" +
    data.getFullYear() +
    " " +
    ("0" + data.getHours()).slice(-2) +
    ":" +
    ("0" + data.getMinutes()).slice(-2) +
    ":" +
    ("0" + data.getSeconds()).slice(-2)
  );
};

const formatHour = (date) => {
  if (!date) return "";
  const data = new Date(date);
  return (
    ("0" + data.getHours()).slice(-2) +
    ":" +
    ("0" + data.getMinutes()).slice(-2) +
    ":" +
    ("0" + data.getSeconds()).slice(-2)
  );
};

const formatDate = (date) => {
    if (!date) return "";
    const data = new Date(date);
    return (
      ("0" + data.getDate()).slice(-2) +
      "/" +
      ("0" + (data.getMonth() + 1)).slice(-2) +
      "/" +
      data.getFullYear()
    );
}

const formatDateISO = (date) => {
    if (!date) return "";
    const data = new Date(date);
    let iso = data.getFullYear().toString() + "-";
        iso += (data.getMonth() + 1).toString().padStart(2, '0') + "-";
        iso += data.getDate().toString().padStart(2, '0') + "T";
        iso += data.getHours().toString().padStart(2, '0') + ":";
        iso += data.getMinutes().toString().padStart(2, '0') + ":";
        iso += data.getSeconds().toString().padStart(2, '0');
    return iso
};

export { formatDateHour, formatDate, formatHour, formatDateISO };

