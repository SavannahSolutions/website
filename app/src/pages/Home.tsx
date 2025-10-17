import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="band hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">Modernize with verified translation</h1>
          <p className="hero-text">
            Karoo Compute Solutions is developing tools to support LLM-technologies in software translation.
            We aim to make software modernization both practical and verifiable.
          </p>
          <Link to="/about" className="hero-link">About Us →</Link>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="band alt">
        <div className="container content-section">
          <h2>Problem</h2>
          <p>
            Software translation has long beeen regarded as an infeasible or high risk endeavour, due in part to the effort of translation, but also the difficulty of ensuring equivalence between the original and the translated code.
          </p>
          <p>
            While today's Large Language Models (LLMs) can generate impressive code in a short timespan, thereby addressing the first concern, they lack the ability to <em>verify</em> that their output truly matches the original.
            The absence of verification limits their usefulness and is what we identified as the key barrier to opening up a mostly untapped market.
          </p>
          
          <h2>Approach</h2>
          <p>
            Our development focuses on <strong>semantic modelling</strong>—a way to represent the meaning of code in a universal form, so that comparisons can be performed between languages.
            Using our semantic model, we provide information to LLMs to guide them towards producing translations that are equivalent to the original.
            We are also investigating the possibility of generating mathematically sound proofs of equivalence, which could be used to certify the correctness of the translation.
          </p>

          <p>
            It must be acknowledged that, as proven by the halting problem, there is no general solution to determine the equivalence of <em>any</em> two programs.
            However, when translating a codebase, we only want to find <em>a</em> valid translation, not every possible translation, meaning that we do not mind the rare false negative (a valid, but rejected translation).
          </p>

          <h2>Market</h2>
          <p>
            The ability to move software from one language to another has long been an elusive desire shared by many software engineers and project managers around the world.
            While many are motivated in this desire by personal preference, there are far more substantive reasons such as maintenance costs, development velocity, and security to consider.
          </p>
          <p>
            The world currently makes use of a large body of software written in C, a memory-unsafe language facing a dangerous class of vulnerabilities that memory-safe languages do not.
            <sup>
              <a href="https://www.chromium.org/Home/chromium-security/memory-safety" target="_blank" rel="noopener noreferrer">
                [1]
              </a>
              <a href="https://www.microsoft.com/en-us/msrc/blog/2019/07/a-proactive-approach-to-more-secure-code" target="_blank" rel="noopener noreferrer">
                [2]
              </a>
            </sup>.
          </p>
          <p>
            COBOL is a legacy language that is still widely used in the financial industry, but the cost of maintenance for such codebases keeps increasing.
            These cost increases can be partially attributed to a scarcity of developers, but it should also be mentioned that legacy languages generally do not keep up with modernisation trends seen in the wider industry.
            This creates a growing delta in development velocity between legacy and modern languages.
          </p>
          <p>
            Currently, we are focused only on translating from C to Rust, while being mindful that much of our core technology will be reusable for different language combinations in the future.
          </p>

          <h2>Vision</h2>
          <p>
            We foresee a future where the cost of software development has reduced by orders of magnitude, opening up many new possibilities.
            However, to develop in such a world requires us to work in a different paradigm; the greatest hinderance will no longer be code output, but correctness.
            We believe that reducing the friction involved in verification will be a key component in bringing this new paradigm into fruition.
            Delivering the tools that enable this shift is the role Karoo Compute Solutions seeks to play.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
