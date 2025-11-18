(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/All Git Clones/Travel Planner/triptimeline/src/lib/test-supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testSupabaseConnection",
    ()=>testSupabaseConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/All Git Clones/Travel Planner/triptimeline/src/lib/auth.ts [app-client] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$All__Git__Clones$2f$Travel__Planner$2f$triptimeline$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
async function testSupabaseConnection() {
    try {
        console.log('Testing Supabase connection...');
        // Test 1: Check if we can get the current user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        console.log('User check:', {
            user: user?.id,
            error: userError
        });
        if (!user) {
            throw new Error('No authenticated user found');
        }
        // Test 2: Try to query the trips table
        const { data: trips, error: tripsError } = await supabase.from('trips').select('*').limit(1);
        console.log('Trips query:', {
            trips,
            error: tripsError
        });
        if (tripsError) {
            throw new Error(`Database query failed: ${tripsError.message}`);
        }
        console.log('Supabase connection test passed!');
        return true;
    } catch (error) {
        console.error('Supabase connection test failed:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=All%20Git%20Clones_Travel%20Planner_triptimeline_src_lib_test-supabase_ts_c7d4b52f._.js.map