module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
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
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/types/funsau.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// TYPES DO MÓDULO FUNSAU - Gestão e Auditoria de Processos Médicos
// ============================================================
__turbopack_context__.s([
    "FUNSAU_CATEGORIAS",
    ()=>FUNSAU_CATEGORIAS,
    "STATUS_AUDITORIA",
    ()=>STATUS_AUDITORIA,
    "STATUS_PROTOCOLO",
    ()=>STATUS_PROTOCOLO,
    "TIPOS_ATENDIMENTO",
    ()=>TIPOS_ATENDIMENTO,
    "TIPOS_DOCUMENTO",
    ()=>TIPOS_DOCUMENTO
]);
const FUNSAU_CATEGORIAS = {
    triagem: {
        id: 'triagem',
        nome: 'Triagem Médica',
        title: 'Triagem Médica',
        descricao: 'Atendimento inicial, cadastro de pacientes e abertura de protocolos',
        icone: 'Stethoscope',
        icon: 'Stethoscope',
        cor: 'emerald',
        rota: '/funsau/triagem',
        total_registros: 12,
        secoes: [
            'Novo Atendimento',
            'Protocolos em Aberto',
            'Histórico de Pacientes'
        ]
    },
    auditoria: {
        id: 'auditoria',
        nome: 'Auditoria Médica',
        title: 'Auditoria Médica',
        descricao: 'Auditoria prévia e final de processos médicos',
        icone: 'ClipboardCheck',
        icon: 'ClipboardCheck',
        cor: 'blue',
        rota: '/funsau/auditoria',
        total_registros: 28,
        secoes: [
            'Fila de Auditoria',
            'Auditoria Prévia',
            'Auditoria Final',
            'Glosas'
        ]
    },
    execucao: {
        id: 'execucao',
        nome: 'Execução de Procedimentos',
        title: 'Execução de Procedimentos',
        descricao: 'Validação de pacientes e execução de consultas, exames e cirurgias',
        icone: 'Hospital',
        icon: 'Hospital',
        cor: 'purple',
        rota: '/funsau/execucao',
        total_registros: 15,
        secoes: [
            'Consulta por CPF',
            'Validação de Paciente',
            'Procedimentos Realizados'
        ]
    },
    documentos: {
        id: 'documentos',
        nome: 'Documentos Clínicos',
        title: 'Documentos Clínicos',
        descricao: 'Upload e gestão de XML, laudos e prontuários',
        icone: 'FileText',
        icon: 'FileText',
        cor: 'amber',
        rota: '/funsau/documentos',
        total_registros: 156,
        secoes: [
            'Upload de XML',
            'Laudos Médicos',
            'Prontuários',
            'Histórico por Paciente'
        ]
    },
    financeiro: {
        id: 'financeiro',
        nome: 'Controle Financeiro',
        title: 'Controle Financeiro',
        descricao: 'Controle de pagamentos, glosas e valores auditados',
        icone: 'DollarSign',
        icon: 'DollarSign',
        cor: 'green',
        rota: '/funsau/financeiro',
        total_registros: 89,
        secoes: [
            'Processos Aprovados',
            'Pagamentos Pendentes',
            'Glosas',
            'Relatórios Financeiros'
        ]
    },
    relatorios: {
        id: 'relatorios',
        nome: 'Auditoria Inteligente',
        title: 'Auditoria Inteligente',
        descricao: 'Análise de padrões, alertas e relatórios estatísticos',
        icone: 'Brain',
        icon: 'Brain',
        cor: 'rose',
        rota: '/funsau/relatorios',
        total_registros: 34,
        secoes: [
            'Dashboard',
            'Análise de Padrões',
            'Alertas de Fraude',
            'Brasíndice'
        ]
    },
    configuracoes: {
        id: 'configuracoes',
        nome: 'Configurações',
        title: 'Configurações',
        descricao: 'Liberações automáticas, perfis de pacientes e cadastros',
        icone: 'Settings',
        icon: 'Settings',
        cor: 'slate',
        rota: '/funsau/configuracoes',
        total_registros: 8,
        secoes: [
            'Liberações Automáticas',
            'Profissionais de Saúde',
            'Regras de Auditoria'
        ]
    }
};
const STATUS_PROTOCOLO = [
    'Triagem',
    'Auditoria Prévia',
    'Liberado',
    'Em Execução',
    'Aguardando Documentos',
    'Auditoria Final',
    'Finalizado',
    'Glosado',
    'Cancelado'
];
const STATUS_AUDITORIA = [
    'Pendente',
    'Em Análise',
    'Aprovado',
    'Reprovado',
    'Ajuste',
    'Aceite Total',
    'Aceite Parcial',
    'Glosa Total'
];
const TIPOS_ATENDIMENTO = [
    'Consulta',
    'Exame',
    'Cirurgia',
    'Procedimento',
    'Internação',
    'Emergência'
];
const TIPOS_DOCUMENTO = [
    'XML',
    'Laudo',
    'Prontuário',
    'Prescrição',
    'Exame',
    'Receituário',
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
"[project]/app/funsau/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FunsauPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-ssr] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hospital.js [app-ssr] (ecmascript) <export default as Hospital>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$funsau$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/funsau.ts [app-ssr] (ecmascript)");
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
;
;
const iconMap = {
    Stethoscope: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
        className: "h-8 w-8 text-emerald-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 18,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    ClipboardCheck: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
        className: "h-8 w-8 text-blue-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 19,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    Hospital: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__["Hospital"], {
        className: "h-8 w-8 text-purple-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 20,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    FileText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "h-8 w-8 text-amber-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 21,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    DollarSign: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
        className: "h-8 w-8 text-green-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 22,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Brain: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
        className: "h-8 w-8 text-rose-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    Settings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
        className: "h-8 w-8 text-slate-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 24,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))
};
const gradientMap = {
    emerald: "from-emerald-500 to-teal-600",
    blue: "from-blue-500 to-indigo-600",
    purple: "from-purple-500 to-violet-600",
    amber: "from-amber-500 to-orange-600",
    green: "from-green-500 to-emerald-600",
    rose: "from-rose-500 to-pink-600",
    slate: "from-slate-500 to-gray-600"
};
const bgMap = {
    emerald: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    amber: "bg-amber-100 text-amber-700",
    green: "bg-green-100 text-green-700",
    rose: "bg-rose-100 text-rose-700",
    slate: "bg-slate-100 text-slate-700"
};
function FunsauPage() {
    const [cpfBusca, setCpfBusca] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Pacientes com atendimentos em andamento (para demonstração)
    const pacientesEmAndamento = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pacientesMockLista"].slice(0, 3);
    // Protocolos recentes
    const protocolosRecentes = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protocolosMockLista"].slice(0, 5);
    const buscarPaciente = ()=>{
        if (!cpfBusca) return;
        // Procurar paciente e navegar
        const paciente = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"].find((p)=>p.cpf === cpfBusca);
        if (paciente) {
            router.push(`/funsau/paciente/${paciente.id}`);
        } else {
            alert("Paciente não encontrado. Tente CPF: 123.456.789-00, 987.654.321-00 ou 456.789.123-00");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50",
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
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "h-6 w-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl font-bold text-slate-900",
                                                        children: "FUNSAU PM"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Fundo de Saúde da Polícia Militar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-medium",
                                    children: "🟢 Sistema Operacional"
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/funsau/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/funsau/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-8 border-emerald-200 bg-emerald-50/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-emerald-100 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "h-6 w-6 text-emerald-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-slate-900",
                                                        children: "Consulta por CPF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Acesse protocolos e histórico do policial/dependente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Digite o CPF do policial...",
                                                        value: cpfBusca,
                                                        onChange: (e)=>setCpfBusca(e.target.value),
                                                        className: "flex-1 rounded-xl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: buscarPaciente,
                                                        className: "bg-emerald-600 hover:bg-emerald-700 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Buscar"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 mt-2",
                                                children: "💡 Dica: Tente CPFs de demonstração: 123.456.789-00, 987.654.321-00 ou 456.789.123-00"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/funsau/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-emerald-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Atendimentos Hoje"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].atendimentos_dia
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-emerald-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "h-5 w-5 text-emerald-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Em Auditoria"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].em_auditoria
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-blue-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                    className: "h-5 w-5 text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-green-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Aprovados"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].aprovados
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-green-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "h-5 w-5 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-rose-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Glosados"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].glosados
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-rose-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "h-5 w-5 text-rose-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4 border-l-purple-500 col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Valor Processado (Mês)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].valor_processado
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-purple-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "h-5 w-5 text-purple-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-slate-900",
                                                children: "🚔 Policiais em Atendimento"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full",
                                                children: "Dados fictícios"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: pacientesEmAndamento.map((pac)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/funsau/paciente/${pac.id}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "border-l-4 border-l-emerald-400 hover:shadow-md transition-shadow cursor-pointer mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold text-slate-900",
                                                                                    children: pac.nome
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                                    lineNumber: 227,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-xs px-2 py-0.5 rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PATENTES_PM"].find((p)=>p.nome === pac.patente)?.cor || 'bg-gray-100 text-gray-700'}`,
                                                                                    children: pac.patente
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                                    lineNumber: 228,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-slate-500",
                                                                            children: [
                                                                                "CPF: ",
                                                                                pac.cpf
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: pac.unidade_lotacao
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 233,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        pac.dependente && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-purple-600 mt-1",
                                                                            children: [
                                                                                "↳ ",
                                                                                pac.dependente.nome,
                                                                                " (",
                                                                                pac.dependente.parentesco,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 235,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-bold text-emerald-600",
                                                                            children: pac.matricula_pm
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 241,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: [
                                                                                "Carteirinha: ",
                                                                                pac.numero_carteirinha
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        pac.alergias && pac.alergias.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-1 flex flex-wrap gap-1 justify-end",
                                                                            children: pac.alergias.map((alergia, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded",
                                                                                    children: [
                                                                                        "⚠️ ",
                                                                                        alergia
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                                    lineNumber: 246,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this)
                                            }, pac.id, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "💡 Clique em um policial para ver histórico completo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-slate-900",
                                                children: "📋 Protocolos Recentes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full",
                                                children: "Dados fictícios"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: protocolosRecentes.map((prot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "border-l-4 border-l-blue-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-slate-900",
                                                                    children: prot.numero_protocolo
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs px-2 py-1 rounded-full ${prot.status === 'aprovado' ? 'bg-emerald-100 text-emerald-700' : prot.status === 'glosado' ? 'bg-red-100 text-red-700' : prot.status === 'em_auditoria' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`,
                                                                    children: prot.status.replace('_', ' ').toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-700",
                                                            children: [
                                                                prot.paciente_nome,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-500 ml-1",
                                                                    children: [
                                                                        "(",
                                                                        prot.paciente_patente,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: [
                                                                prot.tipo_atendimento,
                                                                " - ",
                                                                prot.especialidade
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs px-2 py-1 rounded ${prot.prioridade === 'urgente' ? 'bg-red-100 text-red-700' : prot.prioridade === 'alta' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`,
                                                                    children: prot.prioridade.toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-bold text-emerald-600",
                                                                    children: [
                                                                        "R$ ",
                                                                        prot.valor_total.toLocaleString('pt-BR', {
                                                                            minimumFractionDigits: 2
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this),
                                                        prot.valor_glosado > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-red-600 mt-1",
                                                            children: [
                                                                "Glosado: R$ ",
                                                                prot.valor_glosado.toLocaleString('pt-BR', {
                                                                    minimumFractionDigits: 2
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            }, prot.id, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/funsau/triagem",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "rounded-full bg-gradient-to-r from-emerald-600 to-teal-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        "Novo Atendimento"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/funsau/auditoria",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "rounded-full bg-gradient-to-r from-blue-600 to-indigo-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this),
                                        "Auditoria"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/funsau/execucao",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "rounded-full bg-gradient-to-r from-purple-600 to-violet-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__["Hospital"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this),
                                        "Validar Paciente"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/funsau/documentos",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "rounded-full border-amber-200 text-amber-700 hover:bg-amber-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        "Upload XML"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900 mb-6",
                        children: "Módulos do Sistema"
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$funsau$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FUNSAU_CATEGORIAS"]).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: cat.rota,
                                className: "group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "h-full hover:shadow-xl transition-all duration-300 border-slate-200 group-hover:border-slate-300 group-hover:-translate-y-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-xl bg-gradient-to-br ${gradientMap[cat.cor]} shadow-lg`,
                                                    children: iconMap[cat.icone]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-slate-900 mb-1",
                                                            children: cat.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500 mb-3",
                                                            children: cat.descricao
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs px-2 py-1 rounded-full ${bgMap[cat.cor]}`,
                                                                    children: [
                                                                        cat.total_registros,
                                                                        " registros"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: "h-4 w-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this)
                            }, cat.id, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 bg-white rounded-2xl p-6 border border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-slate-900 mb-6",
                                children: "Fluxo de Atendimento FUNSAU PM"
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center gap-2",
                                children: [
                                    {
                                        step: 1,
                                        label: "Triagem",
                                        color: "emerald"
                                    },
                                    {
                                        step: 2,
                                        label: "Auditoria Prévia",
                                        color: "blue"
                                    },
                                    {
                                        step: 3,
                                        label: "Execução",
                                        color: "purple"
                                    },
                                    {
                                        step: 4,
                                        label: "Validação QR",
                                        color: "amber"
                                    },
                                    {
                                        step: 5,
                                        label: "Documentos",
                                        color: "slate"
                                    },
                                    {
                                        step: 6,
                                        label: "Auditoria Final",
                                        color: "rose"
                                    },
                                    {
                                        step: 7,
                                        label: "Financeiro",
                                        color: "green"
                                    },
                                    {
                                        step: 8,
                                        label: "Histórico",
                                        color: "indigo"
                                    }
                                ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-4 py-2 rounded-lg bg-${item.color}-100 text-${item.color}-700 text-sm font-medium`,
                                                children: [
                                                    item.step,
                                                    ". ",
                                                    item.label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            idx < 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-4 w-4 text-slate-400 mx-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.step, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-12 pt-8 border-t border-slate-200 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "Sistema de Gestão FUNSAU - Polícia Militar"
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mt-1",
                                children: "Dados de demonstração - Não usar em produção"
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/funsau/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ddaa846._.js.map