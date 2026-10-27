# Correctness and presentation audit · version 3

The audit checked numerical models, the diagrams that display them, and the controls that change them. It does not turn conceptual illustrations into exact research simulations. The assumptions of each lesson are available under **Model & approximations**.

| Issue | Correction |
| --- | --- |
| A static teacher covered part of each apparatus | Removed the character and teacher UI from labs; kept the opening and flower scene |
| Mixed Persian/English layout and combining formula glyphs | English throughout the lab; only the flower message remains Persian; primary equations use native MathML |
| Decorative layers competed with the experiments | Warm paper palette, flat ink diagrams, simpler controls, no glowing laboratory floors |
| Pendulum velocity was drawn horizontally regardless of angle | Tangential velocity now comes from the position derivative; weight and tension arrows satisfy Newton's law and respond to parameters |
| Action path bounds could hide trial-path excursions | The q axis includes the complete permitted trial-path family; endpoint/time constraints are explicit |
| Charge graphics and field samples used different coordinates/scales | Diagram and sampled field share charge positions, test point P, and a single isotropic distance scale; zero-field vectors are handled safely |
| Induction could show a current after a stationary magnet | Actual magnet position animates toward the target; emf uses −N ΔΦ/Δt from those positions and becomes exactly zero at rest |
| The circuit implied a load that V/R did not include | One resistive lamp; R is the whole load. Open switch produces zero current and no moving current markers |
| Piston width was not proportional to the volume | Cell width is linear in V; ideal-gas measurements and the schematic marker geometry now agree |
| Gas marker velocities were uniform 2D samples | Gaussian samples of all three velocity components; theoretical 3D Maxwell speed density is separately labeled |
| Entropy decoration implied a time-based entropy estimate | Occupancy bar measures actual marker counts; ΔSeq is explicitly an initial/final equilibrium difference; Reset is a new preparation |
| Interference screen and wavefront geometry used unrelated spacing | Phase comes from actual path differences at D=4; incident and outgoing wavefronts use the same wavelength and phase |
| A ray of particles could hit the opaque middle of the slit wall | Replaced with incident plane wavefronts illuminating both apertures |
| The well's energy lines did not move as width changed | All five levels are calculated from n²/L² on a fixed energy axis; normalized amplitude and density have separate axes |
| Tunnelling wave had an arbitrary decay and a discontinuity at the far edge | Exact complex stationary barrier solution, including incident/reflected waves, with continuity of value and derivative at both boundaries; no hidden particle trajectories |
| Scattering counts mixed results from old/new barrier parameters | Reset counts when barrier width or energy changes |
| The gravitational beam was an unrelated curved decoration | First-order weak-field ray with the displayed asymptotic deflection; equal x/y scale and an undeflected reference |
| Galaxy angular motion did not use the rotation curve exactly and could jump on parameter changes | Integrate angular phase using v(r)/r from the same model; comparison stars have separate continuous reference phases |
| Cosmic expansion jumped back in time on a loop and could clip its graph | Stop at the end; explicit Replay; fit both model curves; reset to the present for a new density-fraction comparison |
| Preview could produce fractional quantum numbers and stale particle preparations | Quantize all controls to their declared steps; reset the complete apparatus after preview; default to manual Explore mode |

## Scope limits

Point charges are softened at very small separation. Induction uses a normalized illustrative coil flux profile. Gas markers are a projected sample, not a full molecular collision solver. The double slit uses equal amplitudes with a Gaussian envelope, rather than a finite-aperture diffraction integral. Gravity uses a weak-field ray approximation and static Schwarzschild clocks. Galaxy rotation is a toy mass model. Cosmology is flat matter + Lambda without radiation. Frontier sketches are conceptual questions, not confirmed quantum-gravity solutions.
