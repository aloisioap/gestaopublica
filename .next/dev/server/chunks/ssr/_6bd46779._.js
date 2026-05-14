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
"[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
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
"[project]/lib/dados-trt-8a-regiao.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "MODELOS_LAUDOS_TRT",
    ()=>MODELOS_LAUDOS_TRT,
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
    FLUXO_STATUS_TRT
};
}),
"[project]/app/trt/auditor/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AreaAuditoriaTRT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-ssr] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-trt-8a-regiao.ts [app-ssr] (ecmascript)");
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
function AreaAuditoriaTRT() {
    const [faturas, setFaturas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FATURAS_TRT"].map((f)=>({
            ...f
        })));
    const [faturaSelecionada, setFaturaSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [checklist, setChecklist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHECKLIST_AUDITORIA"].map((item)=>({
            ...item
        })));
    const [observacoes, setObservacoes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [motivoGlosa, setMotivoGlosa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const toggleChecklistItem = (id)=>{
        setChecklist((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    verificado: !item.verificado
                } : item));
    };
    const aprovarFatura = ()=>{
        if (faturaSelecionada) {
            setFaturas((prev)=>prev.map((f)=>f.id === faturaSelecionada.id ? {
                        ...f,
                        status: "Aprovada"
                    } : f));
            setFaturaSelecionada(null);
            alert("Fatura aprovada com sucesso!");
        }
    };
    const glosarFatura = ()=>{
        if (faturaSelecionada && motivoGlosa) {
            setFaturas((prev)=>prev.map((f)=>f.id === faturaSelecionada.id ? {
                        ...f,
                        status: "Glosada",
                        motivo_glosa: motivoGlosa
                    } : f));
            setFaturaSelecionada(null);
            setMotivoGlosa("");
            alert("Fatura glosada com sucesso!");
        }
    };
    const getStatusBadge = (status)=>{
        switch(status){
            case "Pendente":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "secondary",
                    children: "Pendente"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 95,
                    columnNumber: 16
                }, this);
            case "Inserida":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].info,
                        color: "white"
                    },
                    children: "Inserida"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this);
            case "Auditada":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria,
                        color: "white"
                    },
                    children: "Auditada"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this);
            case "Aprovada":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                    },
                    children: "Aprovada"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 105,
                    columnNumber: 16
                }, this);
            case "Glosada":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta
                    },
                    children: "Glosada"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 107,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    children: status
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 109,
                    columnNumber: 16
                }, this);
        }
    };
    const itensPendentes = checklist.filter((item)=>!item.verificado && item.obrigatorio).length;
    const itensVerificados = checklist.filter((item)=>item.verificado).length;
    const progresso = itensVerificados / checklist.length * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].fundo
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-white shadow-lg",
                style: {
                    background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria} 0%, ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].secundaria} 100%)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/trt",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "text-white hover:bg-white/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-white/20 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl font-bold",
                                                        children: "Auditoria TIS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm opacity-90",
                                                        children: "Análise de Conformidade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "secondary",
                                className: "bg-white/20 text-white border-0",
                                children: "Acesso TIS/TRT"
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/auditor/page.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/trt/auditor/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Pendentes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: faturas.filter((f)=>f.status === "Pendente" || f.status === "Inserida").length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Em Análise"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: faturas.filter((f)=>f.status === "Auditada").length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].info}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Aprovadas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: faturas.filter((f)=>f.status === "Aprovada").length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-l-4",
                                style: {
                                    borderLeftColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "Glosadas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: faturas.filter((f)=>f.status === "Glosada").length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/auditor/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-base flex items-center gap-2",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Faturas Pendentes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y max-h-[600px] overflow-y-auto",
                                                children: faturas.map((fatura)=>{
                                                    const servidor = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVIDORES_TRT"].find((s)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FATURAS_TRT"].find((f)=>f.id === fatura.id)?.procedimento_id?.includes(s.matricula));
                                                    const credenciado = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CREDENCIADOS_TRT"].find((c)=>c.id === fatura.credenciado_id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 cursor-pointer hover:bg-slate-50 transition-colors ${faturaSelecionada?.id === fatura.id ? "bg-blue-50 border-l-4 border-blue-500" : ""}`,
                                                        onClick: ()=>setFaturaSelecionada(fatura),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-sm",
                                                                        children: fatura.numero_fatura
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    getStatusBadge(fatura.status)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-600 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                        className: "h-3 w-3 inline mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    servidor?.nome || "Servidor não encontrado"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-600 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                        className: "h-3 w-3 inline mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    credenciado?.nome_fantasia || credenciado?.razao_social
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-medium",
                                                                        style: {
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                        },
                                                                        children: [
                                                                            "R$ ",
                                                                            fatura.valor_bruto.toLocaleString("pt-BR", {
                                                                                minimumFractionDigits: 2
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                className: "h-3 w-3 inline mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 263,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            fatura.mes_referencia,
                                                                            "/",
                                                                            fatura.ano_referencia
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 262,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, fatura.id, true, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: faturaSelecionada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "border-b",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: [
                                                            "Auditoria: ",
                                                            faturaSelecionada.numero_fatura
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                size: "sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "h-4 w-4 mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Ver XML"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                size: "sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                        className: "h-4 w-4 mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 290,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "PDF"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-6 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-slate-50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Valor Bruto"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-lg",
                                                                    children: [
                                                                        "R$",
                                                                        " ",
                                                                        faturaSelecionada.valor_bruto.toLocaleString("pt-BR", {
                                                                            minimumFractionDigits: 2
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-slate-50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Valor Líquido"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-lg",
                                                                    style: {
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                                                                    },
                                                                    children: [
                                                                        "R$",
                                                                        " ",
                                                                        faturaSelecionada.valor_liquido.toLocaleString("pt-BR", {
                                                                            minimumFractionDigits: 2
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-slate-50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Categoria"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold",
                                                                    children: faturaSelecionada.pdf_categoria
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-slate-50 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 23
                                                                }, this),
                                                                getStatusBadge(faturaSelecionada.status)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold",
                                                                    style: {
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                    },
                                                                    children: "Checklist de Conformidade"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-2 w-32 bg-slate-200 rounded-full overflow-hidden",
                                                                            style: {
                                                                                backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso}30`
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-full transition-all",
                                                                                style: {
                                                                                    width: `${progresso}%`,
                                                                                    backgroundColor: progresso === 100 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 338,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 334,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-slate-600",
                                                                            children: [
                                                                                Math.round(progresso),
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 346,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 21
                                                        }, this),
                                                        itensPendentes > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-amber-800",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                        className: "h-4 w-4 inline mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 353,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Atenção: ",
                                                                    itensPendentes,
                                                                    " item(ns) obrigatório(s) pendente(s)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: checklist.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex items-start gap-3 p-3 rounded-lg border ${item.verificado ? "bg-green-50 border-green-200" : item.obrigatorio ? "bg-white border-slate-200" : "bg-slate-50 border-slate-200"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            id: `check-${item.id}`,
                                                                            checked: item.verificado,
                                                                            onCheckedChange: ()=>toggleChecklistItem(item.id)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 371,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    htmlFor: `check-${item.id}`,
                                                                                    className: `text-sm cursor-pointer ${item.verificado ? "line-through text-slate-500" : "text-slate-900"}`,
                                                                                    children: item.item
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 377,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                item.obrigatorio && !item.verificado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    className: "ml-2 text-xs",
                                                                                    style: {
                                                                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta,
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta
                                                                                    },
                                                                                    children: "Obrigatório"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 386,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 376,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        item.verificado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                            className: "h-5 w-5",
                                                                            style: {
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 396,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 361,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                            },
                                                            children: "Observações da Auditoria"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            className: "w-full p-3 border rounded-lg text-sm min-h-[100px]",
                                                            placeholder: "Digite suas observações sobre a fatura...",
                                                            value: observacoes,
                                                            onChange: (e)=>setObservacoes(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, this),
                                                faturaSelecionada.status === "Glosada" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-red-50 rounded-lg border border-red-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-2 text-red-700",
                                                            children: "Motivo da Glosa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                            placeholder: "Informe o motivo da glosa...",
                                                            value: motivoGlosa,
                                                            onChange: (e)=>setMotivoGlosa(e.target.value),
                                                            className: "border-red-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 pt-4 border-t",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "flex-1",
                                                            size: "lg",
                                                            onClick: aprovarFatura,
                                                            disabled: itensPendentes > 0,
                                                            style: {
                                                                backgroundColor: itensPendentes > 0 ? "#ccc" : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 442,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Aprovar Fatura"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "flex-1",
                                                            size: "lg",
                                                            variant: "outline",
                                                            onClick: ()=>setFaturaSelecionada(null),
                                                            children: "Cancelar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "flex-1",
                                                            size: "lg",
                                                            variant: "destructive",
                                                            onClick: glosarFatura,
                                                            disabled: !motivoGlosa,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Glosar"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                className: "h-16 w-16 mx-auto mb-4 opacity-30",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-slate-600",
                                                children: "Selecione uma fatura"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "Clique em uma fatura da lista à esquerda para iniciar a auditoria"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/auditor/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-8 pt-6 border-t text-center text-sm text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                },
                                children: "TRT 8ª Região - Sistema de Auditoria TIS"
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 482,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Acesso restrito a auditores autorizados"
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/auditor/page.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/trt/auditor/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/trt/auditor/page.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_6bd46779._.js.map