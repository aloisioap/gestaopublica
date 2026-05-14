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
"[project]/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TabsTrigger;
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/dados-trt-8a-regiao.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// DADOS MOCK - TRT 8ª REGIÃO (PARÁ E AMAPÁ)
// Sistema de Gestão de Saúde e Faturamento
// ============================================================
// Cores oficiais TRT 8ª Região (Pará e Amapá)
__turbopack_context__.s([
    "CHECKLIST_AUDITORIA",
    ()=>CHECKLIST_AUDITORIA,
    "CORES_TRT",
    ()=>CORES_TRT,
    "CREDENCIADOS_TRT",
    ()=>CREDENCIADOS_TRT,
    "ESTADOS_JURISDICAO",
    ()=>ESTADOS_JURISDICAO,
    "ESTATISTICAS_TRT",
    ()=>ESTATISTICAS_TRT,
    "FATURAS_TRT",
    ()=>FATURAS_TRT,
    "FLUXO_STATUS_TRT",
    ()=>FLUXO_STATUS_TRT,
    "HISTORICO_SAUDE_TRT",
    ()=>HISTORICO_SAUDE_TRT,
    "IDENTIDADE_TRT",
    ()=>IDENTIDADE_TRT,
    "ITENS_FATURA_TRT",
    ()=>ITENS_FATURA_TRT,
    "MODELOS_LAUDOS_TRT",
    ()=>MODELOS_LAUDOS_TRT,
    "NOTIFICACOES_TRT",
    ()=>NOTIFICACOES_TRT,
    "PROCEDIMENTOS_TRT",
    ()=>PROCEDIMENTOS_TRT,
    "SERVIDORES_TRT",
    ()=>SERVIDORES_TRT,
    "USUARIOS_SISTEMA_TRT",
    ()=>USUARIOS_SISTEMA_TRT,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const CORES_TRT = {
    primaria: '#1E3A5F',
    secundaria: '#C8A415',
    terciaria: '#00796B',
    destaque: '#D84315',
    fundo: '#F5F5F5',
    texto: '#212121',
    sucesso: '#2E7D32',
    alerta: '#F9A825',
    erro: '#C62828',
    info: '#1565C0'
};
const IDENTIDADE_TRT = {
    nome: 'TRT 8ª Região',
    subtitulo: 'Tribunal Regional do Trabalho do Pará e Amapá',
    lema: 'Justiça do Trabalho na Amazônia',
    brasao: '/images/trt8-brasao.png',
    fundo: '/images/trt8-fundo-amazonia.jpg'
};
const ESTADOS_JURISDICAO = [
    {
        sigla: 'PA',
        nome: 'Pará',
        capital: 'Belém',
        comarcas: [
            'Belém',
            'Ananindeua',
            'Santarém',
            'Marabá',
            'Castanhal'
        ]
    },
    {
        sigla: 'AP',
        nome: 'Amapá',
        capital: 'Macapá',
        comarcas: [
            'Macapá',
            'Santana',
            'Laranjal do Jari',
            'Oiapoque'
        ]
    }
];
const SERVIDORES_TRT = [
    {
        id: 'TRT0001',
        matricula: 'TRT0001',
        nome: 'Maria Santos Oliveira',
        cpf: '123.456.789-00',
        email: 'maria.oliveira@trt8.jus.br',
        telefone: '(91) 99999-1111',
        cargo: 'Analista Judiciário',
        lotacao: '1ª Vara do Trabalho',
        vara: '1ª Vara',
        comarca: 'Belém',
        estado: 'PA',
        tipo_sanguineo: 'O+',
        alergias: [
            'Nenhuma'
        ],
        comorbidades: [
            'Hipertensão'
        ],
        carteirinha_saude: 'TRT8-0001-2024',
        qr_code: 'TRT8-QR-0001',
        foto_url: '/fotos/servidor-0001.jpg',
        ativo: true
    },
    {
        id: 'TRT0002',
        matricula: 'TRT0002',
        nome: 'João Carlos Silva',
        cpf: '987.654.321-00',
        email: 'joao.silva@trt8.jus.br',
        telefone: '(91) 99999-2222',
        cargo: 'Técnico Judiciário',
        lotacao: '2ª Vara do Trabalho',
        vara: '2ª Vara',
        comarca: 'Belém',
        estado: 'PA',
        tipo_sanguineo: 'A+',
        alergias: [
            'Dipirona'
        ],
        comorbidades: [],
        carteirinha_saude: 'TRT8-0002-2024',
        qr_code: 'TRT8-QR-0002',
        foto_url: '/fotos/servidor-0002.jpg',
        ativo: true
    },
    {
        id: 'TRT0003',
        matricula: 'TRT0003',
        nome: 'Ana Paula Costa',
        cpf: '456.789.123-00',
        email: 'ana.costa@trt8.jus.br',
        telefone: '(96) 99999-3333',
        cargo: 'Analista Judiciário',
        lotacao: '1ª Vara do Trabalho',
        vara: '1ª Vara',
        comarca: 'Macapá',
        estado: 'AP',
        tipo_sanguineo: 'B+',
        alergias: [
            'Nenhuma'
        ],
        comorbidades: [
            'Asma'
        ],
        carteirinha_saude: 'TRT8-0003-2024',
        qr_code: 'TRT8-QR-0003',
        foto_url: '/fotos/servidor-0003.jpg',
        ativo: true
    },
    {
        id: 'TRT0004',
        matricula: 'TRT0004',
        nome: 'Pedro Henrique Lima',
        cpf: '789.123.456-00',
        email: 'pedro.lima@trt8.jus.br',
        telefone: '(91) 99999-4444',
        cargo: 'Juiz do Trabalho',
        lotacao: '3ª Vara do Trabalho',
        vara: '3ª Vara',
        comarca: 'Belém',
        estado: 'PA',
        tipo_sanguineo: 'AB+',
        alergias: [
            'Nenhuma'
        ],
        comorbidades: [],
        carteirinha_saude: 'TRT8-0004-2024',
        qr_code: 'TRT8-QR-0004',
        foto_url: '/fotos/servidor-0004.jpg',
        ativo: true
    },
    {
        id: 'TRT0005',
        matricula: 'TRT0005',
        nome: 'Fernanda Souza',
        cpf: '321.654.987-00',
        email: 'fernanda.souza@trt8.jus.br',
        telefone: '(91) 99999-5555',
        cargo: 'Diretora de Secretaria',
        lotacao: 'Secretaria Geral',
        vara: 'N/A',
        comarca: 'Belém',
        estado: 'PA',
        tipo_sanguineo: 'O-',
        alergias: [
            'Penicilina'
        ],
        comorbidades: [
            'Diabetes'
        ],
        carteirinha_saude: 'TRT8-0005-2024',
        qr_code: 'TRT8-QR-0005',
        foto_url: '/fotos/servidor-0005.jpg',
        ativo: true
    }
];
const CREDENCIADOS_TRT = [
    {
        id: 'CRED-001',
        cnpj: '12.345.678/0001-90',
        razao_social: 'Hospital Metropolitano S.A.',
        nome_fantasia: 'Hospital Metropolitano',
        endereco: 'Av. Almirante Barroso, 1000',
        bairro: 'Campina',
        cidade: 'Belém',
        estado: 'PA',
        cep: '66010-020',
        telefone: '(91) 3210-1000',
        email: 'contato@hospitalmetro.com.br',
        tipo: 'Hospital',
        especialidades: [
            'Clínica Médica',
            'Cirurgia Geral',
            'Ortopedia',
            'Cardiologia',
            'UTI'
        ],
        numero_contrato: 'CONT-2024-001',
        data_inicio: '2024-01-01',
        avaliacao: 4.5,
        ativo: true
    },
    {
        id: 'CRED-002',
        cnpj: '23.456.789/0001-01',
        razao_social: 'Clínica Santa Maria Ltda.',
        nome_fantasia: 'Clínica Santa Maria',
        endereco: 'Rua dos Mundurucus, 2500',
        bairro: 'Cidade Velha',
        cidade: 'Belém',
        estado: 'PA',
        cep: '66020-050',
        telefone: '(91) 3222-2000',
        email: 'atendimento@santamaria.com.br',
        tipo: 'Clínica',
        especialidades: [
            'Ortopedia',
            'Fisioterapia',
            'Radiologia'
        ],
        numero_contrato: 'CONT-2024-002',
        data_inicio: '2024-01-15',
        avaliacao: 4.2,
        ativo: true
    },
    {
        id: 'CRED-003',
        cnpj: '34.567.890/0001-12',
        razao_social: 'Hospital de Clínicas do Amapá',
        nome_fantasia: 'HCA',
        endereco: 'Av. FAB, 100',
        bairro: 'Centro',
        cidade: 'Macapá',
        estado: 'AP',
        cep: '68900-073',
        telefone: '(96) 3210-3000',
        email: 'hca@hospital.ap.gov.br',
        tipo: 'Hospital',
        especialidades: [
            'Clínica Médica',
            'Cirurgia',
            'Pediatria',
            'Ginecologia'
        ],
        numero_contrato: 'CONT-2024-003',
        data_inicio: '2024-02-01',
        avaliacao: 4.0,
        ativo: true
    },
    {
        id: 'CRED-004',
        cnpj: '45.678.901/0001-23',
        razao_social: 'Laboratório Einstein S.A.',
        nome_fantasia: 'Lab Einstein',
        endereco: 'Av. Magalhães Barata, 800',
        bairro: 'São Brás',
        cidade: 'Belém',
        estado: 'PA',
        cep: '66060-160',
        telefone: '(91) 3233-4000',
        email: 'lab@einstein.com.br',
        tipo: 'Laboratório',
        especialidades: [
            'Análises Clínicas',
            'Imagem',
            'Ultrassonografia'
        ],
        numero_contrato: 'CONT-2024-004',
        data_inicio: '2024-01-10',
        avaliacao: 4.7,
        ativo: true
    },
    {
        id: 'CRED-005',
        cnpj: '56.789.012/0001-34',
        razao_social: 'Clínica São Lucas',
        nome_fantasia: 'São Lucas',
        endereco: 'Travessa 14 de Março, 500',
        bairro: 'Nazaré',
        cidade: 'Belém',
        estado: 'PA',
        cep: '66035-200',
        telefone: '(91) 3244-5000',
        email: 'contato@saolucas.com.br',
        tipo: 'Clínica',
        especialidades: [
            'Cardiologia',
            'Neurologia',
            'Endocrinologia'
        ],
        numero_contrato: 'CONT-2024-005',
        data_inicio: '2024-02-15',
        avaliacao: 4.3,
        ativo: true
    }
];
const PROCEDIMENTOS_TRT = [
    {
        id: 'PROC-001',
        matricula_usuario: 'TRT0001',
        usuario_nome: 'Maria Santos Oliveira',
        credenciado_id: 'CRED-001',
        nome_credenciado: 'Hospital Metropolitano',
        tipo: 'Consulta',
        especialidade: 'Cardiologia',
        cid: 'I10',
        diagnostico: 'Hipertensão Arterial',
        data_solicitacao: '2024-01-10',
        data_agendamento: '2024-01-15',
        data_execucao: '2024-01-15',
        valor_total: 350.00,
        valor_glosado: 0,
        valor_aprovado: 350.00,
        status: 'Pago',
        validado_qr: true,
        validado_whatsapp: false
    },
    {
        id: 'PROC-002',
        matricula_usuario: 'TRT0001',
        usuario_nome: 'Maria Santos Oliveira',
        credenciado_id: 'CRED-004',
        nome_credenciado: 'Lab Einstein',
        tipo: 'Exame',
        especialidade: 'Laboratorial',
        cid: '',
        diagnostico: 'Check-up anual',
        data_solicitacao: '2024-02-05',
        data_agendamento: '2024-02-10',
        data_execucao: '2024-02-10',
        valor_total: 450.00,
        valor_glosado: 0,
        valor_aprovado: 450.00,
        status: 'Faturado',
        validado_qr: true,
        validado_whatsapp: true
    },
    {
        id: 'PROC-003',
        matricula_usuario: 'TRT0002',
        usuario_nome: 'João Carlos Silva',
        credenciado_id: 'CRED-001',
        nome_credenciado: 'Hospital Metropolitano',
        tipo: 'Internação',
        especialidade: 'Clínica Médica',
        cid: 'J18',
        diagnostico: 'Pneumonia',
        data_solicitacao: '2024-03-01',
        data_agendamento: '2024-03-02',
        data_execucao: '2024-03-05',
        valor_total: 8500.00,
        valor_glosado: 300.00,
        valor_aprovado: 8200.00,
        status: 'Auditado',
        validado_qr: true,
        validado_whatsapp: false
    },
    {
        id: 'PROC-004',
        matricula_usuario: 'TRT0003',
        usuario_nome: 'Ana Paula Costa',
        credenciado_id: 'CRED-003',
        nome_credenciado: 'Hospital de Clínicas do Amapá',
        tipo: 'Cirurgia',
        especialidade: 'Ortopedia',
        cid: 'M23',
        diagnostico: 'Lesão de menisco',
        data_solicitacao: '2024-03-15',
        data_agendamento: '2024-03-20',
        data_execucao: '2024-03-20',
        valor_total: 12500.00,
        valor_glosado: 0,
        valor_aprovado: 12500.00,
        status: 'Executado',
        validado_qr: true,
        validado_whatsapp: true
    },
    {
        id: 'PROC-005',
        matricula_usuario: 'TRT0004',
        usuario_nome: 'Pedro Henrique Lima',
        credenciado_id: 'CRED-005',
        nome_credenciado: 'Clínica São Lucas',
        tipo: 'Consulta',
        especialidade: 'Neurologia',
        cid: 'G43',
        diagnostico: 'Enxaqueca crônica',
        data_solicitacao: '2024-03-25',
        data_agendamento: '2024-03-28',
        data_execucao: null,
        valor_total: 400.00,
        valor_glosado: 0,
        valor_aprovado: 0,
        status: 'Validado',
        validado_qr: true,
        validado_whatsapp: false
    }
];
const ITENS_FATURA_TRT = [
    // FAT-001 - Consulta Cardiológica
    {
        id: 'ITEM-001',
        fatura_id: 'FAT-001',
        codigo: '10101012',
        descricao: 'Consulta Cardiológica',
        tipo: 'Procedimento',
        quantidade: 1,
        valor_unitario: 250.00,
        valor_total: 250.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-002',
        fatura_id: 'FAT-001',
        codigo: '10101020',
        descricao: 'Eletrocardiograma',
        tipo: 'Procedimento',
        quantidade: 1,
        valor_unitario: 80.00,
        valor_total: 80.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-003',
        fatura_id: 'FAT-001',
        codigo: 'INS-001',
        descricao: 'Agulha Descartável 40x12',
        tipo: 'Insumo',
        quantidade: 2,
        valor_unitario: 2.50,
        valor_total: 5.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-004',
        fatura_id: 'FAT-001',
        codigo: 'INS-002',
        descricao: 'Seringa Descartável 10ml',
        tipo: 'Insumo',
        quantidade: 2,
        valor_unitario: 3.00,
        valor_total: 6.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-005',
        fatura_id: 'FAT-001',
        codigo: 'MAT-001',
        descricao: 'Eletrodo ECG Descartável',
        tipo: 'Material',
        quantidade: 10,
        valor_unitario: 0.90,
        valor_total: 9.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    // FAT-002 - Exames Laboratoriais
    {
        id: 'ITEM-006',
        fatura_id: 'FAT-002',
        codigo: '40301380',
        descricao: 'Hemograma Completo',
        tipo: 'Exame',
        quantidade: 1,
        valor_unitario: 45.00,
        valor_total: 45.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-007',
        fatura_id: 'FAT-002',
        codigo: '40302360',
        descricao: 'Glicemia de Jejum',
        tipo: 'Exame',
        quantidade: 1,
        valor_unitario: 25.00,
        valor_total: 25.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-008',
        fatura_id: 'FAT-002',
        codigo: '40303340',
        descricao: 'Colesterol Total',
        tipo: 'Exame',
        quantidade: 1,
        valor_unitario: 35.00,
        valor_total: 35.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-009',
        fatura_id: 'FAT-002',
        codigo: 'INS-003',
        descricao: 'Tubo Vacuntainer EDTA',
        tipo: 'Insumo',
        quantidade: 3,
        valor_unitario: 2.80,
        valor_total: 8.40,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-010',
        fatura_id: 'FAT-002',
        codigo: 'INS-004',
        descricao: 'Luva de Procedimento',
        tipo: 'Insumo',
        quantidade: 5,
        valor_unitario: 1.20,
        valor_total: 6.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    // FAT-003 - Internação (com glosas)
    {
        id: 'ITEM-011',
        fatura_id: 'FAT-003',
        codigo: '50101010',
        descricao: 'Internação Clínica - Dia',
        tipo: 'Procedimento',
        quantidade: 3,
        valor_unitario: 850.00,
        valor_total: 2550.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-012',
        fatura_id: 'FAT-003',
        codigo: '60101015',
        descricao: 'Antibiótico EV (Ceftriaxona)',
        tipo: 'Medicamento',
        quantidade: 6,
        valor_unitario: 35.00,
        valor_total: 210.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-013',
        fatura_id: 'FAT-003',
        codigo: '70101010',
        descricao: 'Oxigenioterapia',
        tipo: 'Procedimento',
        quantidade: 3,
        valor_unitario: 150.00,
        valor_total: 450.00,
        origem: 'XML',
        status_auditoria: 'Glosado',
        motivo_glosa: 'Quantidade excedente - autorizado: 2 dias'
    },
    {
        id: 'ITEM-014',
        fatura_id: 'FAT-003',
        codigo: 'INS-005',
        descricao: 'Soro Fisiológico 500ml',
        tipo: 'Insumo',
        quantidade: 10,
        valor_unitario: 15.00,
        valor_total: 150.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-015',
        fatura_id: 'FAT-003',
        codigo: 'MAT-002',
        descricao: 'Cateter Intravenoso 20G',
        tipo: 'Material',
        quantidade: 5,
        valor_unitario: 12.00,
        valor_total: 60.00,
        origem: 'XML',
        status_auditoria: 'Aprovado',
        motivo_glosa: null
    },
    {
        id: 'ITEM-016',
        fatura_id: 'FAT-003',
        codigo: 'EXT-001',
        descricao: 'Holter 24h (Não Autorizado)',
        tipo: 'Procedimento',
        quantidade: 1,
        valor_unitario: 350.00,
        valor_total: 350.00,
        origem: 'Inserido Manualmente',
        status_auditoria: 'Glosado',
        motivo_glosa: 'Procedimento não previsto na guia de autorização'
    }
];
const NOTIFICACOES_TRT = [
    {
        id: 'NOTIF-001',
        matricula: 'TRT0001',
        titulo: 'Agendamento Confirmado',
        mensagem: 'Sua consulta cardiológica foi agendada para 15/01/2024 às 14h.',
        tipo: 'agendamento',
        data: '2024-01-10',
        lida: false
    },
    {
        id: 'NOTIF-002',
        matricula: 'TRT0001',
        titulo: 'Exame Disponível',
        mensagem: 'O resultado do seu check-up laboratorial está disponível.',
        tipo: 'resultado',
        data: '2024-02-12',
        lida: false
    },
    {
        id: 'NOTIF-003',
        matricula: 'TRT0001',
        titulo: 'Autorização Pendente',
        mensagem: 'Solicitação de ecocardiograma aguardando aprovação.',
        tipo: 'autorizacao',
        data: '2024-01-08',
        lida: true
    },
    {
        id: 'NOTIF-004',
        matricula: 'TRT0002',
        titulo: 'Internação Registrada',
        mensagem: 'Alta hospitalar registrada em 05/03/2024.',
        tipo: 'internacao',
        data: '2024-03-06',
        lida: false
    }
];
const FATURAS_TRT = [
    {
        id: 'FAT-001',
        procedimento_id: 'PROC-001',
        credenciado_id: 'CRED-001',
        nome_credenciado: 'Hospital Metropolitano',
        numero_fatura: 'FAT-2024-001',
        mes_referencia: 1,
        ano_referencia: 2024,
        xml_arquivo: 'xml_001.tiss',
        pdf_arquivo: 'consulta_cardio_001.pdf',
        pdf_categoria: 'Consultas',
        valor_bruto: 350.00,
        valor_liquido: 350.00,
        status: 'Paga',
        auditor_id: null,
        observacoes_auditoria: null,
        motivo_glosa: null
    },
    {
        id: 'FAT-002',
        procedimento_id: 'PROC-002',
        credenciado_id: 'CRED-004',
        nome_credenciado: 'Lab Einstein',
        numero_fatura: 'FAT-2024-002',
        mes_referencia: 2,
        ano_referencia: 2024,
        xml_arquivo: 'xml_002.tiss',
        pdf_arquivo: 'exames_checkup_002.pdf',
        pdf_categoria: 'Exames',
        valor_bruto: 450.00,
        valor_liquido: 450.00,
        status: 'Auditada',
        auditor_id: 'AUDITOR-001',
        observacoes_auditoria: 'Documentação completa',
        motivo_glosa: null
    },
    {
        id: 'FAT-003',
        procedimento_id: 'PROC-003',
        credenciado_id: 'CRED-001',
        nome_credenciado: 'Hospital Metropolitano',
        numero_fatura: 'FAT-2024-003',
        mes_referencia: 3,
        ano_referencia: 2024,
        xml_arquivo: 'xml_003.tiss',
        pdf_arquivo: 'internacao_pneumonia_003.pdf',
        pdf_categoria: 'Internações',
        valor_bruto: 8500.00,
        valor_liquido: 8200.00,
        status: 'Glosada',
        auditor_id: 'AUDITOR-001',
        observacoes_auditoria: 'Glosa parcial aplicada',
        motivo_glosa: 'Procedimento não coberto 100%'
    }
];
const MODELOS_LAUDOS_TRT = {
    consulta_cardiologia: {
        especialidade: 'Cardiologia',
        medico: 'Dr. Roberto Fernandes Silva - CRM/PA 4589',
        crm: 'CRM/PA 4589',
        conteudo: `QUEIXA PRINCIPAL:
Paciente refere dor torácica em aperto ocasional, não relacionada a esforço físico.

HISTÓRIA DA DOENÇA ATUAL:
Dor torácica de características atípicas, sem irradiação, com duração de poucos minutos e alívio espontâneo.

ANTECEDENTES:
- Hipertensão arterial sistêmica há 5 anos
- Dislipidemia em tratamento
- Nega diabetes
- Cirurgia prévia: apendicectomia

EXAME FÍSICO:
PA: 138/88 mmHg | FC: 72 bpm
Peso: 68kg | Altura: 1,65m | IMC: 25,0
Ausculta cardíaca: ritmos regulares, sem sopros
Pulmões: murmúrio vesicular presente, sem ruídos adventícios

CONDUTA:
1. Manter medicação atual: Losartana 50mg 1x/dia
2. Solicitar ECG e ECO para avaliação
3. Retorno em 3 meses ou ante intercorrência
4. Orientações sobre estilo de vida

OBSERVAÇÕES:
Paciente estável, hipertenso controlado. Necessário monitoramento periódico.`
    },
    exame_laboratorial: {
        especialidade: 'Laboratorial',
        laboratorio: 'Laboratório Einstein Belém',
        cnes: 'CNES 1234567',
        conteudo: `RESULTADO DE EXAMES LABORATORIAIS

HEMOGRAMA COMPLETO:
- Hemácias: 4,8 milhões/mm³ (VR: 4,0-5,4)
- Hemoglobina: 14,2 g/dL (VR: 12,0-16,0)
- Hematócrito: 42% (VR: 36-48)
- Leucócitos: 6.200/mm³ (VR: 4.000-10.000)
- Plaquetas: 280.000/mm³ (VR: 150.000-450.000)

PERFIL LIPÍDICO:
- Colesterol Total: 218 mg/dL (Desejável: <200)
- HDL: 48 mg/dL (Desejável: >40)
- LDL: 162 mg/dL (Desejável: <130) - ELEVADO
- Triglicerídeos: 145 mg/dL (Desejável: <150)
- VLDL: 29 mg/dL

FUNÇÃO RENAL:
- Creatinina: 0,9 mg/dL (VR: 0,6-1,2)
- Ureia: 32 mg/dL (VR: 15-45)

FUNÇÃO HEPÁTICA:
- TGO: 28 U/L (VR: <50)
- TGP: 31 U/L (VR: <50)
- Gama-GT: 35 U/L (VR: <55)

GLICEMIA:
- Glicemia de Jejum: 98 mg/dL (VR: 70-99)
- Hemoglobina Glicada: 5,4% (VR: <5,7)

INTERPRETAÇÃO:
Paciente apresenta LDL levemente elevado. Recomendada alteração na dieta e controle periódico. Demais parâmetros dentro da normalidade.`
    },
    raio_x: {
        especialidade: 'Radiologia',
        medico: 'Dr. Carlos Mendes - CRM/PA 7823',
        conteudo: `RAIO X DE TÓRAX (PA E PERFIL)

TECNICA:
Projeção PA e perfil esquerdo

LAUDO:
Arcos costais preservados. 
Campos pulmonares livres, sem infiltrados ou condensações.
Seio costofrênico livre bilateralmente.
Mediastino sem alargamento.
Silhueta cardíaca com contornos normais.
Cúpulas diafragmáticas bem posicionadas.

IMPRESSÃO DIAGNÓSTICA:
Raio X de tórax sem alterações significativas.`
    },
    eletrocardiograma: {
        especialidade: 'Eletrofisiologia',
        medico: 'Dra. Amanda Rocha - CRM/PA 6541',
        conteudo: `ELETROCARDIOGRAMA (ECG) - 12 DERIVAÇÕES

RITMO: Sinusal
FREQUÊNCIA CARDÍACA: 72 bpm
EIXO: Normal (0° a +90°)

ONDA P:
- Morfologia: Normal
- Duração: 0,08s
- Amplitude: 2,5 mm

INTERVALO PR:
- Duração: 0,16s (VR: 0,12-0,20s)

COMPLEXO QRS:
- Duração: 0,08s (VR: <0,12s)
- Morfologia: Normal em todas as derivações

SEGMENTO ST:
- Isoelétrico em todas as derivações

ONDA T:
- Morfologia: Normal
- Positiva em D1, D2, V2-V6

QT CORRIGIDO:
- QTc: 420 ms (VR: <440ms)

CONCLUSÃO:
ECG dentro dos limites da normalidade para a idade.`
    },
    ultrassom: {
        especialidade: 'Ultrassonografia',
        medico: 'Dra. Fernanda Lima - CRM/PA 8934',
        conteudo: `ULTRASSONOGRAFIA ABDOMINAL TOTAL

TÉCNICA:
Exame realizado com transdutor convexo de 3,5 MHz

FÍGADO:
- Dimensões normais
- Ecosnormotexture
- Sem lesões focais
- Veia porta com fluxo preservado

VESÍCULA BILIAR:
- Dimensões normais
- Paredes não espessadas
- Sem cálculos
- Colédoco com diâmetro normal (<6mm)

BAÇO:
- Dimensões normais
- Ecosnormotexture

RINS:
- Direito: dimensões normais, sem hidronefrose
- Esquerdo: dimensões normais, sem hidronefrose
- Sem cálculos ou masses

PÂNCREAS:
- Dimensões normais
- Limites preservados
- Sem dilatação do ducto de Wirsung

AORTA ABDOMINAL:
- Sem aneurismas
- Calibres preservados

CONCLUSÃO:
Ultrassonografia abdominal sem alterações significativas.`
    },
    tomografia: {
        especialidade: 'Tomografia',
        medico: 'Dr. Ricardo Alves - CRM/PA 7234',
        conteudo: `TOMOGRAFIA COMPUTADORIZADA DE CRÂNIO

TÉCNICA:
Cortes axiais de 5mm, sem contraste

LAUDO:
- Parênquima cerebral com densidade preservada
- Fissuras e sulcos com morfologia habitual
- Ventrículos de tamanho normal
- Linha mediana sem desvio
- Base do crânio sem alterações
- Estruturas ósseas íntegras
- Seios paranasais pneumotizados
- Mastoides sem alterações

IMPRESSÃO DIAGNÓSTICA:
Tomografia de crânio sem alterações significativas.`
    }
};
const HISTORICO_SAUDE_TRT = [
    {
        id: 'HIST-001',
        matricula: 'TRT0001',
        usuario_nome: 'Maria Santos Oliveira',
        categoria: 'Consultas',
        procedimento_id: 'PROC-001',
        descricao: 'Consulta Cardiológica',
        resultado: 'Paciente hipertenso controlado. Manter medicação.',
        pdf_url: '/docs/consulta_cardio_001.pdf',
        data_realizacao: '2024-01-15',
        laudo: MODELOS_LAUDOS_TRT.consulta_cardiologia
    },
    {
        id: 'HIST-002',
        matricula: 'TRT0001',
        usuario_nome: 'Maria Santos Oliveira',
        categoria: 'Exames',
        procedimento_id: 'PROC-002',
        descricao: 'Check-up Laboratorial Completo',
        resultado: 'Colesterol LDL: 160mg/dL (elevado). Demais parâmetros normais.',
        pdf_url: '/docs/exames_checkup_002.pdf',
        data_realizacao: '2024-02-10',
        laudo: MODELOS_LAUDOS_TRT.exame_laboratorial
    },
    {
        id: 'HIST-003',
        matricula: 'TRT0001',
        usuario_nome: 'Maria Santos Oliveira',
        categoria: 'Exames',
        procedimento_id: 'PROC-005',
        descricao: 'Raio X de Tórax',
        resultado: 'Sem alterações significativas.',
        pdf_url: '/docs/raiox_torax_005.pdf',
        data_realizacao: '2024-01-20',
        laudo: MODELOS_LAUDOS_TRT.raio_x
    },
    {
        id: 'HIST-004',
        matricula: 'TRT0001',
        usuario_nome: 'Maria Santos Oliveira',
        categoria: 'Exames',
        procedimento_id: 'PROC-006',
        descricao: 'Eletrocardiograma',
        resultado: 'ECG normal.',
        pdf_url: '/docs/ecg_006.pdf',
        data_realizacao: '2024-01-22',
        laudo: MODELOS_LAUDOS_TRT.eletrocardiograma
    },
    {
        id: 'HIST-005',
        matricula: 'TRT0001',
        usuario_nome: 'Maria Santos Oliveira',
        categoria: 'Exames',
        procedimento_id: 'PROC-007',
        descricao: 'Ultrassonografia Abdominal',
        resultado: 'Sem alterações.',
        pdf_url: '/docs/usg_abdominal_007.pdf',
        data_realizacao: '2024-02-05',
        laudo: MODELOS_LAUDOS_TRT.ultrassom
    },
    {
        id: 'HIST-006',
        matricula: 'TRT0002',
        usuario_nome: 'João Carlos Silva',
        categoria: 'Internações',
        procedimento_id: 'PROC-003',
        descricao: 'Internação por Pneumonia',
        resultado: 'Paciente internado por 3 dias. Tratamento com antibióticos. Alta hospitalar em 05/03/2024.',
        pdf_url: '/docs/internacao_pneumonia_003.pdf',
        data_realizacao: '2024-03-05',
        laudo: null
    },
    {
        id: 'HIST-007',
        matricula: 'TRT0003',
        usuario_nome: 'Ana Paula Costa',
        categoria: 'Cirurgias',
        procedimento_id: 'PROC-004',
        descricao: 'Artroscopia de Joelho - Meniscectomia',
        resultado: 'Procedimento realizado com sucesso. Reabilitação em andamento.',
        pdf_url: '/docs/cirurgia_menisco_004.pdf',
        data_realizacao: '2024-03-20',
        laudo: null
    }
];
const USUARIOS_SISTEMA_TRT = [
    {
        id: 'USER-001',
        nome: 'Administrador TRT',
        email: 'admin@trt8.jus.br',
        perfil: 'Gestor_TRT',
        permissoes: [
            'dashboard',
            'relatorios',
            'auditoria',
            'cadastros',
            'configuracoes'
        ],
        ultimo_acesso: new Date().toISOString()
    },
    {
        id: 'USER-002',
        nome: 'Auditor Contábil',
        email: 'auditor@trt8.jus.br',
        perfil: 'Auditor',
        permissoes: [
            'auditoria',
            'faturas',
            'checklist',
            'glosas'
        ],
        ultimo_acesso: new Date().toISOString()
    },
    {
        id: 'USER-003',
        nome: 'Funcionário Hospital Metro',
        email: 'hospital@credenciado.com',
        perfil: 'Credenciado',
        permissoes: [
            'inserir_fatura',
            'inserir_pdf',
            'visualizar_status'
        ],
        credenciado_id: 'CRED-001',
        ultimo_acesso: new Date().toISOString()
    },
    {
        id: 'USER-004',
        nome: 'Maria Santos Oliveira',
        email: 'maria.oliveira@trt8.jus.br',
        perfil: 'Funcionario_TRT',
        permissoes: [
            'visualizar_historico',
            'agendar_procedimento',
            'visualizar_status'
        ],
        matricula: 'TRT0001',
        ultimo_acesso: new Date().toISOString()
    }
];
const CHECKLIST_AUDITORIA = [
    {
        id: 1,
        item: 'XML válido e completo',
        verificado: true,
        obrigatorio: true
    },
    {
        id: 2,
        item: 'PDF legível e assinado',
        verificado: true,
        obrigatorio: true
    },
    {
        id: 3,
        item: 'Procedimento compatível com CID',
        verificado: true,
        obrigatorio: true
    },
    {
        id: 4,
        item: 'Valor conforme tabela TRT',
        verificado: true,
        obrigatorio: true
    },
    {
        id: 5,
        item: 'Autorização prévia verificada',
        verificado: true,
        obrigatorio: true
    },
    {
        id: 6,
        item: 'Guia de internação (se aplicável)',
        verificado: false,
        obrigatorio: false
    },
    {
        id: 7,
        item: 'Laudo médico anexado',
        verificado: true,
        obrigatorio: true
    },
    {
        id: 8,
        item: 'Carteirinha TRT validada',
        verificado: true,
        obrigatorio: true
    }
];
const ESTATISTICAS_TRT = {
    total_servidores: 245,
    total_credenciados: 28,
    total_procedimentos_ano: 1250,
    total_faturas_pendentes: 45,
    por_categoria: {
        consultas: 680,
        exames: 420,
        internacoes: 95,
        cirurgias: 55
    },
    por_estado: {
        PA: 890,
        AP: 360
    },
    valor_total_processado: 2850000.00,
    valor_medio_consulta: 320.00,
    valor_medio_internacao: 8500.00,
    taxa_glosa_media: 3.2,
    // Top credenciados
    top_credenciados: [
        {
            nome: 'Hospital Metropolitano',
            atendimentos: 245,
            valor: 850000
        },
        {
            nome: 'Lab Einstein',
            atendimentos: 180,
            valor: 320000
        },
        {
            nome: 'Clínica Santa Maria',
            atendimentos: 120,
            valor: 180000
        }
    ]
};
const FLUXO_STATUS_TRT = [
    'Solicitado',
    'Validado',
    'Agendado',
    'Executado',
    'Documentado',
    'Faturado',
    'Auditado',
    'Pago',
    'Glosado'
];
const __TURBOPACK__default__export__ = {
    CORES_TRT,
    IDENTIDADE_TRT,
    ESTADOS_JURISDICAO,
    SERVIDORES_TRT,
    CREDENCIADOS_TRT,
    PROCEDIMENTOS_TRT,
    FATURAS_TRT,
    HISTORICO_SAUDE_TRT,
    USUARIOS_SISTEMA_TRT,
    CHECKLIST_AUDITORIA,
    ESTATISTICAS_TRT,
    FLUXO_STATUS_TRT,
    ITENS_FATURA_TRT,
    NOTIFICACOES_TRT
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/trt/gestor/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PainelGestorTRT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/microscope.js [app-client] (ecmascript) <export default as Microscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-trt-8a-regiao.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// Mock de utilização por servidor
const UTILIZACAO_SERVIDORES = [
    {
        matricula: "TRT0001",
        nome: "Maria Santos Oliveira",
        cargo: "Analista Judiciário",
        comarca: "Belém",
        consultas_ano: 4,
        exames_ano: 8,
        internacoes_ano: 0,
        valor_total_ano: 2850.00,
        ultimo_atendimento: "2024-02-10",
        status: "Ativo"
    },
    {
        matricula: "TRT0002",
        nome: "João Carlos Silva",
        cargo: "Técnico Judiciário",
        comarca: "Belém",
        consultas_ano: 2,
        exames_ano: 3,
        internacoes_ano: 1,
        valor_total_ano: 8750.00,
        ultimo_atendimento: "2024-03-05",
        status: "Ativo"
    },
    {
        matricula: "TRT0003",
        nome: "Ana Paula Costa",
        cargo: "Analista Judiciário",
        comarca: "Macapá",
        consultas_ano: 6,
        exames_ano: 4,
        internacoes_ano: 0,
        valor_total_ano: 1850.00,
        ultimo_atendimento: "2024-03-20",
        status: "Ativo"
    },
    {
        matricula: "TRT0004",
        nome: "Pedro Henrique Lima",
        cargo: "Técnico Judiciário",
        comarca: "Santarém",
        consultas_ano: 1,
        exames_ano: 2,
        internacoes_ano: 0,
        valor_total_ano: 650.00,
        ultimo_atendimento: "2024-01-15",
        status: "Ativo"
    },
    {
        matricula: "TRT0005",
        nome: "Fernanda Souza",
        cargo: "Analista Judiciário",
        comarca: "Belém",
        consultas_ano: 3,
        exames_ano: 5,
        internacoes_ano: 0,
        valor_total_ano: 1450.00,
        ultimo_atendimento: "2024-02-28",
        status: "Ativo"
    }
];
function PainelGestorTRT() {
    _s();
    const [periodo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2024");
    const [buscaServidor, setBuscaServidor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [servidorSelecionado, setServidorSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalServidorAberto, setModalServidorAberto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Dados simulados para gráficos
    const dadosMensais = [
        {
            mes: "Jan",
            consultas: 45,
            exames: 32,
            internacoes: 8,
            cirurgias: 3,
            valor: 125000
        },
        {
            mes: "Fev",
            consultas: 52,
            exames: 38,
            internacoes: 6,
            cirurgias: 4,
            valor: 142000
        },
        {
            mes: "Mar",
            consultas: 48,
            exames: 35,
            internacoes: 12,
            cirurgias: 5,
            valor: 185000
        },
        {
            mes: "Abr",
            consultas: 55,
            exames: 42,
            internacoes: 9,
            cirurgias: 2,
            valor: 158000
        },
        {
            mes: "Mai",
            consultas: 60,
            exames: 48,
            internacoes: 10,
            cirurgias: 6,
            valor: 195000
        },
        {
            mes: "Jun",
            consultas: 58,
            exames: 45,
            internacoes: 7,
            cirurgias: 4,
            valor: 168000
        }
    ];
    const alertas = [
        {
            id: 1,
            tipo: "custo",
            mensagem: "Internação TRT0002 ultrapassou valor médio em 35%",
            severidade: "alta"
        },
        {
            id: 2,
            tipo: "frequencia",
            mensagem: "Servidor TRT0001 realizou 4 consultas no mesmo mês",
            severidade: "media"
        },
        {
            id: 3,
            tipo: "documentacao",
            mensagem: "Fatura FAT-2024-003 pendente de documentação",
            severidade: "baixa"
        }
    ];
    const abrirModalServidor = (servidor)=>{
        setServidorSelecionado(servidor);
        setModalServidorAberto(true);
    };
    const getHistoricoServidor = (matricula)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORICO_SAUDE_TRT"].filter((h)=>h.matricula === matricula).map((h)=>({
                ...h
            }));
    };
    const getDadosServidor = (matricula)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVIDORES_TRT"].find((s)=>s.matricula === matricula);
    };
    const servidoresFiltrados = UTILIZACAO_SERVIDORES.filter((s)=>s.nome.toLowerCase().includes(buscaServidor.toLowerCase()) || s.matricula.toLowerCase().includes(buscaServidor.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].fundo
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-white shadow-lg",
                style: {
                    background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria} 0%, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria} 100%)`
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
                                        href: "/trt",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "text-white hover:bg-white/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-white/20 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl font-bold",
                                                        children: "Painel Gerencial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm opacity-90",
                                                        children: "Gestão de Custos e Processos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        className: "bg-white/20 text-white border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "h-3 w-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            periodo
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "text-white hover:bg-white/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "h-4 w-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            "Exportar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/gestor/page.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/trt/gestor/page.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/trt/gestor/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Total Servidores"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].total_servidores
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Credenciados"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].total_credenciados
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].secundaria
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Valor Total (Ano)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: [
                                                            "R$ ",
                                                            (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].valor_total_processado / 1000000).toFixed(2),
                                                            "M"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].secundaria}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].secundaria
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Taxa de Glosa Média"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].taxa_glosa_media,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/gestor/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        defaultValue: "dashboard",
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid w-full grid-cols-5 lg:w-auto lg:inline-flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "dashboard",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this),
                                            "Dashboard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "servidores",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            "Servidores"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "credenciados",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 15
                                            }, this),
                                            "Credenciados"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "alertas",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            "Alertas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "relatorios",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this),
                                            "Relatórios"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "dashboard",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                    },
                                                    children: "Evolução Mensal - Atendimentos"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: dadosMensais.map((mes)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium w-12",
                                                                            children: mes.mes
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 mx-4 space-y-1",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "h-4 rounded-l",
                                                                                        style: {
                                                                                            width: `${mes.consultas / 70 * 100}%`,
                                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                                                                                        },
                                                                                        title: `Consultas: ${mes.consultas}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 323,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "h-4",
                                                                                        style: {
                                                                                            width: `${mes.exames / 70 * 100}%`,
                                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                                        },
                                                                                        title: `Exames: ${mes.exames}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 331,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "h-4",
                                                                                        style: {
                                                                                            width: `${mes.internacoes / 70 * 100}%`,
                                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                                                        },
                                                                                        title: `Internações: ${mes.internacoes}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 339,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "h-4 rounded-r",
                                                                                        style: {
                                                                                            width: `${mes.cirurgias / 70 * 100}%`,
                                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].erro
                                                                                        },
                                                                                        title: `Cirurgias: ${mes.cirurgias}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 347,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 322,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 321,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600 w-24 text-right",
                                                                            children: [
                                                                                "R$ ",
                                                                                (mes.valor / 1000).toFixed(0),
                                                                                "k"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 357,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, mes.mes, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-4 mt-6 pt-4 border-t",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded",
                                                                        style: {
                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 368,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-slate-600",
                                                                        children: "Consultas"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded",
                                                                        style: {
                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-slate-600",
                                                                        children: "Exames"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded",
                                                                        style: {
                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-slate-600",
                                                                        children: "Internações"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 383,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded",
                                                                        style: {
                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].erro
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-slate-600",
                                                                        children: "Cirurgias"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-base",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                            },
                                                            children: "Distribuição por Estado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between p-3 bg-slate-50 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                    className: "h-5 w-5",
                                                                                    style: {
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 405,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: "Pará (PA)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 406,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 404,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-bold",
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].por_estado.PA
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 409,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-slate-500",
                                                                                    children: [
                                                                                        (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].por_estado.PA / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].total_servidores * 100).toFixed(0),
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 410,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between p-3 bg-slate-50 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                    className: "h-5 w-5",
                                                                                    style: {
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 417,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: "Amapá (AP)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 418,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 416,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-bold",
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].por_estado.AP
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 421,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-slate-500",
                                                                                    children: [
                                                                                        (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].por_estado.AP / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].total_servidores * 100).toFixed(0),
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 422,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 420,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-base",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                            },
                                                            children: "Custos por Categoria"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].por_categoria).map(([cat, qtd])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between p-3 bg-slate-50 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "capitalize",
                                                                            children: cat
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 441,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "secondary",
                                                                            children: qtd
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 442,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, cat, true, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "servidores",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "h-5 w-5 text-slate-400 mt-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Buscar servidor por nome ou matrícula...",
                                                        value: buscaServidor,
                                                        onChange: (e)=>setBuscaServidor(e.target.value),
                                                        className: "flex-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                    },
                                                    children: "Acompanhamento de Servidores"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left py-3",
                                                                                children: "Servidor"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 479,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left py-3",
                                                                                children: "Comarca"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 480,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3",
                                                                                children: "Consultas"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 481,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3",
                                                                                children: "Exames"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 482,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3",
                                                                                children: "Internações"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 483,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-right py-3",
                                                                                children: "Valor Total"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 484,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center py-3",
                                                                                children: "Ações"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 485,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 478,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y",
                                                                    children: servidoresFiltrados.map((servidor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-slate-50 cursor-pointer",
                                                                            onClick: ()=>abrirModalServidor(servidor),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-3",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
                                                                                                style: {
                                                                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                                                },
                                                                                                children: servidor.nome.charAt(0)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 497,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "font-medium",
                                                                                                        children: servidor.nome
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                        lineNumber: 504,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-xs text-slate-500",
                                                                                                        children: servidor.matricula
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                        lineNumber: 505,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 503,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 496,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 495,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-3",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                children: servidor.comarca
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 511,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-slate-500",
                                                                                                children: servidor.cargo
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 512,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 510,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 509,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-3 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        variant: "outline",
                                                                                        style: {
                                                                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].info,
                                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                                                                                        },
                                                                                        children: servidor.consultas_ano
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 516,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 515,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-3 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        variant: "outline",
                                                                                        style: {
                                                                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria,
                                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                                        },
                                                                                        children: servidor.exames_ano
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 521,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 520,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-3 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        variant: "outline",
                                                                                        style: {
                                                                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque,
                                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                                                        },
                                                                                        children: servidor.internacoes_ano
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 526,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-3 text-right font-medium",
                                                                                    children: [
                                                                                        "R$ ",
                                                                                        servidor.valor_total_ano.toLocaleString("pt-BR", {
                                                                                            minimumFractionDigits: 2
                                                                                        })
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 530,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-3 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                        variant: "ghost",
                                                                                        size: "sm",
                                                                                        onClick: (e)=>{
                                                                                            e.stopPropagation();
                                                                                            abrirModalServidor(servidor);
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                                className: "h-4 w-4 mr-1"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 542,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            "Detalhes"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 534,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 533,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, servidor.matricula, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 490,
                                                                            columnNumber: 25
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 17
                                                    }, this),
                                                    servidoresFiltrados.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-8 text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "h-12 w-12 mx-auto mb-3 opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 553,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Nenhum servidor encontrado"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "credenciados",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                    },
                                                    children: "Top Credenciados"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESTATISTICAS_TRT"].top_credenciados.map((cred, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
                                                                            style: {
                                                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                            },
                                                                            children: idx + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 574,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-semibold",
                                                                                    children: cred.nome
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 581,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-slate-500",
                                                                                    children: [
                                                                                        cred.atendimentos,
                                                                                        " atendimentos"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 582,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 580,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold",
                                                                            style: {
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                            },
                                                                            children: [
                                                                                "R$ ",
                                                                                (cred.valor / 1000).toFixed(0),
                                                                                "k"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 586,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 text-xs text-slate-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                    className: "h-3 w-3",
                                                                                    style: {
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 590,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                "Ativo"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 589,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 585,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 566,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                    },
                                                    children: "Lista de Credenciados"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 601,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-left py-2",
                                                                            children: "Nome"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 609,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-left py-2",
                                                                            children: "Tipo"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 610,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-left py-2",
                                                                            children: "Cidade"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 611,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2",
                                                                            children: "Avaliação"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 612,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2",
                                                                            children: "Status"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 608,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                className: "divide-y",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CREDENCIADOS_TRT"].map((cred)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-slate-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium",
                                                                                        children: cred.nome_fantasia
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 620,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-500",
                                                                                        children: cred.razao_social
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 621,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 619,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3",
                                                                                children: cred.tipo
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 623,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3",
                                                                                children: [
                                                                                    cred.cidade,
                                                                                    " - ",
                                                                                    cred.estado
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 624,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-bold",
                                                                                            style: {
                                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].secundaria
                                                                                            },
                                                                                            children: cred.avaliacao
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                            lineNumber: 629,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs text-slate-400",
                                                                                            children: "/5"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                            lineNumber: 632,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 628,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 627,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-3 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    style: {
                                                                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso,
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                            className: "h-3 w-3 mr-1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                            lineNumber: 640,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        "Ativo"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 636,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 635,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, cred.id, true, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 618,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 604,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "alertas",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                },
                                                children: "Alertas do Sistema"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 656,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 655,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: alertas.map((alerta)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 rounded-lg border-l-4 ${alerta.severidade === "alta" ? "bg-red-50 border-red-500" : alerta.severidade === "media" ? "bg-amber-50 border-amber-500" : "bg-blue-50 border-blue-500"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: `h-5 w-5 ${alerta.severidade === "alta" ? "text-red-500" : alerta.severidade === "media" ? "text-amber-500" : "text-blue-500"}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 672,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium text-slate-900",
                                                                            children: alerta.mensagem
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 682,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-slate-500 capitalize mt-1",
                                                                            children: [
                                                                                "Tipo: ",
                                                                                alerta.tipo
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 683,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 681,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: `text-xs ${alerta.severidade === "alta" ? "border-red-500 text-red-600" : alerta.severidade === "media" ? "border-amber-500 text-amber-600" : "border-blue-500 text-blue-600"}`,
                                                                    children: alerta.severidade.toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 687,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, alerta.id, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 659,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 658,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 653,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "relatorios",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-lg transition-shadow cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg",
                                                            style: {
                                                                backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria}20`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-8 w-8",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 716,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold",
                                                                    children: "Relatório de Custos"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 719,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-500",
                                                                    children: "Análise detalhada por categoria"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 720,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 718,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "h-4 w-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 723,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "PDF"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 710,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 709,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-lg transition-shadow cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg",
                                                            style: {
                                                                backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria}20`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "h-8 w-8",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 737,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold",
                                                                    children: "Relatório por Servidor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 740,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-500",
                                                                    children: "Utilização individual"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 741,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "h-4 w-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 744,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "PDF"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 743,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 732,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 731,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 730,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-lg transition-shadow cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg",
                                                            style: {
                                                                backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].secundaria}20`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                className: "h-8 w-8",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].secundaria
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 758,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 754,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold",
                                                                    children: "Relatório por Credenciado"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 761,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-500",
                                                                    children: "Desempenho e faturamento"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 762,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "h-4 w-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 765,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "PDF"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 753,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 752,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-lg transition-shadow cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg",
                                                            style: {
                                                                backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque}20`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                className: "h-8 w-8",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 779,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold",
                                                                    children: "Relatório de Glosas"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 782,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-slate-500",
                                                                    children: "Análise de irregularidades"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 783,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 781,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "h-4 w-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 786,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "PDF"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 785,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 773,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 772,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 708,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 707,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/gestor/page.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-8 pt-6 border-t text-center text-sm text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                },
                                children: "TRT 8ª Região - Painel Gerencial"
                            }, void 0, false, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 798,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Relatórios atualizados em: ",
                                    new Date().toLocaleDateString("pt-BR")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/gestor/page.tsx",
                                lineNumber: 799,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/gestor/page.tsx",
                        lineNumber: 797,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/trt/gestor/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            modalServidorAberto && servidorSelecionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "h-6 w-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-white",
                                                    children: servidorSelecionado.nome
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-white/80",
                                                    children: servidorSelecionado.matricula
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 814,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 812,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>setModalServidorAberto(false),
                                    className: "text-white hover:bg-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 825,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 819,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/trt/gestor/page.tsx",
                            lineNumber: 808,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "h-5 w-5",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Dados Pessoais"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-500",
                                                                        children: "Cargo:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 840,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    servidorSelecionado.cargo
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-500",
                                                                        children: "Comarca:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 841,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    servidorSelecionado.comarca
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 841,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-500",
                                                                        children: "Status:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 842,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        children: servidorSelecionado.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 842,
                                                                        columnNumber: 74
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 842,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 833,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                className: "h-5 w-5",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 850,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Resumo do Ano"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 851,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-500",
                                                                        children: "Consultas:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 854,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    servidorSelecionado.consultas_ano
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 854,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-500",
                                                                        children: "Exames:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 855,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    servidorSelecionado.exames_ano
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 855,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-500",
                                                                        children: "Internações:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 856,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    servidorSelecionado.internacoes_ano
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 856,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 853,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 848,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 847,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                className: "h-5 w-5",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].secundaria
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 864,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Custo Total"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 865,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: [
                                                            "R$ ",
                                                            servidorSelecionado.valor_total_ano.toLocaleString("pt-BR", {
                                                                minimumFractionDigits: 2
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 867,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: [
                                                            "Último atendimento: ",
                                                            new Date(servidorSelecionado.ultimo_atendimento).toLocaleDateString("pt-BR")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 870,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 862,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 861,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 832,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-4 flex items-center gap-2",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 880,
                                                    columnNumber: 19
                                                }, this),
                                                "Histórico de Saúde"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 879,
                                            columnNumber: 17
                                        }, this),
                                        [
                                            "Consultas",
                                            "Exames",
                                            "Internações",
                                            "Cirurgias"
                                        ].map((categoria)=>{
                                            const itens = getHistoricoServidor(servidorSelecionado.matricula).filter((h)=>h.categoria === categoria);
                                            if (itens.length === 0) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "text-sm font-medium text-slate-600 mb-2",
                                                        children: categoria
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 893,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-lg overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    className: "bg-slate-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3",
                                                                                children: "Descrição"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 898,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3",
                                                                                children: "Resultado"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 899,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center p-3",
                                                                                children: "Data"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 900,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-center p-3",
                                                                                children: "PDF"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                lineNumber: 901,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                        lineNumber: 897,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 896,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y",
                                                                    children: itens.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-slate-50",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            categoria === "Consultas" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                                                                                className: "h-4 w-4",
                                                                                                style: {
                                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 910,
                                                                                                columnNumber: 39
                                                                                            }, this) : categoria === "Exames" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"], {
                                                                                                className: "h-4 w-4",
                                                                                                style: {
                                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 912,
                                                                                                columnNumber: 39
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                                                className: "h-4 w-4",
                                                                                                style: {
                                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 914,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: item.descricao
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 916,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 908,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 907,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-slate-600",
                                                                                    children: item.resultado
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 919,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-center",
                                                                                    children: new Date(item.data_realizacao).toLocaleDateString("pt-BR")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 920,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                        variant: "ghost",
                                                                                        size: "sm",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                                className: "h-4 w-4 mr-1"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                                lineNumber: 925,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            "Ver"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                        lineNumber: 924,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                                    lineNumber: 923,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, item.id, true, {
                                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                                            lineNumber: 906,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                                    lineNumber: 904,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 894,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, categoria, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 892,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        getHistoricoServidor(servidorSelecionado.matricula).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-8 text-slate-500 bg-slate-50 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                                    className: "h-12 w-12 mx-auto mb-3 opacity-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Nenhum histórico registrado"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 878,
                                    columnNumber: 15
                                }, this),
                                (()=>{
                                    const dadosCompletos = getDadosServidor(servidorSelecionado.matricula);
                                    if (!dadosCompletos) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 pt-6 border-t",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold mb-4",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                },
                                                children: "Informações Complementares"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 953,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: "Tipo Sanguíneo:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 958,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: dadosCompletos.tipo_sanguineo
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 959,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: "Alergias:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 962,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: dadosCompletos.alergias.join(", ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 963,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: "Comorbidades:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 966,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: dadosCompletos.comorbidades.length > 0 ? dadosCompletos.comorbidades.join(", ") : "Nenhuma"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 967,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: "Lotação:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 974,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: dadosCompletos.lotacao
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                                lineNumber: 975,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                                        lineNumber: 973,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/gestor/page.tsx",
                                                lineNumber: 956,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/gestor/page.tsx",
                                        lineNumber: 952,
                                        columnNumber: 19
                                    }, this);
                                })()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/trt/gestor/page.tsx",
                            lineNumber: 830,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2 p-4 border-t bg-slate-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setModalServidorAberto(false),
                                    children: "Fechar"
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 985,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                    },
                                    className: "text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/gestor/page.tsx",
                                            lineNumber: 989,
                                            columnNumber: 17
                                        }, this),
                                        "Exportar Ficha"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/gestor/page.tsx",
                                    lineNumber: 988,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/trt/gestor/page.tsx",
                            lineNumber: 984,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/trt/gestor/page.tsx",
                    lineNumber: 806,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/trt/gestor/page.tsx",
                lineNumber: 805,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/trt/gestor/page.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(PainelGestorTRT, "5L4jlAPuqDNG9sIkDXKcSSyblLc=");
_c = PainelGestorTRT;
var _c;
__turbopack_context__.k.register(_c, "PainelGestorTRT");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_86e297e8._.js.map