import React from "react";
import ReactCountryFlag from "react-country-flag";

import "../../styles/tailwind.css";

const ScrollingCountries = ({ t }: any) => {
  const countries = [
    { code: "IQ", name: t("countries.iraq") },
    { code: "SA", name: t("countries.saudiArabia") },
    { code: "AE", name: t("countries.uae") },
    { code: "QA", name: t("countries.qatar") },
    { code: "OM", name: t("countries.oman") },
    { code: "MY", name: t("countries.malaysia") },
    { code: "SG", name: t("countries.singapore") },
    { code: "JO", name: t("countries.jordan") },
  ];

  return (
    <div className="relative overflow-hidden w-full py-6">
      {/* scrolling container */}
      <div className="flex gap-8 animate-scroll">
        {/* first set */}
        <div className="flex gap-8 shrink-0">
          {countries.map((c) => (
            <div
              key={c.code}
              className="flex flex-col items-center gap-3 min-w-[120px]"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-medium">
                <ReactCountryFlag
                  countryCode={c.code}
                  svg
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <span className="font-semibold text-sm">{c.name}</span>
            </div>
          ))}
        </div>

        {/* duplicate set for seamless loop */}
        <div className="flex gap-8 shrink-0">
          {countries.map((c) => (
            <div
              key={`${c.code}-duplicate`}
              className="flex flex-col items-center gap-3 min-w-[120px]"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-medium">
                <ReactCountryFlag
                  countryCode={c.code}
                  svg
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <span className="font-semibold text-sm">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCountries;
