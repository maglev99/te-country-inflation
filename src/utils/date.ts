// formats date in the form "YYYY-MM-DD"
function formatDate(date: Date): string {
  return date.toISOString().split("T")[0] || "";
}

export function getLastDayOfPreviousMonth() {
  // Get the last day of the previous month
  const currentDate = new Date();
  const lastDayOfPreviousMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  );

  const formattedLastDayOfPreviousMonth = formatDate(lastDayOfPreviousMonth);

  return formattedLastDayOfPreviousMonth;
}

export function getFirstDayOfSixMonthsAgo() {
  // Get the first day of 6 months ago
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const firstDayOfSixMonthsAgo = new Date(
    sixMonthsAgo.getFullYear(),
    sixMonthsAgo.getMonth(),
    1
  );

  const formattedFirstDayOfSixMonthsAgo = formatDate(firstDayOfSixMonthsAgo);

  return formattedFirstDayOfSixMonthsAgo;
}

// format date in the form "Jan 2023"
export function formatDateToMonthAndYear(dateString: string) {
  const dateParts = dateString.split("-");

  const year = parseInt(dateParts[0] || "");
  const month = parseInt(dateParts[1] || "") - 1;
  const day = parseInt(dateParts[2] || "");

  const date = new Date(year, month, day);

  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);

  return formattedDate;
}

// get month such as "Jan"
export function getMonthAbbreviation(dateString: string) {
  const date = new Date(dateString);
  const monthAbbreviation = date.toLocaleString("en", { month: "short" });

  return monthAbbreviation;
}
