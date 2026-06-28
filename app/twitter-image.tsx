// Reuse the Open Graph card for Twitter/X previews. Route-segment config must
// be statically analyzable, so it is declared literally here.
import OpengraphImage from "./opengraph-image";

export const runtime = "nodejs";
export const alt = "AceByte Technology — Purpose-built AI for business operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpengraphImage;
