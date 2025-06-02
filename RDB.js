const revisionQuestions = {
    "questions": {
        "PHY 101": [
            // Topic 2: Quantities, Units, and Dimensions (Q1-15)
            {
                "No": 1,
                "topic": "Quantities and Units",
                "question": "Which of the following are fundamental quantities in SI units?",
                "options": [
                    "I. Force",
                    "II. Electric current",
                    "III. Density",
                    "IV. Luminous intensity"
                ],
                "answers": ["II", "IV"],
                "explanation": "Fundamental quantities are the base quantities that cannot be defined in terms of other quantities. In SI, these are: length (m), mass (kg), time (s), electric current (A, Option II), temperature (K), amount of substance (mol), and luminous intensity (cd, Option IV). Force (I) and density (III) are derived quantities."
            },
            {
                "No": 2,
                "topic": "Quantities and Units",
                "question": "Convert 5 µN to newtons:",
                "options": [
                    "I. 5 × 10⁻⁶ N",
                    "II. 5 × 10⁻³ N",
                    "III. 5 × 10⁻⁹ N",
                    "IV. 5 × 10⁻¹² N"
                ],
                "answers": ["I"],
                "explanation": "The prefix 'µ' (micro) represents 10⁻⁶. Therefore, 5 µN = 5 × 10⁻⁶ N. This conversion is crucial for maintaining consistent units in calculations."
            },
            {
                "No": 3,
                "topic": "Quantities and Units",
                "question": "The equation v² = u² + 2as is dimensionally:",
                "options": [
                    "I. Consistent because all terms have dimensions [L²T⁻²]",
                    "II. Inconsistent because '2' has no dimensions",
                    "III. Valid only when u = 0",
                    "IV. Dimensionless"
                ],
                "answers": ["I"],
                "explanation": "Analysis: [v²] = [u²] = [L²T⁻²], [2as] = [LT⁻²][L] = [L²T⁻²]. The '2' is a pure number with no dimensions. All terms have identical dimensions, satisfying dimensional homogeneity."
            },
            {
                "No": 4,
                "topic": "Quantities and Units",
                "question": "The frequency f of a vibrating string depends on tension T (MLT⁻²), length l (L), and mass per unit length μ (ML⁻¹). Using dimensional analysis, f is proportional to:",
                "options": [
                    "I. √(T/μ)/l",
                    "II. T/μl",
                    "III. √(μ/T)l",
                    "IV. Tl/μ"
                ],
                "answers": ["I"],
                "explanation": "Assume f ∝ Tᵃμᵇlᶜ. Equate dimensions: [T⁻¹] = [MLT⁻²]ᵃ[ML⁻¹]ᵇ[L]ᶜ ⇒ For M: a + b = 0; L: a - b + c = 0; T: -2a = -1. Solving gives a = 1/2, b = -1/2, c = -1. Thus f ∝ T¹ᐟ²μ⁻¹ᐟ²l⁻¹ = √(T/μ)/l."
            },
            {
                "No": 5,
                "topic": "Quantities and Units",
                "question": "Why is the angle in radians dimensionless?",
                "options": [
                    "I. It's defined as arc length/radius (both lengths)",
                    "II. Angles have no physical significance",
                    "III. It's a convention",
                    "IV. All trigonometric functions are dimensionless"
                ],
                "answers": ["I"],
                "explanation": "Radians are defined as the ratio of arc length (L) to radius (L), giving [L]/[L] = [1]. This makes it dimensionless while maintaining consistency in equations like s = rθ."
            },
            {
                "No": 6,
                "topic": "Quantities and Units",
                "question": "The energy E of a photon is E = hν. Planck's constant h has dimensions:",
                "options": [
                    "I. [ML²T⁻¹]",
                    "II. [ML²T⁻²]",
                    "III. [MLT⁻¹]",
                    "IV. [ML⁻²T]"
                ],
                "answers": ["I"],
                "explanation": "[E] = [ML²T⁻²], [ν] = [T⁻¹]. Thus [h] = [E]/[ν] = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]. This dimensional formula is fundamental in quantum mechanics."
            },
            {
                "No": 7,
                "topic": "Quantities and Units",
                "question": "A student writes F = mv²/r² for centripetal force. The error is:",
                "options": [
                    "I. Extra r in denominator (should be F = mv²/r)",
                    "II. Missing π (F = πmv²/r)",
                    "III. Wrong mass dependence (F = v²/r)",
                    "IV. No error"
                ],
                "answers": ["I"],
                "explanation": "Centripetal force is F = mv²/r. The student's version has an extra r⁻¹ dimension, making it [MLT⁻²] = [ML²T⁻²]/[L²] ⇒ [ML⁻¹], which is incorrect for force."
            },
            {
                "No": 8,
                "topic": "Quantities and Units",
                "question": "The dimensional formula for pressure is:",
                "options": [
                    "I. [ML⁻¹T⁻²]",
                    "II. [MLT⁻²]",
                    "III. [ML²T⁻²]",
                    "IV. [ML⁻²T⁻¹]"
                ],
                "answers": ["I"],
                "explanation": "Pressure = Force/Area. [Force] = [MLT⁻²], [Area] = [L²]. Thus [Pressure] = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]. This matches stress and energy density."
            },
            {
                "No": 9,
                "topic": "Quantities and Units",
                "question": "Dimensional analysis cannot determine:",
                "options": [
                    "I. The exact value of 2π in T = 2π√(l/g)",
                    "II. The dependence of T on l",
                    "III. The dimensions of g",
                    "IV. That T is time"
                ],
                "answers": ["I"],
                "explanation": "While dimensions show T ∝ √(l/g), the dimensionless constant 2π must be found experimentally or via calculus. This is a key limitation of dimensional analysis."
            },
            {
                "No": 10,
                "topic": "Quantities and Units",
                "question": "If log P vs. log V for a gas has slope -γ, the relationship is:",
                "options": [
                    "I. P ∝ V⁻ᵞ ⇒ PVᵞ = constant",
                    "II. P ∝ Vᵞ",
                    "III. P ∝ exp(-γV)",
                    "IV. P = γV"
                ],
                "answers": ["I"],
                "explanation": "A log-log plot with slope -γ implies log P = -γ log V + C ⇒ P = kV⁻ᵞ ⇒ PVᵞ = constant. This describes adiabatic processes in thermodynamics."
            },
            {
                "No": 11,
                "topic": "Quantities and Units",
                "question": "The viscosity η has SI unit Pa·s. In fundamental units (kg, m, s) it is:",
                "options": [
                    "I. kg·m⁻¹·s⁻¹",
                    "II. kg·m·s⁻²",
                    "III. kg·m²·s⁻²",
                    "IV. kg⁻¹·m·s"
                ],
                "answers": ["I"],
                "explanation": "1 Pa = kg·m⁻¹·s⁻² ⇒ Pa·s = (kg·m⁻¹·s⁻²)·s = kg·m⁻¹·s⁻¹. This appears in Stokes' law (F = 6πηrv)."
            },
            {
                "No": 12,
                "topic": "Quantities and Units",
                "question": "The drag force F on a sphere depends on radius r, velocity v, and fluid viscosity η. Using dimensions, F is proportional to:",
                "options": [
                    "I. ηrv",
                    "II. η²r/v",
                    "III. ηv/r",
                    "IV. ηr²v"
                ],
                "answers": ["I"],
                "explanation": "Assume F ∝ ηᵃrᵇvᶜ. Equate dimensions: [MLT⁻²] = [ML⁻¹T⁻¹]ᵃ[L]ᵇ[LT⁻¹]ᶜ ⇒ For M: a = 1; L: -a + b + c = 1; T: -a - c = -2. Solving gives a = b = c = 1 ⇒ F ∝ ηrv."
            },
            {
                "No": 13,
                "topic": "Quantities and Units",
                "question": "The Reynolds number Re = ρvL/η is:",
                "options": [
                    "I. Dimensionless (verified by dimensional analysis)",
                    "II. A measure of turbulence",
                    "III. Dimensionally inconsistent",
                    "IV. Only applicable to liquids"
                ],
                "answers": ["I", "II"],
                "explanation": "[ρ] = ML⁻³, [v] = LT⁻¹, [L] = L, [η] = ML⁻¹T⁻¹ ⇒ [Re] = (ML⁻³)(LT⁻¹)(L)/(ML⁻¹T⁻¹) = [1]. Re > 2000 indicates turbulent flow."
            },
            {
                "No": 14,
                "topic": "Quantities and Units",
                "question": "Kinetic energy (½mv²) and torque (r × F):",
                "options": [
                    "I. Have different dimensions",
                    "II. Both have dimensions [ML²T⁻²]",
                    "III. Are scalar and vector respectively",
                    "IV. Can be added directly"
                ],
                "answers": ["II", "III"],
                "explanation": "Both have identical dimensions ([ML²T⁻²]) but different physical meanings. KE is scalar (J), torque is vector (N·m). They cannot be added due to different natures."
            },
            {
                "No": 15,
                "topic": "Quantities and Units",
                "question": "The power P of a wind turbine depends on air density ρ, blade length l, and wind speed v. Dimensional analysis suggests:",
                "options": [
                    "I. P ∝ ρl²v³",
                    "II. P ∝ ρlv²",
                    "III. P ∝ ρ²lv",
                    "IV. P ∝ ρl³v"
                ],
                "answers": ["I"],
                "explanation": "Assume P ∝ ρᵃlᵇvᶜ. [P] = [ML²T⁻³] = [ML⁻³]ᵃ[L]ᵇ[LT⁻¹]ᶜ ⇒ M: a = 1; L: -3a + b + c = 2; T: -c = -3 ⇒ a = 1, c = 3, b = 2 ⇒ P ∝ ρl²v³."
            },

            // Topic 3: Scalars and Vectors (Q16-30)
            {
                "No": 16,
                "topic": "Scalars and Vectors",
                "question": "Which quantities are vectors?",
                "options": [
                    "I. Time",
                    "II. Momentum",
                    "III. Temperature",
                    "IV. Electric field"
                ],
                "answers": ["II", "IV"],
                "explanation": "Vectors have magnitude and direction (momentum = mv, electric field = F/q). Scalars have only magnitude (time, temperature)."
            },
            {
                "No": 17,
                "topic": "Scalars and Vectors",
                "question": "A vector A = 10 N at 30° NE has x and y components:",
                "options": [
                    "I. 8.66 N, 5 N",
                    "II. 5 N, 8.66 N",
                    "III. 7.07 N, 7.07 N",
                    "IV. 10 N, 0 N"
                ],
                "answers": ["I"],
                "explanation": "Aₓ = A cosθ = 10 cos30° = 8.66 N; Aᵧ = A sinθ = 10 sin30° = 5 N. NE implies equal positive x and y components."
            },
            {
                "No": 18,
                "topic": "Scalars and Vectors",
                "question": "The magnitude and angle of B = -3i + 4j are:",
                "options": [
                    "I. 5, 126.9°",
                    "II. 5, 53.1°",
                    "III. 7, 143.1°",
                    "IV. 7, 36.9°"
                ],
                "answers": ["I"],
                "explanation": "|B| = √((-3)² + 4²) = 5. θ = tan⁻¹(4/-3) ≈ -53.1° ⇒ 180° - 53.1° = 126.9° (2nd quadrant)."
            },
            // Continue with remaining vector questions (Q19-30)...

            // Topic 4: Kinematics (Q31-45)
            {
                "No": 31,
                "topic": "Kinematics",
                "question": "For a particle moving in a 5m radius circle, after half-revolution:",
                "options": [
                    "I. Distance = 5π m, Displacement = 10 m",
                    "II. Both = 5π m",
                    "III. Distance = 10 m, Displacement = 0",
                    "IV. Distance = 5π m, Displacement = 0"
                ],
                "answers": ["I"],
                "explanation": "Distance = half circumference = πr = 5π m. Displacement = diameter = 2r = 10 m (start to end points)."
            },
            // Continue with remaining kinematics questions (Q32-45)...

            // Topics 5 & 6: Newton's Laws + Work/Energy (Q46-75)
            {
                "No": 46,
                "topic": "Newton's Laws",
                "question": "A passenger lurches forward when a bus brakes because:",
                "options": [
                    "I. Inertia maintains their motion (Newton's 1st Law)",
                    "II. A force pushes them forward",
                    "III. The seat exerts negative work",
                    "IV. Conservation of energy"
                ],
                "answers": ["I"],
                "explanation": "Newton's 1st Law: The passenger's body tends to maintain its state of motion. The bus decelerates, but the passenger continues moving forward until acted upon by a seatbelt/friction."
            }
            // Continue with remaining dynamics/energy questions (Q47-75)...
        ]
    }
};
