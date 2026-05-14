module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
Button.displayName = "Button";
;
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/types/gabinete.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// TYPES DO MÓDULO GABINETE DO VEREADOR
// ============================================================
__turbopack_context__.s([
    "GABINETE_CATEGORIAS",
    ()=>GABINETE_CATEGORIAS,
    "ORGAOS_MUNICIPAIS",
    ()=>ORGAOS_MUNICIPAIS,
    "STATUS_ATENDIMENTO",
    ()=>STATUS_ATENDIMENTO,
    "STATUS_INDICACAO",
    ()=>STATUS_INDICACAO,
    "STATUS_PROJETO_LEI",
    ()=>STATUS_PROJETO_LEI,
    "STATUS_REQUERIMENTO",
    ()=>STATUS_REQUERIMENTO,
    "TIPOS_MOCAO",
    ()=>TIPOS_MOCAO
]);
const GABINETE_CATEGORIAS = {
    documentos: {
        id: 'documentos',
        title: 'Documentos Parlamentares',
        descricao: 'Indicações, requerimentos, ofícios e moções protocolados',
        icon: 'FileText',
        cor: 'blue',
        secoes: [
            'Indicações',
            'Requerimentos',
            'Ofícios',
            'Moções'
        ]
    },
    atendimentos: {
        id: 'atendimentos',
        title: 'Atendimentos',
        descricao: 'Registro de demandas e atendimentos ao cidadão',
        icon: 'Users',
        cor: 'emerald',
        secoes: [
            'Novo Atendimento',
            'Em Andamento',
            'Resolvidos',
            'Arquivados'
        ]
    },
    agenda: {
        id: 'agenda',
        title: 'Agenda',
        descricao: 'Compromissos, sessões, reuniões e eventos',
        icon: 'Calendar',
        cor: 'purple',
        secoes: [
            'Próximos',
            'Hoje',
            'Esta Semana',
            'Este Mês',
            'Passados'
        ]
    },
    projetos: {
        id: 'projetos',
        title: 'Projetos de Lei',
        descricao: 'Projetos, emendas e tramitação legislativa',
        icon: 'Scale',
        cor: 'amber',
        secoes: [
            'Em Elaboração',
            'Protocolados',
            'Em Tramitação',
            'Aprovados',
            'Arquivados'
        ]
    },
    base: {
        id: 'base',
        title: 'Base e Comunidades',
        descricao: 'Lideranças, apoiadores, comunidades e mapeamento',
        icon: 'MapPin',
        cor: 'rose',
        secoes: [
            'Lideranças',
            'Apoiadores',
            'Comunidades',
            'Mapeamento'
        ]
    },
    relatorios: {
        id: 'relatorios',
        title: 'Relatórios',
        descricao: 'Relatório de mandato e estatísticas',
        icon: 'BarChart3',
        cor: 'indigo',
        secoes: [
            'Relatório de Mandato',
            'Estatísticas',
            'Atividades',
            'Prestação de Contas'
        ]
    }
};
const STATUS_INDICACAO = [
    'Protocolada',
    'Em tramitação',
    'Respondida',
    'Arquivada'
];
const STATUS_REQUERIMENTO = [
    'Protocolado',
    'Em tramitação',
    'Atendido',
    'Não atendido',
    'Arquivado'
];
const STATUS_ATENDIMENTO = [
    'Novo',
    'Em análise',
    'Encaminhado',
    'Em tratativa',
    'Resolvido',
    'Arquivado'
];
const STATUS_PROJETO_LEI = [
    'Elaboração',
    'Protocolado',
    'Em comissão',
    'Em pauta',
    'Aprovado',
    'Sancionado',
    'Vetado',
    'Arquivado'
];
const TIPOS_MOCAO = [
    'Aplauso',
    'Congratulação',
    'Pesar',
    'Repúdio',
    'Censura',
    'Outro'
];
const ORGAOS_MUNICIPAIS = [
    'SEMUR - Secretaria de Urbanismo',
    'SEMUSB - Secretaria de Saúde',
    'SEMED - Secretaria de Educação',
    'SEMAS - Secretaria de Assistência Social',
    'SEMOB - Secretaria de Mobilidade',
    'SEMINF - Secretaria de Infraestrutura',
    'SEMCOP - Secretaria de Copa e Ordem Pública',
    'SEMFAZ - Secretaria da Fazenda',
    'SEMAGRI - Secretaria de Agricultura',
    'SEMTRAB - Secretaria do Trabalho',
    'SECULT - Secretaria de Cultura',
    'SEMDES - Secretaria de Desenvolvimento',
    'Guarda Municipal',
    'Defesa Civil',
    'Procuradoria Geral',
    'Outro'
];
}),
"[project]/lib/dados-mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// DADOS FUNSAU - POLÍCIA MILITAR
// Sistema de Saúde para Policiais Militares
// ============================================================
// Patentes da Polícia Militar (ordem hierárquica)
__turbopack_context__.s([
    "PATENTES_PM",
    ()=>PATENTES_PM,
    "TIPOS_SANGUINEOS",
    ()=>TIPOS_SANGUINEOS,
    "UNIDADES_PM",
    ()=>UNIDADES_PM,
    "calcularIMC",
    ()=>calcularIMC,
    "classificarIMC",
    ()=>classificarIMC,
    "getPacienteByCPF",
    ()=>getPacienteByCPF,
    "getPacienteById",
    ()=>getPacienteById,
    "getPacientesByPatente",
    ()=>getPacientesByPatente,
    "getPacientesByUnidade",
    ()=>getPacientesByUnidade,
    "getProtocolosByPaciente",
    ()=>getProtocolosByPaciente,
    "mockAtendimentos",
    ()=>mockAtendimentos,
    "mockAuditorias",
    ()=>mockAuditorias,
    "mockBairros",
    ()=>mockBairros,
    "mockIndicacoes",
    ()=>mockIndicacoes,
    "mockMedicos",
    ()=>mockMedicos,
    "mockNotificacoes",
    ()=>mockNotificacoes,
    "mockPacientesPM",
    ()=>mockPacientesPM,
    "mockProtocolosPM",
    ()=>mockProtocolosPM,
    "pacientesMockLista",
    ()=>pacientesMockLista,
    "protocolosMockLista",
    ()=>protocolosMockLista,
    "statsFunsauPM",
    ()=>statsFunsauPM
]);
const PATENTES_PM = [
    {
        codigo: 'SD',
        nome: 'Soldado',
        nivel: 1,
        cor: 'bg-green-100 text-green-700'
    },
    {
        codigo: 'CB',
        nome: 'Cabo',
        nivel: 2,
        cor: 'bg-emerald-100 text-emerald-700'
    },
    {
        codigo: '3SGT',
        nome: '3º Sargento',
        nivel: 3,
        cor: 'bg-teal-100 text-teal-700'
    },
    {
        codigo: '2SGT',
        nome: '2º Sargento',
        nivel: 4,
        cor: 'bg-cyan-100 text-cyan-700'
    },
    {
        codigo: '1SGT',
        nome: '1º Sargento',
        nivel: 5,
        cor: 'bg-sky-100 text-sky-700'
    },
    {
        codigo: 'SUBTEN',
        nome: 'Subtenente',
        nivel: 6,
        cor: 'bg-blue-100 text-blue-700'
    },
    {
        codigo: 'ASP',
        nome: 'Aspirante',
        nivel: 7,
        cor: 'bg-indigo-100 text-indigo-700'
    },
    {
        codigo: '2TEN',
        nome: '2º Tenente',
        nivel: 8,
        cor: 'bg-violet-100 text-violet-700'
    },
    {
        codigo: '1TEN',
        nome: '1º Tenente',
        nivel: 9,
        cor: 'bg-purple-100 text-purple-700'
    },
    {
        codigo: 'CAP',
        nome: 'Capitão',
        nivel: 10,
        cor: 'bg-fuchsia-100 text-fuchsia-700'
    },
    {
        codigo: 'MAJ',
        nome: 'Major',
        nivel: 11,
        cor: 'bg-pink-100 text-pink-700'
    },
    {
        codigo: 'TC',
        nome: 'Tenente-Coronel',
        nivel: 12,
        cor: 'bg-rose-100 text-rose-700'
    },
    {
        codigo: 'CEL',
        nome: 'Coronel',
        nivel: 13,
        cor: 'bg-red-100 text-red-700'
    }
];
const UNIDADES_PM = [
    '1º Batalhão - Centro',
    '2º Batalhão - Zona Norte',
    '3º Batalhão - Zona Sul',
    '4º Batalhão - Zona Leste',
    '5º Batalhão - Zona Oeste',
    'Rondas Ostensivas Tobias de Aguiar (ROTA)',
    'Comando de Policiamento de Trânsito',
    'Polícia Militar Ambiental',
    'Polícia Militar Metropolitana',
    'Comando de Operações Especiais'
];
const TIPOS_SANGUINEOS = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-'
];
const mockPacientesPM = [
    {
        id: 'pm-001',
        nome: 'João Carlos Silva',
        cpf: '123.456.789-00',
        rg: '12.345.678-9',
        data_nascimento: '1975-08-15',
        idade: 49,
        sexo: 'M',
        estado_civil: 'Casado',
        nome_mae: 'Maria Aparecida Silva',
        nome_pai: 'José Silva',
        matricula: 'PM-001234',
        patente: 'Capitão',
        patente_codigo: 'CAP',
        unidade: '1º Batalhão - Centro',
        lotacao: 'Seção de Operações',
        data_ingresso: '2000-03-15',
        tempo_servico_anos: 24,
        telefone_pessoal: '(11) 98765-4321',
        telefone_funcional: '(11) 3333-1234',
        email: 'joao.silva@pm.sp.gov.br',
        endereco: 'Rua das Palmeiras, 123',
        bairro: 'Jardim Paulista',
        cidade: 'São Paulo',
        cep: '01450-000',
        tipo_sanguineo: 'O+',
        altura: 1.78,
        peso: 82,
        imc: 25.9,
        alergias: [
            'Dipirona',
            'Sulfas'
        ],
        comorbidades: [
            'Hipertensão Arterial',
            'Diabetes Mellitus Tipo 2',
            'Dislipidemia'
        ],
        medicamentos_continuos: [
            {
                nome: 'Losartana 50mg',
                dosagem: '1 comprimido',
                frequencia: '1x ao dia'
            },
            {
                nome: 'Metformina 850mg',
                dosagem: '1 comprimido',
                frequencia: '2x ao dia'
            },
            {
                nome: 'Sinvastatina 20mg',
                dosagem: '1 comprimido',
                frequencia: 'À noite'
            }
        ],
        cirurgias_previas: [
            {
                tipo: 'Apendicectomia',
                data: '2010-05-20',
                hospital: 'Hospital Militar'
            },
            {
                tipo: 'Artroscopia no joelho esquerdo',
                data: '2018-11-10',
                hospital: 'Hospital da PM'
            }
        ],
        dependentes: [
            {
                nome: 'Ana Paula Silva',
                parentesco: 'Cônjuge',
                data_nascimento: '1978-04-22'
            },
            {
                nome: 'Pedro Henrique Silva',
                parentesco: 'Filho',
                data_nascimento: '2005-09-10'
            },
            {
                nome: 'Mariana Silva',
                parentesco: 'Filha',
                data_nascimento: '2008-03-15'
            }
        ],
        carteirinha_saude: 'PMSP-001234-2024',
        qr_code: 'PMSP-QR-001234',
        historico_atendimentos: [
            {
                id: 'atd-001',
                data: '2024-01-15',
                tipo: 'Consulta',
                especialidade: 'Cardiologia',
                medico: 'Dr. Ricardo Mendes',
                cid: 'I10',
                diagnostico: 'Hipertensão arterial sistêmica em acompanhamento',
                sintomas: 'Cefaleia, tontura leve',
                procedimentos: [
                    'Aferição de PA',
                    'Eletrocardiograma'
                ],
                medicamentos_prescritos: [
                    {
                        nome: 'Losartana 50mg',
                        quantidade: '30 comprimidos',
                        posologia: '1x ao dia'
                    }
                ],
                exames_solicitados: [
                    'Hemograma',
                    'Creatinina',
                    'Potássio',
                    'Colesterol total e frações'
                ],
                status: 'Concluído',
                apto_para_servico: true,
                dias_atestado: 0,
                observacoes: 'PA controlada. Manter medicação. Retorno em 3 meses.'
            },
            {
                id: 'atd-002',
                data: '2024-02-20',
                tipo: 'Exame',
                especialidade: 'Laboratorial',
                medico: 'Dra. Ana Paula Ferreira',
                cid: '',
                diagnostico: 'Acompanhamento laboratorial rotina',
                sintomas: '',
                procedimentos: [
                    'Coleta de sangue'
                ],
                medicamentos_prescritos: [],
                exames_solicitados: [
                    'Glicemia de jejum',
                    'HbA1c',
                    'Colesterol',
                    'Triglicerídeos'
                ],
                status: 'Concluído',
                apto_para_servico: true,
                dias_atestado: 0,
                observacoes: 'Resultados: Glicemia 145mg/dL (elevada), HbA1c 7,2%. Aumentar Metformina.'
            },
            {
                id: 'atd-003',
                data: '2024-03-10',
                tipo: 'Emergência',
                especialidade: 'Clínica Médica',
                medico: 'Dr. Fernando Castro',
                cid: 'R51',
                diagnostico: 'Cefaleia tensional',
                sintomas: 'Cefaleia intensa, náuseas, fotofobia',
                procedimentos: [
                    'Avaliação neurológica',
                    'Exame físico completo'
                ],
                medicamentos_prescritos: [
                    {
                        nome: 'Dipirona 1g',
                        quantidade: '10 comprimidos',
                        posologia: 'Se dor, a cada 6h'
                    },
                    {
                        nome: 'Ondansetrona 8mg',
                        quantidade: '5 comprimidos',
                        posologia: 'Se náusea'
                    }
                ],
                exames_solicitados: [
                    'Tomografia de crânio (se persistir)'
                ],
                status: 'Concluído',
                apto_para_servico: false,
                dias_atestado: 2,
                observacoes: 'Melhora significativa após medicação. Afastado por 48h. Retorno se sintomas persistirem.'
            }
        ],
        created_at: '2020-01-01',
        updated_at: '2024-03-15'
    },
    {
        id: 'pm-002',
        nome: 'Mariana Oliveira Santos',
        cpf: '987.654.321-00',
        rg: '98.765.432-1',
        data_nascimento: '1982-04-22',
        idade: 42,
        sexo: 'F',
        estado_civil: 'Solteira',
        nome_mae: 'Rosa Maria Oliveira',
        matricula: 'PM-005678',
        patente: '1º Tenente',
        patente_codigo: '1TEN',
        unidade: 'Rondas Ostensivas Tobias de Aguiar (ROTA)',
        lotacao: 'Operador de Comunicações',
        data_ingresso: '2005-07-10',
        tempo_servico_anos: 19,
        telefone_pessoal: '(11) 97654-3210',
        email: 'mariana.santos@pm.sp.gov.br',
        endereco: 'Avenida Brasil, 456, Apto 302',
        bairro: 'Jardim das Flores',
        cidade: 'São Paulo',
        cep: '04550-000',
        tipo_sanguineo: 'A+',
        altura: 1.65,
        peso: 63,
        imc: 23.1,
        alergias: [
            'Amoxicilina',
            'Látex'
        ],
        comorbidades: [
            'Asma Brônquica',
            'Rinite Alérgica'
        ],
        medicamentos_continuos: [
            {
                nome: 'Budesonida spray nasal',
                dosagem: '1 jato em cada narina',
                frequencia: '2x ao dia'
            },
            {
                nome: 'Salbutamol spray',
                dosagem: '2 jatos',
                frequencia: 'Se falta de ar'
            }
        ],
        cirurgias_previas: [],
        dependentes: [
            {
                nome: 'Lucas Oliveira',
                parentesco: 'Filho',
                data_nascimento: '2012-06-18'
            }
        ],
        carteirinha_saude: 'PMSP-005678-2024',
        qr_code: 'PMSP-QR-005678',
        historico_atendimentos: [
            {
                id: 'atd-004',
                data: '2024-02-05',
                tipo: 'Consulta',
                especialidade: 'Pneumologia',
                medico: 'Dr. Carlos Eduardo Lima',
                cid: 'J45',
                diagnostico: 'Asma brônquica persistente moderada',
                sintomas: 'Falta de ar aos esforços, chiado no peito',
                procedimentos: [
                    'Espirometria',
                    'Oximetria de pulso'
                ],
                medicamentos_prescritos: [
                    {
                        nome: 'Formoterol + Budesonida',
                        quantidade: '1 inalador',
                        posologia: '2 jatos 2x ao dia'
                    }
                ],
                exames_solicitados: [
                    'Espirometria de controle',
                    'Raio X de tórax'
                ],
                status: 'Em Tratamento',
                apto_para_servico: true,
                dias_atestado: 0,
                observacoes: 'Asma controlada. Autorizada para atividade operacional. Usar bombinha antes do expediente.'
            },
            {
                id: 'atd-005',
                data: '2024-03-22',
                tipo: 'Vacina',
                especialidade: 'Imunização',
                medico: 'Dra. Fernanda Costa',
                cid: '',
                diagnostico: 'Vacinação anual contra gripe',
                sintomas: '',
                procedimentos: [
                    'Vacina Influenza quadrivalente'
                ],
                medicamentos_prescritos: [],
                exames_solicitados: [],
                status: 'Concluído',
                apto_para_servico: true,
                dias_atestado: 0,
                observacoes: 'Vacinação realizada sem intercorrências.'
            }
        ],
        created_at: '2020-01-01',
        updated_at: '2024-03-22'
    },
    {
        id: 'pm-003',
        nome: 'Roberto Dias Ferreira',
        cpf: '456.789.123-00',
        rg: '45.678.912-3',
        data_nascimento: '1968-11-30',
        idade: 55,
        sexo: 'M',
        estado_civil: 'Casado',
        nome_mae: 'Tereza Dias Ferreira',
        nome_pai: 'Antônio Ferreira',
        matricula: 'PM-009012',
        patente: 'Coronel',
        patente_codigo: 'CEL',
        unidade: 'Comando de Operações Especiais',
        lotacao: 'Comandante',
        data_ingresso: '1990-02-01',
        tempo_servico_anos: 34,
        telefone_pessoal: '(11) 96543-2109',
        telefone_funcional: '(11) 3333-9999',
        email: 'roberto.ferreira@pm.sp.gov.br',
        endereco: 'Rua dos Oficiais, 789',
        bairro: 'Morumbi',
        cidade: 'São Paulo',
        cep: '05650-000',
        tipo_sanguineo: 'B+',
        altura: 1.82,
        peso: 88,
        imc: 26.6,
        alergias: [
            'Nenhuma conhecida'
        ],
        comorbidades: [
            'Hipertensão Arterial',
            'Pré-diabetes',
            'Hérnia de Disco L4-L5'
        ],
        medicamentos_continuos: [
            {
                nome: 'Atenolol 50mg',
                dosagem: '1 comprimido',
                frequencia: '1x ao dia'
            },
            {
                nome: 'Hidroclorotiazida 25mg',
                dosagem: '1 comprimido',
                frequencia: '1x ao dia'
            }
        ],
        cirurgias_previas: [
            {
                tipo: 'Herniorrafia inguinal',
                data: '2015-08-12',
                hospital: 'Hospital das Clínicas'
            },
            {
                tipo: 'Artrodese lombar L4-L5',
                data: '2020-03-05',
                hospital: 'Hospital Albert Einstein'
            }
        ],
        dependentes: [
            {
                nome: 'Carolina Ferreira',
                parentesco: 'Cônjuge',
                data_nascimento: '1970-09-14'
            },
            {
                nome: 'Gabriel Ferreira',
                parentesco: 'Filho',
                data_nascimento: '1995-12-03'
            },
            {
                nome: 'Julia Ferreira',
                parentesco: 'Filha',
                data_nascimento: '1998-05-22'
            }
        ],
        carteirinha_saude: 'PMSP-009012-2024',
        qr_code: 'PMSP-QR-009012',
        historico_atendimentos: [
            {
                id: 'atd-006',
                data: '2024-01-10',
                tipo: 'Consulta',
                especialidade: 'Ortopedia',
                medico: 'Dr. Marcelo Augusto',
                cid: 'M51',
                diagnostico: 'Lombalgia crônica pós-operatória',
                sintomas: 'Dor lombar intensa, irradiada para membro inferior esquerdo',
                procedimentos: [
                    'Exame físico ortopédico',
                    'Teste de Lasegue'
                ],
                medicamentos_prescritos: [
                    {
                        nome: 'Pregabalina 75mg',
                        quantidade: '30 cápsulas',
                        posologia: '2x ao dia'
                    },
                    {
                        nome: 'Nortriptilina 25mg',
                        quantidade: '30 comprimidos',
                        posologia: 'À noite'
                    }
                ],
                exames_solicitados: [
                    'Ressonância magnética lombossacra',
                    'Densitometria óssea'
                ],
                status: 'Em Tratamento',
                apto_para_servico: true,
                dias_atestado: 0,
                observacoes: 'Limitação física parcial. Recomendado evitar esforço físico excessivo. Autorizado para funções administrativas.'
            },
            {
                id: 'atd-007',
                data: '2024-03-15',
                tipo: 'Cirurgia',
                especialidade: 'Neurocirurgia',
                medico: 'Dr. Paulo Roberto',
                cid: 'M51',
                diagnostico: 'Reintervenção na coluna lombar',
                sintomas: 'Piora da dor, déficit sensitivo no L5 esquerdo',
                procedimentos: [
                    'Descompressão radicular L5',
                    'Artrodese L4-L5 revisão'
                ],
                medicamentos_prescritos: [
                    {
                        nome: 'Oxicodona 10mg',
                        quantidade: '20 comprimidos',
                        posologia: 'A cada 8h (dor)'
                    },
                    {
                        nome: 'Dipirona 1g',
                        quantidade: '30 comprimidos',
                        posologia: 'A cada 6h'
                    }
                ],
                exames_solicitados: [
                    'RM pós-operatória em 30 dias'
                ],
                status: 'Concluído',
                evolucao: 'Cirurgia realizada sem intercorrências.',
                apto_para_servico: false,
                dias_atestado: 45,
                observacoes: 'Cirurgia realizada com sucesso. Alta hospitalar em 3 dias. Afastado por 45 dias para recuperação. Fisioterapia prescrita.'
            }
        ],
        created_at: '2020-01-01',
        updated_at: '2024-03-15'
    },
    {
        id: 'pm-004',
        nome: 'Fernando Costa Lima',
        cpf: '789.123.456-00',
        rg: '78.912.345-6',
        data_nascimento: '1990-06-18',
        idade: 34,
        sexo: 'M',
        estado_civil: 'Solteiro',
        nome_mae: 'Sandra Lima',
        matricula: 'PM-015678',
        patente: 'Sargento',
        patente_codigo: '3SGT',
        unidade: '3º Batalhão - Zona Sul',
        lotacao: 'Policiamento Ostensivo',
        data_ingresso: '2012-11-20',
        tempo_servico_anos: 12,
        telefone_pessoal: '(11) 95432-1098',
        email: 'fernando.lima@pm.sp.gov.br',
        endereco: 'Rua Brigadeiro, 321',
        bairro: 'Moema',
        cidade: 'São Paulo',
        cep: '04550-123',
        tipo_sanguineo: 'AB+',
        altura: 1.75,
        peso: 78,
        imc: 25.4,
        alergias: [
            'Penicilina'
        ],
        comorbidades: [],
        medicamentos_continuos: [],
        cirurgias_previas: [],
        dependentes: [],
        carteirinha_saude: 'PMSP-015678-2024',
        qr_code: 'PMSP-QR-015678',
        historico_atendimentos: [
            {
                id: 'atd-008',
                data: '2024-03-25',
                tipo: 'Emergência',
                especialidade: 'Traumatologia',
                medico: 'Dr. Gustavo Henrique',
                cid: 'S82',
                diagnostico: 'Fratura de tíbia e perôneo direito',
                sintomas: 'Dor intensa, deformidade, impotência funcional',
                procedimentos: [
                    'Imobilização',
                    'Redução fechada',
                    'Radiografia'
                ],
                medicamentos_prescritos: [
                    {
                        nome: 'Dipirona 1g',
                        quantidade: '20 comprimidos',
                        posologia: 'A cada 6h'
                    },
                    {
                        nome: 'Tramadol 50mg',
                        quantidade: '20 comprimidos',
                        posologia: 'A cada 8h (dor forte)'
                    }
                ],
                exames_solicitados: [
                    'Radiografia de controle em 7 dias'
                ],
                status: 'Em Tratamento',
                apto_para_servico: false,
                dias_atestado: 60,
                observacoes: 'Fratura em acidente de moto em serviço. Redução realizada. Plaster em gesso. Afastado por 60 dias. Acompanhamento ortopédico semanal.'
            }
        ],
        created_at: '2020-01-01',
        updated_at: '2024-03-25'
    },
    {
        id: 'pm-005',
        nome: 'Amanda Ribeiro Souza',
        cpf: '321.654.987-00',
        rg: '32.165.498-7',
        data_nascimento: '1995-09-25',
        idade: 29,
        sexo: 'F',
        estado_civil: 'Casada',
        nome_mae: 'Helena Ribeiro',
        matricula: 'PM-023456',
        patente: 'Cabo',
        patente_codigo: 'CB',
        unidade: 'Polícia Militar Ambiental',
        lotacao: 'Patrulha Ambiental',
        data_ingresso: '2018-03-05',
        tempo_servico_anos: 6,
        telefone_pessoal: '(11) 94321-0987',
        email: 'amanda.souza@pm.sp.gov.br',
        endereco: 'Rua Verde, 567',
        bairro: 'Vila Madalena',
        cidade: 'São Paulo',
        cep: '05450-000',
        tipo_sanguineo: 'O-',
        altura: 1.68,
        peso: 61,
        imc: 21.6,
        alergias: [
            'Poeira',
            'Pólen'
        ],
        comorbidades: [
            'Rinite Alérgica',
            'Sinusite'
        ],
        medicamentos_continuos: [
            {
                nome: 'Loratadina 10mg',
                dosagem: '1 comprimido',
                frequencia: '1x ao dia (manhã)'
            }
        ],
        cirurgias_previas: [
            {
                tipo: 'Colecistectomia videolaparoscópica',
                data: '2022-07-15',
                hospital: 'Hospital Militar'
            }
        ],
        dependentes: [
            {
                nome: 'Rafael Souza',
                parentesco: 'Cônjuge',
                data_nascimento: '1993-02-10'
            }
        ],
        carteirinha_saude: 'PMSP-023456-2024',
        qr_code: 'PMSP-QR-023456',
        historico_atendimentos: [
            {
                id: 'atd-009',
                data: '2024-03-20',
                tipo: 'Consulta',
                especialidade: 'Ginecologia',
                medico: 'Dra. Patricia Mendes',
                cid: '',
                diagnostico: 'Pré-natal de rotina',
                sintomas: '',
                procedimentos: [
                    'Exame físico',
                    'Ausculta fetal'
                ],
                medicamentos_prescritos: [
                    {
                        nome: 'Ácido Fólico 5mg',
                        quantidade: '30 comprimidos',
                        posologia: '1x ao dia'
                    },
                    {
                        nome: 'Sulfato Ferroso',
                        quantidade: '30 comprimidos',
                        posologia: '1x ao dia'
                    }
                ],
                exames_solicitados: [
                    'Ultrassom obstétrico',
                    'Hemograma',
                    'Glicemia',
                    'Exame de urina'
                ],
                status: 'Concluído',
                apto_para_servico: true,
                dias_atestado: 0,
                observacoes: 'Gestação de 12 semanas. Evitar esforço físico excessivo. Autorizada para serviço administrativo.'
            }
        ],
        created_at: '2020-01-01',
        updated_at: '2024-03-20'
    }
];
const mockProtocolosPM = [
    {
        id: 'prot-001',
        numero_protocolo: 'PMSP-2024-0001',
        paciente: mockPacientesPM[0],
        data_solicitacao: '2024-03-25',
        tipo_atendimento: 'Consulta',
        especialidade: 'Endocrinologia',
        cid: 'E11',
        diagnostico: 'Diabetes Mellitus Tipo 2 - Revisão',
        sintomas: 'Glicemia elevada, fadiga',
        procedimentos: [
            {
                codigo: '10101012',
                descricao: 'Consulta endocrinologia',
                quantidade: 1,
                valor: 280.00
            },
            {
                codigo: '20102015',
                descricao: 'HbA1c',
                quantidade: 1,
                valor: 85.00
            },
            {
                codigo: '20103020',
                descricao: 'Perfil lipídico',
                quantidade: 1,
                valor: 120.00
            }
        ],
        status: 'Liberado',
        prioridade: 'Normal',
        medico_solicitante: 'Dr. Ricardo Mendes',
        crm: '12345-SP',
        unidade_solicitante: 'Hospital da Polícia Militar',
        valor_total: 485.00,
        observacoes: 'Paciente policial militar com diabetes descompensada. Necessita ajuste de medicação.'
    },
    {
        id: 'prot-002',
        numero_protocolo: 'PMSP-2024-0002',
        paciente: mockPacientesPM[1],
        data_solicitacao: '2024-03-26',
        tipo_atendimento: 'Exame',
        especialidade: 'Pneumologia',
        cid: 'J45',
        diagnostico: 'Asma brônquica - Controle',
        sintomas: 'Chiado no peito, falta de ar aos esforços',
        procedimentos: [
            {
                codigo: '20104025',
                descricao: 'Espirometria completa',
                quantidade: 1,
                valor: 250.00
            },
            {
                codigo: '20105030',
                descricao: 'Teste de reversibilidade broncodilatadora',
                quantidade: 1,
                valor: 180.00
            }
        ],
        status: 'Auditoria Prévia',
        prioridade: 'Urgente',
        medico_solicitante: 'Dr. Carlos Eduardo Lima',
        crm: '23456-SP',
        unidade_solicitante: 'Hospital da Polícia Militar',
        valor_total: 430.00,
        observacoes: 'Policial lotada na ROTA. Necessita avaliação respiratória urgente para aptidão operacional.'
    },
    {
        id: 'prot-003',
        numero_protocolo: 'PMSP-2024-0003',
        paciente: mockPacientesPM[2],
        data_solicitacao: '2024-03-20',
        tipo_atendimento: 'Cirurgia',
        especialidade: 'Neurocirurgia',
        cid: 'M51',
        diagnostico: 'Hérnia de disco L4-L5 - Reintervenção',
        sintomas: 'Dor lombar intensa, déficit sensitivo L5',
        procedimentos: [
            {
                codigo: '30101040',
                descricao: 'Artrodese lombar L4-L5',
                quantidade: 1,
                valor: 12500.00
            },
            {
                codigo: '30102050',
                descricao: 'Descompressão radicular',
                quantidade: 1,
                valor: 3500.00
            },
            {
                codigo: '40103060',
                descricao: 'Internação UTI 2 dias',
                quantidade: 2,
                valor: 2400.00
            },
            {
                codigo: '40104070',
                descricao: 'Internação enfermaria 3 dias',
                quantidade: 3,
                valor: 1500.00
            }
        ],
        status: 'Finalizado',
        prioridade: 'Urgente',
        medico_solicitante: 'Dr. Paulo Roberto',
        crm: '34567-SP',
        unidade_solicitante: 'Hospital Albert Einstein',
        valor_total: 19900.00,
        observacoes: 'Coronel da PM. Cirurgia realizada com sucesso. Afastado por 45 dias.'
    },
    {
        id: 'prot-004',
        numero_protocolo: 'PMSP-2024-0004',
        paciente: mockPacientesPM[3],
        data_solicitacao: '2024-03-25',
        tipo_atendimento: 'Cirurgia',
        especialidade: 'Traumatologia',
        cid: 'S82',
        diagnostico: 'Fratura de tíbia e perôneo',
        sintomas: 'Fratura exposta, dor intensa',
        procedimentos: [
            {
                codigo: '30105080',
                descricao: 'Osteossíntese de tíbia com placa e parafusos',
                quantidade: 1,
                valor: 8500.00
            },
            {
                codigo: '30106090',
                descricao: 'Osteossíntese de perôneo',
                quantidade: 1,
                valor: 4200.00
            },
            {
                codigo: '40103100',
                descricao: 'Internação 5 dias',
                quantidade: 5,
                valor: 2500.00
            }
        ],
        status: 'Em Execução',
        prioridade: 'Emergência',
        medico_solicitante: 'Dr. Gustavo Henrique',
        crm: '45678-SP',
        unidade_solicitante: 'Hospital das Clínicas',
        valor_total: 15200.00,
        observacoes: 'Acidente em serviço. Policial atropelado durante abordagem. Cirurgia emergencial realizada.'
    },
    {
        id: 'prot-005',
        numero_protocolo: 'PMSP-2024-0005',
        paciente: mockPacientesPM[4],
        data_solicitacao: '2024-03-22',
        tipo_atendimento: 'Procedimento',
        especialidade: 'Obstetrícia',
        cid: '',
        diagnostico: 'Pré-natal de rotina',
        sintomas: '',
        procedimentos: [
            {
                codigo: '20107110',
                descricao: 'Ultrassom obstétrico morfológico',
                quantidade: 1,
                valor: 350.00
            },
            {
                codigo: '20108120',
                descricao: 'Hemograma completo',
                quantidade: 1,
                valor: 45.00
            },
            {
                codigo: '20109130',
                descricao: 'Glicemia de jejum',
                quantidade: 1,
                valor: 25.00
            }
        ],
        status: 'Aguardando Documentos',
        prioridade: 'Normal',
        medico_solicitante: 'Dra. Patricia Mendes',
        crm: '56789-SP',
        unidade_solicitante: 'Hospital da Polícia Militar',
        valor_total: 420.00,
        observacoes: 'Gestação de 20 semanas. Policial lotada na Ambiental. Gestação de baixo risco.'
    }
];
const pacientesMockLista = mockPacientesPM.map((p)=>({
        id: p.id,
        nome: p.nome,
        cpf: p.cpf,
        matricula_pm: p.matricula,
        patente: p.patente,
        unidade_lotacao: p.unidade,
        numero_carteirinha: p.carteirinha_saude,
        alergias: p.alergias,
        dependente: p.dependentes.length > 0 ? {
            nome: p.dependentes[0].nome,
            parentesco: p.dependentes[0].parentesco
        } : undefined
    }));
const protocolosMockLista = mockProtocolosPM.map((p)=>({
        id: p.id,
        numero_protocolo: p.numero_protocolo,
        paciente_id: p.paciente.id,
        paciente_nome: p.paciente.nome,
        paciente_patente: p.paciente.patente,
        status: p.status.toLowerCase().replace(/ /g, '_'),
        tipo_atendimento: p.tipo_atendimento,
        especialidade: p.especialidade,
        prioridade: p.prioridade.toLowerCase(),
        valor_total: p.valor_total,
        valor_glosado: 0,
        data_solicitacao: p.data_solicitacao
    }));
const statsFunsauPM = {
    // Novos campos para a página principal
    atendimentos_dia: 12,
    em_auditoria: 8,
    aprovados: 45,
    glosados: 3,
    valor_processado: 'R$ 158.750,50',
    // Campos antigos mantidos para compatibilidade
    total_policiais: 245,
    atendimentos_mes: 89,
    cirurgias_realizadas: 12,
    internacoes: 8,
    afastamentos_saude: 15,
    valor_mes: 158750.50,
    exames_realizados: 234,
    consultas: 145,
    emergencias: 23,
    // Por patente
    por_patente: [
        {
            patente: 'Soldado',
            quantidade: 89
        },
        {
            patente: 'Cabo',
            quantidade: 56
        },
        {
            patente: 'Sargento',
            quantidade: 48
        },
        {
            patente: 'Tenente',
            quantidade: 32
        },
        {
            patente: 'Capitão',
            quantidade: 15
        },
        {
            patente: 'Major',
            quantidade: 8
        },
        {
            patente: 'Coronel',
            quantidade: 4
        }
    ],
    // Por unidade
    por_unidade: [
        {
            unidade: '1º Batalhão',
            atendimentos: 23
        },
        {
            unidade: '2º Batalhão',
            atendimentos: 18
        },
        {
            unidade: '3º Batalhão',
            atendimentos: 15
        },
        {
            unidade: 'ROTA',
            atendimentos: 12
        },
        {
            unidade: 'Ambiental',
            atendimentos: 8
        },
        {
            unidade: 'CPO',
            atendimentos: 13
        }
    ]
};
const mockMedicos = [
    {
        id: 'med-001',
        nome: 'Dr. Ricardo Mendes',
        crm: '12345-SP',
        especialidade: 'Clínica Geral',
        unidade: 'Hospital da PM'
    },
    {
        id: 'med-002',
        nome: 'Dra. Ana Paula Ferreira',
        crm: '23456-SP',
        especialidade: 'Cardiologia',
        unidade: 'Hospital da PM'
    },
    {
        id: 'med-003',
        nome: 'Dr. Fernando Castro',
        crm: '34567-SP',
        especialidade: 'Ortopedia',
        unidade: 'Hospital da PM'
    },
    {
        id: 'med-004',
        nome: 'Dr. Carlos Eduardo Lima',
        crm: '45678-SP',
        especialidade: 'Pneumologia',
        unidade: 'Hospital das Clínicas'
    },
    {
        id: 'med-005',
        nome: 'Dr. Marcelo Augusto',
        crm: '56789-SP',
        especialidade: 'Neurocirurgia',
        unidade: 'Hospital Albert Einstein'
    },
    {
        id: 'med-006',
        nome: 'Dra. Patricia Mendes',
        crm: '67890-SP',
        especialidade: 'Ginecologia/Obstetrícia',
        unidade: 'Hospital da PM'
    },
    {
        id: 'med-007',
        nome: 'Dr. Gustavo Henrique',
        crm: '78901-SP',
        especialidade: 'Traumatologia',
        unidade: 'Hospital das Clínicas'
    },
    {
        id: 'med-008',
        nome: 'Dra. Fernanda Costa',
        crm: '89012-SP',
        especialidade: 'Medicina do Trabalho',
        unidade: 'Hospital da PM'
    }
];
const mockAuditorias = [
    {
        id: 'aud-001',
        protocolo: 'PMSP-2024-0001',
        paciente: 'João Carlos Silva',
        tipo: 'Prévia',
        status: 'Aprovado',
        valor_solicitado: 485.00,
        valor_aprovado: 485.00,
        glosa: 0,
        auditor: 'Dr. Roberto Almeida',
        data: '2024-03-26',
        observacoes: 'Procedimentos adequados ao quadro clínico. Aprovado.'
    },
    {
        id: 'aud-002',
        protocolo: 'PMSP-2024-0002',
        paciente: 'Mariana Oliveira Santos',
        tipo: 'Prévia',
        status: 'Aprovado com ressalvas',
        valor_solicitado: 430.00,
        valor_aprovado: 250.00,
        glosa: 180.00,
        auditor: 'Dra. Carla Nunes',
        data: '2024-03-27',
        observacoes: 'Teste de reversibilidade não justificado. Glosado.'
    },
    {
        id: 'aud-003',
        protocolo: 'PMSP-2024-0003',
        paciente: 'Roberto Dias Ferreira',
        tipo: 'Final',
        status: 'Aprovado',
        valor_solicitado: 19900.00,
        valor_aprovado: 19900.00,
        glosa: 0,
        auditor: 'Dr. Paulo Henrique',
        data: '2024-03-25',
        observacoes: 'Cirurgia de alta complexidade. Procedimento adequado.'
    }
];
const mockNotificacoes = [
    {
        id: 1,
        tipo: 'urgente',
        mensagem: 'Sgt. Fernando Costa - Cirurgia agendada para amanhã 08h',
        data: '2024-03-27',
        lida: false
    },
    {
        id: 2,
        tipo: 'aviso',
        mensagem: 'Cabo Amanda - Exames de pré-natal liberados',
        data: '2024-03-26',
        lida: false
    },
    {
        id: 3,
        tipo: 'info',
        mensagem: 'Nova vacinação contra gripe disponível',
        data: '2024-03-25',
        lida: true
    },
    {
        id: 4,
        tipo: 'alerta',
        mensagem: 'Atualização do Brasíndice v24.02 disponível',
        data: '2024-03-24',
        lida: false
    }
];
const mockBairros = [
    {
        id: 'b1',
        nome: 'Centro',
        zona: 'Central',
        populacao: 15000,
        demandas: 45
    },
    {
        id: 'b2',
        nome: 'Jardim Paulista',
        zona: 'Zona Sul',
        populacao: 25000,
        demandas: 32
    },
    {
        id: 'b3',
        nome: 'Vila Madalena',
        zona: 'Zona Oeste',
        populacao: 18000,
        demandas: 28
    },
    {
        id: 'b4',
        nome: 'Mooca',
        zona: 'Zona Leste',
        populacao: 30000,
        demandas: 56
    },
    {
        id: 'b5',
        nome: 'Santana',
        zona: 'Zona Norte',
        populacao: 22000,
        demandas: 41
    }
];
const mockAtendimentos = [
    {
        id: 'at1',
        solicitante: 'João da Silva',
        tipo: 'Reunião',
        data: '2024-03-25',
        status: 'Confirmado',
        assunto: 'Infraestrutura escolar'
    },
    {
        id: 'at2',
        solicitante: 'Maria Oliveira',
        tipo: 'Audiência',
        data: '2024-03-26',
        status: 'Pendente',
        assunto: 'Regularização fundiária'
    },
    {
        id: 'at3',
        solicitante: 'Pedro Costa',
        tipo: 'Visita',
        data: '2024-03-27',
        status: 'Confirmado',
        assunto: 'Inauguração do Centro Esportivo'
    }
];
const mockIndicacoes = [
    {
        id: 'ind1',
        numero: '001/2024',
        assunto: 'Reforma de escola',
        autor: 'Vereador A',
        status: 'Em tramitação'
    },
    {
        id: 'ind2',
        numero: '002/2024',
        assunto: 'Melhoria viária',
        autor: 'Vereador B',
        status: 'Aprovada'
    },
    {
        id: 'ind3',
        numero: '003/2024',
        assunto: 'Iluminação pública',
        autor: 'Vereador C',
        status: 'Pendente'
    }
];
const getPacienteById = (id)=>{
    return mockPacientesPM.find((p)=>p.id === id);
};
const getPacienteByCPF = (cpf)=>{
    return mockPacientesPM.find((p)=>p.cpf === cpf);
};
const getProtocolosByPaciente = (pacienteId)=>{
    return mockProtocolosPM.filter((p)=>p.paciente.id === pacienteId);
};
const getPacientesByPatente = (patente)=>{
    return mockPacientesPM.filter((p)=>p.patente === patente);
};
const getPacientesByUnidade = (unidade)=>{
    return mockPacientesPM.filter((p)=>p.unidade.includes(unidade));
};
const calcularIMC = (peso, altura)=>{
    return parseFloat((peso / (altura * altura)).toFixed(1));
};
const classificarIMC = (imc)=>{
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidade';
};
}),
"[project]/app/gabinete/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GabinetePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$gabinete$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/gabinete.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-mock.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const iconMap = {
    FileText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "h-8 w-8 text-blue-500"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 17,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Users: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
        className: "h-8 w-8 text-emerald-500"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    Calendar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
        className: "h-8 w-8 text-purple-500"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 19,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Scale: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
        className: "h-8 w-8 text-amber-500"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    MapPin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
        className: "h-8 w-8 text-rose-500"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 21,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    BarChart3: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
        className: "h-8 w-8 text-indigo-500"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 22,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0))
};
const bgIconMap = {
    FileText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "h-32 w-32 text-blue-200/50"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 26,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Users: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
        className: "h-32 w-32 text-emerald-200/50"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    Calendar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
        className: "h-32 w-32 text-purple-200/50"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 28,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Scale: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
        className: "h-32 w-32 text-amber-200/50"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    MapPin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
        className: "h-32 w-32 text-rose-200/50"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 30,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    BarChart3: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
        className: "h-32 w-32 text-indigo-200/50"
    }, void 0, false, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 31,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0))
};
const gradientMap = {
    blue: "from-blue-50 via-white to-blue-50/50 border-blue-100 hover:border-blue-200",
    emerald: "from-emerald-50 via-white to-emerald-50/50 border-emerald-100 hover:border-emerald-200",
    purple: "from-purple-50 via-white to-purple-50/50 border-purple-100 hover:border-purple-200",
    amber: "from-amber-50 via-white to-amber-50/50 border-amber-100 hover:border-amber-200",
    rose: "from-rose-50 via-white to-rose-50/50 border-rose-100 hover:border-rose-200",
    indigo: "from-indigo-50 via-white to-indigo-50/50 border-indigo-100 hover:border-indigo-200"
};
const iconBgMap = {
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    purple: "bg-purple-100 text-purple-600",
    amber: "bg-amber-100 text-amber-600",
    rose: "bg-rose-100 text-rose-600",
    indigo: "bg-indigo-100 text-indigo-600"
};
// Stats mockados (depois virão do banco)
const statsMock = {
    indicacoes: {
        total: 45,
        pendentes: 12,
        respondidas: 33
    },
    requerimentos: {
        total: 28,
        pendentes: 8,
        atendidos: 20
    },
    atendimentos: {
        total: 156,
        novos: 5,
        resolvidos: 120
    },
    projetos: {
        total: 8,
        tramitacao: 3,
        aprovados: 5
    }
};
function GabinetePage() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Simula carregamento
        setTimeout(()=>setLoading(false), 500);
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-amber-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 animate-pulse mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-slate-500 font-medium",
                        children: "Carregando Gabinete..."
                    }, void 0, false, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gabinete/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/gabinete/page.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b border-slate-200 sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "p-2 rounded-lg hover:bg-slate-100 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-5 w-5 text-slate-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                    className: "h-6 w-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl font-bold text-slate-900",
                                                        children: "Gabinete do Vereador"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Sistema de Gestão Parlamentar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "h-5 w-5 text-slate-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "h-5 w-5 text-slate-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gabinete/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gabinete/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Indicações"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-slate-900",
                                                            children: statsMock.indicacoes.total
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-blue-100 rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "h-5 w-5 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-center gap-2 text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-600 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    statsMock.indicacoes.pendentes,
                                                    " pendentes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gabinete/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-emerald-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Atendimentos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-slate-900",
                                                            children: statsMock.atendimentos.total
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-emerald-100 rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "h-5 w-5 text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-center gap-2 text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-600 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    statsMock.atendimentos.resolvidos,
                                                    " resolvidos"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gabinete/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-purple-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Compromissos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-slate-900",
                                                            children: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-purple-100 rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-5 w-5 text-purple-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xs text-slate-500",
                                            children: "Esta semana"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gabinete/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-amber-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Projetos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-slate-900",
                                                            children: statsMock.projetos.total
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-amber-100 rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                        className: "h-5 w-5 text-amber-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-center gap-2 text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-600",
                                                children: [
                                                    statsMock.projetos.tramitacao,
                                                    " em tramitação"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gabinete/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    "Nova Indicação"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    "Novo Atendimento"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    "Novo Compromisso"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "rounded-full border-amber-200 text-amber-700 hover:bg-amber-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    "Buscar Protocolo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900 mb-6",
                        children: "Módulos do Gabinete"
                    }, void 0, false, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$gabinete$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GABINETE_CATEGORIAS"]).map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/gabinete/${cat.id}`,
                                className: `group relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${gradientMap[cat.cor]}`,
                                style: {
                                    animationDelay: `${idx * 0.1}s`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -right-8 -bottom-8 opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                                        children: bgIconMap[cat.icon]
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-4 rounded-2xl shadow-lg w-fit mb-4 transition-transform duration-300 group-hover:scale-110 ${iconBgMap[cat.cor]}`,
                                                children: iconMap[cat.icon]
                                            }, void 0, false, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors",
                                                children: cat.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm leading-relaxed mb-4",
                                                children: cat.descricao
                                            }, void 0, false, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    cat.secoes.slice(0, 3).map((secao)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium bg-white/80 px-3 py-1.5 rounded-full border border-slate-100 shadow-sm",
                                                            children: secao
                                                        }, secao, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this)),
                                                    cat.secoes.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 px-2 py-1.5",
                                                        children: [
                                                            "+",
                                                            cat.secoes.length - 3
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors",
                                                children: [
                                                    "Acessar",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gabinete/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat.id, true, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-slate-900",
                                        children: "Últimos Atendimentos (Demonstração)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full",
                                        children: "Dados fictícios"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAtendimentos"].map((at)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-l-4 border-l-emerald-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-slate-400",
                                                            children: at.tipo
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs px-2 py-1 rounded-full ${at.status === 'Confirmado' ? 'bg-emerald-100 text-emerald-700' : at.status === 'Urgente' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`,
                                                            children: at.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-slate-900",
                                                    children: at.solicitante
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-500",
                                                    children: at.assunto
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex items-center gap-2 text-xs text-slate-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-slate-100 px-2 py-1 rounded",
                                                        children: at.data
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gabinete/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    }, at.id, false, {
                                        fileName: "[project]/app/gabinete/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-amber-200 bg-amber-50/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "h-5 w-5 text-amber-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-slate-900",
                                                    children: "Pendências Urgentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-700",
                                                            children: "Indicações sem resposta +30 dias"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-amber-600",
                                                            children: "5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-700",
                                                            children: "Atendimentos urgentes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-red-600",
                                                            children: "3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-700",
                                                            children: "Projetos em pauta esta semana"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-blue-600",
                                                            children: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gabinete/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-indigo-200 bg-indigo-50/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-5 w-5 text-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-slate-900",
                                                    children: "Resumo do Mês"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-700",
                                                            children: "Atendimentos realizados"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-emerald-600",
                                                            children: "+24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-700",
                                                            children: "Indicações protocoladas"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-blue-600",
                                                            children: "+12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-700",
                                                            children: "Visitas a comunidades"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-purple-600",
                                                            children: "+8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gabinete/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gabinete/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gabinete/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gabinete/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gabinete/page.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gabinete/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gabinete/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/gabinete/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_d5ee1825._.js.map