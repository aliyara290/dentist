import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="سمايلي هي عيادة أسنان متخصصة في تحقيق الابتسامات الجميلة وتوفير خدمات طب الأسنان عالية الجودة. زورونا اليوم للحصول على أسنان صحية وجميلة."
        />
        <link type="image/x-icon" rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#0080F7"></meta>

        <meta
          property="og:title"
          content="سمايلي - عيادة الأسنان المتخصصة في الابتسامة الجميلة"
        />
        <meta
          property="og:description"
          content="سمايلي هي عيادة أسنان متخصصة في تحقيق الابتسامات الجميلة وتوفير خدمات طب الأسنان عالية الجودة. زورونا اليوم للحصول على أسنان صحية وجميلة."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="تعيين رابط صورة العيادة هنا" />
        <meta property="og:url" content="تعيين رابط الموقع هنا" />
        <meta
          name="twitter:title"
          content="سمايلي - عيادة الأسنان المتخصصة في الابتسامة الجميلة"
        />
        <meta
          name="twitter:description"
          content="سمايلي هي عيادة أسنان متخصصة في تحقيق الابتسامات الجميلة وتوفير خدمات طب الأسنان عالية الجودة. زورونا اليوم للحصول على أسنان صحية وجميلة."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="تعيين رابط صورة العيادة هنا" />
        <title>سمايلي - عيادة الأسنان المتخصصة في الابتسامة الجميلة</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
