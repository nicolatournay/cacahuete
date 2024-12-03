import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { gender, age, status, interest, event, defaultValues } from "@/data/constants";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

// Définir le schéma Zod
const formSchema = z.object({
    genderEnum: z.enum(gender),
    ageEnum: z.enum(age),
    statusEnum: z.enum(status),
    statusDetail: z.string().max(20, {
        message: "Attention à ne pas dépasser la limite de vingt caractères."
    }).optional(),
    eventEnum: z.enum(event),
    eventDetail: z.string().max(100, {
        message: "Attention à ne pas dépasser la limite de cent caractères."
    }).optional(),
    interestEnum: z.enum(interest),
    interestDetail: z.string().max(100, {
        message: "Attention à ne pas dépasser la limite de cent caractères."
    }).optional(),
    lifeStyle: z.string().max(100, {
        message: "Attention à ne pas dépasser la limite de cent caractères."
    }).optional()
})
.superRefine((data, ctx) => {
    // Validation conditionnelle pour `statusDetail`
    if (data.statusEnum === "Autre" && !data.statusDetail) {
        ctx.addIssue({
            code: 'custom',
            path: ["statusDetail"],
            message: "Veuillez préciser votre statut si vous sélectionnez 'Autre'.",
        });
    }
    
    // Validation conditionnelle pour `eventDetail`
    if (data.eventEnum === "Autre" && !data.eventDetail) {
        ctx.addIssue({
            code: 'custom',
            path: ["eventDetail"],
            message: "Veuillez préciser l'événement si vous sélectionnez 'Autre'.",
        });
    }

    // Validation conditionnelle pour `interestDetail`
    if (data.interestEnum === "Autre" && !data.interestDetail) {
        ctx.addIssue({
            code: 'custom',
            path: ["interestDetail"],
            message: "Veuillez préciser votre centre d'intérêt si vous sélectionnez 'Autre'.",
        });
    }
    
})

type GitFormProps = {
    onSubmit: (values: z.infer<typeof formSchema>) => void;
};

export function GiftForm({ onSubmit }: GitFormProps) {
    // Initialiser React Hook Form avec le resolver Zod
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Sélection du genre */}
                <FormField
                    control={form.control}
                    name="genderEnum"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Genre</FormLabel>
                            <Select
                                value={form.watch("genderEnum") || ""}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionnez un genre" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {gender.map((g) => (
                                        <SelectItem key={g} value={g}>
                                            {g}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Sélection de la tranche d'âge */}
                <FormField
                    control={form.control}
                    name="ageEnum"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tranche d'âge</FormLabel>
                            <Select
                                value={form.watch("ageEnum") || ""}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionnez une tranche d'âge" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {age.map((a) => (
                                        <SelectItem key={a} value={a}>
                                            {a}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Sélection du statut */}
                <FormField
                    control={form.control}
                    name="statusEnum"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Statut</FormLabel>
                            <Select
                                value={form.watch("statusEnum") || ""}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionnez un statut" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {status.map((s) => (
                                        <SelectItem key={s} value={s}>
                                            {s}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Détail du statut */}
                <FormField
                    control={form.control}
                    name="statusDetail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Détail du statut</FormLabel>
                            <FormControl>
                                <Input placeholder="Détail du statut" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Sélection de l'évènement */}
                <FormField
                    control={form.control}
                    name="eventEnum"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Évènement</FormLabel>
                            <Select
                                value={form.watch("eventEnum") || ""}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionnez un évènement" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {event.map((e) => (
                                        <SelectItem key={e} value={e}>
                                            {e}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Détail de l'évènement */}
                <FormField
                    control={form.control}
                    name="eventDetail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Détail de l'évènement</FormLabel>
                            <FormControl>
                                <Input placeholder="Détail de l'évènement" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Sélection du centre d'intérêt */}
                <FormField
                    control={form.control}
                    name="interestEnum"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Centre d'intérêt</FormLabel>
                            <Select
                                value={form.watch("interestEnum") || ""}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionnez un centre d'intérêt" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {interest.map((i) => (
                                        <SelectItem key={i} value={i}>
                                            {i}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Détail du centre d'intérêt */}
                <FormField
                    control={form.control}
                    name="interestDetail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Détail du centre d'intérêt</FormLabel>
                            <FormControl>
                                <Input placeholder="Détail du centre d'intérêt" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Description du lifestyle */}
                <FormField
                    control={form.control}
                    name="lifeStyle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Lifestyle</FormLabel>
                            <FormControl>
                                <Input placeholder="Décrivez votre lifestyle" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Bouton de soumission */}
                <Button type="submit">Envoyer</Button>
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                >
                    Réinitialiser
                </Button>
            </form>
        </Form>
    );
}
