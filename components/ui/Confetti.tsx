"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

// Confetti effect from confettipage.com. The code is licensed for naturalsadft.com only;
// on any other host (e.g. localhost) their script shows a "wrong domain" popup instead.
const CONFETTI_CODE =
  "U2FsdGVkX1/L6GDvPZZIvx3+a6/WvXOo4U+bvEEgApu7jH3QGlKDj290BYM8cfFvvrdBjUbsUtQiAZdSbZ2ARDlr8lVuqJH2qFX0xcWYpr3nGI4zwQnompJC0jgPr7G6nUwSK4Jst+g3F6gycMIPol3UecK/1A5IWdBz78qTA/c//1tbkZQhnms+ovWW8TZFaqgIrjZ+qetMw7/gOPvxjClfVieTWRHLTmZ6foK2Xp6Z2UEI8lCc/1t/V6thpAYDyFJcQUu/MpzGUECspyWHTxCnVEyWFcIJzFRSrOgWv6puMEeMXYZSfyw6wY+yq+ceNrrE3ptkeGOa75mN4al21cYIRJbxfTePUZd9t3Imn0hzZV8UZKugL9gWHsBK0aO2CofY5FEvMfSipoilSKlHmUC9lSMLpdxJd2CV0bHTOdF/Us0cb/JQ6PWwbuvS4k6tfWxQN2nabCtXiLN9mxDCgl7EMmrGj5CnSK3MU8Pnkd5kEoZGqzcF5sR5VeYQzk0ccLY+l38dEF5kPhZRzUeUDYtb9mEkYj9tc+KjrKHwk4JG94XKpq71GEslk4jBiwO4l9Y+k3GHV6ICKPQxk0mGvN+yZWCKaLzc9cKx54vvk5qasNZ1gKhiCF4HA8FZ/rjsISqFicf05ypL+R8TwQZGEYU1izQZlA5UIv0yoARVV+UZSEelw+2+pqvu6P6vBds9BDs+ZZcyq93LmUOZg6xTIG+ONsiSjF3pJdCGMUuImviqPZvDoHGfsHwUrDu0cQkD";

const LICENSED_HOST = "naturalsadft.com";

const subscribe = () => () => {};
// naturalsadft.com and any subdomain (www., dev., …).
const isLicensedHost = () => {
  const host = window.location.hostname;
  return host === LICENSED_HOST || host.endsWith(`.${LICENSED_HOST}`);
};

export default function Confetti() {
  const enabled = useSyncExternalStore(subscribe, isLicensedHost, () => false);
  if (!enabled) return null;

  return (
    <Script
      id="confettipage"
      src="https://run.confettipage.com/here.js"
      data-confetticode={CONFETTI_CODE}
      strategy="afterInteractive"
    />
  );
}