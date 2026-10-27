# Scientific models

Each apparatus links controls, calculations, and its drawing. Relative-unit models and deliberate approximations are identified in the interface.

- **Pendulum:** nonlinear angular dynamics, full kinetic/potential energy, analytic Cartesian velocity and force vectors. The labeled T₀ is the small-angle period. Parameter changes can add/remove energy.
- **Action:** q(t)=t+a sin(pi t), t in [0,1], fixed endpoints 0 and 1, unit mass and zero potential. S(a)=1/2+pi²a²/4. It is a minimum in this example; the general principle is stationary action.
- **Hamiltonian:** analytic harmonic oscillator with q=A cos(sqrt(k/m)t), p=m qdot, and H=p²/(2m)+kq²/2. Graph and moving mass use those same values.
- **Electrostatics:** softened 3D point-charge superposition in a planar slice, with k_e=1. Charges and test point P have shared model coordinates; one drawing scale is used for x and y.
- **Induction:** normalized flux Phi(x)=(1+4x²)^(-3/2). The meter calculates -N[Phi(x_next)-Phi(x_old)]/dt from the animated magnet. Coil-turn changes select a new coil; there is no fake lingering emf at rest.
- **Circuit:** ideal DC resistive lamp, with R as total load resistance; I=V/R and P=VI for a closed circuit, I=0 for an open switch. Dots indicate conventional current direction, not electron drift speed.
- **Gas:** PV=NkBT, N=10^23 molecules; molecular mass 4.65e-26 kg. A small marker set projects samples of three independent Gaussian velocity components. The histogram uses the analytic three-dimensional Maxwell speed density. The volume control is a thermostated change of cell width.
- **Entropy:** insulated ideal-gas free expansion into an equal empty volume. ΔS_eq=NkB ln 2 is the equilibrium initial-to-final difference. A changing right-side marker fraction is not an instantaneous entropy estimate. Reset is a new initial preparation.
- **Engine:** reversible ideal-gas Carnot cycle, gamma=5/3 and nR=1. The isotherms and adiabats join; integrated loop work agrees with (Th-Tc)ln(1.8). Q>0 enters the gas and W>0 is work by the gas.
- **Two paths:** Gaussian envelope times the coherent sum of two equal path amplitudes, with phase 2pi(r1-r2)/lambda at screen distance D=4. Full path information removes the cross term. Incident/outgoing wavefronts share lambda and phase. Recorded positions follow the displayed intensity distribution. This is not a full aperture diffraction solver.
- **Well:** normalized infinite-well eigenstates and their stationary phases. Length is measured in L0 and energy in E*=pi²hbar²/(2mL0²). Phase time tau=E*t/hbar is shown five times slower. The energy plot uses a fixed axis as width changes.
- **Barrier:** exact stationary rectangular-barrier solution for E<V0, hbar=1, 2m=1, V0=2. Value and derivative match at x=0 and x=a; the wave satisfies the stationary Schrodinger equation and R+T=1. Counts depict scattering outcomes, not classical paths within the barrier.
- **Light bending:** first-order weak-field ray y(x)=b-(rs/b)[x+sqrt(x²+b²)] and asymptotic alpha≈2rs/b. A flat x-y diagram has equal scales; it is not a spacetime rubber sheet.
- **Clocks:** static Schwarzschild dτ/dt=sqrt(1-rs/r), with reference at infinity. Local proper time is integrated, including its history if radius changes.
- **Galaxy:** a toy visible core plus extended halo, not observational data. Orbital phases integrate v/r from the plotted curve, with a common visual time scale of 0.35 model units per display second. Halo identity remains unknown.
- **Expansion:** analytic flat matter + cosmological constant, H0=1, no radiation, a=1 at the present. The trajectory satisfies both Friedmann and acceleration equations. Playback ends rather than rewinding. Parameter changes start a new comparison.
- **Frontiers:** conceptual scale and question maps only. Neither a Planck-scale texture nor a solved quantum-gravity mechanism is asserted.

## Sources

- [Cambridge, David Tong: Hamiltonian mechanics and stationary action](https://www.damtp.cam.ac.uk/user/tong/dynamics/dynhtml/S4.html).
- [OpenStax: Faraday's law](https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law).
- [OpenStax: Particle in a box](https://openstax.org/books/university-physics-volume-3/pages/7-4-the-quantum-particle-in-a-box).
- [OpenStax: Quantum tunnelling](https://openstax.org/books/university-physics-volume-3/pages/7-6-the-quantum-tunneling-of-particles-through-potential-barriers).
- [OpenStax: Molecular kinetic theory summary](https://openstax.org/books/university-physics-volume-2/pages/2-summary).
- [OpenStax: Thermodynamics and Carnot cycle summary](https://openstax.org/books/university-physics-volume-2/pages/4-summary).
- [Stanford Gravity Probe B: Gravitational time dilation](https://einstein.stanford.edu/content/relativity/q993.html).
- [NASA LAMBDA: Dark matter and gravitational evidence](https://lambda.gsfc.nasa.gov/resources/graphic_history/cdmdensity.html).
- [NASA: Dark energy](https://science.nasa.gov/dark-energy/).
- [Max Planck Institute: Quantum gravity and unified theories](https://www.aei.mpg.de/26038/quantum-gravity-and-unified-theories).
