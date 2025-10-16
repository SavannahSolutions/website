function Contact() {
  return (
    <section className="band alt">
      <div className="container" style={{ display: 'grid', gap: '1rem' }}>
        <h1 style={{ margin: 0 }}>Contact</h1>
        <p>We'd love to hear from you. Reach us at:</p>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem' }}>
          <li><strong>Email:</strong> <a href="mailto:kaleb@karoocompute.com">kaleb@karoocompute.com</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact


