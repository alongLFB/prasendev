"use client"

import * as React from "react"
import { usePathname, useRouter } from '@/i18n/routing'
import { Button } from "./ui/button"
import { Icons } from "./icons"
import { useParams } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LANGUAGES = [
    {
        code: 'en',
        name: 'English',
        flag: '🇺🇸'
    },
    {
        code: 'zh',
        name: '中文',
        flag: '🇨🇳'
    },
    // 可以添加更多语言
    // {
    //   code: 'fr',
    //   name: 'Français',
    //   flag: '🇫🇷'
    // },
] as const

export const LanguageSwitcher = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>((props, ref) => {
    const params = useParams()
    const locale = params.locale as string
    const router = useRouter()
    const pathname = usePathname()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    ref={ref}
                    variant="ghost"
                    size="icon"
                    className="size-12"
                    {...props}
                >
                    <Icons.language className="size-4" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {LANGUAGES.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => router.push(pathname, { locale: lang.code })}
                        className="flex items-center"
                    >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                        {locale === lang.code && (
                            <Icons.check className="ml-auto h-4 w-4" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
});

LanguageSwitcher.displayName = "LanguageSwitcher";