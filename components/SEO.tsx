"use client";

import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";
import { WEBSITE_NAME, WEBSITE_DESCRIPTION } from "@/utils/constants";

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({
  title = WEBSITE_NAME,
  description = WEBSITE_DESCRIPTION,
}: SEOProps) => {
  const pathname = usePathname();

  const titleTemplate = pathname === "/" ? "%s" : `%s | ${WEBSITE_NAME}`;

  return (
    <NextSeo
      useAppDir
      title={title}
      titleTemplate={titleTemplate}
      description={description}
      additionalMetaTags={[
        {
          name: "viewport",
          content:
            "initial-scale=1, width=device-width, height=device-height, viewport-fit=cover",
        },
      ]}
    />
  );
};

export default SEO;
