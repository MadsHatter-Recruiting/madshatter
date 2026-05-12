import ResumeReviewTool from "@/components/ResumeReviewTool";

export default function ToolPage() {
  return (
    <main
      id="top"
      className="bg-[radial-gradient(circle_at_0%_-10%,#dbeafe,transparent_36%),radial-gradient(circle_at_96%_2%,#d1fae5,transparent_40%),linear-gradient(to_bottom,#f8fafc,#f8fafc)] min-h-screen pb-20 pt-6 sm:pb-24 sm:pt-8"
    >
      <div className="section-shell max-w-4xl">
        <ResumeReviewTool standalone />
      </div>
    </main>
  );
}
