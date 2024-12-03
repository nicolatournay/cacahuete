import { useState } from "react";
import { GiftForm } from "./GiftForm";

export const DashboardPage = () => {
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data: any) => {
        setFormData(data);
    };

    return (
        <>
            <h2>Dashboard</h2>
            <GiftForm onSubmit={handleFormSubmit} />
            {formData &&
                <div>
                    <h3>Résultat du formulaire :</h3>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            }
        </>
    );
};