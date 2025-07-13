
import NavBar from "./NavBar";
import Footer from "./Footer";

import PageTitle from "./PageTitle";

export default function AboutPage() {
  // **************** ALTERNATIVE IDEAS***********
  // 1. an info/learn more button on homepage for each game card. info button opens up a modal with sumary
  // 2. learn more button links to new page about each game, idk if this fits for such various game sizes

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">

          <PageTitle title="About LMG" />

          <div className="max-w-4xl mx-auto px-6 sm:px-10 mt-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Understand how this website came to be.
            </h2>

            <section className="bg-base-100 rounded-lg shadow-md p-8 sm:p-12 space-y-6 leading-relaxed text-gray-700">
              <p>
                <span className="text-primary font-extrabold">LMGGames.com</span> is a
                personal gaming portfolio showcasing the full catalog of games I've
                created. Over time, it’s grown into more than just a gallery—it now
                explores the creative process behind each game through the lenses of
                a designer, developer, and learner.
              </p>

              <p>
                You'll find a wide variety of games here — from quizzes to word
                puzzles, mobile to desktop experiences, and everything from
                lighthearted ideas to deeper narratives. These games are built using
                vanilla JavaScript or game engines like Unity, depending on the
                vision and scope of each project.
              </p>

              <p>
                In the spirit of play, the site itself functions a bit like a game,
                offering challenges, achievements, and rewards for you to obtain.
              </p>

              <p>I’m excited to keep building, learning, and sharing more games.</p>

              <p className="text-center font-semibold text-lg text-accent mt-10">
                Thanks for playing.
              </p>
            </section>
          </div>
        </main>



        <Footer />
      </div>
    </>
  );
}
