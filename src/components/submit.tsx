'use client';
import { useFormStatus } from "react-dom";

export const Submit = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:bg-blue-400"
            disabled={pending}
        >
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    );
};