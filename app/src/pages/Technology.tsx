function Technology() {
    return (
      <section className="band alt">
        <div className="container content-section">
          <h1>Technology</h1>
          <p>
            We’re developing tools that expand what’s possible with large language models, by rethinking how code meaning is represented and compared.
          </p>
          <p>
            Our development focuses on <strong>software translation</strong>—the process of rewriting systems from one language to another while preserving their behavior. The challenge, known as the <em>equivalence problem</em>, is ensuring that nothing changes in translation.
          </p>
          <p>
            While today’s LLMs can generate impressive code, they lack the ability to <em>verify</em> that their output truly matches the original.
            The absence of verification limits their usefulness and is what we identified as the key barrier to opening up a mostly untapped market.
          </p>
          <p>
            Karoo Compute is building a semantic modelling framework that bridges that gap—guiding LLMs with formal verification to produce translations that are not just plausible, but provably correct.
          </p>
        </div>
      </section>
    )
  }
  
  export default Technology
  
  
  