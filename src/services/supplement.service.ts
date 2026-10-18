import type { Supplement } from "../types/supplement.type";

export function getSupplements() {
  const supplements: Supplement[] = [
    {
      id: 1,
      name: "ویتامین D3",
      dose_note: "۱ عدد روزانه همراه غذا",
      days_of_week: [0, 1, 2, 3, 4, 5, 6],
      time: "08:00",
    },
    {
      id: 2,
      name: "امگا ۳",
      dose_note: "۲ کپسول بعد از صبحانه",
      days_of_week: [0, 2, 4],
      time: "09:30",
    },
    {
      id: 3,
      name: "منیزیم",
      dose_note: "۴۰۰ میلی‌گرم قبل خواب",
      days_of_week: [0, 1, 2, 3, 4, 5, 6],
      time: "22:00",
    },
    {
      id: 4,
      name: "ویتامین C",
      dose_note: "۱ قرص جوشان در یک لیوان آب",
      days_of_week: [6],
      time: "",
    },
    {
      id: 5,
      name: "زینک",
      dose_note:
        "۱ عدد بعد از ناهار، حداقل ۲ ساعت دور از مصرف آهن یا کلسیم و ترجیحاً همراه یک وعده غذایی کامل",
      days_of_week: [1, 3, 5],
      time: "14:15",
    },
    {
      id: 6,
      name: "آهن",
      dose_note: "",
      days_of_week: [],
      time: "23:59",
    },
  ];

  return supplements;
}
