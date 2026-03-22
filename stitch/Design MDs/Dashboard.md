# Design System: The Kinetic Lab

## 1. Overview & Creative North Star
### Creative North Star: "The Kinetic Lab"
This design system marks a strategic evolution from a "minimalist sanctuary" to a **High-Performance Training Lab**. We are moving away from passive observation and toward active, gamified achievement. The aesthetic is inspired by the precision of high-end engineering tools (Linear) fused with the dopamine-driven engagement of world-class educational platforms (Duolingo).

To break the "template" look, this system rejects rigid grids in favor of **Intentional Asymmetry**. We utilize overlapping glass surfaces, high-contrast typography scales, and a depth model based on tonal layering rather than structural lines. The result is an interface that feels energetic, rewarding, and deeply technical.

---

## 2. Colors & Surface Architecture
The palette is rooted in a deep, nocturnal foundation (`#020a2f`) to allow the "Electric" accents to vibrate with clinical energy.

### The Color Palette
- **Primary (The Pulse):** `primary` (#85adff) and `primary_container` (#6e9fff). Used for core actions and active "training" states.
- **Secondary (The Level-Up):** `secondary` (#c180ff) and `secondary_fixed` (#e5c6ff). Reserved for gamification, streaks, and achievement milestones.
- **Tertiary (The Success):** `tertiary` (#c5ffc9). Used for positive progress, completed reps, and "safe" zones.
- **Background:** `background` (#020a2f). A deep ink blue that provides the "Lab" atmosphere.

### The "No-Line" Rule
**1px solid borders are strictly prohibited for sectioning.** We define boundaries through background color shifts.
*   *Instead of a border:* Place a `surface_container_low` element on top of a `surface` background.
*   *For grouping:* Use a `surface_container_high` card to sit atop a `surface_container_low` section.

### Glass & Gradient Signature
To move beyond a flat UI, all floating panels must utilize **Glassmorphism**.
*   **Backdrop:** `surface_variant` at 60% opacity with a `20px` backdrop-blur.
*   **Signature Gradients:** Use a linear gradient (`primary` to `primary_container` at 135°) for primary CTAs and progress fills. This adds "soul" and a sense of liquid energy to the high-tech aesthetic.

---

## 3. Typography: Authority & Precision
We utilize a dual-font strategy to balance editorial authority with technical clarity.

*   **Display & Headlines (Space Grotesk):** Used for "The Lab's" loudest moments—level titles, big stats, and motivational headers. Use **Bold (700)** or **Medium (500)** weights to maintain the "high-performance" feel.
    *   `display-lg`: 3.5rem (The Hero Moment)
    *   `headline-md`: 1.75rem (Section Anchors)
*   **UI & Body (Inter):** Used for all functional data. Inter provides the "Linear-like" precision required for complex training data.
    *   `title-md`: 1.125rem (Card Headers)
    *   `body-md`: 0.875rem (Primary Reading)
    *   `label-sm`: 0.6875rem (Micro-data/Caps)

---

## 4. Elevation & Depth: The Layering Principle
Hierarchy is achieved through **Tonal Layering** rather than traditional drop shadows.

*   **The Stack:**
    1.  **Base:** `surface_dim` (The floor of the lab).
    2.  **Section:** `surface_container_low` (General layout areas).
    3.  **Component:** `surface_container_high` (Interactive cards/modules).
    4.  **Pop-over:** `surface_bright` (Active focus states).

*   **Ambient Shadows:** For floating elements (like level-up modals), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should feel like an ambient occlusion glow rather than a harsh cutout.
*   **Ghost Borders:** If a boundary is required for accessibility, use `outline_variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components & Gamification

### Buttons (The Kinetic Triggers)
*   **Primary:** Gradient fill (`primary` to `primary_container`). `xl` (1.5rem) roundedness. Subtle inner glow on top edge.
*   **Secondary (Gamified):** `secondary_container` background with `on_secondary_container` text. Use for "Claim Reward" or "View Badges."

### The Progress Engine (Gamification)
*   **Level-Up Bars:** High-contrast containers using `surface_container_highest`. The fill must be a `tertiary` to `primary` gradient to indicate growth.
*   **Streak Indicators:** Utilize `secondary` (Neon Purple). When a streak is active, add a subtle outer glow (bloom) using the `secondary` token.
*   **Badge Placeholders:** Hexagonal or organic "blob" shapes using `glassmorphism` effects. When locked: 20% opacity. When unlocked: Full `secondary_fixed` vibrancy.

### Cards & Lists
*   **Rule:** No dividers. Use `spacing-6` (1.5rem) to separate list items or subtle background shifts (`surface_container_low` vs `surface_container_high`).
*   **Hover State:** Cards should "lift" by switching from `surface_container_high` to `surface_bright` and increasing the backdrop-blur intensity.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts. Let a progress bar overlap the edge of a card to create depth.
*   **Do** use "Success Green" (`tertiary`) sparingly for moments of genuine achievement.
*   **Do** lean into the "Lab" feel by using `label-sm` for technical metadata in all-caps with `0.05em` letter spacing.

### Don’t
*   **Don’t** use pure black (#000000) for backgrounds; always use `background` or `surface_container_lowest` to maintain tonal depth.
*   **Don’t** use 1px solid white borders. They break the "frosted glass" immersion.
*   **Don’t** use standard "drop shadows" on flat surfaces. If it's not floating, it doesn't need a shadow.

### Accessibility Note
While we lean into glassmorphism and subtle shifts, always ensure that `on_surface` text maintains a 4.5:1 contrast ratio against the `surface_container` it sits upon. High-performance doesn't mean low-readability.