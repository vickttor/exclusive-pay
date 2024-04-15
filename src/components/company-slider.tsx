import meta from "@/assets/integrations/meta.png";
import shopify from "@/assets/integrations/shopify.png";
import googleAds from "@/assets/integrations/googleAds.png";
import taboola from "@/assets/integrations/taboola.png";
import tiktok from "@/assets/integrations/tiktok.png";
import kwai from "@/assets/integrations/kwai.png";

import { InfiniteMovingCards } from "@/components/acertenity/infinite-moving-cards";

export function CompaniesSlider() {
  return (
    <div className="w-full border border-[#808080]/20">
      <InfiniteMovingCards
        direction="right"
        speed="fast"
        pauseOnHover={false}
        items={[meta, shopify, googleAds, taboola, tiktok, kwai]}
      />
    </div>
  );
}
