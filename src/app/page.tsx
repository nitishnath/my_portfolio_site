import Profile from "@/components/sections/Profile";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nitish Kumar Nath",
    jobTitle: "Software Engineer",
    url: "https://example.com",
    sameAs: ["https://github.com/", "https://www.linkedin.com/"]
  };
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Profile />
    </main>
  );
}
