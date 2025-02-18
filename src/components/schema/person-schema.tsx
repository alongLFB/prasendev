import { DATA } from "@/data/resume";

export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Along Li",
          alternateName: ["Along", "alongLFB"],
          description: DATA.description,
          image: ``,
          url: DATA.url,
          sameAs: [
            DATA.contact.social.GitHub.url,
            DATA.contact.social.LinkedIn.url,
            DATA.contact.social.X.url,
          ],
          jobTitle: "Software Developer",
          worksFor: {
            "@type": "Organization",
            name: "Space42"
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Xi'an University of Science and Technology"
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Abu Dhabi",
            addressCountry: "UAE"
          },
          email: DATA.contact.email,
          telephone: DATA.contact.tel,
          knowsAbout: DATA.skills
        })
      }}
    />
  );
}
