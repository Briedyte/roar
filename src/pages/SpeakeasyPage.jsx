import { useState } from 'react'
import '../App.css'
import './GuestList.css'
import milenaMeiluteImage from '../assets/milena_meilute.png'
import laurynasLapinskasImage from '../assets/laurynas_lapinskas.png'
import vytautasDagilisImage from '../assets/vytautas_dagilis.png'
import bertaBalsyteImage from '../assets/berta_balsyte.png'
import dariusJakutisImage from '../assets/darius_jakutis.png'
import pranasPakalnisImage from '../assets/pranas_pakalnis.png'

const characters = [
  {
    name: 'Vytautas Dagilis',
    realName: 'Rimvydas',
    image: vytautasDagilisImage,
    description: 'Vytautas Dagilis yra baro „Paskutinis užsakymas“ savininkas – vienintelio baro, kurio policija po „Batch 888“ incidento dar neuždarė. Visada draugiškas ir svetingas šeimininkas, jį nuolat galima rasti klube kurstantį linksmybes ir šėlsmą.'
  },
  {
    name: 'Milena Meilutė',
    realName: 'Ieva',
    image: milenaMeiluteImage,
    description: 'Milena Meilutė yra „Raudonųjų Rankų" nusikaltėlių sindikato vadė ir pagrindinė kontrabandinio alkoholio platintoja mieste. Ji žmonėms tiekia tai, ko trokšta jų širdys – alkoholį. Daugeliui ji atrodo kaip visuomenės herojė… išskyrus tiems, kurių artimieji tapo jos taikiniu.'
  },
  {
    name: 'Laurynas Lapinskas',
    realName: 'Mantas',
    image: laurynasLapinskasImage,
    description: 'Laurynas yra kontrabandinio alkoholio platintojas, spinduliuojantis ryškia energija. Tačiau neapsigaukite dėl žaismingo elgesio. Gatvėse kalbama, kad jis taikosi į Milenos Meilutės vietą – tapti numeris vienas nusikalstamo pasaulio bosu.'
  },
  {
    name: 'Berta Balsytė',
    realName: 'Dovilė',
    image: bertaBalsyteImage,
    description: 'Berta yra turtinga aukštuomenės mergina, kurios ryški energija – geriausių vakarėlių vizitinė kortelė. Ji – spaudos numylėtinė: žurnalistai ją vadina tikruoju "flapper" įsikūnijimu. Dėl jos lengvabūdiško įvaizdžio retas įtartų, kad ji – Lauryno Lapinsko pusseserė.'
  },
  {
    name: 'Pranas Pakalnis',
    realName: 'Paulius',
    image: pranasPakalnisImage,
    description: 'Pranas yra slidus politikas, suvaidinęs svarbų vaidmenį priimant Prohibicijos įstatymą. Paradoksalu, bet vakarais dažniausiai jį galima rasti bare „Paskutinis užsakymas“.'
  },
  {
    name: 'Darius Jakutis',
    realName: 'Žymantas',
    image: dariusJakutisImage,
    description: 'Darius šiuo metu yra karščiausia džiazo scenos žvaigždė. Kiekvieną vakarą „Paskutiniame užsakyme“ jis įkaitina publiką iki pašėlusio siautulio. Pasiruošk prarasti nuovoką, kai pamatysi jį scenoje!'
  },
  {
    name: 'Freda Varnaitė',
    realName: 'Emilija',
    image: milenaMeiluteImage,
    description: 'Freda – landi žurnalistė, žinanti visas miesto paskalas. Jos konfrontacinis būdas vieną dieną gali ją įstumti į rimtą pavojų.'
  },
]

function SpeakeasyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [inputName, setInputName] = useState('')
  const [resultCharacter, setResultCharacter] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    setInputName('')
    setResultCharacter(null)
    setErrorMessage(null)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setInputName('')
    setResultCharacter(null)
    setErrorMessage(null)
  }

  const handleOpenInfoModal = () => {
    setIsInfoModalOpen(true)
  }

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const normalizedName = inputName.trim().toLowerCase()
    const originalName = inputName.trim()
    
    // Search for character by realName
    const foundCharacter = characters.find(
      char => char.realName.toLowerCase() === normalizedName
    )
    
    // Add a small delay for smooth transition
    setTimeout(() => {
      if (foundCharacter) {
        setResultCharacter(foundCharacter)
        setErrorMessage(null)
      } else {
        // If name not found, show error message
        setErrorMessage(originalName)
        setResultCharacter(null)
      }
    }, 300)
  }

  return (
    <div className="guestlist-container">
      <div className="guestlist-border">
        <div className="guestlist-top-border">
          <div className="top-border-pattern"></div>
          <div className="top-fan-motif"></div>
          {/* Side Ornaments */}
          <div className="side-ornament side-left"></div>
          <div className="side-ornament side-right"></div>
        </div>
        <div className="guestlist-content">
          <h1 className="guestlist-title">SVECIŲ SARAŠAS</h1>
          <div className="title-divider"></div>
          <div className="action-buttons">
            <button className="action-button" onClick={handleOpenModal}>Kas aš esu?</button>
            <button className="action-button" onClick={handleOpenInfoModal}>Kas čia bus?</button>
          </div>
          
          {/* Character Modal */}
          {isModalOpen && (
            <div className="modal-overlay" onClick={handleCloseModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={handleCloseModal}>×</button>
                {!resultCharacter && !errorMessage ? (
                  <form onSubmit={handleSubmit} className="character-form form-enter">
                    <p className="modal-instruction">
                      Įveskite savo vardą, kad sužinotumėt, koks personažas esate
                    </p>
                    <input
                      type="text"
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                      className="character-input"
                      placeholder="Jūsų vardas..."
                      autoFocus
                    />
                    <button type="submit" className="submit-button">
                      Sužinoti
                    </button>
                  </form>
                ) : errorMessage ? (
                  <div className="error-message error-enter">
                    <p className="error-text">
                      <span className="error-name">{errorMessage}</span> nėra svečių sąraše
                    </p>
                    <button onClick={() => { setErrorMessage(null); setInputName('') }} className="try-again-button">
                      Bandyti dar kartą
                    </button>
                  </div>
                ) : (
                  <div className="character-result result-enter">
                    <h2 className="result-title">JŪSŲ PERSONAŽAS</h2>
                    <div className="result-character-header">
                      <h3 className="result-character-name">{resultCharacter.name}</h3>
                    </div>
                    <p className="result-character-description">{resultCharacter.description}</p>
                    <div className="result-character-illustration">
                      <img 
                        src={resultCharacter.image} 
                        alt={resultCharacter.name}
                        className="result-character-avatar-image"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Info Modal */}
          {isInfoModalOpen && (
            <div className="modal-overlay" onClick={handleCloseInfoModal}>
              <div className="modal-content info-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={handleCloseInfoModal}>×</button>
                <div className="info-content">
                  <h2 className="info-title">KAS ČIA BUS?</h2>
                  <div className="info-section">
                    <p className="info-text">
                      Vienas iš vakarėlio žaidimų - <strong>Murder Mystery</strong>. Kiekvienam jūsų yra priskirtas personažas, žaidimo metu turėsite bendrauti ir elgtis pagal jo aprašymą. Žaidimo pradžioje gausite daugiau informacijos apie savo personažą, o eigoje reikės išsiaiškinti daugiau detalių apie kitus svečius.
                    </p>
                  </div>
                  
                  <div className="info-section">
                    <p className="info-text">
                    Kažkuriuo metu vienas iš jūsų bus „nužudytas“, o kažkas taps žudiku. Remdamiesi žaidimo metu surinkta informacija apie personažus, bei kitais įkalčiais, turėsite diskutuoti ir išsiaiškinti, kas yra kaltininkas. Kaltininkas, žinoma, bandys pakišti kažką kitą. „Nužudytas“ personažas iš žaidimo neiškrenta – jis toliau dalyvaus kaip vaiduoklis.
                    </p>
                  </div>

                  <div className="info-section">
                    <p className="info-text">
                    Žaidimo pabaigoje vyks balsavimas: arba atspėsite žudiką, arba neteisingai nuteisite nekaltą žmogų :)
                    </p>
                  </div>
                
                  
                  <div className="info-section">
                    <h3 className="info-subtitle">Ar reikia kažkaip pasiruošti?</h3>
                    <p className="info-text">
                    Ne, viskas bus paruošta. Žaidimo atmosfera – „roaring 20's", bet mes patys jau jokio kostiumo susiveikti nebespėsim :D Jei norit, galima pasipuošti kokia nors „roaring 20's" detale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="characters-grid">
            {characters.map((character, index) => (
              <div key={index} className="character-card fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                {/* Card Corner Ornaments */}
                <div className="card-ornament card-ornament-top-left"></div>
                <div className="card-ornament card-ornament-top-right"></div>
                <div className="card-ornament card-ornament-bottom-left"></div>
                <div className="card-ornament card-ornament-bottom-right"></div>
                
                <div className="character-header">
                  <h3 className="character-name">{character.name}</h3>
                </div>
                <div className="character-illustration">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="character-avatar-image"
                  />
                </div>
                <p className="character-description">{character.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="guestlist-bottom-border">
          {/* Bottom Ornaments */}
          <div className="bottom-ornament bottom-ornament-left"></div>
          <div className="bottom-ornament bottom-ornament-right"></div>
        </div>
      </div>
    </div>
  )
}

export default SpeakeasyPage
