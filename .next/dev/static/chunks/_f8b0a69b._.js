(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}
function formatDateTime(date) {
    return new Date(date).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
            pending: "border-transparent bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
            analysis: "border-transparent bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
            progress: "border-transparent bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
            resolved: "border-transparent bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
            archived: "border-transparent bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/dados-saude-municipal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cores do tema de Saúde Municipal
__turbopack_context__.s([
    "CASAS_ESPECIALIZADAS",
    ()=>CASAS_ESPECIALIZADAS,
    "CORES_SAUDE_MUNICIPAL",
    ()=>CORES_SAUDE_MUNICIPAL,
    "HOSPITAIS_MUNICIPAIS",
    ()=>HOSPITAIS_MUNICIPAIS,
    "INDICADORES_SAUDE_MUNICIPAL",
    ()=>INDICADORES_SAUDE_MUNICIPAL,
    "REGISTROS_AUDITORIA",
    ()=>REGISTROS_AUDITORIA,
    "SERVICOS_MOVEIS",
    ()=>SERVICOS_MOVEIS,
    "UNIDADES_BASICAS_SAUDE",
    ()=>UNIDADES_BASICAS_SAUDE,
    "UNIDADES_PRONTO_ATENDIMENTO",
    ()=>UNIDADES_PRONTO_ATENDIMENTO,
    "adicionarRegistro",
    ()=>adicionarRegistro,
    "getRegistrosPorSecao",
    ()=>getRegistrosPorSecao,
    "getRegistrosPorUnidade",
    ()=>getRegistrosPorUnidade
]);
const CORES_SAUDE_MUNICIPAL = {
    primaria: "#16a34a",
    secundaria: "#0d9488",
    terciaria: "#0891b2",
    destaque: "#ea580c",
    alerta: "#dc2626",
    sucesso: "#16a34a",
    info: "#2563eb",
    fundo: "#f0fdf4",
    hospital: "#dc2626",
    urgencia: "#ea580c",
    movel: "#0891b2",
    atencaoBasica: "#16a34a"
};
const INDICADORES_SAUDE_MUNICIPAL = {
    coberturaAB: 78,
    atendimentosMes: 12500,
    satisfacaoUsuario: 4.2,
    tempoEsperaMedia: 42,
    leitosTotal: 450,
    taxaOcupacaoHospital: 85,
    tempoPermanenciaMedia: 4.2
};
const UNIDADES_BASICAS_SAUDE = [
    {
        id: "ubs-01",
        tipo: "UMS",
        nome: "UMS Sacramenta",
        bairro: "Sacramenta",
        endereco: "Av. Augusto Montenegro, 4000 - Sacramenta",
        telefone: "(91) 3230-1001",
        horario: "07:00 - 18:00",
        equipes: 3,
        agentesComunitarios: 8,
        imagem: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop",
        servicos: [
            "Consultas Médicas",
            "Enfermagem",
            "Odontologia",
            "Vacinação",
            "Farmácia"
        ],
        metas: {
            consultasMensais: 1200,
            atendidos: 1085,
            cumprimento: 90.4
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Médicas",
                valorMeta: 800,
                valorAtual: 720,
                unidade: "atendimentos"
            },
            {
                id: "enfermagem",
                nome: "Procedimentos Enfermagem",
                valorMeta: 600,
                valorAtual: 580,
                unidade: "procedimentos"
            },
            {
                id: "vacinas",
                nome: "Vacinas Aplicadas",
                valorMeta: 400,
                valorAtual: 385,
                unidade: "doses"
            },
            {
                id: "odontologia",
                nome: "Consultas Odonto",
                valorMeta: 300,
                valorAtual: 280,
                unidade: "atendimentos"
            }
        ]
    },
    {
        id: "ubs-02",
        tipo: "UMS",
        nome: "UMS Jurunas",
        bairro: "Jurunas",
        endereco: "Tv. Padre Eutíquio, 220 - Jurunas",
        telefone: "(91) 3230-1002",
        horario: "07:00 - 18:00",
        equipes: 2,
        agentesComunitarios: 5,
        imagem: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=400&fit=crop",
        servicos: [
            "Consultas Médicas",
            "Enfermagem",
            "Vacinação",
            "Agentes Comunitários"
        ],
        metas: {
            consultasMensais: 800,
            atendidos: 720,
            cumprimento: 90.0
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Médicas",
                valorMeta: 500,
                valorAtual: 450,
                unidade: "atendimentos"
            },
            {
                id: "enfermagem",
                nome: "Procedimentos Enfermagem",
                valorMeta: 400,
                valorAtual: 380,
                unidade: "procedimentos"
            },
            {
                id: "vacinas",
                nome: "Vacinas Aplicadas",
                valorMeta: 250,
                valorAtual: 230,
                unidade: "doses"
            }
        ]
    },
    {
        id: "ubs-03",
        tipo: "UMS",
        nome: "UMS Terra Firme",
        bairro: "Terra Firme",
        endereco: "Passagem Vitória, 450 - Terra Firme",
        telefone: "(91) 3230-1003",
        horario: "07:00 - 18:00",
        equipes: 2,
        agentesComunitarios: 6,
        imagem: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&h=400&fit=crop",
        servicos: [
            "Consultas Médicas",
            "Enfermagem",
            "Odontologia",
            "Vacinação"
        ],
        metas: {
            consultasMensais: 700,
            atendidos: 650,
            cumprimento: 92.8
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Médicas",
                valorMeta: 450,
                valorAtual: 420,
                unidade: "atendimentos"
            },
            {
                id: "enfermagem",
                nome: "Procedimentos Enfermagem",
                valorMeta: 350,
                valorAtual: 340,
                unidade: "procedimentos"
            },
            {
                id: "vacinas",
                nome: "Vacinas Aplicadas",
                valorMeta: 200,
                valorAtual: 195,
                unidade: "doses"
            }
        ]
    },
    {
        id: "ubs-04",
        tipo: "UMS",
        nome: "UMS Guamá",
        bairro: "Guamá",
        endereco: "Tv. Lomas Valentinas, 3000 - Guamá",
        telefone: "(91) 3230-1004",
        horario: "07:00 - 18:00",
        equipes: 2,
        agentesComunitarios: 4,
        imagem: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=400&fit=crop",
        servicos: [
            "Consultas Médicas",
            "Enfermagem",
            "Vacinação",
            "Agentes Comunitários"
        ],
        metas: {
            consultasMensais: 600,
            atendidos: 530,
            cumprimento: 88.3
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Médicas",
                valorMeta: 400,
                valorAtual: 350,
                unidade: "atendimentos"
            },
            {
                id: "enfermagem",
                nome: "Procedimentos Enfermagem",
                valorMeta: 300,
                valorAtual: 280,
                unidade: "procedimentos"
            }
        ]
    },
    {
        id: "ubs-05",
        tipo: "ESF",
        nome: "ESF Canal da Visconde",
        bairro: "Cremação",
        endereco: "Canal da Visconde de Inhaúma s/n - Cremação",
        telefone: "(91) 3230-1005",
        horario: "07:00 - 18:00",
        equipes: 3,
        agentesComunitarios: 7,
        imagem: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=400&fit=crop",
        servicos: [
            "Consultas Médicas",
            "Visita Domiciliar",
            "Grupos de Saúde",
            "Vacinação",
            "Farmácia"
        ],
        metas: {
            consultasMensais: 1000,
            atendidos: 920,
            cumprimento: 92.0
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Médicas",
                valorMeta: 650,
                valorAtual: 600,
                unidade: "atendimentos"
            },
            {
                id: "visitas",
                nome: "Visitas Domiciliares",
                valorMeta: 300,
                valorAtual: 285,
                unidade: "visitas"
            },
            {
                id: "grupos",
                nome: "Grupos de Saúde",
                valorMeta: 12,
                valorAtual: 11,
                unidade: "grupos"
            },
            {
                id: "vacinas",
                nome: "Vacinas Aplicadas",
                valorMeta: 350,
                valorAtual: 340,
                unidade: "doses"
            }
        ]
    },
    {
        id: "ubs-06",
        tipo: "ESF",
        nome: "ESF Condor",
        bairro: "Condor",
        endereco: "Rua dos Mundurucus, 3580 - Condor",
        telefone: "(91) 3230-1006",
        horario: "07:00 - 18:00",
        equipes: 2,
        agentesComunitarios: 5,
        imagem: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=400&fit=crop",
        servicos: [
            "Consultas Médicas",
            "Visita Domiciliar",
            "Pré-Natal",
            "Vacinação"
        ],
        metas: {
            consultasMensais: 750,
            atendidos: 680,
            cumprimento: 90.6
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Médicas",
                valorMeta: 500,
                valorAtual: 455,
                unidade: "atendimentos"
            },
            {
                id: "visitas",
                nome: "Visitas Domiciliares",
                valorMeta: 200,
                valorAtual: 185,
                unidade: "visitas"
            },
            {
                id: "prenatal",
                nome: "Pré-Natal",
                valorMeta: 80,
                valorAtual: 75,
                unidade: "gestantes"
            }
        ]
    },
    {
        id: "ubs-07",
        tipo: "ESF",
        nome: "ESF Bengui",
        bairro: "Bengui",
        endereco: "Passagem Mucajá, 100 - Bengui",
        telefone: "(91) 3230-1007",
        horario: "07:00 - 18:00",
        equipes: 2,
        agentesComunitarios: 6,
        imagem: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=400&fit=crop",
        servicos: [
            "Consultas Médicas",
            "Visita Domiciliar",
            "Grupos de Saúde",
            "Vacinação"
        ],
        metas: {
            consultasMensais: 680,
            atendidos: 620,
            cumprimento: 91.2
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Médicas",
                valorMeta: 440,
                valorAtual: 405,
                unidade: "atendimentos"
            },
            {
                id: "visitas",
                nome: "Visitas Domiciliares",
                valorMeta: 180,
                valorAtual: 168,
                unidade: "visitas"
            },
            {
                id: "vacinas",
                nome: "Vacinas Aplicadas",
                valorMeta: 220,
                valorAtual: 210,
                unidade: "doses"
            }
        ]
    },
    {
        id: "ubs-08",
        tipo: "UMS",
        nome: "UMS Marco",
        bairro: "Marco",
        endereco: "Av. Almirante Barroso, 4800 - Marco",
        telefone: "(91) 3230-1008",
        horario: "07:00 - 18:00",
        equipes: 3,
        agentesComunitarios: 7,
        imagem: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=400&fit=crop",
        servicos: [
            "Consultas Médicas",
            "Enfermagem",
            "Odontologia",
            "Vacinação",
            "Farmácia"
        ],
        metas: {
            consultasMensais: 950,
            atendidos: 870,
            cumprimento: 91.6
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Médicas",
                valorMeta: 600,
                valorAtual: 548,
                unidade: "atendimentos"
            },
            {
                id: "enfermagem",
                nome: "Procedimentos Enfermagem",
                valorMeta: 450,
                valorAtual: 418,
                unidade: "procedimentos"
            },
            {
                id: "odontologia",
                nome: "Consultas Odonto",
                valorMeta: 250,
                valorAtual: 228,
                unidade: "atendimentos"
            },
            {
                id: "vacinas",
                nome: "Vacinas Aplicadas",
                valorMeta: 300,
                valorAtual: 285,
                unidade: "doses"
            }
        ]
    }
];
const CASAS_ESPECIALIZADAS = [
    {
        id: "cemo",
        sigla: "CEMO",
        nome: "Centro Municipal de Oncologia",
        descricao: "Atendimento especializado em oncologia clínica e cirúrgica",
        endereco: "Tv. Angustura, 800 - Umarizal",
        bairro: "Umarizal",
        telefone: "(91) 3190-2001",
        horario: "07:00 - 19:00",
        imagem: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=400&fit=crop",
        tipo: "Oncologia",
        servicos: [
            "Quimioterapia",
            "Radioterapia",
            "Consultas Oncológicas",
            "Apoio Psicológico"
        ],
        indicadores: {
            pacientesAtivos: 180,
            sessoesQuimioMes: 450,
            tempoAtendimento: 4.5
        },
        secoes: [
            {
                id: "quimio",
                nome: "Sessões Quimioterapia",
                valorMeta: 500,
                valorAtual: 450,
                unidade: "sessões"
            },
            {
                id: "radio",
                nome: "Sessões Radioterapia",
                valorMeta: 300,
                valorAtual: 280,
                unidade: "sessões"
            },
            {
                id: "consultas",
                nome: "Consultas Onco",
                valorMeta: 200,
                valorAtual: 180,
                unidade: "consultas"
            }
        ]
    },
    {
        id: "casa-dia",
        sigla: "CASA DIA",
        nome: "Centro de Atendimento Socioassistencial",
        descricao: "Atendimento diurno para idosos e PCDs",
        endereco: "Rua das Flores, 100",
        bairro: "Centenário",
        telefone: "(95) 3199-2002",
        horario: "08:00 - 17:00",
        imagem: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=300&fit=crop",
        tipo: "CASA DIA",
        servicos: [
            "Atividades Terapêuticas",
            "Alimentação",
            "Fisioterapia",
            "Atendimento Médico"
        ],
        indicadores: {
            frequenciaMedia: 92,
            idososAtendidos: 45,
            pcdAtendidos: 15
        },
        secoes: [
            {
                id: "frequencia",
                nome: "Frequência Diária",
                valorMeta: 60,
                valorAtual: 55,
                unidade: "pessoas"
            },
            {
                id: "refeicoes",
                nome: "Refeições Servidas",
                valorMeta: 1800,
                valorAtual: 1650,
                unidade: "refeições/mês"
            },
            {
                id: "fisio",
                nome: "Sessões Fisio",
                valorMeta: 400,
                valorAtual: 380,
                unidade: "sessões"
            }
        ]
    },
    {
        id: "casa-idoso",
        sigla: "CASA IDOSO",
        nome: "Casa do Idoso",
        descricao: "Instituição de longa permanência",
        endereco: "Rua da Paz, 200",
        bairro: "Nova Boa Vista",
        telefone: "(95) 3199-2003",
        horario: "24 horas",
        imagem: "https://images.unsplash.com/photo-1576765608866-5b51f8d6f5c5?w=400&h=300&fit=crop",
        tipo: "ILPI",
        servicos: [
            "Alojamento",
            "Alimentação",
            "Cuidados de Enfermagem",
            "Atividades Sociais"
        ],
        indicadores: {
            ocupacao: 85,
            idososAlojados: 34,
            idososInscritos: 156
        },
        secoes: [
            {
                id: "ocupacao",
                nome: "Taxa Ocupação",
                valorMeta: 40,
                valorAtual: 34,
                unidade: "leitos"
            },
            {
                id: "frequencia",
                nome: "Frequência Atividades",
                valorMeta: 95,
                valorAtual: 92,
                unidade: "%"
            }
        ]
    },
    {
        id: "casa-mulher",
        sigla: "CASA MULHER",
        nome: "Casa da Mulher",
        descricao: "Atendimento integral à mulher",
        endereco: "Av. das Mulheres, 300",
        bairro: "Centro",
        telefone: "(95) 3199-2004",
        horario: "08:00 - 18:00",
        imagem: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
        tipo: "Saúde da Mulher",
        servicos: [
            "Saúde da Mulher",
            "Atendimento Psicológico",
            "Orientação Jurídica",
            "Grupos de Apoio"
        ],
        indicadores: {
            atendimentosMes: 320,
            prevencaoViolencia: 45
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas Gineco",
                valorMeta: 400,
                valorAtual: 350,
                unidade: "consultas"
            },
            {
                id: "preven",
                nome: "Exames Preventivos",
                valorMeta: 250,
                valorAtual: 220,
                unidade: "exames"
            }
        ]
    },
    {
        id: "casa-mental",
        sigla: "CASA MENTAL",
        nome: "Casa da Saúde Mental",
        descricao: "CAPS para saúde mental",
        endereco: "Rua da Esperança, 150",
        bairro: "São João",
        telefone: "(95) 3199-2005",
        horario: "08:00 - 18:00",
        imagem: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
        tipo: "CAPS III",
        servicos: [
            "Atendimento Psiquiátrico",
            "Terapia Ocupacional",
            "Grupos Terapêuticos",
            "Reinserção Social"
        ],
        indicadores: {
            usuariosAtivos: 280,
            atendimentosMes: 850,
            reinsercaoTrabalho: 35
        },
        secoes: [
            {
                id: "atendimentos",
                nome: "Atendimentos",
                valorMeta: 900,
                valorAtual: 850,
                unidade: "atendimentos"
            },
            {
                id: "grupos",
                nome: "Grupos Terapêuticos",
                valorMeta: 20,
                valorAtual: 18,
                unidade: "grupos"
            }
        ]
    }
];
const UNIDADES_PRONTO_ATENDIMENTO = [
    {
        id: "upa-01",
        nome: "UPA 24h Sacramenta",
        endereco: "Av. Augusto Montenegro, 7200 - Sacramenta",
        bairro: "Sacramenta",
        telefone: "(91) 3276-1920",
        imagem: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=400&fit=crop",
        tipo: "UPA 24h",
        classificacaoRisco: {
            vermelho: 3,
            laranja: 8,
            amarelo: 15,
            verde: 25,
            azul: 5
        },
        indicadores: {
            atendimentosMes: 3800,
            metaMes: 4200,
            taxaOcupacao: 78,
            tempoMedioPermanencia: 3.5,
            taxaInternacao: 12
        },
        secoes: [
            {
                id: "ambulatorio",
                nome: "Ambulatório",
                descricao: "Consultas médicas e enfermagem",
                metas: [
                    {
                        id: "atend-dia",
                        nome: "Atendimentos/Dia",
                        valorMeta: 120,
                        valorAtual: 115,
                        unidade: "atendimentos"
                    },
                    {
                        id: "tempo",
                        nome: "Tempo Médio",
                        valorMeta: 30,
                        valorAtual: 28,
                        unidade: "minutos"
                    }
                ]
            },
            {
                id: "sadt",
                nome: "SADT",
                descricao: "Raio-X, ECG e Laboratório",
                metas: [
                    {
                        id: "raiox",
                        nome: "Raio-X",
                        valorMeta: 800,
                        valorAtual: 750,
                        unidade: "exames"
                    },
                    {
                        id: "ecg",
                        nome: "ECG",
                        valorMeta: 400,
                        valorAtual: 380,
                        unidade: "exames"
                    },
                    {
                        id: "lab",
                        nome: "Exames Lab",
                        valorMeta: 1200,
                        valorAtual: 1150,
                        unidade: "exames"
                    }
                ]
            },
            {
                id: "medicina",
                nome: "Medicina",
                descricao: "Procedimentos e suturas",
                metas: [
                    {
                        id: "suturas",
                        nome: "Suturas",
                        valorMeta: 500,
                        valorAtual: 480,
                        unidade: "procedimentos"
                    },
                    {
                        id: "curativos",
                        nome: "Curativos",
                        valorMeta: 800,
                        valorAtual: 820,
                        unidade: "curativos"
                    },
                    {
                        id: "retirada",
                        nome: "Retirada Pontos",
                        valorMeta: 300,
                        valorAtual: 290,
                        unidade: "procedimentos"
                    }
                ]
            },
            {
                id: "enfermaria",
                nome: "Enfermaria Obs",
                descricao: "Leitos para observação",
                metas: [
                    {
                        id: "leitos",
                        nome: "Leitos Ocupados",
                        valorMeta: 12,
                        valorAtual: 10,
                        unidade: "leitos"
                    },
                    {
                        id: "tempo-obs",
                        nome: "Tempo Observação",
                        valorMeta: 24,
                        valorAtual: 22,
                        unidade: "horas"
                    }
                ]
            },
            {
                id: "farmacia",
                nome: "Farmácia",
                descricao: "Dispensação de medicamentos",
                metas: [
                    {
                        id: "disp",
                        nome: "Dispensações",
                        valorMeta: 200,
                        valorAtual: 195,
                        unidade: "dispensações/dia"
                    },
                    {
                        id: "tempo-disp",
                        nome: "Tempo Dispensação",
                        valorMeta: 10,
                        valorAtual: 8,
                        unidade: "minutos"
                    }
                ]
            }
        ]
    },
    {
        id: "upa-02",
        nome: "UPA 24h Condor",
        endereco: "Av. Marquês de Herval, 2000 - Condor",
        bairro: "Condor",
        telefone: "(91) 3276-1921",
        imagem: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=400&fit=crop",
        tipo: "UPA 24h",
        classificacaoRisco: {
            vermelho: 1,
            laranja: 3,
            amarelo: 8,
            verde: 18,
            azul: 3
        },
        indicadores: {
            atendimentosMes: 500,
            metaMes: 550,
            taxaOcupacao: 72,
            tempoMedioPermanencia: 2.8,
            taxaInternacao: 8
        },
        secoes: [
            {
                id: "ambulatorio",
                nome: "Ambulatório Pediátrico",
                descricao: "Consultas pediátricas",
                metas: [
                    {
                        id: "atend-dia",
                        nome: "Atendimentos/Dia",
                        valorMeta: 20,
                        valorAtual: 18,
                        unidade: "atendimentos"
                    },
                    {
                        id: "tempo",
                        nome: "Tempo Médio",
                        valorMeta: 25,
                        valorAtual: 23,
                        unidade: "minutos"
                    }
                ]
            },
            {
                id: "sadt",
                nome: "SADT Pediátrico",
                descricao: "Exames para crianças",
                metas: [
                    {
                        id: "raiox",
                        nome: "Raio-X",
                        valorMeta: 150,
                        valorAtual: 140,
                        unidade: "exames"
                    },
                    {
                        id: "lab",
                        nome: "Exames Lab",
                        valorMeta: 250,
                        valorAtual: 230,
                        unidade: "exames"
                    }
                ]
            }
        ]
    }
];
const HOSPITAIS_MUNICIPAIS = [
    {
        id: "hospital-01",
        nome: "Hospital Municipal Pronto Socorro Mário Pinotti",
        endereco: "Av. Almirante Barroso, 1758 - Marco",
        bairro: "Marco",
        telefone: "(91) 3190-1500",
        imagem: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&h=400&fit=crop",
        indicadores: {
            leitosTotal: 120,
            taxaOcupacao: 85,
            tempoMedioInternacao: 4.2,
            cirurgiasMes: 180,
            partosMes: 65,
            altasMes: 320,
            obitosMes: 8,
            biopsiasMes: 145,
            consultasAmbulatorioMes: 2400,
            examesSadtMes: 1850
        },
        especialidades: [
            {
                nome: "Clínica Médica",
                leitos: 40,
                ocupados: 34
            },
            {
                nome: "Cirurgia Geral",
                leitos: 30,
                ocupados: 26
            },
            {
                nome: "Obstetrícia",
                leitos: 25,
                ocupados: 22
            },
            {
                nome: "Pediatria",
                leitos: 20,
                ocupados: 16
            },
            {
                nome: "UTI",
                leitos: 5,
                ocupados: 5
            }
        ],
        metas: {
            cirurgiasMes: 200,
            partosMes: 70,
            taxaOcupacaoMeta: 90,
            tempoPermanenciaMax: 5,
            biopsiasMes: 180,
            consultasAmbulatorioMes: 2800,
            examesSadtMes: 2200
        },
        secoes: [
            {
                id: "cirurgias",
                nome: "Cirurgias Eletivas",
                valorMeta: 150,
                valorAtual: 130,
                unidade: "cirurgias"
            },
            {
                id: "emergencia",
                nome: "Cirurgias Emergência",
                valorMeta: 50,
                valorAtual: 50,
                unidade: "cirurgias"
            },
            {
                id: "partos",
                nome: "Partos Normais",
                valorMeta: 50,
                valorAtual: 45,
                unidade: "partos"
            },
            {
                id: "cesareas",
                nome: "Cesáreas",
                valorMeta: 20,
                valorAtual: 20,
                unidade: "cirurgias"
            },
            {
                id: "biopsias",
                nome: "Biópsias",
                valorMeta: 180,
                valorAtual: 145,
                unidade: "biopsias"
            },
            {
                id: "ambulatorio",
                nome: "Consultas Ambulatório",
                valorMeta: 2800,
                valorAtual: 2400,
                unidade: "consultas"
            },
            {
                id: "sadt",
                nome: "Exames SADT",
                valorMeta: 2200,
                valorAtual: 1850,
                unidade: "exames"
            }
        ],
        // Ambulatório detalhado
        ambulatorio: {
            consultas: [
                {
                    id: "amb-geral",
                    nome: "Clínica Geral",
                    valorMeta: 800,
                    valorAtual: 720,
                    unidade: "consultas"
                },
                {
                    id: "amb-cardio",
                    nome: "Cardiologia",
                    valorMeta: 400,
                    valorAtual: 350,
                    unidade: "consultas"
                },
                {
                    id: "amb-gineco",
                    nome: "Ginecologia",
                    valorMeta: 450,
                    valorAtual: 380,
                    unidade: "consultas"
                },
                {
                    id: "amb-orto",
                    nome: "Ortopedia",
                    valorMeta: 350,
                    valorAtual: 290,
                    unidade: "consultas"
                },
                {
                    id: "amb-ped",
                    nome: "Pediatria",
                    valorMeta: 300,
                    valorAtual: 260,
                    unidade: "consultas"
                },
                {
                    id: "amb-derma",
                    nome: "Dermatologia",
                    valorMeta: 200,
                    valorAtual: 180,
                    unidade: "consultas"
                },
                {
                    id: "amb-oftal",
                    nome: "Oftalmologia",
                    valorMeta: 150,
                    valorAtual: 130,
                    unidade: "consultas"
                },
                {
                    id: "amb-uro",
                    nome: "Urologia",
                    valorMeta: 150,
                    valorAtual: 90,
                    unidade: "consultas"
                }
            ],
            especialidades: [
                "Clínica Geral",
                "Cardiologia",
                "Ginecologia",
                "Ortopedia",
                "Pediatria",
                "Dermatologia",
                "Oftalmologia",
                "Urologia"
            ]
        },
        // Cirurgias detalhadas
        cirurgias: {
            eletivas: [
                {
                    id: "ele-hernia",
                    nome: "Herniorrafia",
                    valorMeta: 30,
                    valorAtual: 28,
                    unidade: "cirurgias"
                },
                {
                    id: "ele-colec",
                    nome: "Colecistectomia",
                    valorMeta: 25,
                    valorAtual: 22,
                    unidade: "cirurgias"
                },
                {
                    id: "ele-apend",
                    nome: "Apendicectomia Eletiva",
                    valorMeta: 15,
                    valorAtual: 14,
                    unidade: "cirurgias"
                },
                {
                    id: "ele-tireo",
                    nome: "Tireoidectomia",
                    valorMeta: 10,
                    valorAtual: 8,
                    unidade: "cirurgias"
                },
                {
                    id: "ele-variz",
                    nome: "Tratamento Varizes",
                    valorMeta: 20,
                    valorAtual: 18,
                    unidade: "cirurgias"
                },
                {
                    id: "ele-prost",
                    nome: "Próstata (VPP)",
                    valorMeta: 12,
                    valorAtual: 10,
                    unidade: "cirurgias"
                }
            ],
            emergencias: [
                {
                    id: "eme-apend",
                    nome: "Apendicectomia Emergencial",
                    valorMeta: 20,
                    valorAtual: 18,
                    unidade: "cirurgias"
                },
                {
                    id: "eme-ostom",
                    nome: "Ostomia Emergencial",
                    valorMeta: 10,
                    valorAtual: 10,
                    unidade: "cirurgias"
                },
                {
                    id: "eme-traum",
                    nome: "Cirurgia Trauma",
                    valorMeta: 15,
                    valorAtual: 15,
                    unidade: "cirurgias"
                },
                {
                    id: "eme-ginec",
                    nome: "Ginecologia Emergencial",
                    valorMeta: 5,
                    valorAtual: 7,
                    unidade: "cirurgias"
                }
            ],
            ortopedia: [
                {
                    id: "orto-frat",
                    nome: "Redução Fraturas",
                    valorMeta: 40,
                    valorAtual: 38,
                    unidade: "cirurgias"
                },
                {
                    id: "orto-art",
                    nome: "Artroplastia",
                    valorMeta: 15,
                    valorAtual: 12,
                    unidade: "cirurgias"
                },
                {
                    id: "orto-col",
                    nome: "Cirurgia Coluna",
                    valorMeta: 8,
                    valorAtual: 6,
                    unidade: "cirurgias"
                }
            ],
            oftalmologia: [
                {
                    id: "ofta-catar",
                    nome: "Catarata",
                    valorMeta: 50,
                    valorAtual: 45,
                    unidade: "cirurgias"
                },
                {
                    id: "ofta-ptose",
                    nome: "Ptose Palpebral",
                    valorMeta: 15,
                    valorAtual: 12,
                    unidade: "cirurgias"
                },
                {
                    id: "ofta-pter",
                    nome: "Pterígio",
                    valorMeta: 20,
                    valorAtual: 18,
                    unidade: "cirurgias"
                }
            ]
        },
        // SADT detalhado
        sadt: {
            raioX: [
                {
                    id: "rx-tora",
                    nome: "Tórax",
                    valorMeta: 400,
                    valorAtual: 350,
                    unidade: "exames"
                },
                {
                    id: "rx-abdo",
                    nome: "Abdomen",
                    valorMeta: 200,
                    valorAtual: 180,
                    unidade: "exames"
                },
                {
                    id: "rx-memb",
                    nome: "Membros",
                    valorMeta: 300,
                    valorAtual: 250,
                    unidade: "exames"
                },
                {
                    id: "rx-cran",
                    nome: "Crânio",
                    valorMeta: 100,
                    valorAtual: 90,
                    unidade: "exames"
                }
            ],
            ultrassom: [
                {
                    id: "us-abdo",
                    nome: "Abdominal Total",
                    valorMeta: 350,
                    valorAtual: 320,
                    unidade: "exames"
                },
                {
                    id: "us-obst",
                    nome: "Obstétrico",
                    valorMeta: 280,
                    valorAtual: 240,
                    unidade: "exames"
                },
                {
                    id: "us-tire",
                    nome: "Tireoide",
                    valorMeta: 120,
                    valorAtual: 100,
                    unidade: "exames"
                },
                {
                    id: "us-mama",
                    nome: "Mamário",
                    valorMeta: 150,
                    valorAtual: 130,
                    unidade: "exames"
                }
            ],
            tomografia: [
                {
                    id: "tc-cran",
                    nome: "Crânio",
                    valorMeta: 80,
                    valorAtual: 65,
                    unidade: "exames"
                },
                {
                    id: "tc-tora",
                    nome: "Tórax",
                    valorMeta: 60,
                    valorAtual: 50,
                    unidade: "exames"
                },
                {
                    id: "tc-abdo",
                    nome: "Abdomen",
                    valorMeta: 50,
                    valorAtual: 45,
                    unidade: "exames"
                }
            ],
            laboratorio: [
                {
                    id: "lab-hemo",
                    nome: "Hemograma",
                    valorMeta: 800,
                    valorAtual: 720,
                    unidade: "exames"
                },
                {
                    id: "lab-bioq",
                    nome: "Bioquímica",
                    valorMeta: 600,
                    valorAtual: 520,
                    unidade: "exames"
                },
                {
                    id: "lab-urin",
                    nome: "Urina/EAS",
                    valorMeta: 400,
                    valorAtual: 380,
                    unidade: "exames"
                },
                {
                    id: "lab-horm",
                    nome: "Hormônios",
                    valorMeta: 200,
                    valorAtual: 170,
                    unidade: "exames"
                }
            ],
            eletrocardiograma: [
                {
                    id: "ecg-norm",
                    nome: "ECG Padrão",
                    valorMeta: 450,
                    valorAtual: 420,
                    unidade: "exames"
                },
                {
                    id: "ecg-holt",
                    nome: "Holter",
                    valorMeta: 80,
                    valorAtual: 65,
                    unidade: "exames"
                },
                {
                    id: "ecg-map",
                    nome: "MAPA",
                    valorMeta: 60,
                    valorAtual: 55,
                    unidade: "exames"
                }
            ]
        },
        // Biópsias detalhadas
        biopsias: {
            papanicolau: {
                id: "bio-papa",
                nome: "Papanicolau",
                valorMeta: 60,
                valorAtual: 55,
                unidade: "biopsias"
            },
            mama: {
                id: "bio-mama",
                nome: "Biópsia de Mama",
                valorMeta: 25,
                valorAtual: 20,
                unidade: "biopsias"
            },
            prostata: {
                id: "bio-pros",
                nome: "Biópsia de Próstata",
                valorMeta: 20,
                valorAtual: 15,
                unidade: "biopsias"
            },
            pele: {
                id: "bio-pele",
                nome: "Biópsia de Pele",
                valorMeta: 40,
                valorAtual: 35,
                unidade: "biopsias"
            }
        }
    }
];
const SERVICOS_MOVEIS = [
    {
        id: "samu",
        sigla: "SAMU",
        nome: "Serviço de Atendimento Móvel de Urgência",
        descricao: "Atendimento pré-hospitalar de urgência e emergência",
        telefone: "192",
        imagem: "https://images.unsplash.com/photo-1615463867977-c5d459b0469a?w=400&h=300&fit=crop",
        veiculos: [
            {
                id: "samu-01",
                nome: "USA Alfa",
                tipo: "Ambulância Avançada",
                placa: "ABC-1234",
                ano: 2022,
                kmAtual: 45000,
                status: "Operacional",
                atendimentosMes: 180,
                metaMes: 200,
                manutencoes: [
                    {
                        id: "m1",
                        data: "2024-01-15",
                        tipo: "Preventiva",
                        descricao: "Troca de óleo e filtros",
                        custo: 800,
                        status: "Concluída",
                        kmAtual: 42000,
                        proximaRevisao: 47000
                    }
                ]
            },
            {
                id: "samu-02",
                nome: "USA Beta",
                tipo: "Ambulância Avançada",
                placa: "ABC-1235",
                ano: 2023,
                kmAtual: 28000,
                status: "Operacional",
                atendimentosMes: 195,
                metaMes: 200,
                manutencoes: []
            },
            {
                id: "samu-03",
                nome: "USB Gama",
                tipo: "Ambulância Básica",
                placa: "ABC-1236",
                ano: 2021,
                kmAtual: 62000,
                status: "Manutenção",
                atendimentosMes: 150,
                metaMes: 180,
                manutencoes: [
                    {
                        id: "m2",
                        data: "2024-03-10",
                        tipo: "Corretiva",
                        descricao: "Reparo no sistema de ar",
                        custo: 2500,
                        status: "Em andamento",
                        kmAtual: 62000,
                        proximaRevisao: 67000
                    }
                ]
            },
            {
                id: "samu-moto",
                nome: "Moto Resgate 01",
                tipo: "Moto",
                placa: "XYZ-9999",
                ano: 2023,
                kmAtual: 12000,
                status: "Operacional",
                atendimentosMes: 85,
                metaMes: 100,
                manutencoes: []
            }
        ],
        indicadores: {
            atendimentosMes: 850,
            metaTotalMes: 900,
            cumprimentoMeta: 94.4,
            comunidadesAtendidas: 25
        },
        secoes: [
            {
                id: "chamadas",
                nome: "Chamadas Atendidas",
                valorMeta: 900,
                valorAtual: 850,
                unidade: "chamadas"
            },
            {
                id: "tempo",
                nome: "Tempo Resposta",
                valorMeta: 12,
                valorAtual: 10,
                unidade: "minutos"
            }
        ]
    },
    {
        id: "sadt-movel",
        sigla: "SADT",
        nome: "Serviço de Apoio Diagnóstico Móvel",
        descricao: "Exames diagnósticos em comunidades",
        telefone: "(95) 3199-1800",
        imagem: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop",
        veiculos: [
            {
                id: "sadt-01",
                nome: "Raio-X Móvel",
                tipo: "Unidade de Raio-X",
                placa: "DEF-4567",
                ano: 2022,
                kmAtual: 35000,
                status: "Operacional",
                atendimentosMes: 320,
                metaMes: 350,
                manutencoes: []
            },
            {
                id: "sadt-02",
                nome: "Mamógrafo Móvel",
                tipo: "Rastreamento",
                placa: "DEF-4568",
                ano: 2021,
                kmAtual: 48000,
                status: "Operacional",
                atendimentosMes: 180,
                metaMes: 200,
                manutencoes: [
                    {
                        id: "m3",
                        data: "2024-02-20",
                        tipo: "Preventiva",
                        descricao: "Calibração equipamento",
                        custo: 1500,
                        status: "Concluída",
                        kmAtual: 45000,
                        proximaRevisao: 50000
                    }
                ]
            },
            {
                id: "sadt-03",
                nome: "US Móvel",
                tipo: "Ultrassom",
                placa: "DEF-4569",
                ano: 2023,
                kmAtual: 22000,
                status: "Operacional",
                atendimentosMes: 250,
                metaMes: 280,
                manutencoes: []
            },
            {
                id: "sadt-04",
                nome: "ECG Móvel",
                tipo: "Cardiologia",
                placa: "DEF-4570",
                ano: 2022,
                kmAtual: 31000,
                status: "Operacional",
                atendimentosMes: 420,
                metaMes: 450,
                manutencoes: []
            },
            {
                id: "sadt-05",
                nome: "Lab Móvel",
                tipo: "Laboratório",
                placa: "DEF-4571",
                ano: 2023,
                kmAtual: 18000,
                status: "Operacional",
                atendimentosMes: 380,
                metaMes: 400,
                manutencoes: []
            }
        ],
        indicadores: {
            atendimentosMes: 1550,
            metaTotalMes: 1680,
            cumprimentoMeta: 92.2,
            comunidadesAtendidas: 25
        },
        secoes: [
            {
                id: "raiox",
                nome: "Raio-X",
                valorMeta: 350,
                valorAtual: 320,
                unidade: "exames"
            },
            {
                id: "mamo",
                nome: "Mamografia",
                valorMeta: 200,
                valorAtual: 180,
                unidade: "exames"
            },
            {
                id: "us",
                nome: "Ultrassom",
                valorMeta: 280,
                valorAtual: 250,
                unidade: "exames"
            },
            {
                id: "ecg",
                nome: "ECG",
                valorMeta: 450,
                valorAtual: 420,
                unidade: "exames"
            },
            {
                id: "lab",
                nome: "Exames Lab",
                valorMeta: 400,
                valorAtual: 380,
                unidade: "exames"
            }
        ]
    },
    {
        id: "odonto-movel",
        sigla: "ODONTO MÓVEL",
        nome: "Consultório Odontológico Móvel",
        descricao: "Atendimento odontológico em comunidades",
        telefone: "(95) 3199-1801",
        imagem: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
        veiculos: [
            {
                id: "odonto-01",
                nome: "Dentista Móvel 01",
                tipo: "Consultório Odontológico",
                placa: "GHI-7890",
                ano: 2023,
                kmAtual: 15000,
                status: "Operacional",
                atendimentosMes: 280,
                metaMes: 300,
                manutencoes: []
            },
            {
                id: "odonto-02",
                nome: "Dentista Móvel 02",
                tipo: "Consultório Odontológico",
                placa: "GHI-7891",
                ano: 2022,
                kmAtual: 28000,
                status: "Operacional",
                atendimentosMes: 260,
                metaMes: 300,
                manutencoes: [
                    {
                        id: "m4",
                        data: "2024-01-10",
                        tipo: "Preventiva",
                        descricao: "Manutenção equipamentos",
                        custo: 1200,
                        status: "Concluída",
                        kmAtual: 25000,
                        proximaRevisao: 30000
                    }
                ]
            }
        ],
        indicadores: {
            atendimentosMes: 540,
            metaTotalMes: 600,
            cumprimentoMeta: 90.0,
            comunidadesAtendidas: 15
        },
        secoes: [
            {
                id: "consultas",
                nome: "Consultas",
                valorMeta: 600,
                valorAtual: 540,
                unidade: "consultas"
            },
            {
                id: "prevencao",
                nome: "Fluorização",
                valorMeta: 400,
                valorAtual: 380,
                unidade: "aplicações"
            },
            {
                id: "extracoes",
                nome: "Extrações",
                valorMeta: 150,
                valorAtual: 140,
                unidade: "procedimentos"
            }
        ]
    },
    {
        id: "farma-movel",
        sigla: "FARMA MÓVEL",
        nome: "Farmácia Móvel",
        descricao: "Dispensação de medicamentos em comunidades",
        telefone: "(95) 3199-1802",
        imagem: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
        veiculos: [
            {
                id: "farma-01",
                nome: "Farmácia Móvel 01",
                tipo: "Unidade Dispensação",
                placa: "JKL-0123",
                ano: 2023,
                kmAtual: 12000,
                status: "Operacional",
                atendimentosMes: 450,
                metaMes: 500,
                manutencoes: []
            }
        ],
        indicadores: {
            atendimentosMes: 450,
            metaTotalMes: 500,
            cumprimentoMeta: 90.0,
            comunidadesAtendidas: 10
        },
        secoes: [
            {
                id: "dispensacao",
                nome: "Dispensações",
                valorMeta: 500,
                valorAtual: 450,
                unidade: "dispensações"
            },
            {
                id: "continuos",
                nome: "Medicamentos Contínuos",
                valorMeta: 300,
                valorAtual: 280,
                unidade: "entregas"
            }
        ]
    },
    {
        id: "fisioterapia-movel",
        sigla: "FISIO MÓVEL",
        nome: "Fisioterapia Móvel",
        descricao: "Atendimento fisioterapêutico domiciliar",
        telefone: "(95) 3199-1803",
        imagem: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
        veiculos: [
            {
                id: "fisio-01",
                nome: "Fisio Móvel 01",
                tipo: "Unidade Fisioterapia",
                placa: "MNO-4567",
                ano: 2022,
                kmAtual: 22000,
                status: "Operacional",
                atendimentosMes: 180,
                metaMes: 200,
                manutencoes: []
            }
        ],
        indicadores: {
            atendimentosMes: 180,
            metaTotalMes: 200,
            cumprimentoMeta: 90.0,
            comunidadesAtendidas: 8
        },
        secoes: [
            {
                id: "sessoes",
                nome: "Sessões Fisio",
                valorMeta: 200,
                valorAtual: 180,
                unidade: "sessões"
            },
            {
                id: "avaliacoes",
                nome: "Avaliações",
                valorMeta: 100,
                valorAtual: 90,
                unidade: "avaliações"
            }
        ]
    }
];
const REGISTROS_AUDITORIA = [
    {
        id: "r1",
        unidadeId: "upa-01",
        secaoId: "suturas",
        data: "2024-03-25",
        quantidade: 15,
        observacao: "15 suturas realizadas",
        usuario: "Dr. Silva"
    },
    {
        id: "r2",
        unidadeId: "upa-01",
        secaoId: "curativos",
        data: "2024-03-25",
        quantidade: 28,
        usuario: "Enf. Maria"
    },
    {
        id: "r3",
        unidadeId: "samu",
        secaoId: "chamadas",
        data: "2024-03-25",
        quantidade: 32,
        usuario: "Téc. João"
    }
];
const adicionarRegistro = (registro)=>{
    const novo = {
        ...registro,
        id: `r${Date.now()}`
    };
    REGISTROS_AUDITORIA.push(novo);
    return novo;
};
const getRegistrosPorUnidade = (unidadeId)=>{
    return REGISTROS_AUDITORIA.filter((r)=>r.unidadeId === unidadeId);
};
const getRegistrosPorSecao = (unidadeId, secaoId)=>{
    return REGISTROS_AUDITORIA.filter((r)=>r.unidadeId === unidadeId && r.secaoId === secaoId);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/saude-municipal/components/CascadeCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CascadeCard",
    ()=>CascadeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
function CascadeCard({ title, subtitle, description, stats, icon, href, color, badge, index = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "block group",
        style: {
            animationDelay: `${index * 60}ms`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl bg-white border border-slate-100 transition-all duration-300 hover:-translate-y-1 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-32 px-5 flex items-center justify-between overflow-hidden",
                    style: {
                        background: `linear-gradient(135deg, ${color} 0%, ${color}bb 100%)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20",
                            style: {
                                backgroundColor: "white"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -right-2 -bottom-8 w-16 h-16 rounded-full opacity-10",
                            style: {
                                backgroundColor: "white"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-[10px] uppercase font-bold tracking-wider mb-1",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-bold text-lg leading-tight line-clamp-2",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block mt-1.5 px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-semibold",
                                    children: badge
                                }, void 0, false, {
                                    fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative ml-4 p-3 rounded-2xl bg-white/20 text-white shrink-0 group-hover:bg-white/30 transition-colors",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 flex flex-col flex-1",
                    children: [
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        stats && stats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2 mb-4",
                            style: {
                                gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)`
                            },
                            children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 rounded-xl p-3 border border-slate-100 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-bold leading-tight",
                                            style: {
                                                color: stat.color || color
                                            },
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1"
                        }, void 0, false, {
                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-white text-sm font-semibold mt-4 group-hover:opacity-90 transition-all",
                            style: {
                                backgroundColor: color
                            },
                            children: [
                                "Acessar",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/saude-municipal/components/CascadeCard.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = CascadeCard;
var _c;
__turbopack_context__.k.register(_c, "CascadeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/saude-municipal/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GestaoSaudeMunicipal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-saude-municipal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$saude$2d$municipal$2f$components$2f$CascadeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/saude-municipal/components/CascadeCard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function GestaoSaudeMunicipal() {
    const umsCount = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIDADES_BASICAS_SAUDE"].filter((u)=>u.tipo === "UMS").length;
    const esfCount = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIDADES_BASICAS_SAUDE"].filter((u)=>u.tipo === "ESF").length;
    const hospital = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOSPITAIS_MUNICIPAIS"][0];
    const totalAtendUE = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIDADES_PRONTO_ATENDIMENTO"].reduce((acc, u)=>acc + u.indicadores.atendimentosMes, 0) + (hospital?.indicadores.altasMes ?? 0);
    const macroAreas = [
        {
            id: "atencao-basica",
            titulo: "Atenção Básica",
            subtitulo: "UMS · ESF",
            descricao: "Unidades Municipais de Saúde e Estratégia Saúde da Família — porta de entrada preferencial do SUS",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                className: "h-7 w-7"
            }, void 0, false, {
                fileName: "[project]/app/saude-municipal/page.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            cor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].primaria,
            stats: [
                {
                    label: "UMS",
                    value: umsCount
                },
                {
                    label: "ESF",
                    value: esfCount
                },
                {
                    label: "Cobertura AB",
                    value: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDICADORES_SAUDE_MUNICIPAL"].coberturaAB}%`
                }
            ],
            href: "/saude-municipal/atencao-basica"
        },
        {
            id: "urgencia-emergencia",
            titulo: "Urgência e Emergência",
            subtitulo: "UPA · Hospital · Móveis",
            descricao: "Unidades de Pronto Atendimento, Hospital Municipal HPSMMP e Serviços Móveis — SAMU e demais",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                className: "h-7 w-7"
            }, void 0, false, {
                fileName: "[project]/app/saude-municipal/page.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            cor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].urgencia,
            stats: [
                {
                    label: "UPAs",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIDADES_PRONTO_ATENDIMENTO"].length
                },
                {
                    label: "Hospital",
                    value: 1
                },
                {
                    label: "Atend./Mês",
                    value: totalAtendUE.toLocaleString("pt-BR")
                }
            ],
            href: "/saude-municipal/urgencia-emergencia"
        },
        {
            id: "casas-especializadas",
            titulo: "Casas Especializadas",
            subtitulo: "Atenção Especializada",
            descricao: "CEMO, Casa Dia, Casa Idoso, Casa Mulher e demais centros de atenção especializada",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "h-7 w-7"
            }, void 0, false, {
                fileName: "[project]/app/saude-municipal/page.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            cor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].terciaria,
            stats: [
                {
                    label: "Unidades",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CASAS_ESPECIALIZADAS"].length
                },
                {
                    label: "Móveis",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICOS_MOVEIS"].length
                }
            ],
            href: "/saude-municipal/casas-especializadas"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].fundo
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-white shadow-lg sticky top-0 z-50",
                style: {
                    background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].primaria} 0%, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].terciaria} 100%)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "text-white hover:bg-white/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/saude-municipal/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-white/20 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl font-bold",
                                                        children: "SESMA — Gestão da Saúde"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm opacity-90",
                                                        children: "Secretaria Municipal de Saúde de Belém"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                className: "bg-white/20 text-white border-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    "Online"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/saude-municipal/page.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/saude-municipal/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/saude-municipal/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].sucesso
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Cobertura AB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].primaria
                                                        },
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDICADORES_SAUDE_MUNICIPAL"].coberturaAB,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].sucesso}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-5 w-5",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].sucesso
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].info
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Atendimentos/Mês"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].primaria
                                                        },
                                                        children: [
                                                            (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDICADORES_SAUDE_MUNICIPAL"].atendimentosMes / 1000).toFixed(1),
                                                            "k"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].info}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "h-5 w-5",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].info
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].destaque
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Satisfação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].primaria
                                                        },
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDICADORES_SAUDE_MUNICIPAL"].satisfacaoUsuario,
                                                            "/5"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].destaque}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-5 w-5",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].destaque
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].alerta
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Tempo Médio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].primaria
                                                        },
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDICADORES_SAUDE_MUNICIPAL"].tempoEsperaMedia,
                                                            "min"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].alerta}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "h-5 w-5",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].alerta
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/saude-municipal/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/saude-municipal/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/saude-municipal/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/saude-municipal/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-slate-800",
                                children: "Macro Áreas de Saúde"
                            }, void 0, false, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mt-1 text-sm",
                                children: "Selecione uma macro área para acessar as unidades e módulos de gestão"
                            }, void 0, false, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/saude-municipal/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: macroAreas.map((area, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$saude$2d$municipal$2f$components$2f$CascadeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CascadeCard"], {
                                title: area.titulo,
                                subtitle: area.subtitulo,
                                description: area.descricao,
                                stats: area.stats,
                                icon: area.icon,
                                href: area.href,
                                color: area.cor,
                                index: idx
                            }, area.id, false, {
                                fileName: "[project]/app/saude-municipal/page.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/saude-municipal/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-10 pt-6 border-t text-center text-sm text-slate-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$saude$2d$municipal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_SAUDE_MUNICIPAL"].primaria
                            },
                            children: "SESMA — Sistema Único de Saúde · Belém/PA"
                        }, void 0, false, {
                            fileName: "[project]/app/saude-municipal/page.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/saude-municipal/page.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/saude-municipal/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/saude-municipal/page.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c = GestaoSaudeMunicipal;
var _c;
__turbopack_context__.k.register(_c, "GestaoSaudeMunicipal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f8b0a69b._.js.map