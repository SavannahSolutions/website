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
            Our goal is to make projects that were once considered impossible, easy.
          </p>
          <Link to="/about" className="hero-link">About Us →</Link>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="band alt">
        <div className="container content-section">
          <h2>Problem</h2>
          <p>
            While today's LLMs can generate impressive code, they lack the ability to <em>verify</em> that their output truly matches the original.
            The absence of verification limits their usefulness and is what we identified as the key barrier to opening up a mostly untapped market.
          </p>
          
          <h2>Approach</h2>
          <p>
            Our development focuses on <strong>software translation</strong>—the process of rewriting systems from one language to another while preserving their behavior. 
            The challenge, known as the <em>equivalence problem</em>, is ensuring that nothing changes in translation.
          </p>

          <h2>Market</h2>
          <p>
            The ability to move software from one language to another has long been an elusive desire shared by many software engineers and project managers around the world.
            The motivations for departing from certain languages vary from personal preference to significant maintenance costs. For certain languages, it even has security implications.
            The motive for moving away from C in particular, is just that; it is a memory-unsafe language, and its prevalence enables many of the worlds' security breaches.
            There are motives to translate from other languages as well; COBOL is widely used in the financial industry, but as it becomes harder and harder to find COBOL developers, the cost of maintenance for such codebases keeps increasing.
          </p>

          <h2>Vision</h2>
          <p>
            Karoo Compute Solutions is building a semantic modelling framework that bridges that gap—guiding LLMs with formal verification to produce translations that are not just plausible, but provably correct.
            We're developing tools that expand what's possible with large language models, by rethinking how code meaning is represented and compared.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home


