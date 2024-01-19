// src/components/PersonalInformation.tsx

import React, { useEffect } from 'react';

interface PersonalInformationProps {
    data: {
        name: string;
        email: string;
        phoneNumber: string;
        languageKnown: string;
    };
    onChange: (stepData: unknown) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
    data,
    onChange,
}) => {
    useEffect(() => {
        // Add validation or other logic if needed
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ personalInformation: { ...data, [name]: value } });
    };

    return (
        <div>
            <h2>Personal Information</h2>
            <form>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
                {/* Add other fields here (email, phoneNumber, languageKnown) */}
            </form>
        </div>
    );
};

export default PersonalInformation;
