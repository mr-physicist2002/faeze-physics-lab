export const STATIONS = [
  {
    "id": "mechanics",
    "icon": "◎",
    "name": "Classical mechanics",
    "color": "#b86b4b",
    "subtitle": "MOTION → ACTION → PHASE SPACE",
    "acts": [
      {
        "id": "pendulum",
        "name": "The dance of energy",
        "hint": "Change length, then mass. Compare the period and the energy bars.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>K</mi><mo>+</mo><mi>U</mi><mo>=</mo><mi>E</mi></mrow></math>",
        "secondary": "K = ½mℓ²ω² · U = mgℓ(1 − cos θ)<br>θ̈ + (g/ℓ) sin θ = 0 · T₀ = 2π√(ℓ/g)",
        "model": "Frictionless pendulum. T₀ is the small-angle period; energy uses the full nonlinear model. Changing a parameter can do work on the system.",
        "controls": [
          {
            "key": "length",
            "symbol": "ℓ",
            "label": "String length",
            "min": 0.6,
            "max": 2.8,
            "value": 1.5,
            "step": 0.05,
            "unit": "m",
            "color": "mint"
          },
          {
            "key": "mass",
            "symbol": "m",
            "label": "Mass",
            "min": 0.5,
            "max": 3,
            "value": 1,
            "step": 0.1,
            "unit": "kg",
            "color": "rose"
          },
          {
            "key": "gravity",
            "symbol": "g",
            "label": "Gravity",
            "min": 1.6,
            "max": 15,
            "value": 9.8,
            "step": 0.1,
            "unit": "m/s²",
            "color": "gold"
          }
        ],
        "tasks": [
          {
            "label": "Longer string → longer period",
            "key": "length",
            "min": 2.4
          },
          {
            "label": "More mass → more energy",
            "key": "mass",
            "min": 2.5
          }
        ],
        "action": "Release again",
        "actionFlag": "released",
        "short": "Pendulum"
      },
      {
        "id": "action",
        "name": "Nature’s quiet choice",
        "hint": "Bend the trial path. Return it to a straight line.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>S</mi><mo>=</mo><mo>∫</mo><mi>L</mi><mi>dt</mi><mo>,</mo><mi>L</mi><mo>=</mo><mi>K</mi><mo>−</mo><mi>U</mi></mrow></math>",
        "secondary": "δS = 0 · d/dt(∂L/∂q̇) − ∂L/∂q = 0<br>q(t) = t + a sin(πt) · S(a) = ½ + π²a²/4",
        "model": "Free particle, m = 1; t runs from 0 to 1 with q(0) = 0, q(1) = 1. This example has a minimum; stationary action is not always a minimum.",
        "controls": [
          {
            "key": "bend",
            "symbol": "a",
            "label": "Path bend",
            "min": -0.7,
            "max": 0.7,
            "value": 0.45,
            "step": 0.01,
            "unit": "",
            "color": "rose"
          }
        ],
        "tasks": [
          {
            "label": "Try a curved path",
            "key": "bend",
            "min": 0.6
          },
          {
            "label": "Return to a = 0",
            "flag": "stationary"
          }
        ],
        "action": "Find stationary path",
        "actionFlag": "stationary",
        "short": "Stationary action"
      },
      {
        "id": "hamilton",
        "name": "One motion. Two coordinates.",
        "hint": "Change the spring and mass. Follow the same motion in q and p.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mrow><msup><mrow><mi>p</mi></mrow><mrow><mn>2</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>k</mi><msup><mrow><mi>q</mi></mrow><mrow><mn>2</mn></mrow></msup></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math>",
        "secondary": "q̇ = ∂H/∂p = p/m<br>ṗ = −∂H/∂q = −kq",
        "model": "Ideal harmonic oscillator. Analytic position, momentum and energy, in SI units. Parameter changes select a new orbit.",
        "controls": [
          {
            "key": "mass",
            "symbol": "m",
            "label": "Mass",
            "min": 0.5,
            "max": 3,
            "value": 1,
            "step": 0.1,
            "unit": "kg",
            "color": "mint"
          },
          {
            "key": "stiffness",
            "symbol": "k",
            "label": "Spring stiffness",
            "min": 1,
            "max": 9,
            "value": 4,
            "step": 0.1,
            "unit": "N/m",
            "color": "rose"
          },
          {
            "key": "amplitude",
            "symbol": "A",
            "label": "Amplitude",
            "min": 0.4,
            "max": 1.5,
            "value": 1,
            "step": 0.05,
            "unit": "m",
            "color": "gold"
          }
        ],
        "tasks": [
          {
            "label": "Increase stiffness",
            "key": "stiffness",
            "min": 8
          },
          {
            "label": "Increase amplitude",
            "key": "amplitude",
            "min": 1.4
          }
        ],
        "action": "Restart motion",
        "short": "Phase space"
      }
    ]
  },
  {
    "id": "electromagnetism",
    "icon": "ϟ",
    "name": "Electricity & magnetism",
    "color": "#537868",
    "subtitle": "FIELDS → INDUCTION → CIRCUITS",
    "acts": [
      {
        "id": "field",
        "name": "Make the invisible visible",
        "hint": "Move the second charge. Reverse its sign. Follow the arrows.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>E</mi><mo>=</mo><mo>Σ</mo><mfrac><mrow><msub><mi>k</mi><mi>e</mi></msub><msub><mi>q</mi><mi>i</mi></msub></mrow><mrow><msup><mrow><msub><mi>r</mi><mi>i</mi></msub></mrow><mrow><mn>2</mn></mrow></msup></mrow></mfrac><msub><mi>r̂</mi><mi>i</mi></msub></mrow></math>",
        "secondary": "F = q₀E · kₑ = 1/(4πε₀)<br>Arrows point in the force direction for a positive test charge.",
        "model": "A planar slice through a 3D point-charge field; distances use one isotropic scale. kₑ = 1 in relative units. Fields are softened very close to each charge.",
        "controls": [
          {
            "key": "charge",
            "symbol": "q",
            "label": "Second charge",
            "min": -2,
            "max": 2,
            "value": -1,
            "step": 0.1,
            "unit": "relative",
            "color": "rose"
          },
          {
            "key": "position",
            "symbol": "x",
            "label": "Charge position",
            "min": 0.3,
            "max": 0.8,
            "value": 0.58,
            "step": 0.01,
            "unit": "",
            "color": "mint"
          }
        ],
        "tasks": [
          {
            "label": "Use two positive charges",
            "key": "charge",
            "min": 1.5
          },
          {
            "label": "Separate the charges",
            "key": "position",
            "min": 0.75
          }
        ],
        "action": "Reverse charge",
        "actionFlag": "polarity",
        "short": "Electric field"
      },
      {
        "id": "induction",
        "name": "Motion becomes electricity",
        "hint": "Move the magnet through the coil. Let it stop. Reverse direction.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi>dΦ</mi></mrow><mrow><mi>dt</mi></mrow></mfrac></mrow></math>",
        "secondary": "Φ = ∫ B · dA<br>Stationary magnet → constant flux → zero emf.",
        "model": "Normalized coil flux Φ(x) = (1 + 4x²)⁻³ᐟ². The meter uses −N ΔΦ/Δt from the actual animated position. N is fixed during each flux difference.",
        "controls": [
          {
            "key": "magnet",
            "symbol": "x",
            "label": "Magnet target",
            "min": -1.5,
            "max": 1.5,
            "value": -1,
            "step": 0.02,
            "unit": "",
            "color": "rose"
          },
          {
            "key": "turns",
            "symbol": "N",
            "label": "Coil turns",
            "min": 1,
            "max": 8,
            "value": 3,
            "step": 1,
            "unit": "",
            "color": "gold"
          }
        ],
        "tasks": [
          {
            "label": "Move to the right",
            "key": "magnet",
            "min": 1.2
          },
          {
            "label": "Move to the left",
            "key": "magnet",
            "max": -1.2
          }
        ],
        "action": "Move magnet",
        "actionFlag": "sweep",
        "short": "Induction"
      },
      {
        "id": "circuit",
        "name": "A tiny light, a complete circuit",
        "hint": "Close the switch. Change voltage and total resistance.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>V</mi></mrow><mrow><mi>R</mi></mrow></mfrac></mrow></math>",
        "secondary": "Closed switch: P = VI = V²/R<br>R is the total resistance of the resistive lamp.",
        "model": "Ideal DC resistive lamp: R is the whole load, including the lamp. Moving dots indicate conventional current direction, not electron speed.",
        "controls": [
          {
            "key": "voltage",
            "symbol": "V",
            "label": "Voltage",
            "min": 1,
            "max": 12,
            "value": 6,
            "step": 0.5,
            "unit": "V",
            "color": "gold"
          },
          {
            "key": "resistance",
            "symbol": "R",
            "label": "Total resistance",
            "min": 20,
            "max": 200,
            "value": 80,
            "step": 5,
            "unit": "Ω",
            "color": "rose"
          }
        ],
        "tasks": [
          {
            "label": "Close the circuit",
            "flag": "closed"
          },
          {
            "label": "Increase resistance",
            "key": "resistance",
            "min": 180
          }
        ],
        "action": "Toggle switch",
        "actionFlag": "closed",
        "short": "Simple circuit"
      }
    ]
  },
  {
    "id": "thermal",
    "icon": "♨",
    "name": "Heat & statistics",
    "color": "#a47735",
    "subtitle": "PARTICLES → ENTROPY → WORK",
    "acts": [
      {
        "id": "gas",
        "name": "Temperature has a secret life",
        "hint": "Heat the gas. Reduce the volume. Watch pressure and speed.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>P</mi><mi>V</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>",
        "secondary": "½m⟨v²⟩ = 3kBT/2<br>vᵣₘₛ = √(3kBT/m)",
        "model": "Thermostated ideal gas. Cell width is proportional to volume. Markers project a 3D Maxwell velocity sample; N = 10²³ molecules. Histogram: theoretical 3D speed distribution.",
        "controls": [
          {
            "key": "temperature",
            "symbol": "T",
            "label": "Temperature",
            "min": 100,
            "max": 700,
            "value": 300,
            "step": 10,
            "unit": "K",
            "color": "rose"
          },
          {
            "key": "volume",
            "symbol": "V",
            "label": "Volume",
            "min": 0.4,
            "max": 1.5,
            "value": 1,
            "step": 0.05,
            "unit": "m³",
            "color": "mint"
          }
        ],
        "tasks": [
          {
            "label": "Raise the temperature",
            "key": "temperature",
            "min": 600
          },
          {
            "label": "Reduce the volume",
            "key": "volume",
            "max": 0.55
          }
        ],
        "action": "Restart markers",
        "short": "Ideal gas"
      },
      {
        "id": "entropy",
        "name": "A thousand ways to be possible",
        "hint": "Remove the partition. Watch the markers fill both halves.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>ln</mi><mi>Ω</mi></mrow></math>",
        "secondary": "ΔSeq = NkB ln(Vf/Vi)<br>Free expansion: Vf = 2Vi, ΔSeq/NkB = ln 2",
        "model": "Insulated ideal-gas free expansion into an equal empty volume. ΔSeq is the initial-to-final equilibrium entropy difference, not an instantaneous entropy estimate. Reset prepares a new initial state.",
        "controls": [
          {
            "key": "particles",
            "symbol": "N",
            "label": "Visible markers",
            "min": 30,
            "max": 100,
            "value": 60,
            "step": 5,
            "unit": "",
            "color": "gold"
          }
        ],
        "tasks": [
          {
            "label": "Open the partition",
            "flag": "opened"
          },
          {
            "label": "Observe spreading",
            "flag": "mixed"
          }
        ],
        "action": "Remove partition",
        "actionFlag": "opened",
        "short": "Free expansion"
      },
      {
        "id": "engine",
        "name": "A loop that makes things move",
        "hint": "Change the reservoir temperatures. The enclosed area is work.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>η</mi><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mi>c</mi></msub></mrow><mrow><msub><mi>T</mi><mi>h</mi></msub></mrow></mfrac></mrow></math>",
        "secondary": "W = ∮ P dV · ΔU = Q − W<br>W/nR = (Th − Tc) ln(1.8)",
        "model": "Reversible ideal-gas Carnot cycle; γ = 5/3, nR = 1. Heat into the gas is positive; work by the gas is positive. Isotherms and adiabats join continuously.",
        "controls": [
          {
            "key": "hot",
            "symbol": "Th",
            "label": "Hot reservoir",
            "min": 450,
            "max": 900,
            "value": 600,
            "step": 10,
            "unit": "K",
            "color": "rose"
          },
          {
            "key": "cold",
            "symbol": "Tc",
            "label": "Cold reservoir",
            "min": 100,
            "max": 400,
            "value": 300,
            "step": 10,
            "unit": "K",
            "color": "mint"
          }
        ],
        "tasks": [
          {
            "label": "Raise hot temperature",
            "key": "hot",
            "min": 800
          },
          {
            "label": "Lower cold temperature",
            "key": "cold",
            "max": 150
          }
        ],
        "action": "Restart cycle",
        "short": "Carnot cycle"
      }
    ]
  },
  {
    "id": "quantum",
    "icon": "ψ",
    "name": "Quantum physics",
    "color": "#70638b",
    "subtitle": "INTERFERENCE → QUANTIZATION → TUNNELLING",
    "acts": [
      {
        "id": "slit",
        "name": "One dot. A thousand possibilities.",
        "hint": "Build a pattern from detections. Then turn on the path detector.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>P(y)</mi><mo>∝</mo><msup><mrow><mo>|</mo><msub><mi>ψ</mi><mi>1</mi></msub><mo>+</mo><msub><mi>ψ</mi><mi>2</mi></msub><mo>|</mo></mrow><mrow><mn>2</mn></mrow></msup></mrow></math>",
        "secondary": "Δφ = 2π(r₁ − r₂)/λ · D = 4<br>With path detection: P ∝ |ψ₁|² + |ψ₂|²",
        "model": "Equal-amplitude two-path model with Gaussian envelope g(y). Phase uses the actual path difference at screen distance D = 4. Full which-path information removes the cross term. Not a finite-aperture diffraction solver.",
        "controls": [
          {
            "key": "wavelength",
            "symbol": "λ",
            "label": "Wavelength",
            "min": 0.12,
            "max": 0.4,
            "value": 0.22,
            "step": 0.01,
            "unit": "relative",
            "color": "mint"
          },
          {
            "key": "separation",
            "symbol": "d",
            "label": "Slit separation",
            "min": 0.5,
            "max": 1.5,
            "value": 1,
            "step": 0.05,
            "unit": "relative",
            "color": "rose"
          }
        ],
        "tasks": [
          {
            "label": "Observe coherent fringes",
            "flag": "dots"
          },
          {
            "label": "Observe with the detector",
            "flag": "observed"
          }
        ],
        "action": "Toggle path detector",
        "actionFlag": "detector",
        "short": "Two paths"
      },
      {
        "id": "well",
        "name": "Nature doesn’t accept every note",
        "hint": "Raise n. Narrow the box. Compare energy and probability density.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mrow><mi>n</mi></mrow><mrow><mn>2</mn></mrow></msup><msup><mrow><mi>π</mi></mrow><mrow><mn>2</mn></mrow></msup><msup><mrow><mi>ℏ</mi></mrow><mrow><mn>2</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mrow><mi>L</mi></mrow><mrow><mn>2</mn></mrow></msup></mrow></mfrac></mrow></math>",
        "secondary": "ψn = √(2/L) sin(nπx/L)<br>Ψn = ψn exp[−i(Eₙ/E*)τ] · |Ψn|² is constant",
        "model": "Infinite 1D well. L is in units L₀ and E in E* = π²ℏ²/(2mL₀²). The normalized wave phase uses τ = E*t/ℏ, displayed 5× slower. Energy axis is fixed across widths.",
        "controls": [
          {
            "key": "n",
            "symbol": "n",
            "label": "Quantum number",
            "min": 1,
            "max": 5,
            "value": 1,
            "step": 1,
            "unit": "",
            "color": "gold"
          },
          {
            "key": "width",
            "symbol": "L/L₀",
            "label": "Well width",
            "min": 0.6,
            "max": 1.4,
            "value": 1,
            "step": 0.05,
            "unit": "",
            "color": "mint"
          }
        ],
        "tasks": [
          {
            "label": "Select an excited state",
            "key": "n",
            "min": 4
          },
          {
            "label": "Narrow the well",
            "key": "width",
            "max": 0.7
          }
        ],
        "action": "Ground state",
        "short": "Particle in a box"
      },
      {
        "id": "tunnel",
        "name": "A wall is not the whole story",
        "hint": "Widen the barrier, then narrow it. Compare transmission.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>T</mi><mo>=</mo><msup><mrow><mo>[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><msup><mrow><msub><mi>V</mi><mi>0</mi></msub></mrow><mrow><mn>2</mn></mrow></msup><msup><mrow><mi>sinh</mi></mrow><mrow><mn>2</mn></mrow></msup><mo>(</mo><mi>κa</mi><mo>)</mo></mrow><mrow><mn>4</mn><mi>E</mi><mo>(</mo><msub><mi>V</mi><mi>0</mi></msub><mo>−</mo><mi>E</mi><mo>)</mo></mrow></mfrac><mo>]</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>",
        "secondary": "κ = √(2m(V₀ − E))/ℏ<br>V₀ = 2 · E &lt; V₀ · R + T = 1",
        "model": "Exact stationary rectangular barrier, E < V₀, with ℏ = 1 and 2m = 1. The plotted complex wave and its derivative match at both boundaries. Counts are scattering outcomes, not hidden particle paths. Wave phase uses 0.35 model time units per display second.",
        "controls": [
          {
            "key": "barrierWidth",
            "symbol": "a",
            "label": "Barrier width",
            "min": 0.2,
            "max": 2.5,
            "value": 1,
            "step": 0.05,
            "unit": "relative",
            "color": "rose"
          },
          {
            "key": "energy",
            "symbol": "E",
            "label": "Particle energy",
            "min": 0.2,
            "max": 1.8,
            "value": 1,
            "step": 0.05,
            "unit": "V₀ = 2",
            "color": "gold"
          }
        ],
        "tasks": [
          {
            "label": "Widen the barrier",
            "key": "barrierWidth",
            "min": 2.2
          },
          {
            "label": "Narrow the barrier",
            "key": "barrierWidth",
            "max": 0.35
          }
        ],
        "action": "Reset counts",
        "short": "Tunnelling"
      }
    ]
  },
  {
    "id": "relativity",
    "icon": "◉",
    "name": "General relativity",
    "color": "#58728b",
    "subtitle": "CURVATURE → LIGHT → PROPER TIME",
    "acts": [
      {
        "id": "curvature",
        "name": "Light follows the geometry",
        "hint": "Increase mass. Move the incoming ray closer.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>α</mi><mo>≈</mo><mfrac><mrow><mn>4</mn><mi>G</mi><mi>M</mi></mrow><mrow><mi>b</mi><msup><mrow><mi>c</mi></mrow><mrow><mn>2</mn></mrow></msup></mrow></mfrac></mrow></math>",
        "secondary": "rs = 2GM/c² · α ≈ 2rs/b<br>Gμν + Λgμν = (8πG/c⁴)Tμν",
        "model": "First-order weak-field GR ray: y(x) = b − (rs/b)[x + √(x²+b²)]. Its asymptotic bend is α ≈ 2rs/b. Equal x/y scales; no rubber-sheet surface is implied.",
        "controls": [
          {
            "key": "mass",
            "symbol": "M",
            "label": "Mass",
            "min": 0.1,
            "max": 1,
            "value": 0.5,
            "step": 0.05,
            "unit": "relative",
            "color": "gold"
          },
          {
            "key": "impact",
            "symbol": "b",
            "label": "Impact distance",
            "min": 3,
            "max": 7,
            "value": 5,
            "step": 0.1,
            "unit": "relative",
            "color": "mint"
          }
        ],
        "tasks": [
          {
            "label": "Increase mass",
            "key": "mass",
            "min": 0.9
          },
          {
            "label": "Reduce impact distance",
            "key": "impact",
            "max": 3.3
          }
        ],
        "action": "Send light again",
        "short": "Bending light"
      },
      {
        "id": "clocks",
        "name": "Even time has a landscape",
        "hint": "Move the clock closer to the mass, then farther away.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>dτ</mi></mrow><mrow><mi>dt</mi></mrow></mfrac><mo>=</mo><msqrt><mn>1</mn><mo>−</mo><mfrac><mrow><msub><mi>r</mi><mi>s</mi></msub></mrow><mrow><mi>r</mi></mrow></mfrac></msqrt></mrow></math>",
        "secondary": "rs = 2GM/c² · r &gt; rs<br>Reference clock: r → ∞",
        "model": "Static Schwarzschild clocks, r > rs. The reference clock is at infinity. τ accumulates the local rate; a radius change does not erase earlier elapsed time.",
        "controls": [
          {
            "key": "radius",
            "symbol": "r/rs",
            "label": "Clock radius",
            "min": 1.3,
            "max": 8,
            "value": 3,
            "step": 0.1,
            "unit": "",
            "color": "mint"
          }
        ],
        "tasks": [
          {
            "label": "Place the clock near rs",
            "key": "radius",
            "max": 1.6
          },
          {
            "label": "Move the clock far away",
            "key": "radius",
            "min": 7
          }
        ],
        "action": "Synchronize clocks",
        "short": "Gravitational clocks"
      }
    ]
  },
  {
    "id": "dark",
    "icon": "✦",
    "name": "The dark universe",
    "color": "#786375",
    "subtitle": "GALAXIES → EXPANSION → EVIDENCE",
    "acts": [
      {
        "id": "galaxy",
        "name": "The missing gravity",
        "hint": "Add an extended halo. Compare it with visible matter alone.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mrow><mi>v(r)</mi></mrow><mrow><mn>2</mn></mrow></msup><mo>=</mo><mfrac><mrow><mi>G</mi><mi>M(&lt;r)</mi></mrow><mrow><mi>r</mi></mrow></mfrac></mrow></math>",
        "secondary": "M(&lt;r) = Mvisible(&lt;r) + Mhalo(&lt;r)<br>Angular speed = v(r)/r",
        "model": "Toy visible core plus halo, not measured galaxy data. Orbit angles integrate v(r)/r from the same velocity model used in the graph. A halo is inferred gravitationally; its particle identity is unknown.",
        "controls": [
          {
            "key": "halo",
            "symbol": "Mh",
            "label": "Halo strength",
            "min": 0,
            "max": 2,
            "value": 0,
            "step": 0.05,
            "unit": "relative",
            "color": "rose"
          }
        ],
        "tasks": [
          {
            "label": "Add a strong halo",
            "key": "halo",
            "min": 1.7
          },
          {
            "label": "Compare the reference model",
            "flag": "compared"
          }
        ],
        "action": "Compare visible only",
        "actionFlag": "compared",
        "short": "Galaxy rotation"
      },
      {
        "id": "expansion",
        "name": "The space between the stars",
        "hint": "Compare a matter-only universe with a matter + Λ universe.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><msup><mrow><mi>H</mi></mrow><mrow><mn>2</mn></mrow></msup></mrow><mrow><msup><mrow><msub><mi>H</mi><mi>0</mi></msub></mrow><mrow><mn>2</mn></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>Ω</mi><mi>m</mi></msub></mrow><mrow><msup><mrow><mi>a</mi></mrow><mrow><mn>3</mn></mrow></msup></mrow></mfrac><mo>+</mo><msub><mi>Ω</mi><mi>Λ</mi></msub></mrow></math>",
        "secondary": "ä/a = H₀²[ΩΛ − Ωm/(2a³)]<br>Ωm + ΩΛ = 1 · H = ȧ/a",
        "model": "Flat matter + cosmological-constant model, H₀ = 1, no radiation. Δt = 0 is the present and a = 1. Changing ΩΛ starts a new model comparison. Playback ends instead of jumping backward.",
        "controls": [
          {
            "key": "lambda",
            "symbol": "ΩΛ",
            "label": "Dark-energy fraction",
            "min": 0,
            "max": 0.9,
            "value": 0.7,
            "step": 0.05,
            "unit": "",
            "color": "rose"
          }
        ],
        "tasks": [
          {
            "label": "Try matter only",
            "key": "lambda",
            "max": 0.1
          },
          {
            "label": "Try present acceleration",
            "key": "lambda",
            "min": 0.7
          }
        ],
        "action": "Replay expansion",
        "short": "Cosmic expansion"
      }
    ]
  },
  {
    "id": "frontier",
    "icon": "∞",
    "name": "Open questions",
    "color": "#8b704a",
    "subtitle": "QUANTUM × GRAVITY → AN OPEN QUESTION",
    "acts": [
      {
        "id": "scales",
        "name": "Where our maps stop meeting",
        "hint": "Move from atomic lengths toward the Planck length.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>ℓ</mi><mi>P</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mi>ℏ</mi><mi>G</mi></mrow><mrow><msup><mrow><mi>c</mi></mrow><mrow><mn>3</mn></mrow></msup></mrow></mfrac></msqrt></mrow></math>",
        "secondary": "ℓP ≈ 1.62 × 10⁻³⁵ m<br>A scale made from constants, not a confirmed texture of space.",
        "model": "A conceptual scale map. The quantum-gravity sketches are not observations or confirmed Planck-scale predictions. There is no complete experimentally established theory shown here.",
        "controls": [
          {
            "key": "scale",
            "symbol": "log₁₀(ℓ/m)",
            "label": "Length scale",
            "min": -35,
            "max": -10,
            "value": -10,
            "step": 1,
            "unit": "",
            "color": "gold"
          }
        ],
        "tasks": [
          {
            "label": "Visit atomic scales",
            "key": "scale",
            "min": -12
          },
          {
            "label": "Visit Planck scales",
            "key": "scale",
            "max": -34
          }
        ],
        "action": "Overlay the maps",
        "actionFlag": "overlay",
        "short": "Across scales"
      },
      {
        "id": "questions",
        "name": "The next question could be yours",
        "hint": "Explore three unresolved questions. Save the one that moves you.",
        "formula": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>Quantum</mi><mo>+</mo><mi>Gravity</mi><mo>=</mo><mo>?</mo></mrow></math>",
        "secondary": "Black-hole information · the early universe<br>the quantum nature of spacetime",
        "model": "Conceptual questions, not simulated solutions. Horizon entropy is semiclassical; a full account of quantum geometry and singular regimes remains an active research problem.",
        "controls": [
          {
            "key": "question",
            "symbol": "?",
            "label": "Question",
            "min": 0,
            "max": 2,
            "value": 0,
            "step": 1,
            "unit": "",
            "color": "gold"
          }
        ],
        "tasks": [
          {
            "label": "Explore all three questions",
            "flag": "questions"
          },
          {
            "label": "Keep a question",
            "flag": "wonder"
          }
        ],
        "action": "Keep this question",
        "actionFlag": "wonder",
        "short": "Open questions"
      }
    ]
  }
];
export const ACT_COUNT = STATIONS.reduce((n,s)=>n+s.acts.length,0);
export const LEGENDS = {
  "pendulum": [
    [
      "θ",
      "Angle"
    ],
    [
      "ω",
      "Angular velocity"
    ],
    [
      "K",
      "Kinetic energy"
    ],
    [
      "U",
      "Potential energy"
    ],
    [
      "T₀",
      "Small-angle period"
    ]
  ],
  "action": [
    [
      "S",
      "Action"
    ],
    [
      "L",
      "Lagrangian"
    ],
    [
      "δ",
      "Path variation"
    ],
    [
      "q",
      "Position"
    ],
    [
      "t",
      "Time"
    ]
  ],
  "hamilton": [
    [
      "H",
      "Hamiltonian"
    ],
    [
      "q",
      "Position"
    ],
    [
      "p",
      "Momentum"
    ],
    [
      "k",
      "Spring stiffness"
    ]
  ],
  "field": [
    [
      "E",
      "Electric field"
    ],
    [
      "q",
      "Charge"
    ],
    [
      "r",
      "Distance"
    ],
    [
      "ε₀",
      "Vacuum permittivity"
    ]
  ],
  "induction": [
    [
      "ε",
      "Induced emf"
    ],
    [
      "Φ",
      "Magnetic flux"
    ],
    [
      "N",
      "Coil turns"
    ]
  ],
  "circuit": [
    [
      "I",
      "Current"
    ],
    [
      "V",
      "Voltage"
    ],
    [
      "R",
      "Total resistance"
    ],
    [
      "P",
      "Load power"
    ]
  ],
  "gas": [
    [
      "P",
      "Pressure"
    ],
    [
      "V",
      "Volume"
    ],
    [
      "N",
      "Molecule count"
    ],
    [
      "kB",
      "Boltzmann constant"
    ]
  ],
  "entropy": [
    [
      "S",
      "Entropy"
    ],
    [
      "Ω",
      "Microstate count"
    ],
    [
      "ΔSeq",
      "Equilibrium difference"
    ]
  ],
  "engine": [
    [
      "W",
      "Work by gas"
    ],
    [
      "Q",
      "Heat into gas"
    ],
    [
      "Th / Tc",
      "Reservoir temperatures"
    ],
    [
      "η",
      "Efficiency"
    ]
  ],
  "slit": [
    [
      "ψ",
      "Probability amplitude"
    ],
    [
      "P(y)",
      "Probability density"
    ],
    [
      "λ",
      "Wavelength"
    ],
    [
      "d",
      "Slit separation"
    ]
  ],
  "well": [
    [
      "E*",
      "π²ℏ²/(2mL₀²)"
    ],
    [
      "n",
      "Quantum number"
    ],
    [
      "L₀",
      "Reference length"
    ],
    [
      "τ",
      "E*t/ℏ"
    ]
  ],
  "tunnel": [
    [
      "T / R",
      "Transmission / reflection"
    ],
    [
      "V₀",
      "Barrier height"
    ],
    [
      "a",
      "Barrier width"
    ],
    [
      "κ",
      "Evanescent wave number"
    ]
  ],
  "curvature": [
    [
      "M",
      "Lens mass"
    ],
    [
      "b",
      "Impact distance"
    ],
    [
      "α",
      "Asymptotic bend"
    ],
    [
      "rs",
      "Schwarzschild radius"
    ]
  ],
  "clocks": [
    [
      "τ",
      "Local proper time"
    ],
    [
      "t",
      "Time at infinity"
    ],
    [
      "r",
      "Clock radius"
    ]
  ],
  "galaxy": [
    [
      "v",
      "Orbital speed"
    ],
    [
      "r",
      "Orbital radius"
    ],
    [
      "M(<r)",
      "Enclosed mass"
    ]
  ],
  "expansion": [
    [
      "a",
      "Scale factor"
    ],
    [
      "H₀",
      "Present Hubble rate"
    ],
    [
      "Ωm / ΩΛ",
      "Present density fractions"
    ]
  ],
  "scales": [
    [
      "ℏ",
      "Reduced Planck constant"
    ],
    [
      "G",
      "Gravitational constant"
    ],
    [
      "c",
      "Speed of light"
    ]
  ],
  "questions": [
    [
      "A",
      "Horizon area"
    ],
    [
      "S_BH",
      "Black-hole entropy"
    ],
    [
      "?",
      "Open question"
    ]
  ]
};
