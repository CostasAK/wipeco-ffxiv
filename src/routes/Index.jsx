import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ical from "ical";
import { cn } from "../utils/cn";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Index = () => {
  const ics = useQuery({
    queryKey: ["ics"],
    queryFn: () =>
      axios.get(
        "https://corsproxy.io/?https://calendar.google.com/calendar/ical/6ntdjk0c0pse2c1f1nuk8q813o%40group.calendar.google.com/public/basic.ics",
      ),
  });

  const nextRaid =
    !ics?.isLoading &&
    Object.values(ical.parseICS(ics?.data?.data))
      .filter(
        (val) =>
          val.type === "VEVENT" && new Date(val.start).getTime() > Date.now(),
      )
      .toSorted(
        (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
      )[0];

  const nextRaidString = `${
    nextRaid?.summary
  } is on the ${nextRaid?.start?.getDate()} of ${
    months[nextRaid?.start?.getMonth()]
  } at ${nextRaid?.start?.toLocaleTimeString("en-GB")}\n${
    nextRaid?.description
  }`;

  return ics?.isLoading ? (
    <>Under Construction...</>
  ) : (
    <div className={cn("flex", "flex-col")}>
      {nextRaidString.split("\n").map((line, index) => (
        <div key={index}>{line.length === 0 ? " " : line}</div>
      ))}
    </div>
  );
};
