'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #1a2a3a 0%, #0f1f2f 50%, #0a1f2f 100%)',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '0'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; }
        * { box-sizing: border-box; }
      `}</style>

      {/* Hero Section */}
      <section style={{
        padding: '80px 40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(41, 128, 185, 0.1) 100%)'
      }}>
        <h1 style={{
          fontSize: '3.5em',
          background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
          fontWeight: 800,
          textShadow: '0 4px 20px rgba(255, 152, 0, 0.25), 0 8px 40px rgba(255, 152, 0, 0.15), 0 0 60px rgba(225, 190, 231, 0.4)',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.12)',
          filter: 'drop-shadow(0 2px 4px rgba(225, 190, 231, 0.35))'
        }}>
          📚 LearnAI Platform
        </h1>
        <p style={{
          fontSize: '1.4em',
          color: '#5DADE2',
          maxWidth: '800px',
          margin: '0 auto 40px',
          lineHeight: 1.6
        }}>
          Votre agent IA personnalisé pour un apprentissage adapté, efficace et souverain
        </p>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '30px'
        }}>
          {['✅ 100% Personnalisé', '🧠 IA Locale', '📊 Analytics Progression', '🔒 Privacy-First', '🎯 Objectifs Adaptatifs'].map((badge, idx) => (
            <span key={idx} style={{
              background: 'rgba(52, 152, 219, 0.2)',
              border: '1px solid rgba(52, 152, 219, 0.4)',
              color: '#3498DB',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '0.95em',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(52, 152, 219, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(52, 152, 219, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(52, 152, 219, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(52, 152, 219, 0.4)';
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Vue d'Ensemble */}
      <section style={{
        padding: '60px 40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 style={{
          color: '#3498DB',
          fontSize: '2.5em',
          textAlign: 'center',
          marginBottom: '50px',
          fontWeight: 700
        }}>
          📖 Vue d'Ensemble
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {[
            { icon: '🧠', title: 'Agent IA Personnalisé', desc: 'Ollama local adapté à votre profil d\'apprentissage et objectifs' },
            { icon: '📊', title: 'Analytics Progression', desc: 'DuckDB time-series tracking compétences et performance' },
            { icon: '🎓', title: 'Content Sync', desc: 'Synchronisation automatique matière cours et ressources' },
            { icon: '🔐', title: 'Privacy Learning', desc: '100% local, vos données apprentissage restent souveraines' }
          ].map((feature, idx) => (
            <div key={idx} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '30px',
              borderRadius: '15px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(52, 152, 219, 0.6)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(52, 152, 219, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3em', marginBottom: '15px' }}>{feature.icon}</div>
              <h3 style={{ color: '#3498DB', fontSize: '1.3em', marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: '#c0c0c0', lineHeight: 1.6, fontSize: '1em' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Métriques Pilote */}
      <section style={{
        padding: '60px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(41, 128, 185, 0.05) 100%)',
        borderRadius: '20px'
      }}>
        <h2 style={{
          color: '#3498DB',
          fontSize: '2.5em',
          textAlign: 'center',
          marginBottom: '50px',
          fontWeight: 700
        }}>
          📈 Métriques Programme Pilote
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px'
        }}>
          {[
            { value: '850', label: 'Étudiants actifs', unit: '' },
            { value: '+42%', label: 'Amélioration résultats', unit: '' },
            { value: '94%', label: 'Satisfaction (NPS)', unit: '' },
            { value: '4.2h', label: 'Engagement/semaine', unit: '' },
            { value: '€0', label: 'Coût IA par étudiant', unit: '' },
            { value: '100%', label: 'Données EU (RGPD)', unit: '' }
          ].map((metric, idx) => (
            <div key={idx} style={{
              background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(93, 173, 226, 0.15) 100%)',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center',
              border: '2px solid rgba(52, 152, 219, 0.3)',
              transition: 'all 0.3s ease'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(52, 152, 219, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: '3em',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px'
              }}>
                {metric.value}
              </div>
              <div style={{ color: '#5DADE2', fontSize: '1.1em', fontWeight: 600 }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section style={{
        padding: '60px 40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 style={{
          color: '#3498DB',
          fontSize: '2.5em',
          textAlign: 'center',
          marginBottom: '50px',
          fontWeight: 700
        }}>
          🎯 Cas d'Usage
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {[
            { title: 'Suivi Personnalisé Cours', icon: '📚', slug: 'suivi-cours', desc: 'Agent IA synchronisé avec matière vue en classe pour assistance contextuelle' },
            { title: 'Coaching Objectifs', icon: '🎯', slug: 'coaching-objectifs', desc: 'Accompagnement personnalisé vers objectifs académiques et professionnels' },
            { title: 'Évaluation Adaptative', icon: '📝', slug: 'evaluation-adaptive', desc: 'Tests auto-adaptatifs au niveau et diagnostic lacunes précis' },
            { title: 'Tutorat Collaboratif', icon: '🤝', slug: 'tutorat-collaboratif', desc: 'Mise en relation pairs + experts basée sur compétences et besoins' }
          ].map((useCase, idx) => (
            <div key={idx} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '30px',
              borderRadius: '15px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onClick={() => window.location.href = `/use-cases/${useCase.slug}`}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(52, 152, 219, 0.6)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(52, 152, 219, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3.5em', marginBottom: '15px', textAlign: 'center' }}>{useCase.icon}</div>
              <h3 style={{ color: '#3498DB', fontSize: '1.4em', marginBottom: '12px', textAlign: 'center' }}>{useCase.title}</h3>
              <p style={{ color: '#c0c0c0', lineHeight: 1.6, fontSize: '0.95em', textAlign: 'center' }}>{useCase.desc}</p>
              <div style={{
                marginTop: '20px',
                textAlign: 'center'
              }}>
                <span style={{
                  color: '#3498DB',
                  fontSize: '0.9em',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}>
                  Explorer →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section style={{
        padding: '60px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(41, 128, 185, 0.05) 100%)',
        borderRadius: '20px'
      }}>
        <h2 style={{
          color: '#3498DB',
          fontSize: '2.5em',
          textAlign: 'center',
          marginBottom: '50px',
          fontWeight: 700
        }}>
          🏗️ Architecture Platform
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {[
            { title: 'Agent IA Personnalisé', icon: '🧠', tech: ['Ollama deepseek-r1', 'Profil dynamique', 'Contexte cours'], slug: 'agent-ia' },
            { title: 'Analytics Progression', icon: '📊', tech: ['DuckDB time-series', 'Tracking compétences', 'Dashboards'], slug: 'analytics-progression' },
            { title: 'Content Management', icon: '🎓', tech: ['Sync matière auto', 'Ressources adaptées', 'Multi-formats'], slug: 'content-management' },
            { title: 'Privacy Learning', icon: '🔐', tech: ['100% local', 'RGPD compliant', 'Souveraineté EU'], slug: 'privacy-learning' }
          ].map((arch, idx) => (
            <div key={idx} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '30px',
              borderRadius: '15px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onClick={() => window.location.href = `/architecture/${arch.slug}`}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(93, 173, 226, 0.6)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(93, 173, 226, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3em', marginBottom: '15px', textAlign: 'center' }}>{arch.icon}</div>
              <h3 style={{ color: '#5DADE2', fontSize: '1.3em', marginBottom: '15px', textAlign: 'center' }}>{arch.title}</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px', fontSize: '0.9em', listStyle: 'none' }}>
                {arch.tech.map((t, tidx) => (
                  <li key={tidx} style={{ marginBottom: '8px' }}>• {t}</li>
                ))}
              </ul>
              <div style={{
                marginTop: '20px',
                textAlign: 'center'
              }}>
                <span style={{
                  color: '#5DADE2',
                  fontSize: '0.9em',
                  fontWeight: 600
                }}>
                  Détails →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '60px 20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '80px'
      }}>
        <p style={{ fontSize: '1.2em', color: '#5DADE2', marginBottom: '20px' }}>
          FFT Cognitive Foundation • LearnAI Platform • 2025
        </p>
        <p style={{ fontSize: '0.9em', color: '#888' }}>
          Votre parcours d'apprentissage, optimisé par IA locale et souveraine
        </p>
      </footer>
    </div>
  );
}
