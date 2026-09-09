import { ArrowLeft, Github } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const articleUrl = "/blog/chassis-i-researched-picked-and-didnt-print";

export default function BlogPost() {
  const canonicalUrl = `${window.location.origin}${articleUrl}`;

  document.title =
    "The Chassis I Researched, Picked, and Then Didn't Print | Nehith";

  const description =
    "A visual SLAM rover build log about verifying a 3D-printed robot chassis before committing filament, and why measured dimensions beat a promising description.";
  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.setAttribute("name", "description");
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute("content", description);

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute("href", canonicalUrl);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-5xl px-6 py-10 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <article className="mx-auto mt-20 max-w-3xl">
          <header className="border-b border-white/10 pb-10">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Visual SLAM rover build log · September 8, 2026
            </p>
            <h1 className="font-display text-4xl font-medium leading-tight md:text-6xl">
              The chassis I researched, picked, and then didn&apos;t print
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
              I checked the actual CAD file before printing and found four
              reasons the supposedly perfect chassis was wrong for my rover.
            </p>
          </header>

          <div className="prose prose-invert prose-lg mt-12 max-w-none prose-headings:font-display prose-headings:font-medium prose-a:text-accent prose-strong:text-foreground">
            <h2>The plan that seemed reasonable</h2>
            <p>
              I did what you&apos;re supposed to do. Before buying motors, I
              found a chassis that was supposedly built for exactly the motor I
              wanted, free, open source, print and go, zero CAD required. I
              wrote it down as decided. I moved on to other parts of the build.
            </p>
            <p>
              Then, right before I actually printed it, I stopped and checked
              the file itself instead of trusting the description one more time.
              Good thing I did, because it was wrong in four separate ways, and
              every one of them would have cost real filament and real time to
              discover after the fact instead of before.
            </p>
            <p>
              The chassis was a well documented, actively maintained modular
              ESP32 robot design, CC-licensed, with good build photos and a
              component list. It was described, including in my own notes, as
              N20-native. I&apos;d picked N20 motors specifically for this
              build: all-metal gearbox, low backlash, magnetic encoder for clean
              wheel odometry. A chassis that already fit them meant no bracket
              design, no motor mount CAD, nothing standing between me and
              printing.
            </p>
            <p>
              That&apos;s a completely reasonable way to plan a build. It&apos;s
              also exactly the kind of claim that&apos;s worth verifying before
              it costs you anything, and I hadn&apos;t verified it yet, I&apos;d
              just recorded it.
            </p>

            <h2>What checking the actual file showed</h2>
            <p>
              I pulled the real file list and, more usefully, the STEP files
              themselves, and opened them with an actual CAD kernel rather than
              eyeballing a thumbnail. Four things fell out of that, and none of
              them were the same problem wearing a different hat, they
              compounded.
            </p>
            <figure className="not-prose my-10">
              <img
                src="/attached_assets/chassis_frame_hole_pattern_evidence.png"
                alt="CAD view of the chassis frame with eight red-marked mounting holes in a 74.5 by 94 millimeter rectangle"
                className="w-full rounded-lg border border-white/10"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The frame geometry showed the mismatch directly: a TT four-motor
                mounting pattern, not an N20 mounting layout.
              </figcaption>
            </figure>
            <h3>Wrong motor entirely</h3>
            <p>
              The chassis&apos;s own component list called for four TT gear
              motors, not two N20s, two distinct small DC gear motor families
              with different mounting hardware, not interchangeable variants of
              the same part. TT motors have a rectangular gearbox body; N20s
              have a 12x12mm square face with M1.6 screws at 9mm spacing. I
              found the actual proof in the frame&apos;s geometry: eight
              mounting holes at 3.4mm diameter, arranged in a 74.5mm x 94mm
              rectangle across four corners. That&apos;s a 4-motor mounting
              pattern at a completely different scale than anything my N20s
              would need.
            </p>
            <h3>Wrong motor count, not just wrong motor</h3>
            <p>
              Four corners means four-wheel drive. I&apos;d bought two motors
              for a differential drive layout. Even a perfect adapter bracket
              doesn&apos;t fix a robot designed around four contact points when
              you&apos;re building one with two.
            </p>
            <h3>Wrong scale</h3>
            <p>
              The base plate measured 240mm x 150mm. The frame itself was 70mm
              tall, not the flat mounting deck I&apos;d assumed from photos,
              closer to a roll cage. That&apos;s toy-RC-car sized, built to
              carry TT motors and a full plastic body shell. My actual payload,
              two small motors, a driver board, an ESP32, and a small battery,
              is tiny by comparison. All that extra plastic mass works against
              the exact thing I wanted: a light, precisely controllable platform
              for slow, careful indoor mapping.
            </p>
            <h3>Still no camera and IMU mount</h3>
            <p>
              This one I&apos;d known about from the start, the file&apos;s
              mounting options were generic accessory holders, nothing built to
              hold a camera and an IMU rigidly together on one plate, which
              matters more than it sounds like it should. Any relative motion
              between the two ruins the extrinsic calibration a visual-inertial
              SLAM pipeline depends on.
            </p>
            <p>
              Any single one of these is a &quot;print a small adapter, move
              on&quot; problem. All four together meant I wasn&apos;t adapting a
              chassis anymore. I was overriding most of what made it a chassis
              in the first place.
            </p>

            <h2>The bracket that made the same mistake in miniature</h2>
            <p>
              Looking for a smaller fix, I found a standalone N20 motor bracket,
              also free, also well reviewed. Read the actual build instructions
              this time instead of trusting the thumbnail, and it turned out to
              be a geared cog-drive design: a cog on the motor shaft meshing
              with a separate cog glued onto the wheel, built for a robotics
              summer camp exercise in gear ratios. It needed its own wheels with
              cogs attached. I&apos;d already bought direct-drive wheels that
              press-fit straight onto the motor&apos;s D-shaft. Same category of
              mistake, smaller stakes, caught the same way, by actually reading
              the thing instead of assuming the search result matched the need.
            </p>

            <h2>Where I landed</h2>
            <p>
              No chassis, no borrowed bracket. A flat deck plate, designed from
              dimensions I actually measured or already had confirmed: the
              N20&apos;s exact mounting spec from its datasheet, a purchased
              ball caster with a known adjustable height range, and whatever
              footprint my calipers give me for the camera, IMU, and battery
              holder once I measure them.
            </p>
            <figure className="not-prose my-10">
              <img
                src="/attached_assets/printer_image.jpeg"
                alt="Bambu Lab 3D printer producing a small orange robot part"
                className="w-full rounded-lg border border-white/10"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Printing is the easy part to start; measuring the parts and
                designing for the actual rover is what comes first.
              </figcaption>
            </figure>
            <p>
              That&apos;s more design work than &quot;print and go&quot; was
              supposed to require. But it&apos;s also design work grounded in
              real numbers I hold, rather than inherited from someone
              else&apos;s build with different motors, different scale, and
              different goals. The lesson wasn&apos;t &quot;avoid pre-made
              parts.&quot; It was that a part built for a different problem
              doesn&apos;t stop looking like a fit just because the description
              says so, and the only way to actually know is to open the file.
            </p>
          </div>

          <footer className="mt-14 border-t border-white/10 pt-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Part of an ongoing build log for a visual SLAM rover, no LiDAR,
              camera and IMU only. Wiring and camera calibration are done;
              chassis design is next.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a
                  href="https://github.com/nehith23/SLAM-rover"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Rover repository
                </a>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/">Return to portfolio</Link>
              </Button>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
