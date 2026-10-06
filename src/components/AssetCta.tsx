import { DOMAIN_SALE_URL, SITE_NAME } from "@/lib/config";
import { SmartLink } from "./SmartLink";

/** Subtle end-of-page note for prospective domain buyers. */
export function AssetCta({ category }: { category: string }) {
  return (
    <p className="asset-cta">
      Building in {category}? {SITE_NAME} is available for acquisition.{" "}
      <SmartLink href={DOMAIN_SALE_URL}>View domain details</SmartLink>.
    </p>
  );
}
