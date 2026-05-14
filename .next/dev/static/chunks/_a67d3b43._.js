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
"[project]/lib/dados-mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        id: 'nazare',
        nome: 'Nazaré',
        zona: 'Central',
        populacao: 45000,
        demandas: 78,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=300&fit=crop',
        total_moradores: 45000,
        problemas_pendentes: 12,
        problemas_resolvidos: 45
    },
    {
        id: 'campina',
        nome: 'Campina',
        zona: 'Central',
        populacao: 38000,
        demandas: 65,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1599692666424-38b38c4d24ea?w=400&h=300&fit=crop',
        total_moradores: 38000,
        problemas_pendentes: 8,
        problemas_resolvidos: 38
    },
    {
        id: 'umarizal',
        nome: 'Umarizal',
        zona: 'Central',
        populacao: 52000,
        demandas: 42,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1582578598774-a377d4b32223?w=400&h=300&fit=crop',
        total_moradores: 52000,
        problemas_pendentes: 15,
        problemas_resolvidos: 52
    },
    {
        id: 'batista-campos',
        nome: 'Batista Campos',
        zona: 'Central',
        populacao: 35000,
        demandas: 38,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        total_moradores: 35000,
        problemas_pendentes: 6,
        problemas_resolvidos: 35
    },
    {
        id: 'marco',
        nome: 'Marco',
        zona: 'Norte',
        populacao: 42000,
        demandas: 55,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=400&h=300&fit=crop',
        total_moradores: 42000,
        problemas_pendentes: 10,
        problemas_resolvidos: 42
    },
    {
        id: 'jurunas',
        nome: 'Jurunas',
        zona: 'Oeste',
        populacao: 68000,
        demandas: 89,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop',
        total_moradores: 68000,
        problemas_pendentes: 18,
        problemas_resolvidos: 68
    },
    {
        id: 'guama',
        nome: 'Guamá',
        zona: 'Sul',
        populacao: 55000,
        demandas: 72,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
        total_moradores: 55000,
        problemas_pendentes: 14,
        problemas_resolvidos: 55
    },
    {
        id: 'telegrafo',
        nome: 'Telégrafo',
        zona: 'Leste',
        populacao: 28000,
        demandas: 35,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1576765608535-5b51f8d6f5c5?w=400&h=300&fit=crop',
        total_moradores: 28000,
        problemas_pendentes: 5,
        problemas_resolvidos: 28
    },
    {
        id: 'criacao',
        nome: 'Cremação',
        zona: 'Norte',
        populacao: 32000,
        demandas: 41,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1519331379826-f2f22d1942ab?w=400&h=300&fit=crop',
        total_moradores: 32000,
        problemas_pendentes: 7,
        problemas_resolvidos: 32
    },
    {
        id: 'sacramenta',
        nome: 'Sacramenta',
        zona: 'Central',
        populacao: 25000,
        demandas: 28,
        cidade: 'Belém',
        estado: 'PA',
        imagem_url: 'https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?w=400&h=300&fit=crop',
        total_moradores: 25000,
        problemas_pendentes: 4,
        problemas_resolvidos: 25
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/funsau/paciente/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PacienteDetalhesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check.js [app-client] (ecmascript) <export default as FileCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-client] (ecmascript) <export default as QrCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-mock.ts [app-client] (ecmascript)");
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
function PacienteDetalhesPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pacienteId = params?.id;
    const paciente = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPacientesPM"].find((p)=>p.id === pacienteId);
    const protocolos = paciente ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProtocolosByPaciente"])(paciente.id) : [];
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dados");
    if (!paciente) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "h-16 w-16 text-slate-300 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-slate-900",
                        children: "Paciente não encontrado"
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 mt-2",
                        children: "O policial não foi encontrado."
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "mt-4",
                        onClick: ()=>router.push('/funsau'),
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    const imcClassificacao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classificarIMC"])(paciente.imc);
    const imcCor = paciente.imc < 18.5 ? 'text-amber-600' : paciente.imc < 25 ? 'text-emerald-600' : paciente.imc < 30 ? 'text-amber-600' : 'text-red-600';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b border-slate-200 sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ()=>router.back(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-5 w-5 text-slate-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "h-6 w-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-lg font-bold text-slate-900",
                                                        children: "Ficha do Policial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: [
                                                            paciente.patente,
                                                            " - ",
                                                            paciente.matricula
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            "Imprimir"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "bg-emerald-600 hover:bg-emerald-700 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            "Novo Atendimento"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-6 border-emerald-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-32 h-40 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center border-4 border-white shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "h-16 w-16 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-100 p-3 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                            className: "h-16 w-16 text-slate-700 mx-auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500 mt-1",
                                                            children: paciente.qr_code
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                className: "bg-blue-100 text-blue-800 text-sm px-3 py-1",
                                                                children: paciente.patente
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl font-bold text-slate-900",
                                                            children: paciente.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-500 mt-1",
                                                            children: [
                                                                "Matrícula: ",
                                                                paciente.matricula
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-3 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: "CPF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-slate-900",
                                                                children: paciente.cpf
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-3 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: "Idade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-slate-900",
                                                                children: [
                                                                    paciente.idade,
                                                                    " anos"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-3 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: "Tempo de Serviço"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-slate-900",
                                                                children: [
                                                                    paciente.tempo_servico_anos,
                                                                    " anos"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-3 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: "Tipo Sanguíneo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-red-600",
                                                                children: paciente.tipo_sanguineo
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-slate-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                className: "h-4 w-4 text-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: paciente.unidade
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-slate-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "h-4 w-4 text-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: paciente.lotacao
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: activeTab,
                        onValueChange: setActiveTab,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid w-full grid-cols-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "dados",
                                        children: "Dados Pessoais"
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "saude",
                                        children: "Saúde"
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "historico",
                                        children: "Histórico"
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "protocolos",
                                        children: "Protocolos"
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "dependentes",
                                        children: "Dependentes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "dados",
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                className: "h-5 w-5 text-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Dados Funcionais"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: "Matrícula"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: paciente.matricula
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: "Patente"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: paciente.patente
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 172,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: "Data de Ingresso"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: new Date(paciente.data_ingresso).toLocaleDateString('pt-BR')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 176,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: "Tempo de Serviço"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: [
                                                                            paciente.tempo_servico_anos,
                                                                            " anos"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "h-5 w-5 text-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Endereço"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Logradouro"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    children: paciente.endereco
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-500",
                                                                            children: "Bairro"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                            lineNumber: 200,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium",
                                                                            children: paciente.bairro
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                            lineNumber: 201,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-500",
                                                                            children: "CEP"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                            lineNumber: 204,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium",
                                                                            children: paciente.cep
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                            lineNumber: 205,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "saude",
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: "h-5 w-5 text-emerald-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Dados Antropométricos"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center p-4 bg-slate-50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 mb-1",
                                                                    children: "Altura"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-bold text-slate-900",
                                                                    children: [
                                                                        paciente.altura,
                                                                        "m"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center p-4 bg-slate-50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 mb-1",
                                                                    children: "Peso"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-bold text-slate-900",
                                                                    children: [
                                                                        paciente.peso,
                                                                        "kg"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center p-4 bg-slate-50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 mb-1",
                                                                    children: "IMC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-2xl font-bold ${imcCor}`,
                                                                    children: paciente.imc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: imcClassificacao
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center p-4 bg-slate-50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 mb-1",
                                                                    children: "Tipo Sanguíneo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-bold text-red-600",
                                                                    children: paciente.tipo_sanguineo
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                    className: "h-5 w-5 text-red-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Comorbidades"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        children: paciente.comorbidades.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: paciente.comorbidades.map((comorb, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "destructive",
                                                                    className: "text-sm",
                                                                    children: comorb
                                                                }, idx, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-500",
                                                            children: "Nenhuma comorbidade registrada"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: "h-5 w-5 text-amber-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Alergias"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        children: paciente.alergias.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: paciente.alergias.map((alergia, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    className: "bg-amber-100 text-amber-800 text-sm",
                                                                    children: alergia
                                                                }, idx, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-500",
                                                            children: "Nenhuma alergia registrada"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "historico",
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                        className: "h-5 w-5 text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Histórico de Atendimentos"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: paciente.historico_atendimentos.map((atendimento)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-l-4 border-emerald-400 pl-4 py-3 bg-slate-50 rounded-r-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        className: atendimento.tipo === 'Emergência' ? 'bg-red-100 text-red-800' : atendimento.tipo === 'Cirurgia' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800',
                                                                                        children: atendimento.tipo
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                        lineNumber: 306,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm text-slate-500",
                                                                                        children: new Date(atendimento.data).toLocaleDateString('pt-BR')
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                        lineNumber: 313,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                lineNumber: 305,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold text-slate-900 mt-1",
                                                                                children: atendimento.especialidade
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                lineNumber: 315,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: atendimento.apto_para_servico ? 'default' : 'destructive',
                                                                        children: atendimento.apto_para_servico ? 'Apto' : 'Inapto'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 317,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-slate-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: "Diagnóstico:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                lineNumber: 323,
                                                                                columnNumber: 63
                                                                            }, this),
                                                                            " ",
                                                                            atendimento.diagnostico
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    atendimento.sintomas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-slate-600 mt-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: "Sintomas:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                lineNumber: 325,
                                                                                columnNumber: 70
                                                                            }, this),
                                                                            " ",
                                                                            atendimento.sintomas
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 325,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 23
                                                            }, this),
                                                            atendimento.dias_atestado > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                        className: "h-4 w-4 text-amber-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 331,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-amber-700",
                                                                        children: [
                                                                            "Atestado: ",
                                                                            atendimento.dias_atestado,
                                                                            " dias"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 332,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, atendimento.id, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "protocolos",
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"], {
                                                        className: "h-5 w-5 text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Protocolos Médicos"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: protocolos.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: protocolos.map((protocolo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-lg p-4 hover:shadow-md transition-shadow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-bold text-slate-900",
                                                                                        children: protocolo.numero_protocolo
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                        lineNumber: 358,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        className: protocolo.status === 'Liberado' ? 'bg-emerald-100 text-emerald-800' : protocolo.status === 'Em Execução' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800',
                                                                                        children: protocolo.status
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                        lineNumber: 359,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                lineNumber: 357,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-slate-600 mt-1",
                                                                                children: [
                                                                                    protocolo.tipo_atendimento,
                                                                                    " - ",
                                                                                    protocolo.especialidade
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                                lineNumber: 367,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-emerald-600",
                                                                            children: [
                                                                                "R$ ",
                                                                                protocolo.valor_total.toLocaleString('pt-BR', {
                                                                                    minimumFractionDigits: 2
                                                                                })
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                            lineNumber: 370,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-700 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "Diagnóstico:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 377,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " ",
                                                                    protocolo.diagnostico
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, protocolo.id, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 352,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-center py-8",
                                                children: "Nenhum protocolo registrado"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "dependentes",
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "h-5 w-5 text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Dependentes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: paciente.dependentes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: paciente.dependentes.map((dep, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-slate-50 rounded-lg flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "h-6 w-6 text-emerald-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-slate-900",
                                                                        children: dep.nome
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-slate-600",
                                                                        children: dep.parentesco
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-center py-8",
                                                children: "Nenhum dependente registrado"
                                            }, void 0, false, {
                                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/funsau/paciente/[id]/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(PacienteDetalhesPage, "hRP5ueqRpvCJRT3CcA6HzwfoDbs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PacienteDetalhesPage;
var _c;
__turbopack_context__.k.register(_c, "PacienteDetalhesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a67d3b43._.js.map