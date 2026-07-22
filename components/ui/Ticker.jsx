import { TICKER_ITEMS } from "@/data/misc";

/**
 * Ticker — scrolling marquee strip above the navbar.
 * Reads TICKER_ITEMS from data; accepts no props.
 */
export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker" role="marquee" aria-label="Highlights">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
