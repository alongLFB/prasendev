import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { PageBackground } from "@/components/page-background";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
        default: "Along Li | iOS Developer",
        template: `%s | Along Li`,
    },
    description: "Along Li is a iOS Developer from China, with expertise in Objective-C and Swift. I create iOS applications and have a passion for clean, efficient code. View my portfolio to see my latest projects",
    keywords: ["Along Li", "iOS Developer", "React Developer", "Next.js Developer", "TypeScript Developer", "Node.js Developer", "Web Developer India", "Software Engineer"],
    authors: [{ name: "Along Li" }],
    creator: "Along Li",
    publisher: "Along Li",
    alternates: {
        canonical: DATA.url,
    },
    openGraph: {
        title: "Along Li | iOS Developer",
        description: "Along Li is a iOS Developer from China, with expertise in Objective-C and Swift. I create iOS applications and have a passion for clean, efficient code. View my portfolio to see my latest projects",
        url: DATA.url,
        siteName: "Along Li - Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `/along ava3.jpg`,
                width: 1200,
                height: 630,
                alt: "Along Li - iOS Developer"
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Along Li | iOS Developer',
        description: 'iOS Developer specializing in Objective-C and Swift.',
        images: [`${DATA.url}/me.png`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            {
                url: "/favicons/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                url: "/favicons/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
        shortcut: ["/favicons/web-app-manifest-192x192.png"],
        apple: [
            {
                url: "/favicons/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png"
            }
        ],
        other: [
            {
                rel: "apple-touch-icon",
                url: "/favicons/web-app-manifest-192x192.png",
            }
        ],
    },
    manifest: "/favicons/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "Along Li",
    },
    other: {
        "msapplication-TileColor": "#ffffff",
        "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
        "msapplication-config": "/favicons/browserconfig.xml",
        "theme-color": "#ffffff",
    },
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        messages = (await import(`../../../messages/en.json`)).default;
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn("relative min-h-screen font-sans antialiased", fontSans.variable)}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <div className="fixed inset-0 z-[-1]">
                        <PageBackground />
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
                        <GoogleAnalytics gaId="G-9K1SY0ENH1" />
                        <ScrollProgress />
                        <ThemeProvider attribute="class" defaultTheme="system">
                            <TooltipProvider delayDuration={0}>
                                {children}
                                <Analytics />
                                <Navbar />
                            </TooltipProvider>
                        </ThemeProvider>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
