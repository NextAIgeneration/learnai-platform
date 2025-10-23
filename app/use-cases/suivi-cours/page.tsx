'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SuiviCours() {
  const metrics = [
    { label: 'Synchronisation', value: '<5min', desc: 'après cours magistral' },
    { label: 'Contexte Précis', value: '95%', desc: 'questions alignées matière' },
    { label: 'Disponibilité', value: '24/7', desc: 'assistance illimitée' },
    { label: 'Satisfaction', value: '4.7/5', desc: 'étudiants programme pilote' }
  ];

  const capabilities = [
    {
      title: 'Sync Matière Auto',
      icon: '🔄',
      features: [
        'Intégration syllabi universités (API)',
        'OCR slides/notes professeur',
        'Transcription audio cours (Whisper)',
        'Indexation sémantique (BelgBERT)'
      ]
    },
    {
      title: 'Assistance Contextuelle',
      icon: '💡',
      features: [
        'Questions réponses alignées cours',
        'Exemples adaptés au chapitre actuel',
        'Clarification concepts vus en classe',
        'Liens ressources complémentaires'
      ]
    },
    {
      title: 'Suivi Progression',
      icon: '📊',
      features: [
        'Tracking chapitres maîtrisés',
        'Identification lacunes automatique',
        'Révisions ciblées pré-examen',
        'Prédiction performance (ML)'
      ]
    },
    {
      title: 'Agent Personnalisé',
      icon: '🧠',
      features: [
        'Profil apprentissage dynamique',
        'Style pédagogique adapté',
        'Rythme personnalisé',
        'Mémoire conversations (context window)'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a2a3a 0%, #0f1f2f 50%, #0a1f2f 100%)',
      color: '#e0e0e0'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

        .swiper {
          width: 100%;
          height: 100vh;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #3498DB !important;
          background: rgba(52, 152, 219, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          background: #3498DB;
          box-shadow: 0 0 15px rgba(52, 152, 219, 0.6);
        }

        .swiper-pagination {
          bottom: 30px !important;
          left: 50% !important;
          transform: translateX(-50%);
          width: auto !important;
          display: flex;
          flex-direction: row;
          gap: 10px;
        }
      `}</style>

      <Swiper
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {/* Slide 1: Hero */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <a href="/" style={{
              color: '#3498DB',
              fontSize: '1rem',
              marginBottom: '40px',
              display: 'inline-block',
              textDecoration: 'none'
            }}>
              ← Retour à l'accueil
            </a>
            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '30px',
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(52, 152, 219, 0.15), 0 8px 40px rgba(52, 152, 219, 0.1)'
            }}>
              📚 Suivi Personnalisé Cours
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#5DADE2',
              lineHeight: 1.8,
              maxWidth: '800px',
              marginBottom: '40px'
            }}>
              Agent IA synchronisé automatiquement avec matière vue en classe pour assistance contextuelle 24/7
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginTop: '50px'
            }}>
              {metrics.map((metric, idx) => (
                <div key={idx} style={{
                  background: 'rgba(52, 152, 219, 0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(52, 152, 219, 0.3)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#3498DB', marginBottom: '5px' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.95em', color: '#5DADE2', fontWeight: 600, marginBottom: '5px' }}>
                    {metric.label}
                  </div>
                  <div style={{ fontSize: '0.8em', color: '#888' }}>
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Pipeline */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(52, 152, 219, 0.3)',
              paddingBottom: '15px'
            }}>
              🔄 Pipeline Synchronisation Matière
            </h2>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '50px',
              borderRadius: '20px',
              fontFamily: 'monospace',
              color: '#5DADE2',
              lineHeight: 2,
              fontSize: '1.1em',
              border: '2px solid rgba(52, 152, 219, 0.2)'
            }}>
              <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│            🎓 COURS MAGISTRAL (Amphi 350)               │
│      Professeur présente Chapitre 5 - Algorithmique    │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ Capture Multi-Canaux
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
 ┌─────────────┐         ┌─────────────┐
 │ 📄 Slides   │         │ 🎤 Audio    │
 │ (PDF OCR)   │         │ (Whisper)   │
 └──────┬──────┘         └──────┬──────┘
        │                       │
        │    Extraction         │
        │    Contenu            │
        │                       │
        └───────────┬───────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │  🧠 BelgBERT          │
        │  Embeddings           │
        │  • Indexation texte   │
        │  • Graphe concepts    │
        │  • Liens prérequis    │
        └───────┬───────────────┘
                │
                ▼
        ┌───────────────────────┐
        │  💾 DuckDB Vector DB  │
        │  • Embeddings 768d    │
        │  • Métadata (date,ch.)│
        │  • Relations concepts │
        └───────┬───────────────┘
                │
                ▼
        ┌───────────────────────┐
        │  🤖 Agent Étudiant    │
        │  • Questions/réponses │
        │  • Contexte chapitre  │
        │  • Assistance 24/7    │
        └───────────────────────┘`}</pre>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Capabilities */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(52, 152, 219, 0.3)',
              paddingBottom: '15px'
            }}>
              🚀 Capacités Agent Cours
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {capabilities.map((capability, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{
                    fontSize: '3em',
                    marginBottom: '15px'
                  }}>
                    {capability.icon}
                  </div>
                  <h3 style={{
                    color: '#3498DB',
                    fontSize: '1.5em',
                    marginBottom: '20px',
                    fontWeight: 700
                  }}>
                    {capability.title}
                  </h3>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1em' }}>
                    {capability.features.map((feature, featureIdx) => (
                      <li key={featureIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4: Use Case Example */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(52, 152, 219, 0.3)',
              paddingBottom: '15px'
            }}>
              📋 Cas d'Usage : Étudiant Informatique L2
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(93, 173, 226, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(52, 152, 219, 0.3)'
            }}>
              <h3 style={{ color: '#3498DB', fontSize: '2em', marginBottom: '25px' }}>
                💻 Cours Algorithmique - Tri Fusion (Merge Sort)
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '30px',
                marginBottom: '30px'
              }}>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '25px',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ color: '#F39C12', fontSize: '1.3em', marginBottom: '15px' }}>
                    ⚠️ Situation Avant
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Cours magistral dense (3h continu)</li>
                    <li>Prise notes incomplète (rythme rapide)</li>
                    <li>Questions non posées (timidité amphi)</li>
                    <li>Révision seul (slides insuffisants)</li>
                  </ul>
                </div>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '25px',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ color: '#3498DB', fontSize: '1.3em', marginBottom: '15px' }}>
                    ✅ Avec LearnAI
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Transcription audio complète (Whisper)</li>
                    <li>Agent disponible immédiatement après cours</li>
                    <li>Questions illimitées contextualisées</li>
                    <li>Exemples Code génération automatique</li>
                  </ul>
                </div>
              </div>
              <div style={{
                background: 'rgba(52, 152, 219, 0.2)',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid rgba(52, 152, 219, 0.4)'
              }}>
                <h4 style={{ color: '#F39C12', fontSize: '1.4em', marginBottom: '15px' }}>
                  📈 Résultats Mesurés (Semestre 1)
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '20px',
                  marginTop: '20px'
                }}>
                  {[
                    { metric: '+18%', label: 'Note moyenne' },
                    { metric: '4.2h', label: 'Engagement/semaine' },
                    { metric: '95%', label: 'Questions résolues' },
                    { metric: '78%', label: 'Réussite examen (+25%)' }
                  ].map((result, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '2.2em',
                        fontWeight: 800,
                        color: '#F39C12',
                        marginBottom: '5px'
                      }}>
                        {result.metric}
                      </div>
                      <div style={{ fontSize: '0.9em', color: '#5DADE2' }}>
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5: Conversation Example */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(52, 152, 219, 0.3)',
              paddingBottom: '15px'
            }}>
              💬 Exemple Conversation avec Agent
            </h2>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(52, 152, 219, 0.2)'
            }}>
              {[
                {
                  role: 'student',
                  text: 'Je n\'ai pas bien compris la complexité du tri fusion. Pourquoi c\'est O(n log n) ?'
                },
                {
                  role: 'agent',
                  text: 'Excellente question ! Dans le cours de ce matin (Chapitre 5, slide 12), le professeur a expliqué que le tri fusion divise récursivement le tableau en 2 moitiés.\n\n**Décomposition:**\n• Division: log₂(n) niveaux (car on divise par 2 à chaque fois)\n• Fusion: n comparaisons par niveau\n• Total: n × log₂(n) = O(n log n)\n\nVeux-tu que je génère un exemple avec n=8 pour visualiser les niveaux ?'
                },
                {
                  role: 'student',
                  text: 'Oui s\'il te plaît !'
                },
                {
                  role: 'agent',
                  text: '```python\n# Exemple n=8 → 3 niveaux (log₂ 8 = 3)\n[38, 27, 43, 3, 9, 82, 10, 15]  ← Niveau 0\n   ↓ Divise en 2\n[38,27,43,3] | [9,82,10,15]  ← Niveau 1\n   ↓ Divise encore\n[38,27]|[43,3] | [9,82]|[10,15]  ← Niveau 2\n   ↓ Divise (cas base)\n[38]|[27]|[43]|[3] | [9]|[82]|[10]|[15]  ← Niveau 3\n   ↑ Fusionne (tri)\n[27,38]|[3,43] | [9,82]|[10,15]  ← Remonte\n   ↑ Fusionne\n[3,27,38,43] | [9,10,15,82]  ← Remonte\n   ↑ Fusionne final\n[3,9,10,15,27,38,43,82]  ← Trié !\n```\n\nChaque niveau fait 8 comparaisons.\n3 niveaux × 8 = 24 opérations.\nGénéralisé: log₂(n) × n = O(n log n)'
                }
              ].map((msg, idx) => (
                <div key={idx} style={{
                  marginBottom: '25px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.role === 'student' ? 'flex-end' : 'flex-start'
                }}>
                  <div style={{
                    background: msg.role === 'student'
                      ? 'linear-gradient(135deg, rgba(93, 173, 226, 0.2) 0%, rgba(52, 152, 219, 0.2) 100%)'
                      : 'linear-gradient(135deg, rgba(52, 152, 219, 0.2) 0%, rgba(41, 128, 185, 0.2) 100%)',
                    border: `2px solid ${msg.role === 'student' ? 'rgba(93, 173, 226, 0.4)' : 'rgba(52, 152, 219, 0.4)'}`,
                    padding: '20px',
                    borderRadius: '15px',
                    maxWidth: '80%',
                    color: '#e0e0e0',
                    fontSize: '1.05em',
                    lineHeight: 1.8
                  }}>
                    <div style={{
                      fontSize: '0.85em',
                      color: msg.role === 'student' ? '#5DADE2' : '#3498DB',
                      marginBottom: '10px',
                      fontWeight: 600
                    }}>
                      {msg.role === 'student' ? '👤 Étudiant' : '🤖 Agent LearnAI'}
                    </div>
                    <pre style={{
                      whiteSpace: 'pre-wrap',
                      margin: 0,
                      fontFamily: msg.text.includes('```') ? 'monospace' : "'Poppins', sans-serif",
                      fontSize: msg.text.includes('```') ? '0.9em' : '1em'
                    }}>
                      {msg.text}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6: Mission Accomplie */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px'
            }}>
              🎯 Assistance Pédagogique 24/7
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#5DADE2',
              lineHeight: 1.8,
              maxWidth: '700px',
              margin: '0 auto 50px'
            }}>
              Agent IA synchronisé automatiquement avec matière pour accompagnement personnalisé continu
            </p>
            <div style={{
              background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(93, 173, 226, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(52, 152, 219, 0.3)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{ color: '#3498DB', marginBottom: '25px', fontSize: '1.5em' }}>💡 Avantages Clés</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2.2, paddingLeft: '25px', fontSize: '1.1em', textAlign: 'left' }}>
                <li><strong style={{ color: '#3498DB' }}>Sync Auto:</strong> Matière disponible <5min après cours</li>
                <li><strong style={{ color: '#3498DB' }}>Contextuel:</strong> 95% questions alignées chapitre actuel</li>
                <li><strong style={{ color: '#3498DB' }}>Privacy:</strong> 100% local (BelgBERT + Ollama)</li>
                <li><strong style={{ color: '#3498DB' }}>Performance:</strong> +18% note moyenne validé</li>
              </ul>
            </div>
            <div style={{ marginTop: '50px' }}>
              <a
                href="/"
                style={{
                  background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
                  color: '#fff',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1em',
                  fontWeight: 700,
                  display: 'inline-block',
                  boxShadow: '0 5px 20px rgba(52, 152, 219, 0.4)'
                }}
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
