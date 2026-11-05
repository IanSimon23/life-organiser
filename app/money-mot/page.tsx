import { readFileSync } from "fs";
import { join } from "path";
import GuideLayout from "@/components/GuideLayout";

export default function MoneyMOT() {
  const content = readFileSync(
    join(process.cwd(), "money-mot.md"),
    "utf-8"
  );

  return <GuideLayout content={content} />;
}
