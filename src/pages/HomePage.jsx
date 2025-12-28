import { Link } from 'react-router-dom'
import '../App.css'

function HomePage() {
  return (
    <div className="speakeasy-container">
      <div className="art-deco-border">
        <div className="border-pattern top-left"></div>
        <div className="border-pattern top-right"></div>
        <div className="border-pattern bottom-left"></div>
        <div className="border-pattern bottom-right"></div>
        <div className="border-lines horizontal top"></div>
        <div className="border-lines horizontal bottom"></div>
        <div className="border-lines vertical left"></div>
        <div className="border-lines vertical right"></div>
      </div>
      
      <div className="invitation-card">
        <div className="text-content">
          <p className="invitation-text fade-in">JŪS ESATE KVIEČIAMI Į</p>
          <h1 className="main-title fade-in-delay-1">„PASKUTINIS UŽSAKYMAS“</h1>
          <div className="divider-line fade-in-delay-2">
            <div className="deco-motif"></div>
          </div>
          <h2 className="subtitle fade-in-delay-3">SPEAKEASY BARAS</h2>
          <Link to="/speakeasy" className="enter-button fade-in-delay-4">
            ĮEITI
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage

