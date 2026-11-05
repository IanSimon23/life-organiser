import { readFileSync } from "fs";
import { join } from "path";
import GuideLayout from "@/components/GuideLayout";

export default function SetupGuide() {
  const content = readFileSync(
    join(process.cwd(), "life-organiser-setup-guide.md"),
    "utf-8"
  );

  return <GuideLayout content={content} />;
}
