/**
 * Background — fixed image layer behind all glass panels.
 * The topographic wave texture gives backdrop-filter something
 * to blur into frost. The soft overlay tones the image down
 * so glass cards pop off the surface.
 */
export default function Background() {
  return (
    <div id="bg-canvas" aria-hidden="true">
      {/* Wave texture */}
      <div className="bg__image" />
      {/* Subtle darkening overlay so glass stays readable */}
      <div className="bg__overlay" />
    </div>
  )
}
