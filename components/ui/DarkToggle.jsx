/**
 * DarkToggle — pill toggle switch for light/dark mode.
 * Pure presentational: receives darkMode state and toggle handler via props.
 */
export default function DarkToggle({ darkMode, onToggle }) {
  return (
    <button
      className="theme-btn"
      onClick={onToggle}
      type="button"
      aria-pressed={darkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light mode" : "Dark mode"}
    >
      <span className="theme-knob" aria-hidden="true" />
    </button>
  );
}
