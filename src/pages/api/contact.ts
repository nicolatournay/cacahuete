import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request }) => {
    try {
        // Récupère les données du formulaire
        const formData = await request.formData();
        const name = formData.get('firstName')?.toString();
        const email = formData.get('email')?.toString();
        const subject = formData.get('subject')?.toString();
        const message = formData.get('message')?.toString();

        // Validation de base
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ message: "Missing required fields" }),
                { status: 400 }
            );
        }

        // Insère les données dans la table "contacts" de Supabase
        const { error } = await supabase
            .from('contacts')
            .insert([
                { name, email, subject, message },
            ]);

        if (error) {
            console.error("Erreur lors de l'insertion dans Supabase :", error.message);
            return new Response(
                JSON.stringify({ message: "Failed to save data", error: error.message }),
                { status: 500 }
            );
        }

        // Retourne une réponse de succès
        return new Response(
            JSON.stringify({ message: "Success! Data saved to Supabase." }),
            { status: 200 }
        );

    } catch (error) {
        console.error("Erreur inattendue :", error);
        return new Response(
            JSON.stringify({ message: "Unexpected error", error: error }),
            { status: 500 }
        );
    }
};
