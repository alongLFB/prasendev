import { useTranslations } from 'next-intl';
import Link from 'next/link'

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <h2 className="text-2xl font-bold">{t('title')}</h2>
      <p className="text-muted-foreground">{t('message')}</p>
      <Link
        href="/"
        className="underline underline-offset-4 hover:text-primary"
      >
        {t('returnHome')}
      </Link>
    </div>
  )
}