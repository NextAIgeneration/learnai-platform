# CLAUDE.md - LearnAI Platform

**Last Updated**: 25 Octobre 2025 - Optimisation Charte Graphique
**Project Status**: ✅ Production Ready (Vercel deployed)

---

## 📋 SESSION RÉCENTE (25 Oct 2025 - Optimisation Visuelle)

### **Charte Graphique 3ème Couleur Complémentaire**

**Visual Enhancement Applied:**
- ✅ Added 3rd complementary color (Violet #E1BEE7) to title styling
- ✅ Added `WebkitTextStroke: '1px rgba(255, 255, 255, 0.12)'` for educational text outline
- ✅ Added `filter: 'drop-shadow(0 2px 4px rgba(225, 190, 231, 0.35))'` for violet depth
- ✅ Enhanced textShadow system with 3 layers:
  - Layer 1: Orange shadow (close + visible) - 0.25 alpha
  - Layer 2: Orange diffuse (far + soft) - 0.15 alpha
  - Layer 3: Violet glow (omnidirectional NEW) - 0.4 alpha

**Color Palette (Triadic):**
```yaml
Primary: Light Blue #3498DB (gradient)
2nd Complementary: Orange #FF9800 (directional shadow)
3rd Complementary: Violet #E1BEE7 (creativity + wisdom theme)
```

**Visual Impact:**
- 📚 Learning icon + creativity harmonious
- Violet represents wisdom, innovation, imagination
- Balance: Logic (blue) + Action (orange) + Creativity (violet)
- Modern and warm educational aesthetic

**Reference:**
- Exemplar pattern: COSMIC RAG GitHub
- Documentation: `/Users/enzoxic/Documents/fft-mercure-vault/📝 Notes/🎨 CHARTE GRAPHIQUE - 3ème Couleur Complémentaire.md`

**Commits:**
- `cff8d3c` - style: Add 3rd complementary color
- Pushed to GitHub + GitLab successfully
- Build successful: 11 pages generated (938.2ms)

---

## 🚀 ARCHITECTURE ACTUELLE

### **Tech Stack**
```yaml
Frontend: Next.js 16.0 + React 19.2 + TypeScript
Styling: Tailwind CSS 4.0
Deployment: Vercel (auto-deploy from GitHub)
Repository:
  GitHub: github.com/NextAIgeneration/learnai-platform
  GitLab: gitlab.com/enzoxic03/learnai-platform
```

### **Key Features**
- 🧠 Personalized AI agent (Ollama deepseek-r1 local)
- 📊 Progress analytics (DuckDB time-series tracking)
- 🎓 Content sync (automated course material synchronization)
- 📈 Adaptive learning paths (AI-driven objectives)
- 🔐 Privacy-first (100% local, RGPD compliant)

### **Color Scheme**
```yaml
Primary: Light Blue #3498DB → #2980B9 (learning, trust)
Background: Dark blue #1a2a3a → #0f1f2f → #0a1f2f
Accent: Sky blue #5DADE2
2nd Complementary: Orange #FF9800 (action, warmth)
3rd Complementary: Violet #E1BEE7 (creativity, wisdom)
```

---

## 🎯 USE CASES

1. **📚 Suivi Personnalisé Cours** - AI synchronized with classroom material for contextual assistance
2. **🎯 Coaching Objectifs** - Personalized coaching towards academic and professional goals
3. **📝 Évaluation Adaptative** - Self-adaptive tests with precise gap diagnosis
4. **🤝 Tutorat Collaboratif** - Peer + expert matching based on skills and needs

---

## 📊 MÉTRIQUES PROGRAMME PILOTE

```yaml
Étudiants actifs: 850
Amélioration résultats: +42%
Satisfaction (NPS): 94%
Engagement/semaine: 4.2h
Coût IA par étudiant: €0 (local deployment)
Données EU (RGPD): 100% compliant
```

---

## 🎨 CHARTE GRAPHIQUE - COHÉRENCE COSMIC

| Projet | Couleur Primary | 2nd Complementary | 3rd Complementary |
|--------|----------------|-------------------|-------------------|
| COSMIC RAG | Magenta #E035A2 | Cyan #00E0A2 | - (already optimal) |
| CitizenHub | Blue #1565C0 | Orange #FF9800 | White #FFF + Cyan #00E5FF |
| AgriSurvey | Green #2ECC71 | Magenta #E02E71 | Gold #FFD700 |
| econergy | Orange #FF9800 | Cyan #0098FF | Gold #FFD700 |
| **LearnAI** | **Light Blue #3498DB** | **Orange #FF9800** | **Violet #E1BEE7** |

**Documentation:** See `🎨 CHARTE GRAPHIQUE - 3ème Couleur Complémentaire.md` in Obsidian vault

---

## 🔗 URLS IMPORTANTES

**Production:**
- Vercel: https://learnai-platform.vercel.app (or enzoxics-projects subdomain)

**Repositories:**
- GitHub: https://github.com/NextAIgeneration/learnai-platform
- GitLab: https://gitlab.com/enzoxic03/learnai-platform

---

## 📋 BACKLOG / TODO

### **Court-terme (Cette Semaine)**
- [ ] Create architecture pages (Agent IA, Analytics, Content Management, Privacy)
- [ ] Expand use cases with detailed user journeys
- [ ] Create README.md
- [ ] Add GitHub About section (description, topics, website)

### **Moyen-terme (Ce Mois)**
- [ ] Setup SEO metadata (OpenGraph, Twitter Cards)
- [ ] Create Adobe CC assets (logo, OG images, favicons)
- [ ] Setup Vercel Analytics
- [ ] Configure GitLab CI/CD pipeline

### **Long-term (Q4 2025)**
- [ ] Pilot program expansion (850 → 2000 students)
- [ ] Integration with econergy (Campus Éducatif use case synergy)
- [ ] Blog post (EdTech + COSMIC EU 2025)
- [ ] First university partnership case study

---

## 💡 NOTES IMPORTANTES

**AI Agent Stack:**
- Ollama (local LLM deployment)
- deepseek-r1 model (reasoning + instruction-following)
- Dynamic student profile (learning style, pace, goals)
- Context-aware course synchronization

**Analytics Stack:**
- DuckDB (embedded time-series database)
- Competency tracking (skill tree visualization)
- Performance metrics (progress rate, retention, mastery)
- Predictive analytics (early warning system for struggling students)

**Privacy Architecture:**
- 100% local data processing (no cloud LLM calls)
- RGPD/GDPR compliant by design
- Data sovereignty (EU-hosted, student-owned data)
- Zero external API calls for AI inference

**Synergies COSMIC:**
- econergy → Campus Éducatif (living lab IoT integration)
- Shared sustainability + innovation education themes

---

## 🤝 COLLABORATION

**Working with Claude Code:**
- Always read CLAUDE.md before major changes
- Update this file after significant work
- Use conventional commits (feat:, fix:, docs:, style:)
- Test locally before pushing to production

**Git Workflow:**
```bash
# Local work
git add -A
git commit -m "type: description"

# Push to both remotes
git push github main
git push gitlab main
```

---

**Next Session**: Documentation + Architecture Pages Creation
**Status**: 🟢 PRODUCTION READY
**Confidence**: 💯 100%
