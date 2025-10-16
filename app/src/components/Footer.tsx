function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span style={{ opacity: 0.8 }}>© 2024-{new Date().getFullYear()} Karoo Compute Solutions (Pty) Ltd</span>
        <a href="mailto:kaleb@karoocompute.com" style={{ opacity: 0.9 }}>kaleb@karoocompute.com</a>
      </div>
    </footer>
  )
}

export default Footer


