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
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
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
"[project]/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 26,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 37,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 91,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 78,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}),
"[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
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
"[project]/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TableCaption.displayName = "TableCaption";
;
}),
"[project]/components/ui/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-auto", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
ScrollArea.displayName = "ScrollArea";
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
}),
"[project]/lib/dados-trt-reciprocidade.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// DADOS DE RECIPROCIDADE - TRT 8ª Região
// Convênios: AUMED, CACI, e outros planos
// ============================================================
__turbopack_context__.s([
    "CONVENIOS_RECIPROCIDADE",
    ()=>CONVENIOS_RECIPROCIDADE,
    "GUIAS_RECIPROCIDADE",
    ()=>GUIAS_RECIPROCIDADE,
    "INDICADORES_RECIPROCIDADE",
    ()=>INDICADORES_RECIPROCIDADE,
    "LOTES_RECIPROCIDADE",
    ()=>LOTES_RECIPROCIDADE,
    "TABELA_BRASINDICE",
    ()=>TABELA_BRASINDICE,
    "buscarGuias",
    ()=>buscarGuias,
    "buscarLotes",
    ()=>buscarLotes,
    "calcularDiferencaBrasindice",
    ()=>calcularDiferencaBrasindice
]);
const CONVENIOS_RECIPROCIDADE = [
    {
        id: "AUMED",
        nome: "AUMED - Associação dos Magistrados",
        tipo: "Plano de Saúde",
        ativo: true
    },
    {
        id: "CACI",
        nome: "CACI - Caixa de Assistência",
        tipo: "Plano de Saúde",
        ativo: true
    },
    {
        id: "UNIMED",
        nome: "UNIMED",
        tipo: "Cooperativa Médica",
        ativo: true
    },
    {
        id: "AMIL",
        nome: "Amil",
        tipo: "Plano de Saúde",
        ativo: true
    },
    {
        id: "BRADESCO",
        nome: "Bradesco Saúde",
        tipo: "Plano de Saúde",
        ativo: false
    }
];
const LOTES_RECIPROCIDADE = [
    {
        id: "LOTE-AUMED-001",
        convenioId: "AUMED",
        convenioNome: "AUMED",
        numeroLote: "20240315-AUMED-001",
        dataRecebimento: "2024-03-15",
        dataProcessamento: "2024-03-20",
        quantidadeGuias: 47,
        valorTotal: 15890.45,
        status: "Em Auditoria",
        arquivoXml: "aumed_lote_001_15032024.xml",
        auditorResponsavel: "Auditor Silva"
    },
    {
        id: "LOTE-CACI-001",
        convenioId: "CACI",
        convenioNome: "CACI",
        numeroLote: "20240318-CACI-001",
        dataRecebimento: "2024-03-18",
        dataProcessamento: "2024-03-22",
        quantidadeGuias: 32,
        valorTotal: 23450.80,
        status: "Pendente",
        arquivoXml: "caci_lote_001_18032024.xml"
    },
    {
        id: "LOTE-AUMED-002",
        convenioId: "AUMED",
        convenioNome: "AUMED",
        numeroLote: "20240320-AUMED-002",
        dataRecebimento: "2024-03-20",
        dataProcessamento: "2024-03-25",
        quantidadeGuias: 28,
        valorTotal: 12340.60,
        status: "Auditado",
        arquivoXml: "aumed_lote_002_20032024.xml",
        auditorResponsavel: "Auditor Oliveira"
    },
    {
        id: "LOTE-UNIMED-001",
        convenioId: "UNIMED",
        convenioNome: "UNIMED",
        numeroLote: "20240322-UNIMED-001",
        dataRecebimento: "2024-03-22",
        dataProcessamento: "2024-03-26",
        quantidadeGuias: 15,
        valorTotal: 8750.30,
        status: "Pendente",
        arquivoXml: "unimed_lote_001_22032024.xml"
    }
];
const GUIAS_RECIPROCIDADE = [
    // LOTE AUMED 001
    {
        id: "GUIA-AUMED-001-001",
        loteId: "LOTE-AUMED-001",
        numeroGuia: "123456789",
        matricula: "AUMED001",
        cpf: "123.456.789-00",
        nomeBeneficiario: "João Silva Santos",
        dataNascimento: "1985-05-15",
        dataExecucao: "2024-03-10",
        procedimentoCodigo: "10101012",
        procedimentoDescricao: "Consulta Cardiológica",
        valorApresentado: 450.00,
        valorBrasindice: 280.00,
        diferencaPercentual: 60.71,
        status: "Análise",
        convenioOrigem: "AUMED",
        credenciado_nome: "Hospital Metropolitano",
        prestador: "Dr. Carlos Mendes",
        cidade: "Belém",
        especialidade: "Cardiologia",
        tipoAtendimento: "Consulta"
    },
    {
        id: "GUIA-AUMED-001-002",
        loteId: "LOTE-AUMED-001",
        numeroGuia: "123456790",
        matricula: "AUMED002",
        cpf: "987.654.321-00",
        nomeBeneficiario: "Maria Oliveira Lima",
        dataNascimento: "1978-11-22",
        dataExecucao: "2024-03-12",
        procedimentoCodigo: "20101015",
        procedimentoDescricao: "Consulta Ortopédica",
        valorApresentado: 380.00,
        valorBrasindice: 260.00,
        diferencaPercentual: 46.15,
        status: "Glosado",
        motivoGlosa: "Valor acima da referência Brasíndice (limite: 15%)",
        convenioOrigem: "AUMED",
        credenciado_nome: "Clínica Ortopédica",
        prestador: "Dr. Ana Paula Santos",
        cidade: "Belém",
        especialidade: "Ortopedia",
        tipoAtendimento: "Consulta"
    },
    {
        id: "GUIA-AUMED-001-003",
        loteId: "LOTE-AUMED-001",
        numeroGuia: "123456791",
        matricula: "AUMED003",
        cpf: "456.789.123-00",
        nomeBeneficiario: "Pedro Costa Souza",
        dataNascimento: "1990-08-10",
        dataExecucao: "2024-03-08",
        procedimentoCodigo: "30101018",
        procedimentoDescricao: "Cirurgia de Hérnia",
        valorApresentado: 2850.00,
        valorBrasindice: 2450.00,
        diferencaPercentual: 16.33,
        status: "Análise",
        convenioOrigem: "AUMED",
        credenciado_nome: "Hospital São Lucas",
        prestador: "Hospital São Lucas",
        cidade: "Belém",
        especialidade: "Cirurgia Geral",
        tipoAtendimento: "Cirurgia"
    },
    {
        id: "GUIA-AUMED-001-004",
        loteId: "LOTE-AUMED-001",
        numeroGuia: "123456792",
        matricula: "AUMED004",
        cpf: "789.123.456-00",
        nomeBeneficiario: "Ana Beatriz Ferreira",
        dataNascimento: "1982-03-25",
        dataExecucao: "2024-03-11",
        procedimentoCodigo: "40102020",
        procedimentoDescricao: "Ressonância Magnética",
        valorApresentado: 1250.00,
        valorBrasindice: 890.00,
        diferencaPercentual: 40.45,
        status: "Glosado",
        motivoGlosa: "Valor divergente da tabela referência",
        convenioOrigem: "AUMED",
        credenciado_nome: "Clínica Imagem",
        prestador: "Clínica Imagem",
        cidade: "Belém",
        especialidade: "Radiologia",
        tipoAtendimento: "Exame"
    },
    {
        id: "GUIA-AUMED-001-005",
        loteId: "LOTE-AUMED-001",
        numeroGuia: "123456793",
        matricula: "AUMED005",
        cpf: "321.654.987-00",
        nomeBeneficiario: "Roberto Almeida",
        dataNascimento: "1975-09-18",
        dataExecucao: "2024-03-09",
        procedimentoCodigo: "10103015",
        procedimentoDescricao: "Consulta Clínica Geral",
        valorApresentado: 250.00,
        valorBrasindice: 230.00,
        diferencaPercentual: 8.70,
        status: "Aprovado",
        convenioOrigem: "AUMED",
        credenciado_nome: "UBS Central",
        prestador: "Dr. José Ricardo",
        cidade: "Belém",
        especialidade: "Clínica Médica",
        tipoAtendimento: "Consulta"
    },
    // LOTE CACI 001
    {
        id: "GUIA-CACI-001-001",
        loteId: "LOTE-CACI-001",
        numeroGuia: "987654321",
        matricula: "CACI001",
        cpf: "654.321.987-00",
        nomeBeneficiario: "Fernanda Lima Silva",
        dataNascimento: "1988-12-05",
        dataExecucao: "2024-03-14",
        procedimentoCodigo: "50101025",
        procedimentoDescricao: "Internação Clínica",
        valorApresentado: 3200.00,
        valorBrasindice: 2850.00,
        diferencaPercentual: 12.28,
        status: "Análise",
        convenioOrigem: "CACI",
        credenciado_nome: "Hospital Metropolitano",
        prestador: "Hospital Metropolitano",
        cidade: "Belém",
        especialidade: "Clínica Médica",
        tipoAtendimento: "Internação"
    },
    {
        id: "GUIA-CACI-001-002",
        loteId: "LOTE-CACI-001",
        numeroGuia: "987654322",
        matricula: "CACI002",
        cpf: "147.258.369-00",
        nomeBeneficiario: "Carlos Eduardo Santos",
        dataNascimento: "1968-04-30",
        dataExecucao: "2024-03-13",
        procedimentoCodigo: "20105012",
        procedimentoDescricao: "Artroscopia",
        valorApresentado: 4500.00,
        valorBrasindice: 3800.00,
        diferencaPercentual: 18.42,
        status: "Glosado",
        motivoGlosa: "Valor acima do limite contratual",
        convenioOrigem: "CACI",
        credenciado_nome: "Hospital Ortopédico",
        prestador: "Hospital Ortopédico",
        cidade: "Belém",
        especialidade: "Ortopedia",
        tipoAtendimento: "Cirurgia"
    }
];
const TABELA_BRASINDICE = [
    {
        id: "BRAS-001",
        procedimentoCodigo: "10101012",
        procedimentoDescricao: "Consulta Cardiológica",
        valorReferencia: 280.00,
        valorMaximo: 322.00,
        valorMinimo: 238.00,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Consulta"
    },
    {
        id: "BRAS-002",
        procedimentoCodigo: "20101015",
        procedimentoDescricao: "Consulta Ortopédica",
        valorReferencia: 260.00,
        valorMaximo: 299.00,
        valorMinimo: 221.00,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Consulta"
    },
    {
        id: "BRAS-003",
        procedimentoCodigo: "30101018",
        procedimentoDescricao: "Cirurgia de Hérnia",
        valorReferencia: 2450.00,
        valorMaximo: 2817.50,
        valorMinimo: 2082.50,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Cirurgia"
    },
    {
        id: "BRAS-004",
        procedimentoCodigo: "40102020",
        procedimentoDescricao: "Ressonância Magnética",
        valorReferencia: 890.00,
        valorMaximo: 1023.50,
        valorMinimo: 756.50,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Exame"
    },
    {
        id: "BRAS-005",
        procedimentoCodigo: "10103015",
        procedimentoDescricao: "Consulta Clínica Geral",
        valorReferencia: 230.00,
        valorMaximo: 264.50,
        valorMinimo: 195.50,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Consulta"
    },
    {
        id: "BRAS-006",
        procedimentoCodigo: "50101025",
        procedimentoDescricao: "Internação Clínica (diária)",
        valorReferencia: 2850.00,
        valorMaximo: 3277.50,
        valorMinimo: 2422.50,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Internação"
    },
    {
        id: "BRAS-007",
        procedimentoCodigo: "20105012",
        procedimentoDescricao: "Artroscopia",
        valorReferencia: 3800.00,
        valorMaximo: 4370.00,
        valorMinimo: 3230.00,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Cirurgia"
    },
    {
        id: "BRAS-008",
        procedimentoCodigo: "10105020",
        procedimentoDescricao: "Consulta Dermatológica",
        valorReferencia: 270.00,
        valorMaximo: 310.50,
        valorMinimo: 229.50,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Consulta"
    },
    {
        id: "BRAS-009",
        procedimentoCodigo: "40103025",
        procedimentoDescricao: "Tomografia Computadorizada",
        valorReferencia: 450.00,
        valorMaximo: 517.50,
        valorMinimo: 382.50,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Exame"
    },
    {
        id: "BRAS-010",
        procedimentoCodigo: "30102022",
        procedimentoDescricao: "Colecistectomia",
        valorReferencia: 3200.00,
        valorMaximo: 3680.00,
        valorMinimo: 2720.00,
        margemAceitacao: 15,
        dataAtualizacao: "2024-01-01",
        tipo: "Cirurgia"
    }
];
const INDICADORES_RECIPROCIDADE = [
    {
        convenioId: "AUMED",
        convenioNome: "AUMED",
        totalLotes: 12,
        totalGuias: 487,
        valorTotal: 145890.50,
        valorGlosado: 23450.80,
        valorAprovado: 122439.70,
        percentualGlosa: 16.08,
        guiasAcimaBrasindice: 89,
        procedimentosMaisUtilizados: [
            {
                nome: "Consulta Cardiológica",
                quantidade: 45,
                valor: 12600.00
            },
            {
                nome: "Ressonância Magnética",
                quantidade: 32,
                valor: 28480.00
            },
            {
                nome: "Cirurgia de Hérnia",
                quantidade: 18,
                valor: 51300.00
            }
        ],
        cidadesMaisAtendidas: [
            {
                nome: "Belém",
                quantidade: 320
            },
            {
                nome: "Ananindeua",
                quantidade: 98
            },
            {
                nome: "Marituba",
                quantidade: 45
            }
        ],
        evolucaoMensal: [
            {
                mes: "Jan/2024",
                valor: 45200.00,
                glosas: 7200.00
            },
            {
                mes: "Fev/2024",
                valor: 48900.00,
                glosas: 8100.00
            },
            {
                mes: "Mar/2024",
                valor: 51890.50,
                glosas: 8150.80
            }
        ]
    },
    {
        convenioId: "CACI",
        convenioNome: "CACI",
        totalLotes: 8,
        totalGuias: 256,
        valorTotal: 98750.30,
        valorGlosado: 15420.50,
        valorAprovado: 83329.80,
        percentualGlosa: 15.62,
        guiasAcimaBrasindice: 42,
        procedimentosMaisUtilizados: [
            {
                nome: "Internação Clínica",
                quantidade: 28,
                valor: 79800.00
            },
            {
                nome: "Artroscopia",
                quantidade: 15,
                valor: 57000.00
            },
            {
                nome: "Consulta Ortopédica",
                quantidade: 38,
                valor: 9880.00
            }
        ],
        cidadesMaisAtendidas: [
            {
                nome: "Belém",
                quantidade: 180
            },
            {
                nome: "Santarém",
                quantidade: 42
            },
            {
                nome: "Marabá",
                quantidade: 34
            }
        ],
        evolucaoMensal: [
            {
                mes: "Jan/2024",
                valor: 31200.00,
                glosas: 4800.00
            },
            {
                mes: "Fev/2024",
                valor: 29800.00,
                glosas: 5200.00
            },
            {
                mes: "Mar/2024",
                valor: 37750.30,
                glosas: 5420.50
            }
        ]
    }
];
const buscarLotes = (filtros)=>{
    return LOTES_RECIPROCIDADE.filter((lote)=>{
        if (filtros.convenio && filtros.convenio !== "todos" && lote.convenioId !== filtros.convenio) return false;
        if (filtros.status && filtros.status !== "todos" && lote.status !== filtros.status) return false;
        if (filtros.numeroLote && !lote.numeroLote.toLowerCase().includes(filtros.numeroLote.toLowerCase())) return false;
        if (filtros.dataInicio && lote.dataRecebimento < filtros.dataInicio) return false;
        if (filtros.dataFim && lote.dataRecebimento > filtros.dataFim) return false;
        return true;
    });
};
const buscarGuias = (filtros)=>{
    return GUIAS_RECIPROCIDADE.filter((guia)=>{
        if (filtros.loteId && filtros.loteId !== "todos" && guia.loteId !== filtros.loteId) return false;
        if (filtros.status && filtros.status !== "todos" && guia.status !== filtros.status) return false;
        if (filtros.matricula && !guia.matricula.toLowerCase().includes(filtros.matricula.toLowerCase())) return false;
        if (filtros.cpf && !guia.cpf.includes(filtros.cpf)) return false;
        if (filtros.nome && !guia.nomeBeneficiario.toLowerCase().includes(filtros.nome.toLowerCase())) return false;
        if (filtros.dataExecucao && guia.dataExecucao !== filtros.dataExecucao) return false;
        return true;
    });
};
const calcularDiferencaBrasindice = (valorApresentado, valorBrasindice)=>{
    const diferenca = valorApresentado - valorBrasindice;
    const percentual = diferenca / valorBrasindice * 100;
    return {
        diferencaValor: diferenca,
        diferencaPercentual: percentual,
        status: percentual > 15 ? "Acima" : percentual < -15 ? "Abaixo" : "Dentro"
    };
};
}),
"[project]/lib/dados-trt-opme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// DADOS OPME - ÓRTESES, PRÓTESES E MATERIAIS ESPECIAIS
// TRT 8ª Região - Pareceres Automatizados
// ============================================================
__turbopack_context__.s([
    "DUTS",
    ()=>DUTS,
    "MODELOS_PARECER",
    ()=>MODELOS_PARECER,
    "PROCEDIMENTOS_OPME",
    ()=>PROCEDIMENTOS_OPME,
    "gerarParecerAutomatico",
    ()=>gerarParecerAutomatico,
    "preencherDUT",
    ()=>preencherDUT
]);
const PROCEDIMENTOS_OPME = [
    {
        id: "OPME-001",
        codigo: "OPME001",
        descricao: "Prótese Total de Quadril",
        categoria: "Protese",
        valorReferencia: 15000.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-001",
        prazoCarencia: 180,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo médico com CID",
            "Exames de imagem (RM/Tomografia)",
            "Relatório ortopédico",
            "Orçamento de 3 fornecedores"
        ]
    },
    {
        id: "OPME-002",
        codigo: "OPME002",
        descricao: "Prótese Total de Joelho",
        categoria: "Protese",
        valorReferencia: 18000.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-002",
        prazoCarencia: 180,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo médico com CID",
            "Radiografias",
            "Relatório ortopédico",
            "Orçamento de 3 fornecedores"
        ]
    },
    {
        id: "OPME-003",
        codigo: "OPME003",
        descricao: "Marcapasso Cardíaco",
        categoria: "Implante",
        valorReferencia: 25000.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-003",
        prazoCarencia: 180,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo cardiológico",
            "Eletrocardiograma",
            "Holter",
            "Orçamento de 3 fornecedores"
        ]
    },
    {
        id: "OPME-004",
        codigo: "OPME004",
        descricao: "Prótese de Mama (Reconstrutiva)",
        categoria: "Protese",
        valorReferencia: 12000.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-004",
        prazoCarencia: 0,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo oncológico",
            "Histopatológico",
            "Relatório cirúrgico",
            "Orçamento de 3 fornecedores"
        ]
    },
    {
        id: "OPME-005",
        codigo: "OPME005",
        descricao: "Órtese para Coluna Vertebral",
        categoria: "Ortese",
        valorReferencia: 3500.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-005",
        prazoCarencia: 90,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo ortopédico",
            "Radiografias",
            "Orçamento"
        ]
    },
    {
        id: "OPME-006",
        codigo: "OPME006",
        descricao: "Lente Intraocular",
        categoria: "Implante",
        valorReferencia: 4500.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-006",
        prazoCarencia: 60,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo oftalmológico",
            "Biometria",
            "Orçamento"
        ]
    },
    {
        id: "OPME-007",
        codigo: "OPME007",
        descricao: "Stent Coronário",
        categoria: "Implante",
        valorReferencia: 8000.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-007",
        prazoCarencia: 180,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo cardiológico",
            "Cateterismo",
            "Orçamento"
        ]
    },
    {
        id: "OPME-008",
        codigo: "OPME008",
        descricao: "Prótese de Válvula Cardíaca",
        categoria: "Protese",
        valorReferencia: 35000.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-008",
        prazoCarencia: 180,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo cardiológico",
            "Ecocardiograma",
            "Cateterismo",
            "Orçamento de 3 fornecedores"
        ]
    },
    {
        id: "OPME-009",
        codigo: "OPME009",
        descricao: "Desfibrilador Implantável (CDI)",
        categoria: "Implante",
        valorReferencia: 45000.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-009",
        prazoCarencia: 180,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo cardiológico",
            "Eletrofisiológico",
            "Orçamento de 3 fornecedores"
        ]
    },
    {
        id: "OPME-010",
        codigo: "OPME010",
        descricao: "Ossos Artificiais (Alógeno)",
        categoria: "Material Especial",
        valorReferencia: 8500.00,
        tipoDocumento: "DUT",
        dutPadrao: "DUT-010",
        prazoCarencia: 0,
        requerAutorizacao: true,
        documentosNecessarios: [
            "DUT preenchido",
            "Laudo ortopédico",
            "Relatório cirúrgico",
            "Orçamento"
        ]
    }
];
const DUTS = [
    {
        id: "DUT-001",
        codigoProcedimento: "OPME001",
        descricaoProcedimento: "Prótese Total de Quadril",
        titulo: "DUT - Prótese Total de Quadril",
        conteudo: `DOCUMENTO ÚNICO DE TRABALHO - PRÓTESE TOTAL DE QUADRIL

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos
   Peso: {{peso}} kg

2. DIAGNÓSTICO CLÍNICO
   CID Principal: {{cid_principal}}
   Diagnóstico: {{diagnostico}}

3. JUSTIFICATIVA CLÍNICA
   {{justificativa_clinica}}

4. DESCRITIVO DA PRÓTESE
   Tipo: {{tipo_protese}}
   Fixação: {{tipo_fixacao}}
   Material: {{material}}

5. AVALIAÇÃO DO MÉDICO ASSISTENTE
   Nome: {{nome_medico}}
   CRM: {{crm}}
   Especialidade: {{especialidade}}
   Assinatura: _______________________
   Data: {{data_assinatura}}

6. DECLARAÇÃO DO PACIENTE
   Declaro estar ciente da indicação cirúrgica e da necessidade da prótese.
   
   Assinatura do Paciente: _______________________
   Data: {{data_paciente}}`,
        camposVariaveis: [
            {
                nome: "nome_paciente",
                descricao: "Nome completo do paciente",
                obrigatorio: true
            },
            {
                nome: "matricula",
                descricao: "Número da matrícula",
                obrigatorio: true
            },
            {
                nome: "idade",
                descricao: "Idade em anos",
                obrigatorio: true
            },
            {
                nome: "peso",
                descricao: "Peso em kg",
                obrigatorio: true
            },
            {
                nome: "cid_principal",
                descricao: "CID do diagnóstico principal",
                obrigatorio: true
            },
            {
                nome: "diagnostico",
                descricao: "Descrição do diagnóstico",
                obrigatorio: true
            },
            {
                nome: "justificativa_clinica",
                descricao: "Justificativa clínica detalhada",
                obrigatorio: true
            },
            {
                nome: "tipo_protese",
                descricao: "Tipo de prótese (cementada/não-cementada)",
                obrigatorio: true
            },
            {
                nome: "tipo_fixacao",
                descricao: "Tipo de fixação",
                obrigatorio: true
            },
            {
                nome: "material",
                descricao: "Material da prótese",
                obrigatorio: true
            },
            {
                nome: "nome_medico",
                descricao: "Nome do médico assistente",
                obrigatorio: true
            },
            {
                nome: "crm",
                descricao: "CRM do médico",
                obrigatorio: true
            },
            {
                nome: "especialidade",
                descricao: "Especialidade médica",
                obrigatorio: true
            },
            {
                nome: "data_assinatura",
                descricao: "Data da assinatura do médico",
                obrigatorio: true
            },
            {
                nome: "data_paciente",
                descricao: "Data da assinatura do paciente",
                obrigatorio: true
            }
        ]
    },
    {
        id: "DUT-002",
        codigoProcedimento: "OPME002",
        descricaoProcedimento: "Prótese Total de Joelho",
        titulo: "DUT - Prótese Total de Joelho",
        conteudo: `DOCUMENTO ÚNICO DE TRABALHO - PRÓTESE TOTAL DE JOELHO

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO CLÍNICO
   CID Principal: {{cid_principal}}
   Diagnóstico: {{diagnostico}}
   Grau de Comprometimento: {{grau_comprometimento}}

3. JUSTIFICATIVA CLÍNICA
   {{justificativa_clinica}}

4. AVALIAÇÃO RADIOGRÁFICA
   Descrição: {{avaliacao_radiografica}}

5. DESCRITIVO DA PRÓTESE
   Tipo: {{tipo_protese}}
   Componentes: {{componentes}}

6. AVALIAÇÃO DO MÉDICO
   Nome: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
        camposVariaveis: [
            {
                nome: "nome_paciente",
                descricao: "Nome completo do paciente",
                obrigatorio: true
            },
            {
                nome: "matricula",
                descricao: "Número da matrícula",
                obrigatorio: true
            },
            {
                nome: "idade",
                descricao: "Idade em anos",
                obrigatorio: true
            },
            {
                nome: "cid_principal",
                descricao: "CID principal",
                obrigatorio: true
            },
            {
                nome: "diagnostico",
                descricao: "Diagnóstico",
                obrigatorio: true
            },
            {
                nome: "grau_comprometimento",
                descricao: "Grau de comprometimento articular",
                obrigatorio: true
            },
            {
                nome: "justificativa_clinica",
                descricao: "Justificativa clínica",
                obrigatorio: true
            },
            {
                nome: "avaliacao_radiografica",
                descricao: "Avaliação radiográfica",
                obrigatorio: true
            },
            {
                nome: "tipo_protese",
                descricao: "Tipo de prótese",
                obrigatorio: true
            },
            {
                nome: "componentes",
                descricao: "Componentes da prótese",
                obrigatorio: true
            },
            {
                nome: "nome_medico",
                descricao: "Nome do médico",
                obrigatorio: true
            },
            {
                nome: "crm",
                descricao: "CRM",
                obrigatorio: true
            },
            {
                nome: "data_assinatura",
                descricao: "Data",
                obrigatorio: true
            }
        ]
    },
    {
        id: "DUT-003",
        codigoProcedimento: "OPME003",
        descricaoProcedimento: "Marcapasso Cardíaco",
        titulo: "DUT - Marcapasso Cardíaco",
        conteudo: `DOCUMENTO ÚNICO DE TRABALHO - MARCAPASSO CARDÍACO

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO CARDIOLÓGICO
   CID: {{cid_principal}}
   Arritmia: {{tipo_arritmia}}
   FC de Repouso: {{fc_repouso}} bpm
   FC Máxima: {{fc_maxima}} bpm

3. INDICAÇÃO CLÍNICA
   {{indicacao_clinica}}

4. TIPO DE DISPOSITIVO
   Modelo: {{modelo_marcapasso}}
   Características: {{caracteristicas}}

5. AVALIAÇÃO CARDIOLOGISTA
   Nome: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
        camposVariaveis: [
            {
                nome: "nome_paciente",
                descricao: "Nome do paciente",
                obrigatorio: true
            },
            {
                nome: "matricula",
                descricao: "Matrícula",
                obrigatorio: true
            },
            {
                nome: "idade",
                descricao: "Idade",
                obrigatorio: true
            },
            {
                nome: "cid_principal",
                descricao: "CID",
                obrigatorio: true
            },
            {
                nome: "tipo_arritmia",
                descricao: "Tipo de arritmia",
                obrigatorio: true
            },
            {
                nome: "fc_repouso",
                descricao: "Frequência cardíaca de repouso",
                obrigatorio: true
            },
            {
                nome: "fc_maxima",
                descricao: "Frequência cardíaca máxima",
                obrigatorio: true
            },
            {
                nome: "indicacao_clinica",
                descricao: "Indicação clínica",
                obrigatorio: true
            },
            {
                nome: "modelo_marcapasso",
                descricao: "Modelo do marcapasso",
                obrigatorio: true
            },
            {
                nome: "caracteristicas",
                descricao: "Características do dispositivo",
                obrigatorio: true
            },
            {
                nome: "nome_medico",
                descricao: "Nome do cardiologista",
                obrigatorio: true
            },
            {
                nome: "crm",
                descricao: "CRM",
                obrigatorio: true
            },
            {
                nome: "data_assinatura",
                descricao: "Data",
                obrigatorio: true
            }
        ]
    },
    {
        id: "DUT-004",
        codigoProcedimento: "OPME004",
        descricaoProcedimento: "Prótese de Mama (Reconstrutiva)",
        titulo: "DUT - Prótese de Mama Reconstrutiva",
        conteudo: `DOCUMENTO ÚNICO DE TRABALHO - PRÓTESE DE MAMA RECONSTRUTIVA

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO ONCOLÓGICO
   CID: {{cid_principal}}
   Estadiamento: {{estadiamento}}
   Data Diagnóstico: {{data_diagnostico}}

3. TRATAMENTO REALIZADO
   Cirurgia: {{tipo_cirurgia}}
   Data: {{data_cirurgia}}
   Quimioterapia: {{quimioterapia}}
   Radioterapia: {{radioterapia}}

4. INDICAÇÃO DE RECONSTRUÇÃO
   {{justificativa_reconstrucao}}

5. AVALIAÇÃO MÉDICA
   Nome: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
        camposVariaveis: [
            {
                nome: "nome_paciente",
                descricao: "Nome",
                obrigatorio: true
            },
            {
                nome: "matricula",
                descricao: "Matrícula",
                obrigatorio: true
            },
            {
                nome: "idade",
                descricao: "Idade",
                obrigatorio: true
            },
            {
                nome: "cid_principal",
                descricao: "CID",
                obrigatorio: true
            },
            {
                nome: "estadiamento",
                descricao: "Estadiamento",
                obrigatorio: true
            },
            {
                nome: "data_diagnostico",
                descricao: "Data do diagnóstico",
                obrigatorio: true
            },
            {
                nome: "tipo_cirurgia",
                descricao: "Tipo de cirurgia",
                obrigatorio: true
            },
            {
                nome: "data_cirurgia",
                descricao: "Data da cirurgia",
                obrigatorio: true
            },
            {
                nome: "quimioterapia",
                descricao: "Quimioterapia (Sim/Não)",
                obrigatorio: true
            },
            {
                nome: "radioterapia",
                descricao: "Radioterapia (Sim/Não)",
                obrigatorio: true
            },
            {
                nome: "justificativa_reconstrucao",
                descricao: "Justificativa da reconstrução",
                obrigatorio: true
            },
            {
                nome: "nome_medico",
                descricao: "Nome do médico",
                obrigatorio: true
            },
            {
                nome: "crm",
                descricao: "CRM",
                obrigatorio: true
            },
            {
                nome: "data_assinatura",
                descricao: "Data",
                obrigatorio: true
            }
        ]
    },
    {
        id: "DUT-005",
        codigoProcedimento: "OPME005",
        descricaoProcedimento: "Órtese para Coluna Vertebral",
        titulo: "DUT - Órtese para Coluna",
        conteudo: `DOCUMENTO ÚNICO DE TRABALHO - ÓRTESE PARA COLUNA VERTEBRAL

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO
   CID: {{cid_principal}}
   Patologia: {{patologia}}
   Nível Vertebral: {{nivel_vertebral}}

3. INDICAÇÃO DA ÓRTESE
   {{indicacao_ortese}}

4. TIPO DE ÓRTESE
   Modelo: {{modelo_ortese}}
   Finalidade: {{finalidade}}

5. PRESCRIÇÃO MÉDICA
   Médico: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
        camposVariaveis: [
            {
                nome: "nome_paciente",
                descricao: "Nome",
                obrigatorio: true
            },
            {
                nome: "matricula",
                descricao: "Matrícula",
                obrigatorio: true
            },
            {
                nome: "idade",
                descricao: "Idade",
                obrigatorio: true
            },
            {
                nome: "cid_principal",
                descricao: "CID",
                obrigatorio: true
            },
            {
                nome: "patologia",
                descricao: "Patologia",
                obrigatorio: true
            },
            {
                nome: "nivel_vertebral",
                descricao: "Nível vertebral",
                obrigatorio: true
            },
            {
                nome: "indicacao_ortese",
                descricao: "Indicação",
                obrigatorio: true
            },
            {
                nome: "modelo_ortese",
                descricao: "Modelo",
                obrigatorio: true
            },
            {
                nome: "finalidade",
                descricao: "Finalidade",
                obrigatorio: true
            },
            {
                nome: "nome_medico",
                descricao: "Médico",
                obrigatorio: true
            },
            {
                nome: "crm",
                descricao: "CRM",
                obrigatorio: true
            },
            {
                nome: "data_assinatura",
                descricao: "Data",
                obrigatorio: true
            }
        ]
    },
    {
        id: "DUT-006",
        codigoProcedimento: "OPME006",
        descricaoProcedimento: "Lente Intraocular",
        titulo: "DUT - Lente Intraocular",
        conteudo: `DOCUMENTO ÚNICO DE TRABALHO - LENTE INTRAOCULAR

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO OFTALMOLÓGICO
   CID: {{cid_principal}}
   Oftalmo: {{olho_afetado}}
   Acuidade Visual: {{acuidade_visual}}

3. BIOMETRIA
   Poder Dioptria: {{poder_dioptria}}
   Comprimento Axial: {{comprimento_axial}} mm

4. TIPO DE LENTE
   Modelo: {{modelo_lente}}
   Características: {{caracteristicas}}

5. PRESCRIÇÃO
   Oftalmologista: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
        camposVariaveis: [
            {
                nome: "nome_paciente",
                descricao: "Nome",
                obrigatorio: true
            },
            {
                nome: "matricula",
                descricao: "Matrícula",
                obrigatorio: true
            },
            {
                nome: "idade",
                descricao: "Idade",
                obrigatorio: true
            },
            {
                nome: "cid_principal",
                descricao: "CID",
                obrigatorio: true
            },
            {
                nome: "olho_afetado",
                descricao: "Olho afetado",
                obrigatorio: true
            },
            {
                nome: "acuidade_visual",
                descricao: "Acuidade visual",
                obrigatorio: true
            },
            {
                nome: "poder_dioptria",
                descricao: "Poder em dioptrias",
                obrigatorio: true
            },
            {
                nome: "comprimento_axial",
                descricao: "Comprimento axial",
                obrigatorio: true
            },
            {
                nome: "modelo_lente",
                descricao: "Modelo da lente",
                obrigatorio: true
            },
            {
                nome: "caracteristicas",
                descricao: "Características",
                obrigatorio: true
            },
            {
                nome: "nome_medico",
                descricao: "Oftalmologista",
                obrigatorio: true
            },
            {
                nome: "crm",
                descricao: "CRM",
                obrigatorio: true
            },
            {
                nome: "data_assinatura",
                descricao: "Data",
                obrigatorio: true
            }
        ]
    },
    {
        id: "DUT-007",
        codigoProcedimento: "OPME007",
        descricaoProcedimento: "Stent Coronário",
        titulo: "DUT - Stent Coronário",
        conteudo: `DOCUMENTO ÚNICO DE TRABALHO - STENT CORONÁRIO

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO
   CID: {{cid_principal}}
   Lesão: {{descricao_lesao}}
   Percentual Estenose: {{percentual_estenose}}%

3. PROCEDIMENTO
   Cateterismo realizado em: {{data_cateterismo}}
   Resultado: {{resultado_cateterismo}}

4. STENT INDICADO
   Tipo: {{tipo_stent}}
   Diâmetro: {{diametro}} mm
   Comprimento: {{comprimento}} mm

5. AVALIAÇÃO
   Cardiologista: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
        camposVariaveis: [
            {
                nome: "nome_paciente",
                descricao: "Nome",
                obrigatorio: true
            },
            {
                nome: "matricula",
                descricao: "Matrícula",
                obrigatorio: true
            },
            {
                nome: "idade",
                descricao: "Idade",
                obrigatorio: true
            },
            {
                nome: "cid_principal",
                descricao: "CID",
                obrigatorio: true
            },
            {
                nome: "descricao_lesao",
                descricao: "Descrição da lesão",
                obrigatorio: true
            },
            {
                nome: "percentual_estenose",
                descricao: "Percentual de estenose",
                obrigatorio: true
            },
            {
                nome: "data_cateterismo",
                descricao: "Data do cateterismo",
                obrigatorio: true
            },
            {
                nome: "resultado_cateterismo",
                descricao: "Resultado",
                obrigatorio: true
            },
            {
                nome: "tipo_stent",
                descricao: "Tipo de stent",
                obrigatorio: true
            },
            {
                nome: "diametro",
                descricao: "Diâmetro",
                obrigatorio: true
            },
            {
                nome: "comprimento",
                descricao: "Comprimento",
                obrigatorio: true
            },
            {
                nome: "nome_medico",
                descricao: "Cardiologista",
                obrigatorio: true
            },
            {
                nome: "crm",
                descricao: "CRM",
                obrigatorio: true
            },
            {
                nome: "data_assinatura",
                descricao: "Data",
                obrigatorio: true
            }
        ]
    },
    {
        id: "DUT-008",
        codigoProcedimento: "OPME008",
        descricaoProcedimento: "Prótese de Válvula Cardíaca",
        titulo: "DUT - Prótese de Válvula Cardíaca",
        conteudo: `DOCUMENTO ÚNICO DE TRABALHO - PRÓTESE DE VÁLVULA CARDÍACA

1. IDENTIFICAÇÃO DO PACIENTE
   Nome: {{nome_paciente}}
   Matrícula: {{matricula}}
   Idade: {{idade}} anos

2. DIAGNÓSTICO
   CID: {{cid_principal}}
   Válvula Afetada: {{valvula_afetada}}
   Grau de Insuficiência: {{grau_insuficiencia}}

3. EXAMES
   Ecocardiograma: {{data_eco}}
   Área Valvar: {{area_valvar}} cm²
   Fração de Ejeção: {{fe}}%

4. PRÓTESE INDICADA
   Tipo: {{tipo_protese}}
   Modelo: {{modelo}}
   Tamanho: {{tamanho}}

5. AVALIAÇÃO
   Cirurgião: {{nome_medico}}
   CRM: {{crm}}
   Assinatura: _______________________
   Data: {{data_assinatura}}`,
        camposVariaveis: [
            {
                nome: "nome_paciente",
                descricao: "Nome",
                obrigatorio: true
            },
            {
                nome: "matricula",
                descricao: "Matrícula",
                obrigatorio: true
            },
            {
                nome: "idade",
                descricao: "Idade",
                obrigatorio: true
            },
            {
                nome: "cid_principal",
                descricao: "CID",
                obrigatorio: true
            },
            {
                nome: "valvula_afetada",
                descricao: "Válvula afetada",
                obrigatorio: true
            },
            {
                nome: "grau_insuficiencia",
                descricao: "Grau de insuficiência",
                obrigatorio: true
            },
            {
                nome: "data_eco",
                descricao: "Data do ecocardiograma",
                obrigatorio: true
            },
            {
                nome: "area_valvar",
                descricao: "Área valvar",
                obrigatorio: true
            },
            {
                nome: "fe",
                descricao: "Fração de ejeção",
                obrigatorio: true
            },
            {
                nome: "tipo_protese",
                descricao: "Tipo de prótese",
                obrigatorio: true
            },
            {
                nome: "modelo",
                descricao: "Modelo",
                obrigatorio: true
            },
            {
                nome: "tamanho",
                descricao: "Tamanho",
                obrigatorio: true
            },
            {
                nome: "nome_medico",
                descricao: "Cirurgião",
                obrigatorio: true
            },
            {
                nome: "crm",
                descricao: "CRM",
                obrigatorio: true
            },
            {
                nome: "data_assinatura",
                descricao: "Data",
                obrigatorio: true
            }
        ]
    }
];
const MODELOS_PARECER = [
    {
        id: "PARECER-001",
        codigo: "PARECER-AUT-001",
        tipo: "Autorizado",
        procedimentoId: "OPME-001",
        procedimentoDescricao: "Prótese Total de Quadril",
        motivo: "Paciente com diagnóstico de artrose avançada de quadril, com limitação funcional severa e dor refrataria ao tratamento clínico. Indicação cirúrgica adequada conforme literatura médica.",
        condicionantes: [
            "Utilização de prótese de primeira linha",
            "Cirurgia deve ser realizada em até 90 dias",
            "Acompanhamento fisioterápico obrigatório"
        ],
        dataValidade: "90 dias",
        observacoes: "Autorização concedida conforme protocolo OPME TRT."
    },
    {
        id: "PARECER-002",
        codigo: "PARECER-NEG-001",
        tipo: "Negado",
        procedimentoId: "OPME-001",
        procedimentoDescricao: "Prótese Total de Quadril",
        motivo: "Documentação incompleta. Ausência de exames de imagem recentes e laudo detalhado. Não comprovada a incapacidade funcional severa.",
        observacoes: "Solicitante deve apresentar RM de quadril com menos de 30 dias e relatório ortopédico detalhado."
    },
    {
        id: "PARECER-003",
        codigo: "PARECER-PAR-001",
        tipo: "Autorizado Parcialmente",
        procedimentoId: "OPME-003",
        procedimentoDescricao: "Marcapasso Cardíaco",
        motivo: "Indicação clínica confirmada. Entretanto, o modelo solicitado possui recursos não essenciais.",
        condicionantes: [
            "Autorizado marcapasso modelo básico com função VVI ou DDD",
            "Modelo com recursos avançados (resposta frequencial, etc) não autorizado",
            "Troca para modelo autorizado deve ser confirmada pelo hospital"
        ],
        dataValidade: "60 dias",
        observacoes: "Diferença de valor entre modelos será de responsabilidade do paciente caso opte pelo modelo não autorizado."
    }
];
const gerarParecerAutomatico = (procedimentoId, dados, documentacaoCompleta)=>{
    const procedimento = PROCEDIMENTOS_OPME.find((p)=>p.id === procedimentoId);
    if (!procedimento) throw new Error("Procedimento não encontrado");
    if (!documentacaoCompleta) {
        return {
            id: `PARECER-PEND-${Date.now()}`,
            codigo: `PARECER-PEND-${Date.now()}`,
            tipo: "Com Pendência",
            procedimentoId: procedimento.id,
            procedimentoDescricao: procedimento.descricao,
            motivo: "Documentação incompleta para análise.",
            observacoes: `Documentos pendentes: ${procedimento.documentosNecessarios.join(", ")}`
        };
    }
    // Lógica simplificada para geração de parecer
    const modelo = MODELOS_PARECER.find((m)=>m.procedimentoId === procedimentoId && m.tipo === "Autorizado");
    if (modelo) {
        return {
            ...modelo,
            id: `PARECER-AUT-${Date.now()}`,
            codigo: `PARECER-AUT-${Date.now()}`
        };
    }
    return {
        id: `PARECER-ANALISE-${Date.now()}`,
        codigo: `PARECER-ANALISE-${Date.now()}`,
        tipo: "Com Pendência",
        procedimentoId: procedimento.id,
        procedimentoDescricao: procedimento.descricao,
        motivo: "Análise em andamento.",
        observacoes: "Caso será analisado pela comissão de OPME."
    };
};
const preencherDUT = (dutId, dados)=>{
    const dut = DUTS.find((d)=>d.id === dutId);
    if (!dut) throw new Error("DUT não encontrado");
    let conteudo = dut.conteudo;
    Object.entries(dados).forEach(([chave, valor])=>{
        conteudo = conteudo.replace(new RegExp(`{{${chave}}}`, "g"), valor);
    });
    return conteudo;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$syringe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Syringe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/syringe.js [app-ssr] (ecmascript) <export default as Syringe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-ssr] (ecmascript) <export default as ThumbsDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-minus.js [app-ssr] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-ssr] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-ssr] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-trt-8a-regiao.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$reciprocidade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-trt-reciprocidade.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$opme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dados-trt-opme.ts [app-ssr] (ecmascript)");
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
;
;
;
;
// Processos para análise
const PROCESSOS_ANALISE = [
    {
        id: "PROC-ANL-001",
        matricula: "TRT0001",
        servidor_nome: "Maria Santos Oliveira",
        credenciado_id: "CRED-001",
        credenciado_nome: "Hospital Metropolitano",
        tipo: "Consulta",
        descricao: "Consulta Cardiológica",
        data_execucao: "2024-01-15",
        data_envio: "2024-01-20",
        status: "Aguardando Análise",
        valor: 250.00,
        documentos: {
            xml: "consulta_cardio_001.xml",
            pdf: "consulta_cardio_001.pdf",
            guia: "guia_autorizacao_001.pdf"
        },
        historico: [
            {
                data: "2024-01-10",
                acao: "Solicitação criada",
                responsavel: "Sistema"
            },
            {
                data: "2024-01-15",
                acao: "Procedimento executado",
                responsavel: "Hospital Metropolitano"
            },
            {
                data: "2024-01-20",
                acao: "Documentos enviados",
                responsavel: "TRT - Servidor"
            }
        ]
    }
];
function AreaAuditoriaTRT() {
    const [faturas, setFaturas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FATURAS_TRT"].map((f)=>({
            ...f
        })));
    const [faturaSelecionada, setFaturaSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [itensAuditoria, setItensAuditoria] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITENS_FATURA_TRT"].map((i)=>({
            ...i,
            status_auditoria: i.status_auditoria
        })));
    const [checklist, setChecklist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHECKLIST_AUDITORIA"].map((item)=>({
            ...item
        })));
    const [observacoes, setObservacoes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [processoSelecionado, setProcessoSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalProcessoAberto, setModalProcessoAberto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [documentoVisualizando, setDocumentoVisualizando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [itemEmGlosa, setItemEmGlosa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [motivoGlosaItem, setMotivoGlosaItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Estados para Reciprocidade
    const [filtrosReciprocidade, setFiltrosReciprocidade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        convenio: "todos",
        status: "todos",
        dataInicio: "",
        dataFim: "",
        numeroLote: ""
    });
    const [filtrosGuias, setFiltrosGuias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        matricula: "",
        cpf: "",
        nome: "",
        dataExecucao: "",
        status: "todos"
    });
    const [loteSelecionado, setLoteSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [guiaSelecionada, setGuiaSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Estados para OPME
    const [procedimentoSelecionado, setProcedimentoSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dutPreenchido, setDutPreenchido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [parecerGerado, setParecerGerado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [abaAuditorAtiva, setAbaAuditorAtiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("faturas");
    const toggleChecklistItem = (id)=>{
        setChecklist((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    verificado: !item.verificado
                } : item));
    };
    const aprovarItem = (itemId)=>{
        setItensAuditoria((prev)=>prev.map((item)=>item.id === itemId ? {
                    ...item,
                    status_auditoria: "Aprovado",
                    motivo_glosa: null
                } : item));
    };
    const glosarItem = (itemId, motivo)=>{
        setItensAuditoria((prev)=>prev.map((item)=>item.id === itemId ? {
                    ...item,
                    status_auditoria: "Glosado",
                    motivo_glosa: motivo
                } : item));
        setItemEmGlosa(null);
        setMotivoGlosaItem("");
    };
    const aprovarTodosItens = (faturaId)=>{
        setItensAuditoria((prev)=>prev.map((item)=>item.fatura_id === faturaId ? {
                    ...item,
                    status_auditoria: "Aprovado",
                    motivo_glosa: null
                } : item));
    };
    const getResumoFatura = (faturaId)=>{
        const itens = itensAuditoria.filter((i)=>i.fatura_id === faturaId);
        const aprovados = itens.filter((i)=>i.status_auditoria === "Aprovado");
        const glosados = itens.filter((i)=>i.status_auditoria === "Glosado");
        const pendentes = itens.filter((i)=>i.status_auditoria === "Pendente");
        const valorAprovado = aprovados.reduce((acc, item)=>acc + item.valor_total, 0);
        const valorGlosado = glosados.reduce((acc, item)=>acc + item.valor_total, 0);
        return {
            total: itens.length,
            aprovados: aprovados.length,
            glosados: glosados.length,
            pendentes: pendentes.length,
            valorAprovado,
            valorGlosado
        };
    };
    const abrirModalProcesso = (processo)=>{
        setProcessoSelecionado(processo);
        setModalProcessoAberto(true);
    };
    const getStatusBadge = (status)=>{
        switch(status){
            case "Pendente":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "secondary",
                    children: "Pendente"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 221,
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
                    lineNumber: 223,
                    columnNumber: 16
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
                    lineNumber: 225,
                    columnNumber: 16
                }, this);
            case "Aprovada":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                    },
                    children: "Aprovada"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 227,
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
                    lineNumber: 229,
                    columnNumber: 16
                }, this);
            case "Aguardando Análise":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta
                    },
                    children: "Aguardando"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 231,
                    columnNumber: 16
                }, this);
            case "Em Análise":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                    },
                    children: "Em Análise"
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 233,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    children: status
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 235,
                    columnNumber: 16
                }, this);
        }
    };
    const getIconeTipo = (tipo)=>{
        switch(tipo){
            case "Insumo":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$syringe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Syringe$3e$__["Syringe"], {
                    className: "h-4 w-4",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].terciaria
                    }
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 242,
                    columnNumber: 16
                }, this);
            case "Medicamento":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
                    className: "h-4 w-4",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].erro
                    }
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 244,
                    columnNumber: 16
                }, this);
            case "Material":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                    className: "h-4 w-4",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                    }
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 246,
                    columnNumber: 16
                }, this);
            case "Procedimento":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                    className: "h-4 w-4",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].info
                    }
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 248,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "h-4 w-4",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                    }
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 250,
                    columnNumber: 16
                }, this);
        }
    };
    // Funções para Reciprocidade
    const lotesFiltrados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$reciprocidade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarLotes"])(filtrosReciprocidade);
    const guiasFiltradas = guiaSelecionada ? [
        guiaSelecionada
    ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$reciprocidade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarGuias"])({
        ...filtrosGuias,
        loteId: loteSelecionado?.id || ""
    });
    // Função para gerar parecer OPME
    const handleGerarParecer = ()=>{
        if (!procedimentoSelecionado) return;
        const parecer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$opme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gerarParecerAutomatico"])(procedimentoSelecionado.id, dutPreenchido, Object.keys(dutPreenchido).length >= 3);
        setParecerGerado(parecer);
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
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 288,
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
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-xl font-bold",
                                                        children: "Auditoria TIS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm opacity-90",
                                                        children: "Análise de Conformidade - Lotes e Reciprocidade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "secondary",
                                className: "bg-white/20 text-white border-0",
                                children: "Acesso TIS/TRT"
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/auditor/page.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/trt/auditor/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/trt/auditor/page.tsx",
                lineNumber: 279,
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
                                                        lineNumber: 317,
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
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 316,
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
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 313,
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
                                                        lineNumber: 333,
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
                                                        lineNumber: 334,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 332,
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
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 329,
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
                                                        lineNumber: 349,
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
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 348,
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
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 345,
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
                                                        children: "Reciprocidade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                        },
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$reciprocidade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOTES_RECIPROCIDADE"].length,
                                                            " lotes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque}20`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "h-6 w-6",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].destaque
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/auditor/page.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: abaAuditorAtiva,
                        onValueChange: setAbaAuditorAtiva,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid w-full grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "faturas",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 15
                                            }, this),
                                            "Faturas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "lotes",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 15
                                            }, this),
                                            "Lotes (XML)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "reciprocidade",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 15
                                            }, this),
                                            "Reciprocidade"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "opme",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$syringe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Syringe$3e$__["Syringe"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 15
                                            }, this),
                                            "OPME / Pareceres"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "faturas",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                    lineNumber: 408,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Faturas Pendentes"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "p-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divide-y max-h-[600px] overflow-y-auto",
                                                            children: faturas.map((fatura)=>{
                                                                const resumo = getResumoFatura(fatura.id);
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
                                                                                    lineNumber: 426,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                getStatusBadge(fatura.status)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 425,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-1 mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    style: {
                                                                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso,
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                                    },
                                                                                    className: "text-xs",
                                                                                    children: [
                                                                                        resumo.aprovados,
                                                                                        " OK"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 431,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                resumo.glosados > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    style: {
                                                                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].erro,
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].erro
                                                                                    },
                                                                                    className: "text-xs",
                                                                                    children: [
                                                                                        resumo.glosados,
                                                                                        " Glosa"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 435,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                resumo.pendentes > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    style: {
                                                                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta,
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta
                                                                                    },
                                                                                    className: "text-xs",
                                                                                    children: [
                                                                                        resumo.pendentes,
                                                                                        " Pend"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 440,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 430,
                                                                            columnNumber: 29
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
                                                                                    lineNumber: 447,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-slate-500",
                                                                                    children: [
                                                                                        fatura.mes_referencia,
                                                                                        "/",
                                                                                        fatura.ano_referencia
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 450,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 446,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, fatura.id, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 15
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                            style: {
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                            },
                                                                            children: [
                                                                                "Vistoria Detalhada: ",
                                                                                faturaSelecionada.numero_fatura
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 469,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-slate-500 mt-1",
                                                                            children: "Análise item por item da fatura"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 472,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 25
                                                                }, this),
                                                                (()=>{
                                                                    const resumo = getResumoFatura(faturaSelecionada.id);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-slate-500",
                                                                                children: "Valor Aprovado"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 480,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xl font-bold",
                                                                                style: {
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                                },
                                                                                children: [
                                                                                    "R$ ",
                                                                                    resumo.valorAprovado.toLocaleString("pt-BR", {
                                                                                        minimumFractionDigits: 2
                                                                                    })
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 481,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            resumo.valorGlosado > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-red-600",
                                                                                children: [
                                                                                    "Glosado: R$ ",
                                                                                    resumo.valorGlosado.toLocaleString("pt-BR", {
                                                                                        minimumFractionDigits: 2
                                                                                    })
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 485,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "p-6 space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-slate-50 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold mb-3 flex items-center gap-2",
                                                                        style: {
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 498,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Checklist de Conformidade"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-2 gap-2",
                                                                        children: checklist.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                        id: `check-${item.id}`,
                                                                                        checked: item.verificado,
                                                                                        onCheckedChange: ()=>toggleChecklistItem(item.id)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 504,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        htmlFor: `check-${item.id}`,
                                                                                        className: "text-sm cursor-pointer",
                                                                                        children: item.item
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 509,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, item.id, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 503,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-semibold",
                                                                                style: {
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                                },
                                                                                children: "Itens da Fatura"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 520,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                size: "sm",
                                                                                variant: "outline",
                                                                                onClick: ()=>aprovarTodosItens(faturaSelecionada.id),
                                                                                style: {
                                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso,
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                        className: "h-4 w-4 mr-1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 529,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    "Aprovar Todos"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 523,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 519,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border rounded-lg overflow-hidden",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                            className: "w-full text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                                    className: "bg-slate-50",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                className: "text-left p-3",
                                                                                                children: "Item"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                lineNumber: 538,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                className: "text-center p-3",
                                                                                                children: "Tipo"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                lineNumber: 539,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                className: "text-center p-3",
                                                                                                children: "Qtd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                lineNumber: 540,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                className: "text-right p-3",
                                                                                                children: "Valor"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                lineNumber: 541,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                className: "text-center p-3",
                                                                                                children: "Origem"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                lineNumber: 542,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                className: "text-center p-3",
                                                                                                children: "Status"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                lineNumber: 543,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                className: "text-center p-3",
                                                                                                children: "Ação"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                lineNumber: 544,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 537,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 536,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                    className: "divide-y",
                                                                                    children: itensAuditoria.filter((item)=>item.fatura_id === faturaSelecionada.id).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                            className: "hover:bg-slate-50",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    className: "p-3",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex items-center gap-2",
                                                                                                        children: [
                                                                                                            getIconeTipo(item.tipo),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                        className: "font-medium",
                                                                                                                        children: item.descricao
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                        lineNumber: 556,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                        className: "text-xs text-slate-500 font-mono",
                                                                                                                        children: item.codigo
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                        lineNumber: 557,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                lineNumber: 555,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 553,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 552,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    className: "p-3 text-center",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                        variant: "outline",
                                                                                                        children: item.tipo
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 562,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 561,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    className: "p-3 text-center",
                                                                                                    children: item.quantidade
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 564,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    className: "p-3 text-right",
                                                                                                    children: [
                                                                                                        "R$ ",
                                                                                                        item.valor_total.toLocaleString("pt-BR", {
                                                                                                            minimumFractionDigits: 2
                                                                                                        })
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 565,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    className: "p-3 text-center",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: `text-xs ${item.origem === "Inserido Manualmente" ? "text-amber-600 font-medium" : "text-slate-500"}`,
                                                                                                        children: item.origem === "Inserido Manualmente" ? "Extra" : "XML"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 569,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 568,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    className: "p-3 text-center",
                                                                                                    children: item.status_auditoria === "Aprovado" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                        style: {
                                                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                                                        },
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                                                                                className: "h-3 w-3 mr-1"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                lineNumber: 576,
                                                                                                                columnNumber: 41
                                                                                                            }, this),
                                                                                                            "OK"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 575,
                                                                                                        columnNumber: 39
                                                                                                    }, this) : item.status_auditoria === "Glosado" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                        style: {
                                                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].erro
                                                                                                        },
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                                                                                                className: "h-3 w-3 mr-1"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                lineNumber: 581,
                                                                                                                columnNumber: 41
                                                                                                            }, this),
                                                                                                            "Glosado"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 580,
                                                                                                        columnNumber: 39
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                        variant: "outline",
                                                                                                        style: {
                                                                                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta,
                                                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].alerta
                                                                                                        },
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                                                                                                className: "h-3 w-3 mr-1"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                lineNumber: 586,
                                                                                                                columnNumber: 41
                                                                                                            }, this),
                                                                                                            "Pendente"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 585,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 573,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    className: "p-3 text-center",
                                                                                                    children: itemEmGlosa === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex flex-col gap-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                                                                size: 10,
                                                                                                                placeholder: "Motivo da glosa",
                                                                                                                value: motivoGlosaItem,
                                                                                                                onChange: (e)=>setMotivoGlosaItem(e.target.value),
                                                                                                                className: "text-xs"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                lineNumber: 594,
                                                                                                                columnNumber: 41
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "flex gap-1",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                                        size: "sm",
                                                                                                                        variant: "outline",
                                                                                                                        onClick: ()=>setItemEmGlosa(null),
                                                                                                                        children: "Cancelar"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                        lineNumber: 602,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                                        size: "sm",
                                                                                                                        style: {
                                                                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].erro
                                                                                                                        },
                                                                                                                        onClick: ()=>glosarItem(item.id, motivoGlosaItem),
                                                                                                                        disabled: !motivoGlosaItem,
                                                                                                                        children: "Confirmar"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                        lineNumber: 609,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                lineNumber: 601,
                                                                                                                columnNumber: 41
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 593,
                                                                                                        columnNumber: 39
                                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex gap-1 justify-center",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                                size: "sm",
                                                                                                                variant: "ghost",
                                                                                                                onClick: ()=>aprovarItem(item.id),
                                                                                                                style: {
                                                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                                                                },
                                                                                                                disabled: item.status_auditoria === "Aprovado",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                                                                                    className: "h-4 w-4"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                    lineNumber: 628,
                                                                                                                    columnNumber: 43
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                lineNumber: 621,
                                                                                                                columnNumber: 41
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                                                size: "sm",
                                                                                                                variant: "ghost",
                                                                                                                onClick: ()=>{
                                                                                                                    setItemEmGlosa(item.id);
                                                                                                                    setMotivoGlosaItem(item.motivo_glosa || "");
                                                                                                                },
                                                                                                                style: {
                                                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].erro
                                                                                                                },
                                                                                                                disabled: item.status_auditoria === "Glosado",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                                                                                                    className: "h-4 w-4"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                    lineNumber: 640,
                                                                                                                    columnNumber: 43
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                                lineNumber: 630,
                                                                                                                columnNumber: 41
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 620,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 591,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, item.id, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 551,
                                                                                            columnNumber: 33
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 547,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 534,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 23
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
                                                                        lineNumber: 654,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        className: "w-full p-3 border rounded-lg text-sm min-h-[100px]",
                                                                        placeholder: "Digite suas observações sobre a fatura...",
                                                                        value: observacoes,
                                                                        onChange: (e)=>setObservacoes(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 657,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 653,
                                                                columnNumber: 23
                                                            }, this),
                                                            (()=>{
                                                                const resumo = getResumoFatura(faturaSelecionada.id);
                                                                const temPendentes = resumo.pendentes > 0;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-3 pt-4 border-t",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            className: "flex-1",
                                                                            size: "lg",
                                                                            disabled: temPendentes,
                                                                            style: {
                                                                                backgroundColor: temPendentes ? "#ccc" : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                    className: "h-4 w-4 mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 680,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                "Aprovar Fatura"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            className: "flex-1",
                                                                            size: "lg",
                                                                            variant: "outline",
                                                                            onClick: ()=>setFaturaSelecionada(null),
                                                                            children: "Cancelar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 684,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            className: "flex-1",
                                                                            size: "lg",
                                                                            variant: "destructive",
                                                                            disabled: resumo.aprovados === 0,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                    className: "h-4 w-4 mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 699,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                "Aprovação Parcial"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 693,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 19
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
                                                            lineNumber: 710,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-slate-600",
                                                            children: "Selecione uma fatura"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 711,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Clique em uma fatura da lista à esquerda para iniciar a vistoria detalhada"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 708,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "lotes",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Auditoria por Lotes XML"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 726,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 725,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-5 gap-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-xs",
                                                                    children: "Convênio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 735,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                    value: filtrosReciprocidade.convenio,
                                                                    onValueChange: (v)=>setFiltrosReciprocidade({
                                                                            ...filtrosReciprocidade,
                                                                            convenio: v
                                                                        }),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Todos"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 738,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 737,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "todos",
                                                                                    children: "Todos"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 741,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$reciprocidade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONVENIOS_RECIPROCIDADE"].filter((c)=>c.ativo).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: c.id,
                                                                                        children: c.nome
                                                                                    }, c.id, false, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 743,
                                                                                        columnNumber: 27
                                                                                    }, this))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 740,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 736,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-xs",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                    value: filtrosReciprocidade.status,
                                                                    onValueChange: (v)=>setFiltrosReciprocidade({
                                                                            ...filtrosReciprocidade,
                                                                            status: v
                                                                        }),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Todos"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 752,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 751,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "todos",
                                                                                    children: "Todos"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 755,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "Pendente",
                                                                                    children: "Pendente"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 756,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "Em Auditoria",
                                                                                    children: "Em Auditoria"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 757,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "Auditado",
                                                                                    children: "Auditado"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 758,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "Glosado",
                                                                                    children: "Glosado"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 759,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 754,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-xs",
                                                                    children: "Data Início"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "date",
                                                                    value: filtrosReciprocidade.dataInicio,
                                                                    onChange: (e)=>setFiltrosReciprocidade({
                                                                            ...filtrosReciprocidade,
                                                                            dataInicio: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 765,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 763,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-xs",
                                                                    children: "Data Fim"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 768,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "date",
                                                                    value: filtrosReciprocidade.dataFim,
                                                                    onChange: (e)=>setFiltrosReciprocidade({
                                                                            ...filtrosReciprocidade,
                                                                            dataFim: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 769,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-xs",
                                                                    children: "Nº Lote"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 772,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "Buscar lote...",
                                                                    value: filtrosReciprocidade.numeroLote,
                                                                    onChange: (e)=>setFiltrosReciprocidade({
                                                                            ...filtrosReciprocidade,
                                                                            numeroLote: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 773,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border rounded-lg overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                                className: "bg-slate-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Nº Lote"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 782,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Convênio"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 783,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Data Receb."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 784,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Qtde Guias"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 785,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Valor Total"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 786,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Status"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 787,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Auditor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 788,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Ação"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 789,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 781,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 780,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                                children: lotesFiltrados.map((lote)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                        className: "hover:bg-slate-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                className: "font-medium",
                                                                                children: lote.numeroLote
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 795,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                children: lote.convenioNome
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 796,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                children: new Date(lote.dataRecebimento).toLocaleDateString("pt-BR")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 797,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                children: lote.quantidadeGuias
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 798,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                className: "font-medium",
                                                                                style: {
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                                },
                                                                                children: [
                                                                                    "R$ ",
                                                                                    lote.valorTotal.toLocaleString("pt-BR", {
                                                                                        minimumFractionDigits: 2
                                                                                    })
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 799,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: lote.status === "Auditado" ? "default" : lote.status === "Glosado" ? "destructive" : "secondary",
                                                                                    children: lote.status
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 803,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 802,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                children: lote.auditorResponsavel || "-"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 807,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    size: "sm",
                                                                                    onClick: ()=>setLoteSelecionado(lote),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                            className: "h-4 w-4 mr-1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 810,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        "Ver Guias"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 809,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 808,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, lote.id, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 794,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 792,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 17
                                                }, this),
                                                loteSelecionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 p-4 bg-slate-50 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            className: "h-5 w-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 825,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Guias do Lote: ",
                                                                        loteSelecionado.numeroLote
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 824,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    onClick: ()=>setLoteSelecionado(null),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 829,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 828,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 823,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-5 gap-4 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "Matrícula",
                                                                    value: filtrosGuias.matricula,
                                                                    onChange: (e)=>setFiltrosGuias({
                                                                            ...filtrosGuias,
                                                                            matricula: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 835,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "CPF",
                                                                    value: filtrosGuias.cpf,
                                                                    onChange: (e)=>setFiltrosGuias({
                                                                            ...filtrosGuias,
                                                                            cpf: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 836,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "Nome",
                                                                    value: filtrosGuias.nome,
                                                                    onChange: (e)=>setFiltrosGuias({
                                                                            ...filtrosGuias,
                                                                            nome: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 837,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "date",
                                                                    value: filtrosGuias.dataExecucao,
                                                                    onChange: (e)=>setFiltrosGuias({
                                                                            ...filtrosGuias,
                                                                            dataExecucao: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 838,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                    value: filtrosGuias.status,
                                                                    onValueChange: (v)=>setFiltrosGuias({
                                                                            ...filtrosGuias,
                                                                            status: v
                                                                        }),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Status"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 840,
                                                                                columnNumber: 40
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 840,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "todos",
                                                                                    children: "Todos"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 842,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "Aprovado",
                                                                                    children: "Aprovado"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 843,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "Glosado",
                                                                                    children: "Glosado"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 844,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "Pendente",
                                                                                    children: "Pendente"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 845,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: "Análise",
                                                                                    children: "Análise"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 846,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 841,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 834,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                            className: "h-[300px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: guiasFiltradas.filter((g)=>g.loteId === loteSelecionado.id).map((guia)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-3 bg-white rounded border hover:shadow-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2 mb-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "font-medium",
                                                                                                    children: guia.nomeBeneficiario
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 859,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                    variant: "outline",
                                                                                                    className: "text-xs",
                                                                                                    children: guia.matricula
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 860,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                    className: guia.status === "Glosado" ? "bg-red-500" : guia.status === "Aprovado" ? "bg-green-500" : "bg-amber-500",
                                                                                                    children: guia.status
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 861,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 858,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm text-slate-600",
                                                                                            children: guia.procedimentoDescricao
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 865,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-slate-500",
                                                                                            children: [
                                                                                                guia.credenciado_nome,
                                                                                                " • ",
                                                                                                new Date(guia.dataExecucao).toLocaleDateString("pt-BR")
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 866,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 857,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-right",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "font-bold",
                                                                                            style: {
                                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                                            },
                                                                                            children: [
                                                                                                "R$ ",
                                                                                                guia.valorApresentado.toFixed(2)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 869,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-slate-500",
                                                                                            children: [
                                                                                                "Ref: R$ ",
                                                                                                guia.valorBrasindice.toFixed(2)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 872,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 868,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 856,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, guia.id, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 855,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 852,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                            lineNumber: 731,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                    lineNumber: 724,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 723,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "reciprocidade",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$reciprocidade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INDICADORES_RECIPROCIDADE"].map((indicador)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        className: "pb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-base flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                    className: "h-5 w-5",
                                                                    style: {
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 893,
                                                                    columnNumber: 23
                                                                }, this),
                                                                indicador.convenioNome
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-3 gap-4 mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center p-3 bg-slate-50 rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-2xl font-bold",
                                                                                style: {
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                                },
                                                                                children: indicador.totalGuias
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 900,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-500",
                                                                                children: "Guias"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 901,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 899,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center p-3 bg-slate-50 rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-2xl font-bold",
                                                                                style: {
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                                },
                                                                                children: [
                                                                                    "R$ ",
                                                                                    (indicador.valorTotal / 1000).toFixed(0),
                                                                                    "k"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 904,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-500",
                                                                                children: "Total"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 907,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 903,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center p-3 bg-red-50 rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-2xl font-bold text-red-600",
                                                                                children: [
                                                                                    indicador.percentualGlosa.toFixed(1),
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 910,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-red-600",
                                                                                children: "Glosa"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 911,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 909,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 898,
                                                                columnNumber: 21
                                                            }, this),
                                                            indicador.guiasAcimaBrasindice > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-3 bg-amber-50 rounded-lg border border-amber-200 mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                            className: "h-5 w-5 text-amber-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 919,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-amber-800 font-medium",
                                                                            children: [
                                                                                indicador.guiasAcimaBrasindice,
                                                                                " guias com valores acima do Brasíndice"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 920,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 918,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 917,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium mb-2",
                                                                        children: "Procedimentos Mais Utilizados"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 929,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-1",
                                                                        children: indicador.procedimentosMaisUtilizados.slice(0, 3).map((proc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex justify-between text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-600 truncate",
                                                                                        children: proc.nome
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 933,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: [
                                                                                            proc.quantidade,
                                                                                            " (",
                                                                                            (proc.valor / 1000).toFixed(0),
                                                                                            "k)"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 934,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 932,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 930,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 928,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 897,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, indicador.convenioId, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 890,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 888,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 948,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Tabela de Referência - Brasíndice"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 947,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 946,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border rounded-lg overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                                className: "bg-slate-50",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Código"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 957,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Procedimento"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 958,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            children: "Tipo"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 959,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            className: "text-right",
                                                                            children: "Valor Referência"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 960,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            className: "text-right",
                                                                            children: "Valor Máximo"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 961,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            className: "text-right",
                                                                            children: "Margem"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 962,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 956,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 955,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$reciprocidade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TABELA_BRASINDICE"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                className: "font-mono text-xs",
                                                                                children: item.procedimentoCodigo
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 968,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                children: item.procedimentoDescricao
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 969,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    children: item.tipo
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 971,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 970,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                className: "text-right",
                                                                                children: [
                                                                                    "R$ ",
                                                                                    item.valorReferencia.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 973,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                className: "text-right",
                                                                                children: [
                                                                                    "R$ ",
                                                                                    item.valorMaximo.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 974,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                className: "text-right",
                                                                                children: [
                                                                                    "±",
                                                                                    item.margemAceitacao,
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 975,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, item.id, true, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 967,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                lineNumber: 965,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 954,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 952,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 945,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 886,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "opme",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$syringe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Syringe$3e$__["Syringe"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 992,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Gerador de Parecer OPME"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 991,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 990,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                            children: "Selecione o Procedimento"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 999,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                            value: procedimentoSelecionado?.id || "",
                                                                            onValueChange: (v)=>{
                                                                                const proc = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$opme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCEDIMENTOS_OPME"].find((p)=>p.id === v);
                                                                                setProcedimentoSelecionado(proc || null);
                                                                                setDutPreenchido({});
                                                                                setParecerGerado(null);
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                        placeholder: "Escolha um procedimento..."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 1007,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1006,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$opme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCEDIMENTOS_OPME"].map((proc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: proc.id,
                                                                                            children: [
                                                                                                proc.descricao,
                                                                                                " (Ref: R$ ",
                                                                                                proc.valorReferencia.toLocaleString(),
                                                                                                ")"
                                                                                            ]
                                                                                        }, proc.id, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 1011,
                                                                                            columnNumber: 29
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1009,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1000,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 998,
                                                                    columnNumber: 21
                                                                }, this),
                                                                procedimentoSelecionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-4 bg-slate-50 rounded-lg",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "font-medium mb-2",
                                                                                    children: "Documentos Necessários:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1022,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "space-y-1",
                                                                                    children: procedimentoSelecionado.documentosNecessarios.map((doc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            className: "text-sm text-slate-600 flex items-center gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                                    className: "h-4 w-4 text-green-500"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                    lineNumber: 1026,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                doc
                                                                                            ]
                                                                                        }, idx, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 1025,
                                                                                            columnNumber: 31
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1023,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1021,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-2 gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-blue-50 rounded text-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-lg font-bold text-blue-600",
                                                                                            children: [
                                                                                                "R$ ",
                                                                                                procedimentoSelecionado.valorReferencia.toLocaleString()
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 1035,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-blue-600",
                                                                                            children: "Valor Referência"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 1036,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1034,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "p-3 bg-amber-50 rounded text-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-lg font-bold text-amber-600",
                                                                                            children: [
                                                                                                procedimentoSelecionado.prazoCarencia,
                                                                                                " dias"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 1039,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-amber-600",
                                                                                            children: "Prazo Carência"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 1040,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1038,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1033,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        (()=>{
                                                                            const dut = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$opme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DUTS"].find((d)=>d.codigoProcedimento === procedimentoSelecionado.codigo);
                                                                            if (!dut) return null;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "border rounded-lg p-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "font-medium mb-3",
                                                                                        children: dut.titulo
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 1051,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "space-y-3",
                                                                                        children: dut.camposVariaveis.slice(0, 6).map((campo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                                                                        className: "text-xs",
                                                                                                        children: [
                                                                                                            campo.descricao,
                                                                                                            " ",
                                                                                                            campo.obrigatorio && "*"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 1055,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                                                        value: dutPreenchido[campo.nome] || "",
                                                                                                        onChange: (e)=>setDutPreenchido({
                                                                                                                ...dutPreenchido,
                                                                                                                [campo.nome]: e.target.value
                                                                                                            }),
                                                                                                        placeholder: `Digite ${campo.descricao.toLowerCase()}`
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                        lineNumber: 1056,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, campo.nome, true, {
                                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                                lineNumber: 1054,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                        lineNumber: 1052,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                lineNumber: 1050,
                                                                                columnNumber: 29
                                                                            }, this);
                                                                        })(),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            className: "w-full",
                                                                            onClick: handleGerarParecer,
                                                                            style: {
                                                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].primaria
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                    className: "h-4 w-4 mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1073,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                "Gerar Parecer Automático"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1068,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 997,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 989,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1086,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Parecer Gerado"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 1085,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 1084,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        children: parecerGerado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            className: parecerGerado.tipo === "Autorizado" ? "bg-green-500" : parecerGerado.tipo === "Negado" ? "bg-red-500" : parecerGerado.tipo === "Autorizado Parcialmente" ? "bg-amber-500" : "bg-blue-500",
                                                                            children: parecerGerado.tipo
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1094,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-slate-500",
                                                                            children: parecerGerado.codigo
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1102,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1093,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 bg-slate-50 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-medium mb-2",
                                                                            children: "Motivo:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1106,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-slate-700",
                                                                            children: parecerGerado.motivo
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1107,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1105,
                                                                    columnNumber: 23
                                                                }, this),
                                                                parecerGerado.condicionantes && parecerGerado.condicionantes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-medium mb-2",
                                                                            children: "Condicionantes:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1112,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "space-y-1",
                                                                            children: parecerGerado.condicionantes.map((cond, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "text-sm text-slate-600 flex items-start gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                            className: "h-4 w-4 text-green-500 mt-0.5"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                            lineNumber: 1116,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        cond
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1115,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1113,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1111,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 bg-blue-50 rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-medium mb-2",
                                                                            children: "Observações:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1125,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-slate-700",
                                                                            children: parecerGerado.observacoes
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1126,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1124,
                                                                    columnNumber: 23
                                                                }, this),
                                                                parecerGerado.dataValidade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-sm text-slate-500",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1131,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Validade: ",
                                                                        parecerGerado.dataValidade
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1130,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            className: "flex-1",
                                                                            variant: "outline",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                                    className: "h-4 w-4 mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1138,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                "Imprimir"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1137,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            className: "flex-1",
                                                                            variant: "outline",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                                    className: "h-4 w-4 mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1142,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                "Enviar"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1141,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            className: "flex-1",
                                                                            style: {
                                                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$8a$2d$regiao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CORES_TRT"].sucesso
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                    className: "h-4 w-4 mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                                    lineNumber: 1146,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                "Assinar"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1145,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1136,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 1092,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center py-12 text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                                    className: "h-16 w-16 mx-auto mb-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1153,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Selecione um procedimento e gere o parecer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1154,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 1152,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                        lineNumber: 1090,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 1083,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 987,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Modelos de Parecer Disponíveis"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 1163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-4",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dados$2d$trt$2d$opme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODELOS_PARECER"].map((modelo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 border rounded-lg hover:shadow-md transition-shadow",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        className: modelo.tipo === "Autorizado" ? "bg-green-500" : modelo.tipo === "Negado" ? "bg-red-500" : "bg-amber-500",
                                                                        children: modelo.tipo
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                                                        lineNumber: 1171,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1170,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-sm mb-1",
                                                                    children: modelo.procedimentoDescricao
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1179,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500 mb-3 line-clamp-2",
                                                                    children: modelo.motivo
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1180,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    variant: "outline",
                                                                    className: "w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            className: "h-4 w-4 mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                                            lineNumber: 1182,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Usar Modelo"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                                    lineNumber: 1181,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, modelo.id, true, {
                                                            fileName: "[project]/app/trt/auditor/page.tsx",
                                                            lineNumber: 1169,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/trt/auditor/page.tsx",
                                                    lineNumber: 1167,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/trt/auditor/page.tsx",
                                                lineNumber: 1166,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/trt/auditor/page.tsx",
                                        lineNumber: 1162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 986,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/auditor/page.tsx",
                        lineNumber: 379,
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
                                lineNumber: 1195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Acesso restrito a auditores autorizados"
                            }, void 0, false, {
                                fileName: "[project]/app/trt/auditor/page.tsx",
                                lineNumber: 1196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trt/auditor/page.tsx",
                        lineNumber: 1194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/trt/auditor/page.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/trt/auditor/page.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1d62d82d._.js.map