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
"[project]/lib/relatorios-engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelatoriosEngine",
    ()=>RelatoriosEngine,
    "analisarCustoBeneficio",
    ()=>analisarCustoBeneficio,
    "default",
    ()=>__TURBOPACK__default__export__,
    "detectarFraude",
    ()=>detectarFraude,
    "getDashboardPrincipal",
    ()=>getDashboardPrincipal,
    "getRelatorioByPatente",
    ()=>getRelatorioByPatente,
    "getRelatorioByUnidade",
    ()=>getRelatorioByUnidade
]);
// ============================================================
// SISTEMA DE RELATÓRIOS E DASHBOARDS - FUNSAU PM
// Métricas, KPIs e análises específicas para Polícia Militar
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-mock.ts [app-ssr] (ecmascript)");
;
function getDashboardPrincipal() {
    const agora = new Date();
    const mesAtual = agora.getMonth();
    const anoAtual = agora.getFullYear();
    // Filtra protocolos do mês atual
    const protocolosMes = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProtocolosPM"].filter((p)=>{
        const data = new Date(p.data_solicitacao);
        return data.getMonth() === mesAtual && data.getFullYear() === anoAtual;
    });
    // Calcula métricas
    const totalAtendimentos = protocolosMes.length;
    const valorTotal = protocolosMes.reduce((sum, p)=>sum + p.valor_total, 0);
    const glosas = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAuditorias"].filter((a)=>a.status === 'Glosa').length;
    const tempoMedio = 3.5; // dias
    // Policiais aptos vs afastados
    const policiaisAfastados = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"].filter((p)=>p.historico_atendimentos.some((h)=>new Date(h.data).getMonth() === mesAtual && !h.apto_para_servico)).length;
    const policiaisAptos = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"].length - policiaisAfastados;
    return [
        {
            titulo: 'Atendimentos no Mês',
            valor: totalAtendimentos,
            tendencia: totalAtendimentos > 50 ? 'up' : 'down',
            variacao: Math.floor(Math.random() * 20) - 10,
            icone: 'Stethoscope',
            cor: 'emerald'
        },
        {
            titulo: 'Valor Processado',
            valor: `R$ ${valorTotal.toLocaleString('pt-BR', {
                minimumFractionDigits: 2
            })}`,
            tendencia: 'stable',
            variacao: 0,
            icone: 'DollarSign',
            cor: 'purple'
        },
        {
            titulo: 'Taxa de Glosa',
            valor: `${(glosas / totalAtendimentos * 100).toFixed(1)}%`,
            tendencia: glosas > 5 ? 'up' : 'down',
            variacao: 12,
            icone: 'AlertTriangle',
            cor: 'rose'
        },
        {
            titulo: 'Tempo Médio Auditoria',
            valor: `${tempoMedio} dias`,
            tendencia: tempoMedio > 3 ? 'down' : 'up',
            variacao: -8,
            icone: 'Clock',
            cor: 'blue'
        },
        {
            titulo: 'Policiais Aptos',
            valor: `${policiaisAptos}/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"].length}`,
            tendencia: 'stable',
            variacao: 0,
            icone: 'Shield',
            cor: 'emerald'
        },
        {
            titulo: 'Afastamentos Saúde',
            valor: policiaisAfastados,
            tendencia: policiaisAfastados > 2 ? 'up' : 'down',
            variacao: policiaisAfastados - 2,
            icone: 'UserX',
            cor: 'amber'
        }
    ];
}
function getRelatorioByPatente() {
    const patentes = [
        'Soldado',
        'Cabo',
        'Sargento',
        'Tenente',
        'Capitão',
        'Major',
        'Coronel'
    ];
    return patentes.map((patente)=>{
        const pacientes = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"].filter((p)=>p.patente === patente);
        const protocolos = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProtocolosPM"].filter((p)=>p.paciente.patente === patente);
        const valorTotal = protocolos.reduce((sum, p)=>sum + p.valor_total, 0);
        const valorGlosa = protocolos.reduce((sum, p)=>{
            const auditoria = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockAuditorias"].find((a)=>a.protocolo === p.numero_protocolo);
            return sum + (auditoria?.glosa || 0);
        }, 0);
        const taxaAprovacao = protocolos.length > 0 ? (valorTotal - valorGlosa) / valorTotal * 100 : 100;
        return {
            patente,
            quantidade: pacientes.length,
            valor_total: valorTotal,
            glosa_media: protocolos.length > 0 ? valorGlosa / protocolos.length : 0,
            tempo_medio_auditoria: Math.floor(Math.random() * 7) + 1,
            taxa_aprovacao: taxaAprovacao
        };
    }).filter((r)=>r.quantidade > 0); // Remove patentes sem dados
}
function getRelatorioByUnidade() {
    const unidades = [
        '1º Batalhão - Centro',
        '3º Batalhão - Zona Sul',
        'ROTA',
        'Ambiental',
        'CPO'
    ];
    return unidades.map((unidade)=>{
        const pacientes = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"].filter((p)=>p.unidade.toLowerCase().includes(unidade.toLowerCase()) || unidade === 'ROTA' && p.unidade.includes('ROTA') || unidade === 'CPO' && p.unidade.includes('Comando de Operações Especiais'));
        const protocolos = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProtocolosPM"].filter((p)=>pacientes.some((pac)=>pac.id === p.paciente.id));
        const valorProcessado = protocolos.reduce((sum, p)=>sum + p.valor_total, 0);
        const afastados = pacientes.filter((p)=>p.historico_atendimentos.some((h)=>!h.apto_para_servico)).length;
        return {
            unidade,
            total_atendimentos: pacientes.length,
            afastamentos_saude: afastados,
            aptos_servico: pacientes.length - afastados,
            valor_processado: valorProcessado
        };
    });
}
function detectarFraude() {
    const alertas = [];
    // 1. Valores muito altos para patente baixa
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProtocolosPM"].forEach((prot)=>{
        const patente = prot.paciente.patente;
        const valor = prot.valor_total;
        // Sargento ou inferior com procedimento > R$ 10.000
        if ([
            'Sargento',
            'Cabo',
            'Soldado'
        ].includes(patente) && valor > 10000) {
            alertas.push({
                nivel: 'alto',
                tipo: 'valor',
                descricao: `Valor elevado para patente ${patente}`,
                paciente: prot.paciente.nome,
                protocolo: prot.numero_protocolo,
                valor: valor,
                acao_recomendada: 'Auditoria manual obrigatória'
            });
        }
    });
    // 2. Frequência suspeita (múltiplos atendimentos no mesmo dia)
    const atendimentosPorDia = new Map();
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProtocolosPM"].forEach((prot)=>{
        const data = prot.data_solicitacao;
        const key = `${prot.paciente.id}-${data}`;
        atendimentosPorDia.set(key, (atendimentosPorDia.get(key) || 0) + 1);
    });
    atendimentosPorDia.forEach((count, key)=>{
        if (count >= 3) {
            const [pacienteId] = key.split('-');
            const paciente = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"].find((p)=>p.id === pacienteId);
            if (paciente) {
                alertas.push({
                    nivel: 'critico',
                    tipo: 'frequencia',
                    descricao: `${count} atendimentos no mesmo dia`,
                    paciente: paciente.nome,
                    protocolo: 'Múltiplos protocolos',
                    valor: 0,
                    acao_recomendada: 'Investigar possível fraude'
                });
            }
        }
    });
    // 3. Inconsistência entre CID e procedimento
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProtocolosPM"].forEach((prot)=>{
        // CID de diabetes mas procedimento de ortopedia
        if (prot.cid.startsWith('E11') && prot.especialidade === 'Ortopedia') {
            alertas.push({
                nivel: 'medio',
                tipo: 'procedimento',
                descricao: 'Inconsistência entre CID e especialidade',
                paciente: prot.paciente.nome,
                protocolo: prot.numero_protocolo,
                valor: prot.valor_total,
                acao_recomendada: 'Verificar justificativa clínica'
            });
        }
    });
    return alertas;
}
function analisarCustoBeneficio() {
    const procedimentos = new Map();
    // Agrupa por tipo de procedimento
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockProtocolosPM"].forEach((prot)=>{
        const key = prot.tipo_atendimento;
        const existente = procedimentos.get(key) || {
            quantidade: 0,
            custo_total: 0,
            resultados: []
        };
        existente.quantidade++;
        existente.custo_total += prot.valor_total;
        existente.resultados.push(prot.status);
        procedimentos.set(key, existente);
    });
    // Calcula resultado clínico baseado nos status
    return Array.from(procedimentos.entries()).map(([procedimento, dados])=>{
        const taxaSucesso = dados.resultados.filter((r)=>r === 'Finalizado' || r === 'Liberado').length / dados.quantidade * 100;
        let resultado_clinico;
        if (taxaSucesso >= 90) resultado_clinico = 'excelente';
        else if (taxaSucesso >= 70) resultado_clinico = 'bom';
        else if (taxaSucesso >= 50) resultado_clinico = 'regular';
        else resultado_clinico = 'ruim';
        let recomendacao;
        const custoMedio = dados.custo_total / dados.quantidade;
        if (resultado_clinico === 'excelente' && custoMedio < 500) {
            recomendacao = 'manter';
        } else if (resultado_clinico === 'ruim' || custoMedio > 5000) {
            recomendacao = 'reduzir';
        } else {
            recomendacao = 'avaliar';
        }
        return {
            procedimento,
            quantidade: dados.quantidade,
            custo_total: dados.custo_total,
            resultado_clinico,
            recomendacao
        };
    });
}
const RelatoriosEngine = {
    getDashboardPrincipal,
    getRelatorioByPatente,
    getRelatorioByUnidade,
    detectarFraude,
    analisarCustoBeneficio
};
const __TURBOPACK__default__export__ = RelatoriosEngine;
}),
"[project]/lib/auditoria-engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// MOTOR DE AUDITORIA INTELIGENTE - FUNSAU PM
// Regras de negócio para auditoria médica automatizada
// ============================================================
__turbopack_context__.s([
    "AuditoriaEngine",
    ()=>AuditoriaEngine,
    "REGRAS_AUDITORIA",
    ()=>REGRAS_AUDITORIA,
    "TABELA_BRASINDICE",
    ()=>TABELA_BRASINDICE,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deveIrParaAuditoriaPrevia",
    ()=>deveIrParaAuditoriaPrevia,
    "executarAuditoriaPrevia",
    ()=>executarAuditoriaPrevia,
    "validarConformidadeTISS",
    ()=>validarConformidadeTISS
]);
const TABELA_BRASINDICE = {
    '10101012': {
        descricao: 'Consulta endocrinologia',
        valor: 280.00,
        variacao: 15
    },
    '10201015': {
        descricao: 'Consulta cardiologia',
        valor: 320.00,
        variacao: 15
    },
    '10301020': {
        descricao: 'Consulta ortopedia',
        valor: 350.00,
        variacao: 15
    },
    '10401025': {
        descricao: 'Consulta pneumologia',
        valor: 300.00,
        variacao: 15
    },
    '20102015': {
        descricao: 'HbA1c',
        valor: 85.00,
        variacao: 25
    },
    '20103020': {
        descricao: 'Perfil lipídico',
        valor: 120.00,
        variacao: 20
    },
    '20104025': {
        descricao: 'Espirometria completa',
        valor: 250.00,
        variacao: 30
    },
    '20105030': {
        descricao: 'Teste de reversibilidade broncodilatadora',
        valor: 180.00,
        variacao: 25
    },
    '30101040': {
        descricao: 'Artrodese lombar L4-L5',
        valor: 12500.00,
        variacao: 10
    },
    '30105080': {
        descricao: 'Osteossíntese de tíbia',
        valor: 8500.00,
        variacao: 12
    }
};
const REGRAS_AUDITORIA = [
    // REGRAS DE FREQUÊNCIA
    {
        id: 'freq-001',
        categoria: 'frequencia',
        descricao: 'Limite de consultas por mês (PM ativo)',
        severidade: 'media',
        condicao: (p)=>{
            // Simula histórico: se protocolo é consulta e paciente já teve 4+ consultas no mês
            const consultasMes = Math.floor(Math.random() * 8);
            return p.tipo_atendimento === 'Consulta' && consultasMes > 4;
        },
        mensagem: 'Paciente excedeu limite mensal de consultas. Verificar necessidade clínica.',
        perc_glosa: 30,
        requer_aprovacao_manual: true
    },
    {
        id: 'freq-002',
        categoria: 'frequencia',
        descricao: 'Exames repetidos em curto período',
        severidade: 'alta',
        condicao: (p)=>{
            const diasDesdeUltimoExame = Math.floor(Math.random() * 60);
            return p.tipo_atendimento === 'Exame' && diasDesdeUltimoExame < 30;
        },
        mensagem: 'Exame repetido em intervalo menor que 30 dias. Exigir justificativa médica.',
        perc_glosa: 100,
        requer_aprovacao_manual: true
    },
    // REGRAS DE VALOR (BRASINDICE)
    {
        id: 'val-001',
        categoria: 'valor',
        descricao: 'Valor acima da tabela Brasíndice',
        severidade: 'critica',
        condicao: (p)=>{
            return p.procedimentos.some((proc)=>{
                const tabela = TABELA_BRASINDICE[proc.codigo];
                if (!tabela) return false;
                // Calcula limite máximo (valor + variação %) + 50% de tolerância
                const limiteMax = tabela.valor * (1 + tabela.variacao / 100) * 1.5;
                return proc.valor > limiteMax;
            });
        },
        mensagem: 'Valor ultrapassou limite máximo do Brasíndice com tolerância. Glosa automática.',
        perc_glosa: 100,
        requer_aprovacao_manual: false
    },
    {
        id: 'val-002',
        categoria: 'valor',
        descricao: 'Valor abaixo do mínimo suspeito',
        severidade: 'alta',
        condicao: (p)=>{
            return p.procedimentos.some((proc)=>{
                const tabela = TABELA_BRASINDICE[proc.codigo];
                if (!tabela) return false;
                const limiteMin = tabela.valor * 0.5; // 50% abaixo da tabela
                return proc.valor < limiteMin;
            });
        },
        mensagem: 'Valor significativamente abaixo da tabela. Possível fraude ou erro de digitação.',
        perc_glosa: 0,
        requer_aprovacao_manual: true
    },
    // REGRAS POR PATENTE
    {
        id: 'pat-001',
        categoria: 'patente',
        descricao: 'Procedimento não autorizado para graduação',
        severidade: 'alta',
        condicao: (p)=>{
            // Coronel e Tenente Coronel têm acesso a procedimentos especiais
            const patentesEspeciais = [
                'Coronel',
                'Tenente-Coronel',
                'Major'
            ];
            if (patentesEspeciais.includes(p.paciente.patente)) return false;
            // Simula procedimento especial apenas para oficiais superiores
            const procedimentosEspeciais = [
                '30101040'
            ]; // Artrodese
            return p.procedimentos.some((proc)=>procedimentosEspeciais.includes(proc.codigo));
        },
        mensagem: 'Procedimento de alta complexidade requer patente mínima de Major.',
        perc_glosa: 100,
        requer_aprovacao_manual: true
    },
    // REGRAS DE URGÊNCIA
    {
        id: 'urg-001',
        categoria: 'urgencia',
        descricao: 'Inconsistência entre prioridade e procedimento',
        severidade: 'media',
        condicao: (p)=>{
            const procedimentosUrgentes = [
                '30105080',
                '40103100'
            ]; // Fratura, internação
            const ehUrgente = procedimentosUrgentes.includes(p.procedimentos[0]?.codigo || '');
            return ehUrgente && p.prioridade === 'Normal';
        },
        mensagem: 'Procedimento de urgência/emergência com classificação Normal. Corrigir prioridade.',
        perc_glosa: 0,
        requer_aprovacao_manual: true
    },
    // REGRAS DE IDADE
    {
        id: 'age-001',
        categoria: 'idade',
        descricao: 'Procedimento não indicado para faixa etária',
        severidade: 'alta',
        condicao: (p)=>{
            const idade = p.paciente.idade;
            if (idade < 40) {
                // Procedimentos restritos para jovens
                const restritos = [
                    '30101040'
                ]; // Artrodese lombar rara < 40 anos
                return p.procedimentos.some((proc)=>restritos.includes(proc.codigo));
            }
            return false;
        },
        mensagem: 'Procedimento raro para esta faixa etária. Exigir justificativa detalhada.',
        perc_glosa: 50,
        requer_aprovacao_manual: true
    },
    // REGRAS DE PROCEDIMENTO ESPECÍFICO
    {
        id: 'proc-001',
        categoria: 'procedimento',
        descricao: 'Cirurgia requer avaliação prévia por comissão',
        severidade: 'critica',
        condicao: (p)=>{
            const codigosComissao = [
                '30101040'
            ]; // Artrodese
            return p.tipo_atendimento === 'Cirurgia' && p.procedimentos.some((proc)=>codigosComissao.includes(proc.codigo));
        },
        mensagem: 'CIRURGIA DE ALTO CUSTO: Requer avaliação prévia da Comissão de Avaliação de Procedimentos Especiais (CAPE).',
        perc_glosa: 100,
        requer_aprovacao_manual: true
    }
];
function executarAuditoriaPrevia(protocolo) {
    const regrasVioladas = REGRAS_AUDITORIA.filter((regra)=>regra.condicao(protocolo));
    // Calcula glosa total
    let glosaTotal = 0;
    let necessitaAuditoriaManual = false;
    regrasVioladas.forEach((regra)=>{
        if (regra.perc_glosa) {
            const valorGlosa = protocolo.valor_total * (regra.perc_glosa / 100);
            glosaTotal += valorGlosa;
        }
        if (regra.requer_aprovacao_manual) {
            necessitaAuditoriaManual = true;
        }
    });
    // Limita glosa a 100%
    glosaTotal = Math.min(glosaTotal, protocolo.valor_total);
    const aprovado = glosaTotal < protocolo.valor_total; // Aprovado se não for glosa total
    // Gera alertas
    const alertas = regrasVioladas.map((r)=>`(${r.severidade.toUpperCase()}) ${r.mensagem}`);
    return {
        aprovado,
        glosa: glosaTotal,
        regrasVioladas,
        alertas,
        necessitaAuditoriaManual
    };
}
function deveIrParaAuditoriaPrevia(protocolo) {
    // Critérios OBRIGATÓRIOS de auditoria prévia (100%)
    const criteriosObrigatorios = [
        // Valor acima de R$ 5.000
        ()=>protocolo.valor_total > 5000,
        // Paciente com patente de oficial superior
        ()=>[
                'Coronel',
                'Tenente-Coronel',
                'Major',
                'Capitão'
            ].includes(protocolo.paciente.patente),
        // Procedimentos de alta complexidade
        ()=>protocolo.procedimentos.some((p)=>[
                    'Cirurgia',
                    'Internação'
                ].includes(protocolo.tipo_atendimento)),
        // Paciente com histórico de glosas
        ()=>Math.random() > 0.7,
        // Protocolo de emergência
        ()=>protocolo.prioridade === 'Emergência'
    ];
    // Se qualquer critério obrigatório for verdadeiro, vai para auditoria
    if (criteriosObrigatorios.some((criterio)=>criterio())) {
        return true;
    }
    // Critérios de amostragem aleatória (10% dos demais)
    return Math.random() < 0.10;
}
function validarConformidadeTISS(xmlData) {
    const erros = [];
    const alertas = [];
    try {
        // Simula validação de XML TISS
        if (!xmlData.includes('<ANS>')) {
            erros.push('Arquivo não contém cabeçalho ANS válido');
        }
        if (!xmlData.includes('<procedimentos>')) {
            erros.push('Seção de procedimentos não encontrada');
        }
        if (xmlData.length < 1000) {
            alertas.push('XML muito pequeno - possível arquivo incompleto');
        }
        // Valida formato de datas
        const dateMatches = xmlData.match(/\d{4}-\d{2}-\d{2}/g);
        if (!dateMatches || dateMatches.length < 2) {
            erros.push('Formato de data incorreto ou ausente');
        }
        return {
            valido: erros.length === 0,
            erros,
            alertas
        };
    } catch (error) {
        return {
            valido: false,
            erros: [
                'Erro ao processar arquivo XML'
            ],
            alertas: []
        };
    }
}
const AuditoriaEngine = {
    executarAuditoriaPrevia,
    deveIrParaAuditoriaPrevia,
    validarConformidadeTISS,
    regras: REGRAS_AUDITORIA,
    tabelaBrasindice: TABELA_BRASINDICE
};
const __TURBOPACK__default__export__ = AuditoriaEngine;
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative h-4 w-full overflow-hidden rounded-full bg-slate-100", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 bg-slate-900 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/progress.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/progress.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/lib/validacao-qr.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// SISTEMA DE VALIDAÇÃO POR QR CODE - FUNSAU PM
// Validação biométrica e contextual para policiais militares
// ============================================================
__turbopack_context__.s([
    "ValidacaoQREngine",
    ()=>ValidacaoQREngine,
    "default",
    ()=>__TURBOPACK__default__export__,
    "gerarHashQRPaciente",
    ()=>gerarHashQRPaciente,
    "getEstatisticasFraude",
    ()=>getEstatisticasFraude,
    "validarHashQR",
    ()=>validarHashQR,
    "validarLocalizacao",
    ()=>validarLocalizacao,
    "validarQRPaciente",
    ()=>validarQRPaciente
]);
// CACHE DE VALIDAÇÕES RECENTES (simulado)
const cacheValidacoes = new Map();
// BLACKLIST DE DISPOSITIVOS SUSPEITOS
const blacklistedDevices = new Set([
    'suspect-device-001',
    'emulator-xyz'
]);
async function validarQRPaciente(dadosQR, dadosDispositivo, capturarFoto = false) {
    const alertas = [];
    let resultado = 'valido';
    let motivoRejeicao;
    // 1. VALIDAÇÃO BÁSICA DO HASH
    const hashValido = validarHashQR(dadosQR.qr_code_hash);
    if (!hashValido) {
        resultado = 'invalido';
        motivoRejeicao = 'Hash QR Code inválido ou adulterado';
        alertas.push('QR CODE INVÁLIDO: Tentativa de fraude detectada');
    }
    // 2. VALIDADE DO QR CODE (expira em 24h)
    const agora = new Date();
    const validade = new Date(dadosQR.data_validade_qr);
    if (agora > validade) {
        resultado = 'expirado';
        motivoRejeicao = 'QR Code expirado. Renovar carteirinha.';
        alertas.push('QR CODE EXPIRADO: Carteirinha vencida há ' + Math.floor((agora.getTime() - validade.getTime()) / (1000 * 60 * 60 * 24)) + ' dias');
    }
    // 3. VERIFICAÇÃO DE DUPLICIDADE (anti-fraude)
    const chaveCache = `${dadosQR.matricula_pm}-${agora.toISOString().split('T')[0]}`;
    const validacaoRecente = cacheValidacoes.get(chaveCache);
    if (validacaoRecente && validacaoRecente.contagem >= 3) {
        resultado = 'suspeito';
        motivoRejeicao = 'Múltiplas validações no mesmo dia';
        alertas.push('FREQUÊNCIA SUSPEITA: 3+ validações detectadas hoje');
    }
    // 4. VERIFICAÇÃO DE LOCALIZAÇÃO (geofence)
    if (dadosDispositivo) {
        const localValido = await validarLocalizacao(dadosDispositivo.ip);
        if (!localValido) {
            alertas.push('LOCALIZAÇÃO: Fora da área de atuação da unidade');
        }
    }
    // 5. VERIFICAÇÃO DE DISPOSITIVO
    if (dadosDispositivo && blacklistedDevices.has(dadosDispositivo.user_agent)) {
        resultado = 'invalido';
        motivoRejeicao = 'Dispositivo bloqueado por suspeita de fraude';
        alertas.push('DISPOSITIVO BLOQUEADO: Entre em contato com o suporte');
    }
    // 6. SIMULAÇÃO DE VERIFICAÇÃO BIOMÉTRICA
    const biomEncontrada = Math.random() > 0.05; // 95% de sucesso na biometria
    // REGISTRA VALIDAÇÃO NO CACHE
    const dadosValidacao = {
        validado_em: agora.toISOString(),
        localizacao: {
            latitude: -23.5505,
            longitude: -46.6333,
            endereco_estimado: 'Hospital da Polícia Militar - São Paulo, SP'
        },
        dispositivo: dadosDispositivo,
        foto_capturada: capturarFoto ? `foto_${dadosQR.matricula_pm}_${Date.now()}.jpg` : undefined,
        biom_encontrada: biomEncontrada,
        resultado,
        motivo_rejeicao: motivoRejeicao
    };
    // Atualiza cache
    if (cacheValidacoes.has(chaveCache)) {
        cacheValidacoes.get(chaveCache).contagem++;
    } else {
        cacheValidacoes.set(chaveCache, {
            data: dadosValidacao,
            contagem: 1
        });
    }
    // LIMPA CACHE ANTIGO (mantém apenas últimos 30 dias)
    limparCacheAntigo();
    // DETERMINA PRÓXIMA AÇÃO
    let proxima_acao = 'liberar';
    if (resultado === 'invalido' || resultado === 'expirado') {
        proxima_acao = 'bloquear';
    } else if (resultado === 'suspeito' || !biomEncontrada || alertas.length > 2) {
        proxima_acao = 'verificar';
    }
    return {
        sucesso: resultado === 'valido' || resultado === 'suspeito',
        dados: dadosValidacao,
        alertas,
        proxima_acao
    };
}
function validarHashQR(hash) {
    // Simula: hash válido deve ter 32 caracteres e não estar na blacklist
    const hashInvalidos = new Set([
        '000000',
        '123456',
        'abcdef'
    ]);
    return hash.length >= 20 && !hashInvalidos.has(hash.substring(0, 6));
}
async function validarLocalizacao(ip) {
    // Simula: valida se IP está na faixa da PM-SP
    const ipsValidos = [
        '192.168.',
        '10.0.',
        '172.16.',
        '200.99.'
    ];
    return ipsValidos.some((prefix)=>ip.startsWith(prefix));
}
function gerarHashQRPaciente(matricula, dataEmissao) {
    // Gera hash baseado em matrícula + data + salt
    const salt = 'PMSP-FUNSAU-2024';
    const input = `${matricula}-${dataEmissao}-${salt}`;
    // Simula hash SHA256 (em produção usar biblioteca crypto)
    return Buffer.from(input).toString('base64').substring(0, 32);
}
function getEstatisticasFraude(matricula) {
    const estatisticas = {
        total_validacoes: 0,
        suspeitas: 0,
        fraudes_confirmadas: 0,
        taxa_sucesso: 0
    };
    cacheValidacoes.forEach((valor, chave)=>{
        if (!matricula || chave.startsWith(matricula)) {
            estatisticas.total_validacoes += valor.contagem;
            if (valor.data.resultado === 'suspeito') {
                estatisticas.suspeitas++;
            } else if (valor.data.resultado === 'invalido') {
                estatisticas.fraudes_confirmadas++;
            }
        }
    });
    estatisticas.taxa_sucesso = estatisticas.total_validacoes > 0 ? (estatisticas.total_validacoes - estatisticas.fraudes_confirmadas) / estatisticas.total_validacoes * 100 : 100;
    return estatisticas;
}
// LIMPEZA DE CACHE
function limparCacheAntigo() {
    const trintaDiasAtras = new Date();
    trintaDiasAtras.setDate(trintaDiasAtras.getDate() - 30);
    cacheValidacoes.forEach((valor, chave)=>{
        const dataValidacao = new Date(valor.data.validado_em);
        if (dataValidacao < trintaDiasAtras) {
            cacheValidacoes.delete(chave);
        }
    });
}
const ValidacaoQREngine = {
    validarQRPaciente,
    gerarHashQRPaciente,
    validarHashQR,
    getEstatisticasFraude,
    TEMPO_EXPIRACAO_QR: 24 * 60 * 60 * 1000 // 24 horas em ms
};
const __TURBOPACK__default__export__ = ValidacaoQREngine;
}),
"[project]/components/simulador-protocolo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimuladorProtocolo",
    ()=>SimuladorProtocolo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-ssr] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auditoria$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auditoria-engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2d$qr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validacao-qr.ts [app-ssr] (ecmascript)");
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
function SimuladorProtocolo() {
    const [simulando, setSimulando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passos, setPassos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [protocolo, setProtocolo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progresso, setProgresso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const iniciarSimulacao = async ()=>{
        setSimulando(true);
        setProgresso(0);
        setResultado('');
        // Seleciona paciente aleatório
        const paciente = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"][Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockPacientesPM"].length)];
        // Gera protocolo
        const novoProtocolo = {
            numero: `PMSP-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9999)).padStart(4, '0')}`,
            paciente,
            tipo: [
                'Consulta',
                'Exame',
                'Cirurgia',
                'Procedimento'
            ][Math.floor(Math.random() * 4)],
            especialidade: [
                'Cardiologia',
                'Ortopedia',
                'Pneumologia',
                'Endocrinologia',
                'Traumatologia'
            ][Math.floor(Math.random() * 5)],
            valor: Math.floor(Math.random() * 15000) + 500,
            data: new Date().toLocaleDateString('pt-BR')
        };
        setProtocolo(novoProtocolo);
        // Define passos do fluxo
        const passosSimulacao = [
            {
                id: 1,
                titulo: "Triagem Inicial",
                descricao: "Cadastro do policial e abertura de protocolo",
                icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 68,
                    columnNumber: 16
                }, this),
                status: 'pendente',
                tempo_estimado: "2 min"
            },
            {
                id: 2,
                titulo: "Auditoria Prévia",
                descricao: "Análise automatizada por regras do sistema",
                icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 76,
                    columnNumber: 16
                }, this),
                status: 'pendente',
                tempo_estimado: "5 min"
            },
            {
                id: 3,
                titulo: "Validação Biométrica",
                descricao: "QR Code e validação do paciente",
                icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 84,
                    columnNumber: 16
                }, this),
                status: 'pendente',
                tempo_estimado: "1 min"
            },
            {
                id: 4,
                titulo: "Execução do Procedimento",
                descricao: "Realização da consulta/exame/cirurgia",
                icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Hospital, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 92,
                    columnNumber: 16
                }, this),
                status: 'pendente',
                tempo_estimado: "30-60 min"
            },
            {
                id: 5,
                titulo: "Documentação",
                descricao: "Upload de documentos e laudos",
                icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 100,
                    columnNumber: 16
                }, this),
                status: 'pendente',
                tempo_estimado: "10 min"
            },
            {
                id: 6,
                titulo: "Auditoria Final",
                descricao: "Revisão completa e aplicação de regras",
                icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 108,
                    columnNumber: 16
                }, this),
                status: 'pendente',
                tempo_estimado: "15 min"
            },
            {
                id: 7,
                titulo: "Financeiro",
                descricao: "Cálculo de glosas e aprovação de pagamento",
                icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 116,
                    columnNumber: 16
                }, this),
                status: 'pendente',
                tempo_estimado: "5 min"
            }
        ];
        setPassos(passosSimulacao);
        // Executa simulação passo a passo
        for(let i = 0; i < passosSimulacao.length; i++){
            // Atualiza status para processando
            setPassos((prev)=>prev.map((p, idx)=>idx === i ? {
                        ...p,
                        status: 'processando'
                    } : p));
            setProgresso((i + 1) / passosSimulacao.length * 100);
            // Simula processamento
            await new Promise((resolve)=>setTimeout(resolve, 1500 + Math.random() * 1000));
            // Atualiza status baseado na etapa
            let status = 'concluido';
            let detalhes = '';
            switch(i){
                case 0:
                    detalhes = `Paciente ${paciente.nome} (${paciente.patente}) cadastrado com sucesso`;
                    break;
                case 1:
                    // Simula auditoria
                    const auditoria = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auditoria$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuditoriaEngine"].executarAuditoriaPrevia({
                        ...novoProtocolo,
                        paciente,
                        data_solicitacao: new Date().toISOString(),
                        numero_protocolo: novoProtocolo.numero,
                        procedimentos: [
                            {
                                codigo: '10101012',
                                descricao: 'Procedimento simulado',
                                quantidade: 1,
                                valor: novoProtocolo.valor,
                                valor_total: novoProtocolo.valor
                            }
                        ],
                        status: 'Triagem',
                        prioridade: 'Normal',
                        medico_solicitante: 'Dr. Simulação',
                        crm: '12345-SP',
                        unidade_solicitante: 'Hospital Militar',
                        observacoes: ''
                    });
                    if (auditoria.glosa > 0) {
                        status = 'aviso';
                        detalhes = `Auditado com ${(auditoria.glosa / novoProtocolo.valor * 100).toFixed(0)}% de glosa`;
                    } else {
                        detalhes = 'Aprovado sem glosas';
                    }
                    break;
                case 2:
                    const validacao = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2d$qr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidacaoQREngine"].validarQRPaciente({
                        paciente_id: paciente.id,
                        matricula_pm: paciente.matricula,
                        patente: paciente.patente,
                        nome: paciente.nome,
                        tipo_sanguineo: paciente.tipo_sanguineo,
                        alergias: paciente.alergias,
                        qr_code_hash: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2d$qr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidacaoQREngine"].gerarHashQRPaciente(paciente.matricula, paciente.created_at),
                        data_validade_qr: new Date(Date.now() + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validacao$2d$qr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidacaoQREngine"].TEMPO_EXPIRACAO_QR).toISOString()
                    }, {
                        user_agent: 'simulador',
                        ip: '192.168.1.1',
                        tipo: 'desktop'
                    }, false);
                    status = validacao.proxima_acao === 'liberar' ? 'concluido' : 'aviso';
                    detalhes = validacao.proxima_acao === 'liberar' ? 'Validação biométrica aprovada' : 'Requer verificação adicional';
                    break;
                case 3:
                    detalhes = `${novoProtocolo.tipo} realizado com sucesso`;
                    break;
                case 4:
                    detalhes = 'XML TISS e laudos anexados ao protocolo';
                    break;
                case 5:
                    status = Math.random() > 0.3 ? 'concluido' : 'aviso';
                    detalhes = status === 'concluido' ? 'Protocolo aprovado para pagamento' : 'Aceite parcial com glosas';
                    break;
                case 6:
                    const glosaFinal = Math.random() > 0.7 ? novoProtocolo.valor * 0.15 : 0;
                    const statusFinanceiro = glosaFinal > 0 ? 'aviso' : 'concluido';
                    detalhes = statusFinanceiro === 'concluido' ? `Valor total aprovado: R$ ${novoProtocolo.valor.toLocaleString('pt-BR')}` : `Valor glosado: R$ ${glosaFinal.toLocaleString('pt-BR')} (15%)`;
                    // Define resultado final
                    if (statusFinanceiro === 'concluido') {
                        setResultado('aprovado');
                        detalhes += ' ✅ APROVADO';
                    } else {
                        setResultado('glosado');
                        detalhes += ' ⚠️ GLOSADO';
                    }
                    break;
            }
            setPassos((prev)=>prev.map((p, idx)=>idx === i ? {
                        ...p,
                        status,
                        detalhes
                    } : p));
        }
        setSimulando(false);
        setProgresso(100);
    };
    const resetSimulacao = ()=>{
        setSimulando(false);
        setPassos([]);
        setProtocolo(null);
        setProgresso(0);
        setResultado('');
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case 'concluido':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "h-5 w-5 text-emerald-500"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 251,
                    columnNumber: 16
                }, this);
            case 'processando':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-5 w-5 text-blue-500 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 253,
                    columnNumber: 16
                }, this);
            case 'aviso':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-5 w-5 text-amber-500"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 255,
                    columnNumber: 16
                }, this);
            case 'erro':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertTriangle, {
                    className: "h-5 w-5 text-red-500"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 257,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-5 w-5 text-slate-400"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 259,
                    columnNumber: 16
                }, this);
        }
    };
    const getStatusBadge = (resultado)=>{
        switch(resultado){
            case 'aprovado':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-emerald-100 text-emerald-700",
                    children: "✅ APROVADO"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 266,
                    columnNumber: 16
                }, this);
            case 'glosado':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-amber-100 text-amber-700",
                    children: "⚠️ GLOSA PARCIAL"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 268,
                    columnNumber: 16
                }, this);
            case 'suspeito':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-100 text-red-700",
                    children: "🚨 FRAUDE DETECTADA"
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 270,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            !simulando && passos.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                onClick: iniciarSimulacao,
                className: "w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-6 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        className: "h-5 w-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador-protocolo.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this),
                    "Simular Protocolo Completo - Passo a Passo",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-xs bg-white/20 px-2 py-1 rounded-full",
                        children: "Modo Demo"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador-protocolo.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador-protocolo.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this),
            simulando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Progresso"
                            }, void 0, false, {
                                fileName: "[project]/components/simulador-protocolo.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-slate-500",
                                children: [
                                    Math.round(progresso),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador-protocolo.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/simulador-protocolo.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                        value: progresso,
                        className: "h-2"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador-protocolo.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador-protocolo.tsx",
                lineNumber: 294,
                columnNumber: 9
            }, this),
            protocolo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-6 border-blue-200 bg-blue-50/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Protocolo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-slate-900 text-lg",
                                        children: protocolo.numero
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador-protocolo.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Data"
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: protocolo.data
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador-protocolo.tsx",
                                lineNumber: 312,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Paciente"
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: protocolo.paciente.nome
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: `text-xs mt-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PATENTES_PM"].find((p)=>p.nome === protocolo.paciente.patente)?.cor || 'bg-gray-100'}`,
                                        children: protocolo.paciente.patente
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador-protocolo.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "Procedimento"
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: [
                                            protocolo.tipo,
                                            " - ",
                                            protocolo.especialidade
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-600",
                                        children: [
                                            "Valor: R$ ",
                                            protocolo.valor.toLocaleString('pt-BR', {
                                                minimumFractionDigits: 2
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador-protocolo.tsx",
                                lineNumber: 323,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/simulador-protocolo.tsx",
                        lineNumber: 307,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 306,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulador-protocolo.tsx",
                lineNumber: 305,
                columnNumber: 9
            }, this),
            passos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mb-6",
                children: passos.map((passo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: `border-l-4 ${passo.status === 'concluido' ? 'border-emerald-500 bg-emerald-50/30' : passo.status === 'processando' ? 'border-blue-500 bg-blue-50/30' : passo.status === 'aviso' ? 'border-amber-500 bg-amber-50/30' : passo.status === 'erro' ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-slate-50/30'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-2 rounded-lg ${passo.status === 'concluido' ? 'bg-emerald-100' : passo.status === 'processando' ? 'bg-blue-100' : passo.status === 'aviso' ? 'bg-amber-100' : passo.status === 'erro' ? 'bg-red-100' : 'bg-slate-100'}`,
                                        children: passo.icone
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 346,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-slate-900",
                                                        children: [
                                                            passo.id,
                                                            ". ",
                                                            passo.titulo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            passo.tempo_estimado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "h-3 w-3 inline mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                                                        lineNumber: 363,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    passo.tempo_estimado
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/simulador-protocolo.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 27
                                                            }, this),
                                                            getStatusIcon(passo.status)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador-protocolo.tsx",
                                                lineNumber: 356,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600 mt-1",
                                                children: passo.descricao
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador-protocolo.tsx",
                                                lineNumber: 370,
                                                columnNumber: 21
                                            }, this),
                                            passo.detalhes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 mt-2 bg-white/50 p-2 rounded",
                                                children: passo.detalhes
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador-protocolo.tsx",
                                                lineNumber: 372,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador-protocolo.tsx",
                                        lineNumber: 355,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador-protocolo.tsx",
                                lineNumber: 345,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/simulador-protocolo.tsx",
                            lineNumber: 344,
                            columnNumber: 15
                        }, this)
                    }, passo.id, false, {
                        fileName: "[project]/components/simulador-protocolo.tsx",
                        lineNumber: 337,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/simulador-protocolo.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, this),
            !simulando && protocolo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-2 border-emerald-300 bg-emerald-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-900",
                                    children: "Resultado da Simulação"
                                }, void 0, false, {
                                    fileName: "[project]/components/simulador-protocolo.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                getStatusBadge(resultado)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/simulador-protocolo.tsx",
                            lineNumber: 388,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-white rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-slate-900",
                                            children: passos.filter((p)=>p.status === 'concluido').length
                                        }, void 0, false, {
                                            fileName: "[project]/components/simulador-protocolo.tsx",
                                            lineNumber: 395,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-600",
                                            children: "Passos Concluídos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/simulador-protocolo.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/simulador-protocolo.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-white rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-amber-600",
                                            children: passos.filter((p)=>p.status === 'aviso').length
                                        }, void 0, false, {
                                            fileName: "[project]/components/simulador-protocolo.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-600",
                                            children: "Alertas"
                                        }, void 0, false, {
                                            fileName: "[project]/components/simulador-protocolo.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/simulador-protocolo.tsx",
                                    lineNumber: 400,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-white rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-emerald-600",
                                            children: [
                                                Math.round(progresso),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/simulador-protocolo.tsx",
                                            lineNumber: 407,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-600",
                                            children: "Progresso Total"
                                        }, void 0, false, {
                                            fileName: "[project]/components/simulador-protocolo.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/simulador-protocolo.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/simulador-protocolo.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: iniciarSimulacao,
                                    variant: "outline",
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/simulador-protocolo.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        "Simular Novamente"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/simulador-protocolo.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: resetSimulacao,
                                    variant: "ghost",
                                    className: "flex-1",
                                    children: "Fechar"
                                }, void 0, false, {
                                    fileName: "[project]/components/simulador-protocolo.tsx",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/simulador-protocolo.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/simulador-protocolo.tsx",
                    lineNumber: 387,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulador-protocolo.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador-protocolo.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$funsau$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/funsau.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$relatorios$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/relatorios-engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auditoria$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auditoria-engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2d$protocolo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador-protocolo.tsx [app-ssr] (ecmascript)");
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
;
;
;
const iconMap = {
    Stethoscope: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
        className: "h-8 w-8 text-emerald-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 23,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    ClipboardCheck: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
        className: "h-8 w-8 text-blue-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 24,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    Hospital: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__["Hospital"], {
        className: "h-8 w-8 text-purple-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 25,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    FileText: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "h-8 w-8 text-amber-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 26,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    DollarSign: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
        className: "h-8 w-8 text-green-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 27,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Brain: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
        className: "h-8 w-8 text-rose-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    Settings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
        className: "h-8 w-8 text-slate-500"
    }, void 0, false, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 29,
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
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 81,
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
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl font-bold text-slate-900",
                                                        children: "FUNSAU PM"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Fundo de Saúde da Polícia Militar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-medium",
                                    children: "🟢 Sistema Operacional"
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/funsau/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/funsau/page.tsx",
                lineNumber: 77,
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
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-slate-900",
                                                        children: "Consulta por CPF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Acesse protocolos e histórico do policial/dependente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 108,
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
                                                        lineNumber: 119,
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
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Buscar"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 mt-2",
                                                children: "💡 Dica: Tente CPFs de demonstração: 123.456.789-00, 987.654.321-00 ou 456.789.123-00"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/funsau/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 105,
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
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].atendimentos_dia
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-emerald-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "h-5 w-5 text-emerald-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 143,
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
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].em_auditoria
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-blue-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                    className: "h-5 w-5 text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 157,
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
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].aprovados
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-green-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "h-5 w-5 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 171,
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
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].glosados
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-rose-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "h-5 w-5 text-rose-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 185,
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
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-slate-900",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsFunsauPM"].valor_processado
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-purple-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "h-5 w-5 text-purple-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-blue-100 rounded-xl",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                            className: "h-6 w-6 text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-bold text-slate-900",
                                                                children: "🎬 Simulador de Protocolo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/page.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-600",
                                                                children: "Clique para ver o fluxo completo passo a passo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/page.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                variant: "secondary",
                                                className: "bg-blue-100 text-blue-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "h-3 w-3 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Auto Demo"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2d$protocolo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimuladorProtocolo"], {}, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/funsau/page.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 217,
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
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full",
                                                children: "Dados fictícios"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 244,
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
                                                                                    lineNumber: 256,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-xs px-2 py-0.5 rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PATENTES_PM"].find((p)=>p.nome === pac.patente)?.cor || 'bg-gray-100 text-gray-700'}`,
                                                                                    children: pac.patente
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                                    lineNumber: 257,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 255,
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
                                                                            lineNumber: 261,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: pac.unidade_lotacao
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 262,
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
                                                                            lineNumber: 264,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 254,
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
                                                                            lineNumber: 270,
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
                                                                            lineNumber: 271,
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
                                                                                    lineNumber: 275,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 273,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this)
                                            }, pac.id, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "💡 Clique em um policial para ver histórico completo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 243,
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
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full",
                                                children: "Dados fictícios"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 295,
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
                                                                    lineNumber: 304,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs px-2 py-1 rounded-full ${prot.status === 'aprovado' ? 'bg-emerald-100 text-emerald-700' : prot.status === 'glosado' ? 'bg-red-100 text-red-700' : prot.status === 'em_auditoria' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`,
                                                                    children: prot.status.replace('_', ' ').toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 303,
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
                                                                    lineNumber: 316,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 314,
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
                                                            lineNumber: 318,
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
                                                                    lineNumber: 320,
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
                                                                    lineNumber: 327,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 319,
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
                                                            lineNumber: 332,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this)
                                            }, prot.id, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 241,
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
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this),
                                        "Novo Atendimento"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 345,
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
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        "Auditoria"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 351,
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
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        "Validar Paciente"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 357,
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
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        "Upload XML"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-slate-900 mb-6",
                                children: "📊 Análises e KPIs"
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl border border-slate-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-slate-900 mb-4",
                                                children: "🚨 Alertas de Fraude"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$relatorios$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RelatoriosEngine"].detectarFraude().slice(0, 3).map((alerta, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-3 rounded-lg border-l-4 ${alerta.nivel === 'critico' ? 'border-red-500 bg-red-50' : alerta.nivel === 'alto' ? 'border-orange-500 bg-orange-50' : 'border-amber-500 bg-amber-50'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: `h-4 w-4 mt-0.5 ${alerta.nivel === 'critico' ? 'text-red-600' : alerta.nivel === 'alto' ? 'text-orange-600' : 'text-amber-600'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-slate-900",
                                                                            children: [
                                                                                alerta.paciente,
                                                                                " - ",
                                                                                alerta.descricao
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 392,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-600 mt-1",
                                                                            children: [
                                                                                "Protocolo: ",
                                                                                alerta.protocolo,
                                                                                " | Valor: R$ ",
                                                                                alerta.valor.toLocaleString('pt-BR', {
                                                                                    minimumFractionDigits: 2
                                                                                })
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 395,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-medium text-blue-700 mt-2",
                                                                            children: [
                                                                                "Ação: ",
                                                                                alerta.acao_recomendada
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/page.tsx",
                                                                            lineNumber: 398,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/funsau/relatorios",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "sm",
                                                        className: "text-xs",
                                                        children: "Ver todos os alertas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl border border-slate-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-slate-900 mb-4",
                                                children: "⭐ Desempenho por Patente"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$relatorios$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RelatoriosEngine"].getRelatorioByPatente().slice(0, 4).map((rel, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-2 hover:bg-slate-50 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                        className: "h-4 w-4 text-emerald-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/page.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-medium",
                                                                        children: rel.patente
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/page.tsx",
                                                                        lineNumber: 423,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: [
                                                                            rel.quantidade,
                                                                            " PMs"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/funsau/page.tsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs font-medium text-emerald-700",
                                                                        children: [
                                                                            rel.taxa_aprovacao.toFixed(1),
                                                                            "% aprovação"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/funsau/page.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-slate-900 mb-4",
                                        children: "🤖 Auditoria Inteligente - Regras Ativas"
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-4 bg-emerald-50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-emerald-700",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auditoria$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuditoriaEngine"].regras.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-emerald-600",
                                                        children: "Regras Totais"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-4 bg-blue-50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-blue-700",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auditoria$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuditoriaEngine"].regras.filter((r)=>r.severidade === 'critica').length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-blue-600",
                                                        children: "Críticas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-4 bg-amber-50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-amber-700",
                                                        children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auditoria$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuditoriaEngine"].tabelaBrasindice).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-amber-600",
                                                        children: "Procedimentos na Tabela"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-4 bg-purple-50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-purple-700",
                                                        children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auditoria$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuditoriaEngine"].tabelaBrasindice).reduce((sum, key)=>{
                                                            const proc = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auditoria$2d$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuditoriaEngine"].tabelaBrasindice[key];
                                                            return sum + proc.valor;
                                                        }, 0).toLocaleString('pt-BR', {
                                                            maximumFractionDigits: 0
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-purple-600",
                                                        children: "Valor Máximo (R$)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-3 bg-slate-50 rounded text-xs text-slate-600",
                                        children: "💡 As regras de auditoria são aplicadas automaticamente em 100% dos protocolos acima de R$ 5.000 ou com prioridade alta"
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 440,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900 mb-6",
                        children: "Módulos do Sistema"
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 476,
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
                                                    lineNumber: 488,
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
                                                            lineNumber: 492,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500 mb-3",
                                                            children: cat.descricao
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 493,
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
                                                                    lineNumber: 495,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: "h-4 w-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/page.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/page.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/page.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/funsau/page.tsx",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/funsau/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this)
                            }, cat.id, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 478,
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
                                lineNumber: 510,
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
                                                lineNumber: 523,
                                                columnNumber: 17
                                            }, this),
                                            idx < 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-4 w-4 text-slate-400 mx-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.step, true, {
                                        fileName: "[project]/app/funsau/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 509,
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
                                lineNumber: 536,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mt-1",
                                children: "Dados de demonstração - Não usar em produção"
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/page.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/page.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/funsau/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/funsau/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab1fa36f._.js.map