module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/learnai-platform/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learnai-platform/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learnai-platform/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "'Poppins', sans-serif",
            background: 'linear-gradient(135deg, #1a2a3a 0%, #0f1f2f 50%, #0a1f2f 100%)',
            color: '#e0e0e0',
            minHeight: '100vh',
            padding: '0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; }
        * { box-sizing: border-box; }
      `
            }, void 0, false, {
                fileName: "[project]/learnai-platform/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '80px 40px',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(41, 128, 185, 0.1) 100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '3.5em',
                            background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '20px',
                            fontWeight: 800,
                            textShadow: '0 4px 20px rgba(52, 152, 219, 0.15), 0 8px 40px rgba(52, 152, 219, 0.1)'
                        },
                        children: "📚 LearnAI Platform"
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.4em',
                            color: '#5DADE2',
                            maxWidth: '800px',
                            margin: '0 auto 40px',
                            lineHeight: 1.6
                        },
                        children: "Votre agent IA personnalisé pour un apprentissage adapté, efficace et souverain"
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '15px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginTop: '30px'
                        },
                        children: [
                            '✅ 100% Personnalisé',
                            '🧠 IA Locale',
                            '📊 Analytics Progression',
                            '🔒 Privacy-First',
                            '🎯 Objectifs Adaptatifs'
                        ].map((badge, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: 'rgba(52, 152, 219, 0.2)',
                                    border: '1px solid rgba(52, 152, 219, 0.4)',
                                    color: '#3498DB',
                                    padding: '10px 20px',
                                    borderRadius: '25px',
                                    fontSize: '0.95em',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    cursor: 'default'
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.background = 'rgba(52, 152, 219, 0.3)';
                                    e.currentTarget.style.borderColor = 'rgba(52, 152, 219, 0.6)';
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.background = 'rgba(52, 152, 219, 0.2)';
                                    e.currentTarget.style.borderColor = 'rgba(52, 152, 219, 0.4)';
                                },
                                children: badge
                            }, idx, false, {
                                fileName: "[project]/learnai-platform/app/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learnai-platform/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '60px 40px',
                    maxWidth: '1400px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#3498DB',
                            fontSize: '2.5em',
                            textAlign: 'center',
                            marginBottom: '50px',
                            fontWeight: 700
                        },
                        children: "📖 Vue d'Ensemble"
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '30px'
                        },
                        children: [
                            {
                                icon: '🧠',
                                title: 'Agent IA Personnalisé',
                                desc: 'Ollama local adapté à votre profil d\'apprentissage et objectifs'
                            },
                            {
                                icon: '📊',
                                title: 'Analytics Progression',
                                desc: 'DuckDB time-series tracking compétences et performance'
                            },
                            {
                                icon: '🎓',
                                title: 'Content Sync',
                                desc: 'Synchronisation automatique matière cours et ressources'
                            },
                            {
                                icon: '🔐',
                                title: 'Privacy Learning',
                                desc: '100% local, vos données apprentissage restent souveraines'
                            }
                        ].map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '30px',
                                    borderRadius: '15px',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(52, 152, 219, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(52, 152, 219, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '3em',
                                            marginBottom: '15px'
                                        },
                                        children: feature.icon
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: '#3498DB',
                                            fontSize: '1.3em',
                                            marginBottom: '12px'
                                        },
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#c0c0c0',
                                            lineHeight: 1.6,
                                            fontSize: '1em'
                                        },
                                        children: feature.desc
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/learnai-platform/app/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learnai-platform/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '60px 40px',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(41, 128, 185, 0.05) 100%)',
                    borderRadius: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#3498DB',
                            fontSize: '2.5em',
                            textAlign: 'center',
                            marginBottom: '50px',
                            fontWeight: 700
                        },
                        children: "📈 Métriques Programme Pilote"
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '30px'
                        },
                        children: [
                            {
                                value: '850',
                                label: 'Étudiants actifs',
                                unit: ''
                            },
                            {
                                value: '+42%',
                                label: 'Amélioration résultats',
                                unit: ''
                            },
                            {
                                value: '94%',
                                label: 'Satisfaction (NPS)',
                                unit: ''
                            },
                            {
                                value: '4.2h',
                                label: 'Engagement/semaine',
                                unit: ''
                            },
                            {
                                value: '€0',
                                label: 'Coût IA par étudiant',
                                unit: ''
                            },
                            {
                                value: '100%',
                                label: 'Données EU (RGPD)',
                                unit: ''
                            }
                        ].map((metric, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(93, 173, 226, 0.15) 100%)',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    border: '2px solid rgba(52, 152, 219, 0.3)',
                                    transition: 'all 0.3s ease'
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(52, 152, 219, 0.3)';
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '3em',
                                            fontWeight: 800,
                                            background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            marginBottom: '10px'
                                        },
                                        children: metric.value
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#5DADE2',
                                            fontSize: '1.1em',
                                            fontWeight: 600
                                        },
                                        children: metric.label
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/learnai-platform/app/page.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learnai-platform/app/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '60px 40px',
                    maxWidth: '1400px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#3498DB',
                            fontSize: '2.5em',
                            textAlign: 'center',
                            marginBottom: '50px',
                            fontWeight: 700
                        },
                        children: "🎯 Cas d'Usage"
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px'
                        },
                        children: [
                            {
                                title: 'Suivi Personnalisé Cours',
                                icon: '📚',
                                slug: 'suivi-cours',
                                desc: 'Agent IA synchronisé avec matière vue en classe pour assistance contextuelle'
                            },
                            {
                                title: 'Coaching Objectifs',
                                icon: '🎯',
                                slug: 'coaching-objectifs',
                                desc: 'Accompagnement personnalisé vers objectifs académiques et professionnels'
                            },
                            {
                                title: 'Évaluation Adaptative',
                                icon: '📝',
                                slug: 'evaluation-adaptive',
                                desc: 'Tests auto-adaptatifs au niveau et diagnostic lacunes précis'
                            },
                            {
                                title: 'Tutorat Collaboratif',
                                icon: '🤝',
                                slug: 'tutorat-collaboratif',
                                desc: 'Mise en relation pairs + experts basée sur compétences et besoins'
                            }
                        ].map((useCase, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '30px',
                                    borderRadius: '15px',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                },
                                onClick: ()=>window.location.href = `/use-cases/${useCase.slug}`,
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(52, 152, 219, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(52, 152, 219, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '3.5em',
                                            marginBottom: '15px',
                                            textAlign: 'center'
                                        },
                                        children: useCase.icon
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: '#3498DB',
                                            fontSize: '1.4em',
                                            marginBottom: '12px',
                                            textAlign: 'center'
                                        },
                                        children: useCase.title
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#c0c0c0',
                                            lineHeight: 1.6,
                                            fontSize: '0.95em',
                                            textAlign: 'center'
                                        },
                                        children: useCase.desc
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '20px',
                                            textAlign: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#3498DB',
                                                fontSize: '0.9em',
                                                fontWeight: 600,
                                                textDecoration: 'none'
                                            },
                                            children: "Explorer →"
                                        }, void 0, false, {
                                            fileName: "[project]/learnai-platform/app/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/learnai-platform/app/page.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learnai-platform/app/page.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '60px 40px',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(41, 128, 185, 0.05) 100%)',
                    borderRadius: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#3498DB',
                            fontSize: '2.5em',
                            textAlign: 'center',
                            marginBottom: '50px',
                            fontWeight: 700
                        },
                        children: "🏗️ Architecture Platform"
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '30px'
                        },
                        children: [
                            {
                                title: 'Agent IA Personnalisé',
                                icon: '🧠',
                                tech: [
                                    'Ollama deepseek-r1',
                                    'Profil dynamique',
                                    'Contexte cours'
                                ],
                                slug: 'agent-ia'
                            },
                            {
                                title: 'Analytics Progression',
                                icon: '📊',
                                tech: [
                                    'DuckDB time-series',
                                    'Tracking compétences',
                                    'Dashboards'
                                ],
                                slug: 'analytics-progression'
                            },
                            {
                                title: 'Content Management',
                                icon: '🎓',
                                tech: [
                                    'Sync matière auto',
                                    'Ressources adaptées',
                                    'Multi-formats'
                                ],
                                slug: 'content-management'
                            },
                            {
                                title: 'Privacy Learning',
                                icon: '🔐',
                                tech: [
                                    '100% local',
                                    'RGPD compliant',
                                    'Souveraineté EU'
                                ],
                                slug: 'privacy-learning'
                            }
                        ].map((arch, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    padding: '30px',
                                    borderRadius: '15px',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                },
                                onClick: ()=>window.location.href = `/architecture/${arch.slug}`,
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(93, 173, 226, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(93, 173, 226, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '3em',
                                            marginBottom: '15px',
                                            textAlign: 'center'
                                        },
                                        children: arch.icon
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: '#5DADE2',
                                            fontSize: '1.3em',
                                            marginBottom: '15px',
                                            textAlign: 'center'
                                        },
                                        children: arch.title
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            color: '#c0c0c0',
                                            lineHeight: 1.8,
                                            paddingLeft: '20px',
                                            fontSize: '0.9em',
                                            listStyle: 'none'
                                        },
                                        children: arch.tech.map((t, tidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                style: {
                                                    marginBottom: '8px'
                                                },
                                                children: [
                                                    "• ",
                                                    t
                                                ]
                                            }, tidx, true, {
                                                fileName: "[project]/learnai-platform/app/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '20px',
                                            textAlign: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#5DADE2',
                                                fontSize: '0.9em',
                                                fontWeight: 600
                                            },
                                            children: "Détails →"
                                        }, void 0, false, {
                                            fileName: "[project]/learnai-platform/app/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/learnai-platform/app/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/learnai-platform/app/page.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learnai-platform/app/page.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    textAlign: 'center',
                    padding: '60px 20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    marginTop: '80px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.2em',
                            color: '#5DADE2',
                            marginBottom: '20px'
                        },
                        children: "FFT Cognitive Foundation • LearnAI Platform • 2025"
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learnai$2d$platform$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.9em',
                            color: '#888'
                        },
                        children: "Votre parcours d'apprentissage, optimisé par IA locale et souveraine"
                    }, void 0, false, {
                        fileName: "[project]/learnai-platform/app/page.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learnai-platform/app/page.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/learnai-platform/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/learnai-platform/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/learnai-platform/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/learnai-platform/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/learnai-platform/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/learnai-platform/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a358f74f._.js.map