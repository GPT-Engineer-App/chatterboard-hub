import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* supabase integration types

### BulletinNotes

| name       | type                     | format | required |
|------------|--------------------------|--------|----------|
| id         | integer                  | bigint | true     |
| created_at | string                   | timestamp with time zone | true     |
| note       | string                   | text   | false    |
| author     | string                   | text   | false    |
| colour     | string                   | text   | false    |
| heading    | string                   | text   | false    |

*/

export const useBulletinNotes = () => useQuery({
    queryKey: ['bulletinNotes'],
    queryFn: () => fromSupabase(supabase.from('BulletinNotes').select('*')),
});

export const useAddBulletinNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newNote) => fromSupabase(supabase.from('BulletinNotes').insert([newNote])),
        onSuccess: () => {
            queryClient.invalidateQueries('bulletinNotes');
        },
    });
};

export const useUpdateBulletinNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('BulletinNotes').update(updateData).eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('bulletinNotes');
        },
    });
};

export const useDeleteBulletinNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('BulletinNotes').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('bulletinNotes');
        },
    });
};

export const useBulletinNote = (id) => useQuery({
    queryKey: ['bulletinNote', id],
    queryFn: () => fromSupabase(supabase.from('BulletinNotes').select('*').eq('id', id).single()),
    enabled: !!id,
});