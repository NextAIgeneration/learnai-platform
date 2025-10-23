'use client';
export default function AgentIA() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: 'linear-gradient(135deg, #1a2a3a 0%, #0f1f2f 50%, #0a1f2f 100%)', color: '#e0e0e0', minHeight: '100vh', padding: '40px 20px' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap'); body { margin: 0; padding: 0; }`}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}><a href="/" style={{ color: '#3498DB', fontSize: '1rem', marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>← Retour</a><h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '15px', background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🧠 Agent IA Personnalisé</h1><p style={{ fontSize: '1.2rem', color: '#5DADE2', lineHeight: 1.6 }}>Stack IA locale (BelgBERT + Ollama) adaptée au profil d'apprentissage individuel</p></header>
        <section style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', marginBottom: '40px' }}><h2 style={{ color: '#3498DB', fontSize: '2em', marginBottom: '20px', borderBottom: '2px solid rgba(52, 152, 219, 0.3)', paddingBottom: '10px' }}>Architecture Hybride BelgBERT + Ollama</h2><div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '30px', borderRadius: '12px', fontFamily: 'monospace', color: '#5DADE2', lineHeight: 1.8, overflowX: 'auto', fontSize: '0.9em' }}><pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│             🧠 AGENT IA PERSONNALISÉ                    │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴──────────────┐
        │                           │
        ▼                           ▼
┌──────────────────┐      ┌──────────────────┐
│  🇧🇪 BelgBERT    │      │  🤖 Ollama Local │
│  (SwissBERT)     │      │  deepseek-r1     │
│                  │      │                  │
│  USE CASES:      │      │  USE CASES:      │
│  • Embeddings    │      │  • Raisonnement  │
│  • Compréhension │      │  • Génération    │
│    français BE   │      │  • Code assist   │
│  • Indexation    │      │  • Q&A complexe  │
│    matière cours │      │                  │
└─────────┬────────┘      └─────────┬────────┘
          │                         │
          │   Coordination          │
          └────────┬────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │  💾 DuckDB Profil    │
        │  • Historique conv.  │
        │  • Lacunes           │
        │  • Préférences       │
        │  • Performance       │
        └──────────────────────┘`}</pre></div></section>
        <section style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', marginBottom: '40px' }}><h2 style={{ color: '#3498DB', fontSize: '2em', marginBottom: '20px', borderBottom: '2px solid rgba(52, 152, 219, 0.3)', paddingBottom: '10px' }}>🇧🇪 BelgBERT - Modèle Fondation</h2><div style={{ display: 'grid', gap: '25px', marginTop: '30px' }}>{[ { title: 'Fine-Tuning Éducatif BE', points: ['Corpus syllabi universités belges', 'Terminologie académique FR-BE', 'Expressions pédagogiques locales', 'Adaptation contexte EU/Wallonie'] }, { title: 'Performance Embeddings', points: ['Vectorisation 768 dimensions', 'Latence <50ms (in-process)', 'Cosine similarity 0.85+ (précision)', 'Context window 512 tokens'] }, { title: 'Privacy & Souveraineté', points: ['100% exécution locale (Mac/Linux)', 'Aucune API call externe', 'Données étud. souveraines', 'RGPD compliant by design'] } ].map((section, idx) => (<div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '30px', borderRadius: '12px', border: '2px solid rgba(255, 255, 255, 0.08)' }}><h3 style={{ color: '#3498DB', fontSize: '1.5em', marginBottom: '20px' }}>{section.title}</h3><ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>{section.points.map((p, pidx) => (<li key={pidx}>{p}</li>))}</ul></div>))}</div></section>
        <section style={{ background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(93, 173, 226, 0.15) 100%)', padding: '30px', borderRadius: '12px', border: '1px solid rgba(52, 152, 219, 0.3)', marginBottom: '40px' }}><h3 style={{ color: '#3498DB', marginBottom: '20px', fontSize: '1.4em' }}>💡 Avantages Stack Hybride</h3><ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}><li><strong style={{ color: '#3498DB' }}>BelgBERT:</strong> Compréhension optimale français BE + contexte local</li><li><strong style={{ color: '#3498DB' }}>Ollama:</strong> Raisonnement profond (deepseek-r1) pour problèmes complexes</li><li><strong style={{ color: '#3498DB' }}>Privacy:</strong> 100% local, aucune donnée étudiant ne quitte l'appareil</li><li><strong style={{ color: '#3498DB' }}>Coût:</strong> €0 inférence (vs €0.02/requête Claude API)</li></ul></section>
        <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#888' }}><p style={{ marginBottom: '10px' }}><a href="/" style={{ color: '#3498DB', textDecoration: 'none', marginRight: '20px' }}>Accueil</a><a href="/docs" style={{ color: '#3498DB', textDecoration: 'none' }}>Documentation</a></p><p style={{ fontSize: '0.9em', color: '#5DADE2' }}>FFT Cognitive Foundation • LearnAI Platform • 2025</p></footer>
      </div>
    </div>
  );
}
